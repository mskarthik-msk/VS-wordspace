import React, { useState } from "react";
import { Link } from "react-router-dom";
import { USERS } from "../data/usersData";

export default function UserList() {
  const [users] = useState(USERS);

  return (
    <div className="container">
      <header className="page-header">
        <h1>User Datas</h1>
        <p>Team members, roles, and contact details</p>
      </header>

      <div className="card-grid">
        {users.map((user) => (
          <article key={user.id} className="user-card">
            <div className="badge">{user.role}</div>
            <h2 className="user-name">{user.name}</h2>
            <p className="user-meta">📍 {user.city}</p>
            <p className="user-meta">✉️ {user.email}</p>
            
            <Link to={`/users/${user.id}`} className="btn btn-primary">
              View Details &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}