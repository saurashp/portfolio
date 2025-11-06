import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Skills from "./components/skills.jsx";
import Project from "./components/Project.jsx";
import Getintouch from "./components/Getintouch.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <body className="bg-slate-900 text-text-light antialiased">
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Getintouch />
        <Footer />
      </div>
    </body>
  );
};

export default App;
