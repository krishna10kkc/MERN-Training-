// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-200">

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white flex justify-between items-center px-10 py-4 shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/101/767/original/student-login-blue-gradient-concept-icon-materials-to-study-learning-management-system-access-abstract-idea-thin-line-illustration-isolated-outline-drawing-vector.jpg"
            alt="logo"
            className="w-16 h-16 rounded-xl shadow-md border-2 border-white/20"
          />
          <h1 className="text-3xl font-extrabold tracking-tight">CampuSphere</h1>
        </div>

        <ul className="flex items-center gap-8 text-lg font-medium">
          <li className="cursor-pointer hover:text-blue-200 transition-colors duration-300">Home</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors duration-300">About</li>
          <li className="cursor-pointer hover:text-blue-200 transition-colors duration-300">Contact</li>

          <button
            className="bg-white text-blue-700 px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-blue-400"
            onClick={() => navigate("/register")}
          >
            Signup
          </button>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-10 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="relative z-10 pl-4 lg:pl-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-6 shadow-sm border border-blue-200">
            Welcome to the future of learning 🚀
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-800 mb-6 leading-tight">
            Student Management System
          </h1>

          <p className="text-gray-600 text-xl mb-10 max-w-lg leading-relaxed">
            A platform where students can submit projects and teachers can
            review, approve, and manage them efficiently.
          </p>

          <div className="flex gap-4">
            <button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

            <button
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1 shadow-sm transition-all duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

        <div className="relative z-10 p-4 lg:p-8">
          <img
            src="https://itxperts.co.in/blog/wp-content/uploads/2025/01/stmt.webp"
            alt="students"
            className="rounded-2xl shadow-2xl w-full border-4 border-white transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-10 bg-white">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              📚
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Project Submission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Students can easily upload and manage their academic projects.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              ✅
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Teacher Approval
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Teachers can review, approve, or reject projects with comments.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              👨‍🎓
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Profile Management
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Students and teachers can update and maintain their profiles.
            </p>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-white opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 text-center gap-10 relative z-10">
          <div className="p-4">
            <h1 className="text-5xl font-extrabold mb-2">500<span className="text-blue-400">+</span></h1>
            <p className="text-blue-200 font-semibold tracking-wider uppercase text-sm">Students</p>
          </div>

          <div className="p-4">
            <h1 className="text-5xl font-extrabold mb-2">50<span className="text-blue-400">+</span></h1>
            <p className="text-blue-200 font-semibold tracking-wider uppercase text-sm">Teachers</p>
          </div>

          <div className="p-4">
            <h1 className="text-5xl font-extrabold mb-2">1000<span className="text-blue-400">+</span></h1>
            <p className="text-blue-200 font-semibold tracking-wider uppercase text-sm">Projects</p>
          </div>

          <div className="p-4">
            <h1 className="text-5xl font-extrabold mb-2">95<span className="text-blue-400">%</span></h1>
            <p className="text-blue-200 font-semibold tracking-wider uppercase text-sm">Success Rate</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <h3 className="text-3xl font-bold tracking-tight mb-4">CampuSphere</h3>
        <p className="text-gray-400 mb-2">
          © 2026 All Rights Reserved
        </p>
        <p className="text-gray-500 text-sm">
          Developed using MERN Stack
        </p>
      </footer>
    </div>
  );
};

export default Home;