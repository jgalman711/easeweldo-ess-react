import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import EssLayout from "layouts/ess";
import AuthLayout from "layouts/auth";

const App = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
  };

  const requireAuth = (element) => {
    return isAuthenticated() ? element : <Navigate to="/auth/login" replace />;
  };

  const redirectToEssIfAuthenticated = (element) => {
    return isAuthenticated() ? <Navigate to="/ess" replace /> : element;
  };

  return (
    <Routes>
      <Route path="auth/*" element={redirectToEssIfAuthenticated(<AuthLayout />)} />
      <Route path="ess/*" element={requireAuth(<EssLayout />)} />
      <Route path="/" element={<Navigate to="/ess" replace />} />
    </Routes>
  );
};

export default App;
