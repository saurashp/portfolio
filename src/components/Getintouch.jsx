import React from "react";
import {
  Phone,
  Mail,
  Github,
  Instagram,
  Linkedin,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 bg-dark-bg text-gray-50"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Get <span className="text-indigo-800">In Touch</span>
      </h2>
      <div className="max-w-xl mx-auto bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-700">
        <p className="text-center text-text-light text-xl font-semibold mb-8">
          Let&apos;s build something great together.
        </p>

        {/* Direct Contact Details */}
        <div className="space-y-6 mb-10">
          {/* Phone */}
          <div className="flex items-center space-x-4 flex-wrap justify-center sm:justify-start">
            <Phone className="w-6 h-6 text-indigo-800 flex-shrink-0" />
            <a
              href="tel:+918002309248"
              className="text-gray-50 text-lg hover:text-primary-dark transition duration-300"
            >
              +91 80023 09248{" "}
              <span className="text-gray-400 text-sm">(Click to Call)</span>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 flex-wrap justify-center sm:justify-start">
            <Mail className="w-6 h-6 text-indigo-800 flex-shrink-0" />
            <a
              href="mailto:saurashp@gmail.com?subject=Inquiry%20from%20Portfolio"
              className="text-gray-50 text-lg hover:text-indigo-800 transition duration-300"
            >
              saurashp@gmail.com{" "}
              <span className="text-gray-400 text-sm">(Click to Email)</span>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <h4 className="text-center text-gray-400 mb-6 font-medium text-lg">
            Connect on Socials
          </h4>

          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            {/* GitHub */}
            <a
              href="https://github.com/saurashp"
              target="_blank"
              rel="noreferrer"
              className="text-text-gray-50 hover:text-indigo-800 transition duration-300 group"
            >
              <Github className="w-8 h-8 group-hover:scale-110 transition duration-300" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/saurash_preet?igsh=MXVmNTJldmN5YXpjNA=="
              target="_blank"
              rel="noreferrer"
              className="text-text-gray-50 hover:text-indigo-800 transition duration-300 group"
            >
              <Instagram className="w-8 h-8 group-hover:scale-110 transition duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/saurash-preet-9358a2227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="text-text-gray-50 hover:text-indigo-800 transition duration-300 group"
            >
              <Linkedin className="w-8 h-8 group-hover:scale-110 transition duration-300" />
            </a>

            {/* Reddit */}
            <a
              href="https://reddit.com/user/your-username"
              target="_blank"
              rel="noreferrer"
              className="text-text-gray-50 hover:text-indigo-800 transition duration-300 group"
            >
              <MessageSquare className="w-8 h-8 group-hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
