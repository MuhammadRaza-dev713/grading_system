import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const TeacherDashboard = () => {
  const { user } = useAuth();

  if (!user || user.role !== "teacher") return <Navigate to="/login" />;

  return (
    <div>
      <h1>Welcome, {user.name} (Teacher)</h1>
      <p>Teacher Dashboard Content</p>
    </div>
  );
};

export default TeacherDashboard;
