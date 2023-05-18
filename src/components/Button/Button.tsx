import React, { useState } from "react";
import Modal from "../Module/Modal";
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import "./css/Button.css";
import { DateRange, SelectRangeEventHandler } from "react-day-picker";
import SaveButton from "../SaveButton/SaveButton";

const ModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState<DateRange | undefined>(undefined);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectRange: SelectRangeEventHandler = (range) => {
    setSelectedDays(range);
  };

  return (
    <div className="main">
      <button className="button" onClick={handleOpenModal}>
        Статус
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Header>
          <button className="close_button" onClick={handleCloseModal} />
        </Header>
        <Calendar selectedDays={selectedDays} onSelect={handleSelectRange} />
        <SaveButton className="save_button" onSave={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default ModalButton;