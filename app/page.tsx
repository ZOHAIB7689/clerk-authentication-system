"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, Globe } from 'lucide-react';

const AnimatedHomepage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-8 py-4 flex justify-between items-center shadow-sm bg-white"
      >
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-indigo-600"
        >
          MyAwesomeSite
        </motion.h1>
        <div className="space-x-4">
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="text-indigo-600 hover:text-indigo-800"
          >
            Home
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="text-indigo-600 hover:text-indigo-800"
          >
            About
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-grow flex items-center justify-center px-8"
      >
        <div className="max-w-4xl text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-extrabold text-gray-800 mb-6"
          >
            Transform Your Ideas into Digital Reality
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8"
          >
            Innovative solutions that drive your business forward
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white py-16 px-8"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Rocket, 
              title: 'Fast Performance', 
              description: 'Lightning-quick solutions that keep you ahead of the curve.' 
            },
            { 
              icon: Code, 
              title: 'Custom Development', 
              description: 'Tailored software that fits your unique business needs.' 
            },
            { 
              icon: Globe, 
              title: 'Global Reach', 
              description: 'Expand your digital presence across borders.' 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <feature.icon className="mx-auto mb-4 text-indigo-600" size={48} />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-indigo-600 text-white py-6 text-center"
      >
        <p>© 2024 MyAwesomeSite. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default AnimatedHomepage;