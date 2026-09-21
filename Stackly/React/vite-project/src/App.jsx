import { useState } from 'react'
import React from 'react'
import './style.css'
import FirstChild from './FirstChild'

export default function App() {
  const teamMembers = [
    { id: 1, name: 'Karthik', age: 26, city: 'Salem', email: 'karthik@stk.com', role: 'Frontend Developer' },
    { id: 2, name: 'Malar', age: 22, city: 'Kottayam', email: 'malar@stk.com', role: 'UX Designer' },
    { id: 3, name: 'Kamal', age: 24, city: 'Namakkal', email: 'kamal@stk.co', role: 'Backend Developer' },
    { id: 4, name: 'Divya', age: 30, city: 'Hydrabad', email: 'divya@stk.com', role: 'Product Manager' },
    { id: 5, name: 'Deepthi', age: 26, city: 'Bengaluru', email: 'deepthi@stk.com', role: 'QA Engineer' },
  ]

  // let name = "Karthik"
  // let ag = 26
  // let city = "salem";
  // let mail = "karthik@email.co";
  // let mob = 98765432;
  // let ocup = "Front end Developer";
  // let add = "Salem, Tamilnadu"

  // let name1 = "Malar";
  // let ag1 = 22;
  // let city1 = "Kottayam";
  // let mail1 = "malar@mail.com";
  // let mob1 = 789654123;
  // let ocup1 = "Java Developer"
  // let add1 = "Kottayam, Kerala"

  // let name2 = "Kamal";
  // let ag2 = 24;
  // let city2 = "Namakkal";
  // let mail2 = "kamal@onemail.co";
  // let mob2 = 763453567;
  // let ocup2 = "Full Stack Developer";
  // let add2 = "Namakkal, Tamilnadu";

  // let name3 = "Divya";
  // let ag3 = 30;
  // let city3 = "Hydrabad";
  // let mail3 = "divya@gmail.com";
  // let mob3 = 980754245;
  // let ocup3 = "Human Resourse";
  // let add3 = "Hydrabad, Telungana"

  // let name4 = "Deepthi";
  // let ag4 = 26;
  // let city4 = "Bengaluru";
  // let mail4 = "deepthi@stk.com";
  // let mob4 = 9078654312;
  // let ocup4 = "Data Analyst"
  // let add4 = "Bengaluru, Karnataka"

  let [isLogin, setClick] = useState(false)
  return (
    <>

      <section id="center">
        <div id='header'>
          {isLogin ? (
            <div>
              <h1>Welcome Back!</h1>
              <p>You are logged in and can view the team directory.</p>
            </div>) : (
            <div>
              <h1>Please Login</h1>
              <p>Log in to access the team directory.</p>
            </div>
          )}

          <div id='head-content'>
            <h2 onClick={() => setClick((currentStatus) => !currentStatus)}>
              Tap the Button to {isLogin ? 'Logout' : 'Login'} </h2>
            <button
              className="login-btn"
              onClick={() => setClick((currentStatus) => !currentStatus)}>
              {isLogin ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
        {isLogin &&
          <div>
            <label>Members Count - {teamMembers.length}</label>

            <div className="hero">
              {teamMembers.map((member) =>
                <div id="card">
                  <div id='icon'>
                    {member.name.split().map((n) => n[0])}
                  </div>
                  <h2>{member.name}</h2>
                  <p><strong>{member.role}</strong></p>
                  <br></br>
                  <div id='box'>
                    <p><strong>Age - </strong>{member.age}</p>
                    <hr color=""></hr>
                    <p><strong>City - </strong>{member.city}</p>
                    <hr color=""></hr>
                    <p><strong>Email - </strong>{member.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        }
        {/* 
            <div className="hero">
              <FirstChild
                name={name}
                age={ag}
                city={city}
                email={mail}
                mobile={mob}
                ocup={ocup}
                add={add} />

              <FirstChild
                name={name1}
                age={ag1}
                city={city1}
                email={mail1}
                mobile={mob1}
                ocup={ocup1}
                add={add1} />

              <FirstChild
                name={name2}
                age={ag2}
                city={city2}
                email={mail2}
                mobile={mob2}
                ocup={ocup2}
                add={add2} />

              <FirstChild
                name={name3}
                age={ag3}
                city={city3}
                email={mail3}
                mobile={mob3}
                ocup={ocup3}
                add={add3} />

              <FirstChild
                name={name4}
                age={ag4}
                city={city4}
                email={mail4}
                mobile={mob4}
                ocup={ocup4}
                add={add4} />
            </div> */}


      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

// export default App