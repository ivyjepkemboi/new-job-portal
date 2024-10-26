// src/components/RoleBasedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const RoleBasedRoute = ({ component: Component, role }) => {
  const { user } = useUserContext();

  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default RoleBasedRoute;
