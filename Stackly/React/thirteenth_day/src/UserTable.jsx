import React from 'react';
import { useSearchParams } from 'react-router-dom';

// 1. Data Source: 20 user records with 5 fields each
const USERS_DATA = [
  { id: 1, name: "Alice Johnson", email: "alice.j@example.com", city: "New York", role: "Software Engineer" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com", city: "San Francisco", role: "Product Manager" },
  { id: 3, name: "Charlie Davis", email: "charlie.d@example.com", city: "Austin", role: "UI/UX Designer" },
  { id: 4, name: "Diana Prince", email: "diana.p@example.com", city: "Chicago", role: "DevOps Engineer" },
  { id: 5, name: "Evan Wright", email: "evan.w@example.com", city: "Seattle", role: "QA Engineer" },
  { id: 6, name: "Fiona Gallagher", email: "fiona.g@example.com", city: "Boston", role: "Frontend Developer" },
  { id: 7, name: "George Clark", email: "george.c@example.com", city: "Denver", role: "Backend Developer" },
  { id: 8, name: "Hannah Abbott", email: "hannah.a@example.com", city: "Portland", role: "Data Analyst" },
  { id: 9, name: "Ian Malcolm", email: "ian.m@example.com", city: "Dallas", role: "Database Administrator" },
  { id: 10, name: "Julia Roberts", email: "julia.r@example.com", city: "Atlanta", role: "Scrum Master" },
  { id: 11, name: "Kevin Bacon", email: "kevin.b@example.com", city: "Miami", role: "Security Engineer" },
  { id: 12, name: "Laura Croft", email: "laura.c@example.com", city: "Los Angeles", role: "Cloud Architect" },
  { id: 13, name: "Michael Scott", email: "michael.s@example.com", city: "Scranton", role: "Regional Manager" },
  { id: 14, name: "Nina Simone", email: "nina.s@example.com", city: "New Orleans", role: "Technical Writer" },
  { id: 15, name: "Oscar Martinez", email: "oscar.m@example.com", city: "Phoenix", role: "Accountant" },
  { id: 16, name: "Pam Beesly", email: "pam.b@example.com", city: "Philadelphia", role: "Office Administrator" },
  { id: 17, name: "Quinn Fabray", email: "quinn.f@example.com", city: "San Diego", role: "Marketing Lead" },
  { id: 18, name: "Ryan Howard", email: "ryan.h@example.com", city: "Nashville", role: "Business Analyst" },
  { id: 19, name: "Sophia Loren", email: "sophia.l@example.com", city: "Minneapolis", role: "Solutions Architect" },
  { id: 20, name: "Thomas Anderson", email: "thomas.a@example.com", city: "Raleigh", role: "Full Stack Engineer" },
];

const ITEMS_PER_PAGE = 5;

export default function UserTable() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. Read 'page' param from URL; sanitize fallback to page 1
  const rawPage = parseInt(searchParams.get('page'), 10);
  const totalPages = Math.ceil(USERS_DATA.length / ITEMS_PER_PAGE);
  
  // Guard against invalid query values (e.g., NaN, negatives, or overflows)
  const currentPage = isNaN(rawPage) || rawPage < 1 
    ? 1 
    : Math.min(rawPage, totalPages);

  // 3. Slice the data dynamically for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = USERS_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // 4. Update the URL parameter on navigation
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage.toString() });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Team Directory</h2>
          <span style={styles.badge}>
            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, USERS_DATA.length)} of {USERS_DATA.length}
          </span>
        </div>

        {/* Responsive Table Wrapper */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.thRow}>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>City</th>
                <th style={styles.th}>Role</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} style={styles.tr}>
                  <td style={styles.tdMuted}>#{user.id}</td>
                  <td style={styles.tdBold}>{user.name}</td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{user.city}</td>
                  <td style={styles.td}>
                    <span style={styles.rolePill}>{user.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div style={styles.paginationBar}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            style={{
              ...styles.navButton,
              ...(currentPage <= 1 ? styles.disabledButton : {}),
            }}
          >
            ← Previous
          </button>

          <span style={styles.pageIndicator}>
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            style={{
              ...styles.navButton,
              ...(currentPage >= totalPages ? styles.disabledButton : {}),
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

// Inline styles for easy copy-pasting without external CSS setup
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    padding: '2.5rem 1rem',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '900px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
  },
  header: {
    padding: '1.5rem 2rem',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#0f172a',
  },
  badge: {
    fontSize: '0.825rem',
    color: '#64748b',
    backgroundColor: '#f1f5f9',
    padding: '0.35rem 0.75rem',
    borderRadius: '9999px',
    fontWeight: '500',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
  },
  thRow: {
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
  },
  th: {
    padding: '0.875rem 1.5rem',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#64748b',
    fontWeight: '600',
  },
  tr: {
    borderBottom: '1px solid #f1f5f9',
  },
  td: {
    padding: '1rem 1.5rem',
    fontSize: '0.875rem',
    color: '#334155',
  },
  tdBold: {
    padding: '1rem 1.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#0f172a',
  },
  tdMuted: {
    padding: '1rem 1.5rem',
    fontSize: '0.875rem',
    color: '#94a3b8',
    fontVariantNumeric: 'tabular-nums',
  },
  rolePill: {
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    padding: '0.25rem 0.6rem',
    borderRadius: '6px',
    fontSize: '0.775rem',
    fontWeight: '500',
  },
  paginationBar: {
    padding: '1.25rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  pageIndicator: {
    fontSize: '0.875rem',
    color: '#475569',
  },
  navButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#1e293b',
    backgroundColor: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.15s ease-in-out',
  },
  disabledButton: {
    color: '#94a3b8',
    borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    cursor: 'not-allowed',
  },
};