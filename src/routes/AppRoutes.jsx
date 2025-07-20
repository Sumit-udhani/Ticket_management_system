import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../component/Ui/Dashboard"; 

export const AppRoutes = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/ticket" />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/ticket" />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />
      <Route
        path="/ticket"
        element={
          isAuthenticated ? (
            <Dashboard setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};
