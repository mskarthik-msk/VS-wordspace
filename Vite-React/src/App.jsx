// import { useState } from 'react'
// import './App.css'

// const teamMembers = [
//   { id: 1, name: 'Aarav Sharma', age: 26, city: 'Mumbai', email: 'aarav@example.com', role: 'Frontend Developer' },
//   { id: 2, name: 'Meera Iyer', age: 29, city: 'Bengaluru', email: 'meera@example.com', role: 'UX Designer' },
//   { id: 3, name: 'Rohan Patel', age: 31, city: 'Ahmedabad', email: 'rohan@example.com', role: 'Backend Developer' },
//   { id: 4, name: 'Ananya Das', age: 27, city: 'Kolkata', email: 'ananya@example.com', role: 'Product Manager' },
//   { id: 5, name: 'Kabir Singh', age: 30, city: 'Delhi', email: 'kabir@example.com', role: 'QA Engineer' },
// ]

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   return (
//     <main className="app-shell">
//       <header className="hero">
//         <p className="eyebrow">TEAM DIRECTORY</p>

//         {isLoggedIn ? (
//           <div>
//             <h1>Welcome Back!</h1>
//             <p>You are logged in and can view the team directory.</p>
//           </div>
//         ) : (
//           <div>
//             <h1>Please Login</h1>
//             <p>Log in to access the team directory.</p>
//           </div>
//         )}

//         <button
//           className="login-button"
//           type="button"
//           onClick={() => setIsLoggedIn((currentStatus) => !currentStatus)}
//         >
//           {isLoggedIn ? 'Log out' : 'Log in'}
//         </button>
//       </header>

//       {isLoggedIn && (
//         <section className="directory" aria-labelledby="directory-title">
//           <div className="section-heading">
//             <div>
//               <p className="eyebrow">OUR PEOPLE</p>
//               <h2 id="directory-title">Meet the team</h2>
//             </div>
//             <span className="member-count">{teamMembers.length} members</span>
//           </div>

//           <div className="card-grid">
//             {teamMembers.map((member) => (
//               <article className="member-card" key={member.id}>
//                 <div className="avatar" aria-hidden="true">
//                   {member.name
//                     .split(' ')
//                     .map((namePart) => namePart[0])
//                     // .join('')
//                     }
//                 </div>
//                 <h3>{member.name}</h3>
//                 <p className="role">{member.role}</p>
//                 <dl>
//                   <div><dt>Age</dt><dd>{member.age}</dd></div>
//                   <div><dt>City</dt><dd>{member.city}</dd></div>
//                   <div><dt>Email</dt><dd>{member.email}</dd></div>
//                 </dl>
//               </article>
//             ))}
//           </div>
//         </section>
//       )}
//     </main>
//   )
// }

// export default App



//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------



import { useState } from "react";
import "./App.css";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Theme state
  const [ darkMode, setDarkMode] = useState(false);

  // Counter functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  // Theme toggle
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="card">
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀️ Light Theme" : "🌙 Dark Theme"}
        </button>

        <h1>Counter App</h1>

        <div className="count">
          {count}
        </div>

        <div className="buttons">
          <button onClick={decrement}>− Decrement</button>
          <button onClick={reset}>↻ Reset</button>
          <button onClick={increment}>+ Increment</button>
        </div>

        <p className="status">
          Current count: <strong>{count}</strong>
        </p>
      </div>
    </div>
  );
}
export default App;


