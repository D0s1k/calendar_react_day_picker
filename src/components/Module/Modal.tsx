import React, { useState } from "react";
import "./Modal.scss"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <div className={`modal ${isClosing ? "closing" : ""}`}>
      <div className="overlay" onClick={handleClose} />
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;