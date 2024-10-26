// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, logout } = useUserContext();

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-semibold">Job Portal</Link>
        <div>
          {user ? (
            <>
              {user.role === 'admin' && <Link to="/admin-dashboard" className="mr-4">Admin</Link>}
              {user.role === 'recruiter' && <Link to="/recruiter-dashboard" className="mr-4">Recruiter</Link>}
              {user.role === 'member' && <Link to="/member-dashboard" className="mr-4">Member</Link>}
              <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register" className="bg-accent px-4 py-2 rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
