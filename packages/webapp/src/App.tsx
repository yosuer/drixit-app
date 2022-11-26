import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import AuthProvider from "./providers/AuthProvider";
import RequireAuth from "./providers/RequireAuth";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
