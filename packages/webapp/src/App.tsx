import React from 'react';
import { Routes, Route } from "react-router-dom";
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import RequireAuth from './providers/RequireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
