import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const StudentDashboard = () => {
  const { user } = useAuth();

  if (!user || user.role !== "student") return <Navigate to="/login" />;

  return (
    <div>
      <h1>Welcome, {user.name} (Student)</h1>
      <p>Student Dashboard Content</p>
    </div>
  );
};

export default StudentDashboard;
