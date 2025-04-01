import React from "react";
import { Link } from "react-router-dom";
import { FileCheck, BookOpen, Upload, BarChart3 } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";  // ✅ Import Navbar
import Footer from "../components/Footer";  // ✅ Import Footer

const Home = () => {
  const { user, isAuthenticated } = useAuth();

  // ✅ Function to return correct dashboard link
  const getDashboardLink = () => {
    if (!isAuthenticated) return "/login"; // Redirect to login if not authenticated
    return user?.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard";
  };

  const features = [
    { title: "Automated Grading", description: "AI-powered grading for handwritten answer sheets.", icon: FileCheck },
    { title: "Course Management", description: "Manage courses, create exams, and track progress.", icon: BookOpen },
    { title: "Simple Submissions", description: "Upload handwritten answer sheets easily.", icon: Upload },
    { title: "Detailed Analytics", description: "Get insights on student performance.", icon: BarChart3 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Main Content (Centered) */}
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="bg-gray-900 text-white py-20 text-center pt-24">
        <h1 className="text-4xl md:text-5xl font-bold">Grading with AI</h1>
          <p className="mt-4 text-lg text-gray-300">
            Automate the grading process with AI-powered handwriting recognition.
          </p>
          <div className="mt-6">
            <Link to={getDashboardLink()} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition">
              {isAuthenticated ? "Go to Dashboard" : "Get Started"}
            </Link>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <feature.icon className="w-12 h-12 mx-auto text-blue-500" />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
