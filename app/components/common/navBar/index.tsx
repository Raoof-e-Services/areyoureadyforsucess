// components/Navbar.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
const Navbar: React.FC = () => {
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0 } },
  };

  const linkVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <nav style={navbarStyles}>
      <motion.div
        style={logoStyles}
        initial="initial"
        animate="animate"
        variants={logoVariants}
      >
        Logo
      </motion.div>
      <div style={linksContainerStyles}>
        <motion.a
          style={linkStyles}
          href="/"
          initial="initial"
          animate="animate"
          variants={linkVariants}
        >
          Link 1
        </motion.a>
        <motion.a
          style={linkStyles}
          href="/contact"
          initial="initial"
          animate="animate"
          variants={linkVariants}
        >
          Link 2
        </motion.a>
      </div>
    </nav>
  );
};

const navbarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#333',
  color: 'white',
};

const logoStyles = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const linksContainerStyles = {
  display: 'flex',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  marginLeft: '1rem',
};

export default Navbar;
