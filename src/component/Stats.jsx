import React from 'react'
import {motion} from 'framer-motion'
import { stats } from '../assets/assets';
const Stats = () => {

  //motion varient
  const containervarient = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemvarient = {
    hidden: { opacity: 0, y: 30, scale:0.95 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
  <div className='py-20 relative'>
     <div className='max-w-5xl mx-auto px-6'>
        <motion.div
        className='glass-card rounded-3xl p-2'
              variants={containervarient}
              initial="hidden"
              whileInView="show"
              viewport={{once:false, amount:0.3}}
        >
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            {stats.map((stat, index)=>(
              <motion.div
              key={index}
              className='p-6'
              variants={itemvarient}
              >
                 <h3 className={`text-5xl font-bold ${stat.color}`}>{stat.number}</h3>
                 <p className={`text-gray-400 uppercase tracking-widest text-sm`}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
     </div>
  </div>
  )
}

export default Stats
