// src/pages/users/UserList.jsx
export function UserList() {
  const users = [
    { id: 1, name: "Alex Rivera", role: "Engineering Lead" },
    { id: 2, name: "Taylor Morgan", role: "Product Designer" },
    { id: 3, name: "Jordan Lee", role: "Security Engineer" },
  ];
  return (
    <div>
      <h3>Registered Users</h3>
      <ul className="item-list">
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> &mdash; <span>{u.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// src/pages/users/UserProfile.jsx
export function UserProfile() {
  return (
    <div>
      <h3>Active User Profile</h3>
      <p>Viewing personal details, role definitions, and recent session activity.</p>
    </div>
  );
}

// src/pages/users/UserSettings.jsx
export function UserSettings() {
  return (
    <div>
      <h3>Account Preferences</h3>
      <p>Manage email notifications, multi-factor authentication, and API access tokens.</p>
    </div>
  );
}