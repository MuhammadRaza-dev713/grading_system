
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./contexts/AuthContext"; // ✅ Import Auth Context
import "./App.css";

// ✅ Role-based Private Route Component
const ProtectedRoute = ({ element, allowedRoles }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return allowedRoles.includes(user.role) ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Role-Based Dashboard Routes */}
        <Route
          path="/student/dashboard"
          element={<ProtectedRoute element={<StudentDashboard />} allowedRoles={["student"]} />}
        />
        <Route
          path="/teacher/dashboard"
          element={<ProtectedRoute element={<TeacherDashboard />} allowedRoles={["teacher"]} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
