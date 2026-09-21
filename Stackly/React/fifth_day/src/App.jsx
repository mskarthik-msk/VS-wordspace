import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';

const initialForm = {
  firstName: '', lastName: '', email: '', mobile: '', password: '', confirmPassword: '',
  dateOfBirth: '', gender: '', address: '', city: '', state: '', zipCode: '', terms: false
};

const fields = [
  ['firstName', 'First name', 'text', 'e.g. Sarah'],
  ['lastName', 'Last name', 'text', 'e.g. Johnson'],
  ['email', 'Email address', 'email', 'you@example.com'],
  ['mobile', 'Mobile number', 'tel', '10-digit number'],
  ['password', 'Password', 'password', 'Minimum 8 characters'],
  ['confirmPassword', 'Confirm password', 'password', 'Re-enter your password'],
  ['dateOfBirth', 'Date of birth', 'date', ''],
  ['address', 'Street address', 'text', 'House number and street'],
  ['city', 'City', 'text', 'Your city'],
  ['state', 'State / Province', 'text', 'Your state or province'],
  ['zipCode', 'Postal code', 'text', 'e.g. 10001']
];

function validate(form) {
  const errors = {};
  if (!form.firstName.trim()) errors.firstName = 'First name is required.';
  else if (!/^[a-zA-Z][a-zA-Z -]{1,}$/.test(form.firstName.trim())) errors.firstName = 'Enter at least 2 letters.';
  if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
  else if (!/^[a-zA-Z][a-zA-Z -]{1,}$/.test(form.lastName.trim())) errors.lastName = 'Enter at least 2 letters.';
  if (!form.email.trim()) errors.email = 'Email address is required.';
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email address.';
  if (!form.mobile.trim()) errors.mobile = 'Mobile number is required.';
  else if (!/^\d{10}$/.test(form.mobile.replace(/\D/g, ''))) errors.mobile = 'Enter a valid 10-digit mobile number.';
  if (!form.password) errors.password = 'Password is required.';
  else if (form.password.length < 8) errors.password = 'Use at least 8 characters.';
  else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(form.password)) errors.password = 'Include at least one letter and number.';
  if (!form.confirmPassword) errors.confirmPassword = 'Please confirm your password.';
  else if (form.confirmPassword !== form.password) errors.confirmPassword = 'Passwords do not match.';
  if (!form.dateOfBirth) errors.dateOfBirth = 'Date of birth is required.';
  else if (new Date(form.dateOfBirth) > new Date()) errors.dateOfBirth = 'Date cannot be in the future.';
  if (!form.gender) errors.gender = 'Please select an option.';
  if (!form.address.trim()) errors.address = 'Address is required.';
  else if (form.address.trim().length < 8) errors.address = 'Please enter a complete address.';
  if (!form.city.trim()) errors.city = 'City is required.';
  if (!form.state.trim()) errors.state = 'State / Province is required.';
  if (!form.zipCode.trim()) errors.zipCode = 'Postal code is required.';
  else if (!/^[A-Za-z0-9 -]{4,10}$/.test(form.zipCode.trim())) errors.zipCode = 'Enter a valid postal code.';
  if (!form.terms) errors.terms = 'Please accept the terms to continue.';
  return errors;
}

function App() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const next = { ...form, [target.name]: value };
    setForm(next); setSuccess(false);
    if (touched[target.name]) setErrors(validate(next));
  };
  const handleBlur = ({ target }) => { setTouched(t => ({ ...t, [target.name]: true })); setErrors(validate(form)); };
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setTouched(Object.keys(initialForm).reduce((a, key) => ({ ...a, [key]: true }), {}));
    if (Object.keys(nextErrors).length === 0) setSuccess(true);
  };
  const handleReset = () => { setForm(initialForm); setErrors({}); setTouched({}); setSuccess(false); };
  const errorFor = name => touched[name] && errors[name];

  return <main className="page-shell">

    {/* 
    <section className="hero">
      <div className="brand"><span className="brand-mark">✦</span> NORTHSTAR</div>
      <p className="eyebrow">START YOUR JOURNEY</p>
      <h1>Create your account<br/><em>in a few minutes.</em></h1>
      <p className="hero-copy">Join a community built to help you move forward with clarity and confidence.</p>
      <div className="benefits"><span>✓ Free to get started</span><span>✓ Your data stays private</span></div>
    </section> */}

    <section className="form-panel">
      <div className="form-header"><p className="step">STEP 1 OF 1</p><h2>Registration details</h2><p>Fields marked <b>*</b> are required.</p></div>
      {success && <div className="success" role="status"><span>✓</span><div><strong>You’re all set!</strong><br/>Your registration has been submitted successfully.</div></div>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid">
          {fields.map(([name, label, type]) => <label className={`field ${name === 'address' ? 'wide' : ''}`} key={name}>
            <span>{label} <b>*</b></span>
            <input name={name} type={type} value={form[name]} placeholder={name} onChange={handleChange} onBlur={handleBlur} id={`${name === 'address' ? 'wide' : ''}`} className={errorFor(name) ? 'invalid' : ''} aria-invalid={!!errorFor(name)} />
            {errorFor(name) && <small>{errors[name]}</small>}
          </label>)}
          <fieldset className={`gender ${errorFor('gender') ? 'has-error' : ''}`}><legend>Gender <b>*</b></legend><div className="radio-row">
            {['Female', 'Male', 'Non-binary', 'Prefer not to say'].map(option => <label key={option}><input type="radio" name="gender" value={option} checked={form.gender === option} onChange={handleChange} onBlur={handleBlur}/><span>{option}</span></label>)}
          </div>{errorFor('gender') && <small>{errors.gender}</small>}</fieldset>
        </div>
        <label className={`terms ${errorFor('terms') ? 'has-error' : ''}`}><input name="terms" type="checkbox" checked={form.terms} onChange={handleChange} onBlur={handleBlur}/><span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>. <b>*</b></span></label>
        {errorFor('terms') && <small className="terms-error">{errors.terms}</small>}
        <div className="actions"><button type="button" className="reset" onClick={handleReset}>Reset form</button><button type="submit" className="submit">Create account <span>→</span></button></div>
      </form>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
