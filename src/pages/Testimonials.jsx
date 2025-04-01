import React from 'react';

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">What Our Users Say</h1>

      <p className="text-lg text-gray-700 mb-12 text-center">
        Hear from teachers and students who have experienced the ease and effectiveness of the SmartGrade grading system.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Testimonial 1 */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <p className="text-lg text-gray-700 mb-4">
            "SmartGrade has completely transformed the way I manage my assignments. As a teacher, I can easily grade, track progress, and provide instant feedback to students. The system is user-friendly and has saved me so much time!"
          </p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Teacher"
              className="rounded-full w-12 h-12"
            />
            <div>
              <p className="font-semibold text-gray-800">John Smith</p>
              <p className="text-sm text-gray-500">Math Teacher</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <p className="text-lg text-gray-700 mb-4">
            "As a student, SmartGrade has made it easier for me to stay on top of my assignments and grades. I can track my progress in real-time and get instant feedback, which helps me improve my performance."
          </p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Student"
              className="rounded-full w-12 h-12"
            />
            <div>
              <p className="font-semibold text-gray-800">Emily Johnson</p>
              <p className="text-sm text-gray-500">High School Student</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <p className="text-lg text-gray-700 mb-4">
            "The feedback I get from my teachers is incredibly helpful. I can always refer back to it when working on future assignments. SmartGrade has definitely helped me achieve higher grades!"
          </p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Student"
              className="rounded-full w-12 h-12"
            />
            <div>
              <p className="font-semibold text-gray-800">Sarah Lee</p>
              <p className="text-sm text-gray-500">College Student</p>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <p className="text-lg text-gray-700 mb-4">
            "I love how intuitive and easy-to-use SmartGrade is! As a teacher, it allows me to efficiently manage my students' work and communicate directly with them. It’s really made grading less stressful."
          </p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Teacher"
              className="rounded-full w-12 h-12"
            />
            <div>
              <p className="font-semibold text-gray-800">Mary Brown</p>
              <p className="text-sm text-gray-500">Science Teacher</p>
            </div>
          </div>
        </div>

        {/* Testimonial 5 */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <p className="text-lg text-gray-700 mb-4">
            "The grade tracking system is fantastic. I no longer have to guess where I stand in my classes. Everything is right there, and I can focus on improving the areas where I’m struggling."
          </p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Student"
              className="rounded-full w-12 h-12"
            />
            <div>
              <p className="font-semibold text-gray-800">James Parker</p>
              <p className="text-sm text-gray-500">University Student</p>
            </div>
          </div>
        </div>

        {/* Testimonial 6 */}
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          <p className="text-lg text-gray-700 mb-4">
            "SmartGrade has helped my students stay organized and motivated to do their best work. The ability to give instant feedback has increased student engagement and overall performance."
          </p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Teacher"
              className="rounded-full w-12 h-12"
            />
            <div>
              <p className="font-semibold text-gray-800">Linda Carter</p>
              <p className="text-sm text-gray-500">English Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
