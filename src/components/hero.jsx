import React from "react";
import "./hero.css";
import profilePic from "../assets/profilepicture.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Saurash_Preet_Resume (5).pdf"; // File inside public folder
    link.download = "Saurash_Preet_Resume.pdf"; // Rename on download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-20 pb-12"
        >
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-2xl font-medium text-indigo-500 mb-3">
                Final year B.Tech (CCE) student at MUJ
              </p>
              <h1 className="text-white text-5xl font-bold leading-tight">
                Hi, I'm
                <span className="text-indigo-700 block mt-2">
                  Saurash Preet
                </span>
              </h1>

              <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 my-6">
                A dedicated Web Developer specializing in the MERN Stack,
                blending technical proficiency with a passion for Machine
                Learning and Python to build innovative and scalable solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-blue-500 px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white hover:bg-blue-600 transition duration-300 shadow-lg"
                >
                  View my work
                </a>
                <a
                  href="#"
                  onClick={handleDownloadResume}
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-xl text-white hover:bg-gray-800 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-600 shadow-2xl overflow-hidden flex items-center justify-center bg-gray-900">
                <img
                  src={profilePic}
                  alt="Saurash Preet"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
