import React from 'react';
import useFetchData from '../hooks/useFetchData';
import './UserList.css';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
  const { data: users, loading, error } = useFetchData(USERS_API_URL,1000);

  return (
    <div className="user-container">
      <header className="user-header">
        <h2>Managed via Custom Hook <br></br><code>useFetchData</code><br></br> Axios</h2>
      </header>

      {loading && (
        <div className="status-container" role="status" aria-live="polite">
          <div className="spinner"></div>
          <p>Loading user profiles...</p>
        </div>
      )}

      {error && !loading && (
        <div className="error-banner" role="alert">
          <h3>Network Error</h3>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && users && (
        <div className="grid-layout">
          {users.map((user) => (
            <article key={user.id} className="user-card">
              <div className="card-top">
                <span className="user-badge">ID #{user.id}</span>
                <span className="user-tag">@{user.username}</span>
              </div>

              <h2 className="user-name">{user.name}</h2>

              <ul className="info-list">
                <li>
                  <span className="info-label">Email</span>
                  <a href={`mailto:${user.email}`} className="info-value">{user.email}</a>
                </li>
                <li>
                  <span className="info-label">Phone</span>
                  <span className="info-value">{user.phone}</span>
                </li>
                <li>
                  <span className="info-label">City</span>
                  <span className="info-value">{user.address?.city || 'N/A'}</span>
                </li>
                <li>
                  <span className="info-label">Website</span>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-value link"
                  >
                    {user.website}
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;