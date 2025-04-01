import React from 'react';

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">How SmartGrade Works</h1>
      
      <p className="text-lg text-gray-700 mb-8 text-center">
        Our grading system provides a seamless, efficient, and transparent way for teachers to assign grades,
        and for students to track their academic progress in real-time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* How it Works Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">For Teachers</h2>
          <p className="text-gray-700">
            As a teacher, you have the ability to create assignments, grade student submissions, and provide feedback in a streamlined environment. 
            Here's how it works:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Create Assignments:</strong> Set up different types of assignments (quizzes, essays, etc.) and specify grading criteria.
            </li>
            <li>
              <strong>Grade Submissions:</strong> Once students submit their work, you can grade them based on predefined rubrics or custom criteria.
            </li>
            <li>
              <strong>Provide Feedback:</strong> Provide constructive feedback directly on assignments or through comments to help students improve.
            </li>
            <li>
              <strong>Track Class Progress:</strong> Use the dashboard to see how each student is performing and identify areas where they may need additional help.
            </li>
          </ol>
        </div>

        {/* How it Works Section for Students */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">For Students</h2>
          <p className="text-gray-700">
            As a student, SmartGrade helps you stay on top of your academic progress and keep track of your grades easily.
            Here's how it works for you:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Submit Assignments:</strong> Submit your assignments on time, and make sure to follow the provided instructions for the best result.
            </li>
            <li>
              <strong>View Grades:</strong> Once assignments are graded, you can view your grades and feedback directly on the platform.
            </li>
            <li>
              <strong>Monitor Progress:</strong> Track your overall academic performance in real-time and get an overview of your grades for each subject or course.
            </li>
            <li>
              <strong>Engage with Feedback:</strong> Review your teacher's feedback on each assignment to improve in future tasks.
            </li>
          </ol>
        </div>
      </div>

      {/* Section for General Flow */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">General Flow of the Grading System</h2>
        <p className="text-lg text-gray-700 mt-4 mb-6">
          Our grading system is designed to be easy for both teachers and students. Here’s an overview of the entire flow:
        </p>

        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Step 1: Create Assignments</h3>
            <p className="text-gray-600 mt-2">Teachers create assignments with details, deadlines, and grading criteria.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Step 2: Submit Assignments</h3>
            <p className="text-gray-600 mt-2">Students submit their assignments before the deadline.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Step 3: Grade Submissions</h3>
            <p className="text-gray-600 mt-2">Teachers grade the submissions and provide feedback based on the grading rubric.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Step 4: View Grades</h3>
            <p className="text-gray-600 mt-2">Students can view their grades and feedback at any time.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Whether you're a teacher looking for an easy way to grade and manage assignments, or a student aiming to stay on top of your academic performance,
          SmartGrade is the perfect solution for you.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
