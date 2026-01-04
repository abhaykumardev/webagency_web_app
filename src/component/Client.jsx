import React from "react";
import { motion } from "framer-motion";

const Client = () => {
  const client = [
    "ZENTARA",
    "KUROVI",
    "AVENTRO",
    "SYNTARI",
    "NOVIQO",
    "VELTRIX",
    "TARISMA",
  ];

  // motion variants
  const containervarient = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemvarient = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="py-16 relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 uppercase tracking-widest text-sm mb-10">
          Trusted by Innovative Startups worldwide
        </p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
          variants={containervarient}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {client.map((item, index) => (
            <motion.p
              key={index}
              variants={itemvarient}
              className="text-xl font-semibold text-gray-300"
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Client;
