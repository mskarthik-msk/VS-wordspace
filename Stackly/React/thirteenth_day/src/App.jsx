import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserTable from './UserTable';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserTable />} />
        {/* Default route redirecting to page 1 */}
        <Route path="*" element={<Navigate to="/users?page=1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}