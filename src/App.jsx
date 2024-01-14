import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import EssLayout from "layouts/ess";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="ess/*" element={<EssLayout />} />
      <Route path="/" element={<Navigate to="/ess" replace />} />
    </Routes>
  );
};

export default App;
