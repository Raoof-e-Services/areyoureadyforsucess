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
    paragraphUrdu: 'This is the first Urdu paragraph.This is the first Urdu paragraph.This is the first Urdu paragraph.This is the first Urdu paragraph.This is the first Urdu paragraph.This is the first Urdu paragraph.This is the first Urdu paragraph.This is the first Urdu paragraph.',
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
  height:"70vh",
  border: '1px solid #ccc',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  margin: '20px auto',
  backgroundColor: '#fff',
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 flexDirection:"column"
};

const paragraphStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#555',
  width:"100%"
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
          transition={{ type: 'spring', stiffness: 120 }}
          style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '10px',
            transform: 'translateX(-50%)', // Center horizontally
            width: '100%', // Take full width of the card
            
          }}
        >
          <div style={{textAlign:"left"}}>
          {currentCard.headingEnglish}
          </div>
          <div style={{textAlign:"right"}}>
          {currentCard.headingUrdu}
          </div>
        </motion.div>
      </AnimatePresence>
      {/* The paragraph and buttons remain static */}
      
      <div style={{...paragraphStyle,textAlign:"left"}}>
        
        {currentCard.paragraphUrdu}
        
      </div>
      <div style={{...paragraphStyle,textAlign:"right"}}>
        {currentCard.paragraphEnglish}
        
      </div>
      
      <div>
        <button style={buttonStyle} onClick={handlePrevClick}>
          Previous
        </button>
        <button style={buttonStyle} onClick={handleNextClick}>
            Next
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
