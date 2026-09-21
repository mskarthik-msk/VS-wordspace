import React from "react";
import { useParams, Link } from "react-router-dom";
import { USERS } from "../data/usersData";

export default function UserDetails() {
  const { id } = useParams();

  // Find user by parsing param string to integer
  const user = USERS.find((u) => u.id === parseInt(id, 10));

  // Conditional Rendering: Invalid/Unavailable user ID
  if (!user) {
    return (
      <div className="container">
        <div className="error-card">
          <h2>User Not Found</h2>
          <p>No profile was found matching ID: <strong>{id}</strong></p>
          <Link to="/" className="btn btn-secondary">
            &larr; Back to Users
          </Link>
        </div>
      </div>
    );
  }

  // Conditional Rendering: Valid user
  return (
    <div className="container">
      <div className="details-card">
        <header className="details-header">
          <div className="avatar-placeholder">{user.name.charAt(0)}</div>
          <div>
            <h1>{user.name}</h1>
            <span className="role-tag">{user.role}</span>
          </div>
        </header>

        <div className="details-table">
          <div className="row">
            <span className="label">User ID:</span>
            <span className="value">#{user.id}</span>
          </div>
          <div className="row">
            <span className="label">Email:</span>
            <span className="value">{user.email}</span>
          </div>
          <div className="row">
            <span className="label">Phone:</span>
            <span className="value">{user.phone}</span>
          </div>
          <div className="row">
            <span className="label">City:</span>
            <span className="value">{user.city}</span>
          </div>
        </div>

        <div className="details-actions">
          <Link to="/" className="btn btn-secondary">
            &larr; Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}