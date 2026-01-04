import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ isDarkmode, toggletheme }) => {
  const navitems = ["Home", "Services", "Work", "About", "Contact"];
  const [ismenuopen, setIsmenuopen] = useState(false);

  const togglemenu = () => setIsmenuopen(!ismenuopen);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full mx-auto px-6 py-6 flex justify-between items-center backdrop-blur-3xl z-50"
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="text-3xl font-extrabold"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <span className="gradient-text">KODIO</span>
      </motion.a>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:items-center lg:space-x-12">
        {navitems.map((nav, index) => (
          <motion.a
            key={index}
            href={nav === "Home" ? "#" : `#${nav.toLowerCase()}`}
            className="text-lg font-medium hover:text-primary transition py-3"
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {nav}
          </motion.a>
        ))}

        <motion.a
          href="#contact"
          className="bg-primary text-dark px-8 py-2 rounded-full font-bold hover:bg-opacity-80 transition mt-4 lg:mt-0 hover:translate-y-1 duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.a>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Theme Button */}
        <motion.button
          whileTap={{ rotate: 360, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="text-2xl cursor-pointer"
          onClick={toggletheme}
        >
          {isDarkmode ? "🌙" : "☀️"}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={togglemenu}
          whileTap={{ scale: 0.9 }}
        >
          {ismenuopen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {ismenuopen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col space-y-6 lg:hidden"
          >
            {navitems.map((nav, idx) => (
              <a
                key={idx}
                href={nav === "Home" ? "#" : `#${nav.toLowerCase()}`}
                onClick={() => setIsmenuopen(false)}
                className="text-lg font-semibold hover:text-primary transition"
              >
                {nav}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsmenuopen(false)}
              className="bg-primary text-dark px-6 py-3 rounded-full font-bold text-center"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
