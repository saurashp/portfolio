import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16 text-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Footer Text */}
        <p className="mb-4 sm:mb-0 text-center sm:text-left text-text-muted">
          &copy; 2025 Saurash Preet. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/saurashp"
            target="_blank"
            rel="noreferrer"
            className="text-gray-50 hover:text-indigo-800 transition duration-300"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saurash-preet-9358a2227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="text-gray-50 hover:text-indigo-800 transition duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:saurashp@gmail.com"
            className="text-gray-50 hover:text-indigo-800 transition duration-300   "
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
