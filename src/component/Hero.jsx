import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  // variants
  const containervarient = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const buttonvarients = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-20 pt-10 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        {/* text section */}
        <motion.div
          className="w-full text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          {/* title */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <span className="text-stroke">WE BUILD </span>
            <span className="gradient-text">DIGITAL FUTURES</span>
          </motion.h1>

          {/* paragraph */}
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            KODIO transforms business through cutting-edge digital solutions that blend innovative design with advanced technology.
          </motion.p>

          {/* buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={containervarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.a
              href="#Contact"
              className="bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-opacity-80 transition-all hover:scale-105 duration-300"
              variants={buttonvarients}
            >
              Start Your Project
            </motion.a>

            <motion.a
              href="#Work"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg text-center transition-all hover:text-primary/80 hover:scale-105 duration-300"
              variants={buttonvarients}
            >
              View Our Work
            </motion.a>
          </motion.div>

        </motion.div>

        {/* image section */}
        <div className="flex w-full justify-center">
          <div className="relative w-full max-w-5xl">
            <motion.img
              src={assets.heroImg}
              alt="Digital Innovation"
              className="rounded-2xl shadow-2xl w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div> 
        </div>

      </div>
    </div>
  );
};

export default Hero;
