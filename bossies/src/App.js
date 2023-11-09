import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import About from "./routes/About.js";
import Qa from "./routes/Qa.js";
import Contact from "./routes/Contact.js";
import WineBottle from "./routes/WineBottle.js";

const App = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-80">
        {/* Use a grid layout to split the sections into two columns */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-8">
          {/* The first column is for the text and the button */}
          <div>
            <span className="block mb-4 text-xs md:text-sm text-black font-medium">
              Elke vrijdag & zaterdag van 17u-21u
            </span>
            <h3 className="text-6xl md:text-7xl font-black text-black">
              Bossies Wijnbar
            </h3>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-black">
              Iets komen drinken, afhalen, of de zaal afhuren? Laat ons gerust
              iets weten!
            </p>
            <button className="bg-green text-white font-medium py-2 px-4 rounded transition-all hover:bg-darkGreen active:scale-95">
              Contact
            </button>
          </div>
          {/* The second column is for the ShuffleGrid */}
          <WineBottle />
        </section>
        <About />
        <Qa />
        <Contact />
      </div>
    </div>
  );
};

export default App;
