import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div>
      <section className="py-16 px-4 sm:px-8 lg:px-16" id="skills">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My
          <span className="text-indigo-800"> Expertise</span>
        </h2>

        {/* Skills Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start max-w-6xl mx-auto">
          {/* Web Development Card */}
          <div className="bg-gray-800 p-8 w-full md:w-[90%] rounded-2xl shadow-xl border border-gray-700 transition transform hover:scale-[1.02] duration-300 md:ml-10">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-50 text-center">
                Web Development (MERN Stack)
              </h3>
            </div>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Building full-stack, scalable, and responsive web applications
              from the ground up.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "REST APIs",
                "Git/GitHub",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/50 transition duration-200 hover:bg-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Machine Learning Card */}
          <div className="bg-gray-800 p-8 w-full md:w-[90%] rounded-2xl shadow-xl border border-gray-700 transition transform hover:scale-[1.02] duration-300">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-50 text-center">
                Machine Learning & Python
              </h3>
            </div>
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Developing predictive models, performing data analysis, and
              building efficient scripts using Python.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                "Python",
                "Scikit-learn",
                "Pandas/NumPy",
                "TensorFlow",
                "Data Visualization",
                "Computer Vision",
                "Deep Learning",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/50 transition duration-200 hover:bg-primary/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
