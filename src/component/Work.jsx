import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const Work = () => {
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
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="work" className="py-15 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            Our Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            Selected Case Studies
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Explore our award-winning projects that push the boundaries of
            digital innovation.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containervarient}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemvarient}
              className="rounded-2xl overflow-hidden border border-gray-800 bg-black/20 backdrop-blur-md hover:border-primary transition duration-500 cursor-pointer group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <span
                  className={`${project.typeColor} text-sm font-semibold uppercase`}
                >
                  {project.type}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <a
                  href="#"
                  className={`flex items-center gap-2 ${project.linkColor} font-semibold hover:gap-3 transition-all`}
                >
                  View Case Studies
                  <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center">
          <a
            href=""
            className="inline-flex item-center text-primary font-bold group px-6 py-4 border border-primary rounded-full"
          >
            View All Projects
            <FaArrowRight className="ml-3 group-hover:ml-4 transition-all items-center justify-center" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
