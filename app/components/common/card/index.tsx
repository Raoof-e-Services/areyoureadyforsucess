"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardData {
  heading: string;
  paragraph: string;
}

const cardData: CardData[] = [
  {
    heading: 'Heading 1',
    paragraph: 'This is the first paragraph.',
  },
  {
    heading: 'Heading 2',
    paragraph: 'This is the second paragraph.',
  },
  // Add more data as needed
];

const cardStyle: React.CSSProperties = {
  width: '300px',
  border: '1px solid #ccc',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  margin: '20px auto',
  backgroundColor: '#fff',
  textAlign: 'center',
  position: 'relative', // To allow heading animation outside the card
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#555',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  margin: '5px',
  cursor: 'pointer',
};

const CardComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const currentCard = cardData[currentIndex];

  return (
    <div style={cardStyle}>
      <AnimatePresence mode="wait">
        {/* Apply animation to the heading */}
        <motion.div
          key={currentCard.heading} // Ensure a key change triggers animation
          initial={{ opacity: 0, y: '100vh' }} // Start from below the viewport
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and its default position
          exit={{ opacity: 0, y: '-100vh' }} // Exit animation (heading moves above viewport)
          transition={{ type: 'spring', stiffness: 120 }}
          style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '10px',
            position: 'absolute', // Position absolutely within the card
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Center horizontally
            width: '100%', // Take full width of the card
          }}
        >
          {currentCard.heading}
        </motion.div>
      </AnimatePresence>
      {/* The paragraph and buttons remain static */}
      <div style={paragraphStyle}>{currentCard.paragraph}</div>
      <div>
        <button style={buttonStyle} onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
