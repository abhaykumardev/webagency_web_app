import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="services" className="py-15 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            Premium Digital Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-xl">
            We deliver exceptional results through our specialized service
            offering.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containervarient}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemvarient}
              className="border-2 border-gray-800 p-8 rounded-2xl service-card transition duration-500 hover:border-primary hover:border-opacity-30 cursor-pointer"
            >
              <div
                className={`text-${service.color}
              text-4xl mb-4`}
              >
                <service.icon />
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <a
                className="flex items-center gap-2 font-semibold text-primary"
                href=""
              >
                Explore service <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
