import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./App.css";

import About from "./routes/About.js";
import Qa from "./routes/Qa.js";
import Contact from "./routes/Contact.js";
import Nav from "./routes/Nav.js";

const App = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav />
      <img
        src="https://i.ibb.co/NSHDZR2/logo-wijnbar-zonder-Cirkel.png"
        alt="Logo"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 max-w-[100px] p-3 md:left-0 md:transform-none"
      />
      <div
        id="home"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-40"
      >
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 w-full mb-8">
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black text-black mb-4">
              Bossies Wijnbar
            </h3>
            <span className="text-sm md:text-base lg:text-lg text-slate-700 mb-4">
              Elke vrijdag & zaterdag van 17u-21u
            </span>
            <p className="text-sm md:text-base lg:text-lg text-slate-700 mb-4">
              Iets komen drinken, afhalen, of de zaal afhuren? Laat ons gerust
              iets weten!
            </p>
            <button
              onClick={scrollToContact} // Step 2: Modify button to use onClick
              className="bg-green text-white font-medium py-2 px-4 rounded transition-all hover:bg-darkGreen active:scale-95"
            >
              Contact
            </button>
          </div>
          {/* The second column can be used for additional content or images */}
        </section>
        <div id="about">
          <About />
        </div>
        <div id="qa">
          <Qa />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
