import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-black border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 py-15">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-extrabold mb-2 gradient-text">
              KODIO
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pushing the boundaries of digital innovation to create
              transformative experiences.
            </p>

            <div className="flex gap-4 text-2xl text-gray-400">
              <a href="#" className="hover:text-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm cursor-pointer">
              <li className="hover:text-white transition">3D Visualization</li>
              <li className="hover:text-white transition">AI Integration</li>
              <li className="hover:text-white transition">Web3 Development</li>
              <li className="hover:text-white transition">Immersive Apps</li>
            </ul>
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm cursor-pointer">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Our Team</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Blog</li>
            </ul>
          </motion.div>

          {/* LEGAL */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400 text-sm cursor-pointer">
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Terms of Service</li>
              <li className="hover:text-white transition">Cookie Policy</li>
              <li className="hover:text-white transition">GDPR</li>
            </ul>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <motion.div
          variants={item}
          className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
        >
          <p>© 2025 KODIO Digital. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms of Service
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
