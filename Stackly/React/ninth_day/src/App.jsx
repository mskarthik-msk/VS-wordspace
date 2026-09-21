import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import UsersLayout from "./pages/users/UsersLayout.jsx";
import { UserList, UserProfile, UserSettings } from "./pages/users/UserList.jsx"; // or appropriate imports

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          Nested Routes under /users
          <Route path="users" element={<UsersLayout />}>
            <Route index element={<UserList />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}