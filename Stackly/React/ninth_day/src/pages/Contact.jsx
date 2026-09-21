// src/pages/Contact.jsx
import React, { useReducer, useState } from "react";

const initialFormState = {
  values: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
  },
  errors: {},
  touched: {},
};

function validateField(name, value, allValues = {}) {
  switch (name) {
    case "firstName":
      if (!value.trim()) return "First name is required.";
      if (value.trim().length < 2) return "Must be at least 2 characters.";
      return "";
    case "lastName":
      if (!value.trim()) return "Last name is required.";
      return "";
    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email address.";
      return "";
    case "phone":
      if (!value.trim()) return "Phone number is required.";
      if (!/^\d{10}$/.test(value.replace(/\D/g, ""))) return "Must be a 10-digit phone number.";
      return "";
    case "password":
      if (!value) return "Password is required.";
      if (value.length < 8) return "Password must be at least 8 characters.";
      return "";
    case "confirmPassword":
      if (!value) return "Please confirm your password.";
      if (value !== allValues.password) return "Passwords do not match.";
      return "";
    case "dob":
      if (!value) return "Date of birth is required.";
      return "";
    case "gender":
      if (!value) return "Please select a gender.";
      return "";
    case "address":
      if (!value.trim()) return "Street address is required.";
      return "";
    case "city":
      if (!value.trim()) return "City is required.";
      return "";
    default:
      return "";
  }
}

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const { field, value } = action.payload;
      const updatedValues = { ...state.values, [field]: value };
      const fieldError = validateField(field, value, updatedValues);

      // Re-validate confirmPassword if the original password changed
      let confirmError = state.errors.confirmPassword;
      if (field === "password" && state.touched.confirmPassword) {
        confirmError = validateField("confirmPassword", state.values.confirmPassword, updatedValues);
      }

      return {
        ...state,
        values: updatedValues,
        errors: {
          ...state.errors,
          [field]: fieldError,
          ...(field === "password" ? { confirmPassword: confirmError } : {}),
        },
      };
    }

    case "BLUR_FIELD": {
      const { field } = action.payload;
      const fieldError = validateField(field, state.values[field], state.values);
      return {
        ...state,
        touched: { ...state.touched, [field]: true },
        errors: { ...state.errors, [field]: fieldError },
      };
    }

    case "VALIDATE_ALL": {
      const errors = {};
      const touched = {};
      Object.keys(state.values).forEach((key) => {
        touched[key] = true;
        const err = validateField(key, state.values[key], state.values);
        if (err) errors[key] = err;
      });
      return { ...state, touched, errors };
    }

    case "RESET_FORM":
      return initialFormState;

    default:
      return state;
  }
}

export default function Contact() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handleBlur = (e) => {
    dispatch({
      type: "BLUR_FIELD",
      payload: { field: e.target.name },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_ALL" });

    // Verify all fields pass validation
    const hasErrors = Object.keys(state.values).some((key) =>
      Boolean(validateField(key, state.values[key], state.values))
    );

    if (!hasErrors) {
      setSubmittedData(state.values);
      dispatch({ type: "RESET_FORM" });
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
    setSubmittedData(null);
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2>Registration & Contact Form</h2>
        <p className="subtitle">State handled via <code>useReducer</code> across 10 fields.</p>

        {submittedData && (
          <div className="alert-success">
            <strong>Form submitted successfully!</strong>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid-2">
            <div className="field-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={state.values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.firstName && state.errors.firstName ? "invalid" : ""}
              />
              {state.touched.firstName && state.errors.firstName && (
                <span className="error-msg">{state.errors.firstName}</span>
              )}
            </div>

            <div className="field-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={state.values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.lastName && state.errors.lastName ? "invalid" : ""}
              />
              {state.touched.lastName && state.errors.lastName && (
                <span className="error-msg">{state.errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="grid-2">
            <div className="field-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={state.values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.email && state.errors.email ? "invalid" : ""}
              />
              {state.touched.email && state.errors.email && (
                <span className="error-msg">{state.errors.email}</span>
              )}
            </div>

            <div className="field-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="10 digits"
                value={state.values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.phone && state.errors.phone ? "invalid" : ""}
              />
              {state.touched.phone && state.errors.phone && (
                <span className="error-msg">{state.errors.phone}</span>
              )}
            </div>
          </div>

          <div className="grid-2">
            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={state.values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.password && state.errors.password ? "invalid" : ""}
              />
              {state.touched.password && state.errors.password && (
                <span className="error-msg">{state.errors.password}</span>
              )}
            </div>

            <div className="field-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={state.values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.confirmPassword && state.errors.confirmPassword ? "invalid" : ""}
              />
              {state.touched.confirmPassword && state.errors.confirmPassword && (
                <span className="error-msg">{state.errors.confirmPassword}</span>
              )}
            </div>
          </div>

          <div className="grid-2">
            <div className="field-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={state.values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.dob && state.errors.dob ? "invalid" : ""}
              />
              {state.touched.dob && state.errors.dob && (
                <span className="error-msg">{state.errors.dob}</span>
              )}
            </div>

            <div className="field-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={state.values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className={state.touched.gender && state.errors.gender ? "invalid" : ""}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-Binary</option>
                <option value="other">Prefer not to say</option>
              </select>
              {state.touched.gender && state.errors.gender && (
                <span className="error-msg">{state.errors.gender}</span>
              )}
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="address">Street Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={state.values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={state.touched.address && state.errors.address ? "invalid" : ""}
            />
            {state.touched.address && state.errors.address && (
              <span className="error-msg">{state.errors.address}</span>
            )}
          </div>

          <div className="field-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={state.values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={state.touched.city && state.errors.city ? "invalid" : ""}
            />
            {state.touched.city && state.errors.city && (
              <span className="error-msg">{state.errors.city}</span>
            )}
          </div>

          <div className="button-group">
            <button type="submit" className="btn btn-primary">Submit Form</button>
            <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}