"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardData {
  headingUrdu: string;
  headingEnglish: string;
  paragraphUrdu: string;
  paragraphEnglish: string;
}

const cardData: CardData[] = [
  {
    headingUrdu: 'Urdu Heading 1',
    headingEnglish: 'English Heading 1',
    paragraphUrdu: 'This is the first Urdu paragraph.',
    paragraphEnglish: 'This is the first English paragraph.',
  },
  {
    headingUrdu: 'Urdu Heading 2',
    headingEnglish: 'English Heading 2',
    paragraphUrdu: 'This is the second Urdu paragraph.',
    paragraphEnglish: 'This is the second English paragraph.',
  },
  // Add more data as needed
];

const cardStyle: React.CSSProperties = {
  width: '80vw',
  height: "70vh",
  border: '1px solid #ccc',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  margin: '20px auto',
  backgroundColor: '#fff',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#196756',
  width: "100%",
  backgroundColor:"orange"
  
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  margin: '5px',
  cursor: 'pointer',
};
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }

};
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};
const CardComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const currentCard = cardData[currentIndex];

  return (
    <div style={cardStyle}>
      <AnimatePresence mode="wait">
        {/* Apply animation to the heading */}
        <motion.div
          key={currentCard.headingEnglish} // Ensure a key change triggers animation
          initial={{ opacity: 0, y: '100vh' }} // Start from below the viewport
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and its default position
          exit={{ opacity: 0, y: '-100vh' }} // Exit animation (heading moves above viewport)
          transition={{ type: "spring", stiffness: 180 }}
          style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '10px',
            width: '100%', // Take full width of the card

          }}
        >
          <div style={{ textAlign: "left" }}>
            {currentCard.headingEnglish}
          </div>
          <div style={{ textAlign: "right" }}>
            {currentCard.headingUrdu}
          </div>
        </motion.div>
      </AnimatePresence>
      {/* The paragraph and buttons remain static */}

      <motion.div initial="hidden"
        animate="visible" key={currentCard.paragraphEnglish} variants={container} style={{ ...paragraphStyle, textAlign: "left" }}>

       <motion.h3  variants={item}> {currentCard.paragraphEnglish} </motion.h3>

      </motion.div>
      <motion.div initial="hidden"
        animate="visible" key={currentCard.paragraphUrdu} variants={container} style={{ ...paragraphStyle, textAlign: "right", backgroundColor:"red" }}>

       <motion.h3 variants={item}> {currentCard.paragraphUrdu} </motion.h3>

      </motion.div>
      <div>
        <motion.button key={currentCard.paragraphUrdu} variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} style={buttonStyle} onClick={handlePrevClick}>
          Previous
        </motion.button>

        <motion.button key={currentCard.paragraphEnglish} variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }} style={buttonStyle} onClick={handleNextClick}>
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default CardComponent;
