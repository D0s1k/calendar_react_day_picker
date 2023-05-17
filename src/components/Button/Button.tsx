import React, { useState } from "react";
import Modal from "../Module/Modal";
import Header from "../Header/Header";
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

  const handleSaveModal = () =>{
    setIsModalOpen(false)
  }

  return (
    <div className="main">
      <button className="button" onClick={handleOpenModal} >Открыть</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Header/>
         <button className="button" onClick={handleCloseModal} >Закрыть</button>
        <Calendar/>
        <button className="save_button" onClick={handleSaveModal}>ОК</button>
      </Modal>
    </div>
  );
};

export default ModalButton