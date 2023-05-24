import React, { useState } from 'react';
import Contact from './Contact';


const ContactContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Contact isOpen={isOpen} onClose={closeModal}>
        {/* Modal Content */}
      </Contact>
    </div>
  );
};

export default ContactContainer;
