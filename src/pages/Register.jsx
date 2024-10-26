// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'member' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Failed to register');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 border rounded">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <input type="text" name="username" placeholder="Username" required onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
      <input type="password" name="password" placeholder="Password" required onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
      
      <label className="block mb-2 font-semibold">Role:</label>
      <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 mb-4 border rounded">
        <option value="member">Member</option>
        <option value="recruiter">Recruiter</option>
      </select>

      <button type="submit" className="w-full bg-primary text-white py-2 rounded">Register</button>
    </form>
  );
};

export default Register;
