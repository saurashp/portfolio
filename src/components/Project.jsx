import React from "react";
import "./project.css";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-12 lg:px-20 bg-slate-900 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-indigo-600">Expertise</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* E-commerce Platform */}
        <div className="bg-card-bg p-6 rounded-2xl shadow-xl border border-gray-700 transition-all transform hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="flex items-center text-indigo-500 mb-3">
            <span className="font-bold uppercase tracking-wide">Web Dev</span>
          </div>
          <h4 className="text-xl font-semibold mb-2">
            Full-Stack E-commerce Platform
          </h4>
          <p className="text-gray-400 mb-4 leading-relaxed">
            A complete MERN stack application featuring user authentication,
            product catalog, mock payment integration, and an intuitive admin
            dashboard for product and order management.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="project-link flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300"
            >
              <i className="bi bi-github text-xl"></i>
              <span>Code</span>
            </a>
            <a
              href="#"
              className="project-link flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300"
            >
              <i data-lucide="external-link" className="icon text-xl"></i>
              <span>Live Demo</span>
            </a>
          </div>
        </div>

        {/* ML/Python Project */}
        <div className="bg-card-bg p-6 rounded-2xl shadow-xl border border-gray-700 transition-all transform hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="flex items-center text-indigo-500 mb-3">
            <span className="font-bold uppercase tracking-wide">
              ML / Python
            </span>
          </div>
          <h4 className="text-xl font-semibold mb-2">
            Image Classification Model
          </h4>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Developed a CNN using TensorFlow/Keras to classify images with 95%
            accuracy. Integrated the model with a Flask API for live inference
            and deployed on a lightweight web interface.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="project-link flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300"
            >
              <i className="bi bi-github text-xl"></i>
              <span>Code</span>
            </a>
            <a
              href="#"
              className="project-link flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300"
            >
              <i data-lucide="external-link" className="icon text-xl"></i>
              <span>Live Demo</span>
            </a>
          </div>
        </div>

        {/* Blog Website */}
        <div className="bg-card-bg p-6 rounded-2xl shadow-xl border border-gray-700 transition-all transform hover:-translate-y-2 hover:shadow-2xl duration-300">
          <div className="flex items-center text-indigo-500 mb-3">
            <span className="font-bold uppercase tracking-wide">Web Dev</span>
          </div>
          <h4 className="text-xl font-semibold mb-2">Weather App</h4>
          <p className="text-gray-400 mb-4 leading-relaxed">
            A weather and temperature checking web app built using React and the
            OpenWeather API. It shows real-time weather data, humidity, and wind
            speed for any city, with animated icons and a clean responsive UI.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/saurashp/weather-app"
              className="project-link flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300"
            >
              <i className="bi bi-github text-xl"></i>
              <span>Code</span>
            </a>
            <a
              href="https://saurashp.github.io/weather-app/"
              className="project-link flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300"
            >
              <i data-lucide="external-link" className="icon text-xl"></i>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
