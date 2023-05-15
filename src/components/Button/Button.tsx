import React, { useState } from "react";
import Modal from "../Module/Modal";
import Calendar from "../Calendar/Calendar";
import "./css/Button.css"

const ModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="button">Открыть</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Calendar/>
        <button onClick={handleCloseModal} className="button">Закрыть</button>
      </Modal>
    </div>
  );
};

export default ModalButton