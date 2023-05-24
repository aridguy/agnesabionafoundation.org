import React from 'react';

const Contact = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Contact Us</h2>
        {/* Add your contact form here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Contact;