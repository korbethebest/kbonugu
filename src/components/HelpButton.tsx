import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import HelpModal from "./HelpModal";

const styles = stylex.create({
  helpButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    border: 'none',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#2980b9',
      transform: 'scale(1.05)',
    },
    ':focus': {
      outline: 'none',
    },
  },
});

const HelpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        {...stylex.props(styles.helpButton)}
        onClick={openModal}
        aria-label="도움말"
      >
        ?
      </button>
      {isModalOpen && <HelpModal onClose={closeModal} />}
    </>
  );
};

export default HelpButton;
