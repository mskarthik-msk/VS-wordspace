import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function UsersLayout() {
  return (
    <div className="page-container">
      <div className="card">
        <h2>Users Section</h2>
        <p className="subtitle">Nested routing demonstration with sub-routes rendered below.</p>
        
        <div className="sub-nav">
          <NavLink to="/users" end className={({ isActive }) => (isActive ? "sub-link active" : "sub-link")}>
            User Directory
          </NavLink>
          <NavLink to="/users/profile" className={({ isActive }) => (isActive ? "sub-link active" : "sub-link")}>
            Profile View
          </NavLink>
          <NavLink to="/users/settings" className={({ isActive }) => (isActive ? "sub-link active" : "sub-link")}>
            Account Settings
          </NavLink>
        </div>

        <div className="nested-outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}