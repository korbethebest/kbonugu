import * as styleX from '@stylexjs/stylex';
import { useState } from 'react';

import HelpModal from "./HelpModal";
import { buttonStyles } from './styles';

const HelpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        {...styleX.props(buttonStyles.base)}
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
