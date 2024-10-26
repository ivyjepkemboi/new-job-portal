// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import JobDetail from './pages/JobDetail';
import AllJobs from './pages/AllJobs';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import MemberDashboard from './pages/MemberDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import RoleBasedRoute from './components/RoleBasedRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto mt-6">
          <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/admin-dashboard" element={<RoleBasedRoute component={AdminDashboard} role="admin" />} />
            <Route path="/member-dashboard" element={<RoleBasedRoute component={MemberDashboard} role="member" />} />
            <Route path="/recruiter-dashboard" element={<RoleBasedRoute component={RecruiterDashboard} role="recruiter" />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
