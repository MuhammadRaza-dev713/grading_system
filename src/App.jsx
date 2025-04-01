import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./contexts/AuthContext"; 
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Testimonials from "./pages/Testimonials";
import "./App.css";
import SignUp from "./pages/SignUp";

// ✅ Role-based Protected Route Component
const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  // Check if user is authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Check if user has the appropriate role, otherwise redirect to login
  return allowedRoles.includes(user.role) ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Navbar /> {/* Displaying Navbar in the App */}

        <div className="pt-[4rem]">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/signup" element={<SignUp />} /> {/* Signup page route */}
        <Route path="/features" element={<Features />} /> {/* Features page route */}
        <Route path="/howitworks" element={<HowItWorks />} /> {/* HowItWorks page route */}
        <Route path="/testimonials" element={<Testimonials />} /> {/* Testimonials page route */}

        {/* Protected Routes */}
        {/* Protected Route for Student Dashboard */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute
              element={<StudentDashboard />}
              allowedRoles={["student"]}
            />
          }
        />

        {/* Protected Route for Teacher Dashboard */}
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute
              element={<TeacherDashboard />}
              allowedRoles={["teacher"]}
            />
          }
        />

        {/* 404 Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
        </div>
    </AuthProvider>
  );
}

export default App;
