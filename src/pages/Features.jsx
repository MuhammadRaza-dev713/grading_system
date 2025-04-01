import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Grading System Features</h1>

        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <span className="font-bold text-xl">1</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Student Dashboard</h2>
              <p className="text-gray-600">
                View grades, assignments, upcoming exams, and track progress in real-time. Students can also view detailed feedback from teachers.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <span className="font-bold text-xl">2</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Teacher Dashboard</h2>
              <p className="text-gray-600">
                Teachers can grade assignments, manage class performance, and provide feedback to students. They can also track class attendance and participation.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <span className="font-bold text-xl">3</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Real-Time Grading</h2>
              <p className="text-gray-600">
                Instant updates of grades upon assignment submission. Teachers can provide grades and comments in real-time to ensure timely feedback.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <span className="font-bold text-xl">4</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Customizable Grading Criteria</h2>
              <p className="text-gray-600">
                Set custom grading rubrics based on different criteria such as assignment completion, creativity, and understanding of the material.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <span className="font-bold text-xl">5</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Progress Tracking</h2>
              <p className="text-gray-600">
                Track your academic progress over time with detailed reports and visual charts. See how you're performing in each subject area.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <span className="font-bold text-xl">6</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Secure and Scalable</h2>
              <p className="text-gray-600">
                The grading system is built with security in mind, ensuring that all student data is safe. It is also scalable to support large classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
