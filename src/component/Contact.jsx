import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const containervariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemvariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 relative"
      variants={containervariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT INFO SECTION */}
          <motion.div variants={itemvariant}>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
              Get In Touch
            </h2>

            <p className="text-base text-gray-300 mb-10">
              Have a project in mind or want to learn more about our services?
              Reach out to our team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/20 rounded-xl p-4 mr-6">
                  <FaMapMarkedAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Our Headquarters</h4>
                  <p className="text-gray-400">
                    Innovation District, 911 Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 rounded-xl p-4 mr-6">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email Us</h4>
                  <p className="text-gray-400">
                    abhay9115k@gmail.com <br />
                    support@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/20 rounded-xl p-4 mr-6">
                  <FaPhoneAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Call Us</h4>
                  <p className="text-gray-400">
                    +91 9115256074 <br />
                    Mon–Fri, 9am–6pm PST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM SECTION */}
          <motion.form
            variants={itemvariant}
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-400">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">Service Interested In</label>
              <select
                className="w-full mt-2 bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
              >
                <option>Select a service</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Mobile App</option>
                <option>SEO & Marketing</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400">Your Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full mt-2 bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
