import React from "react";

interface ButtonProps {
  onSave: () => void;
  className:string;
}

const SaveButton: React.FC<ButtonProps> = ({ onSave,className }) => {
  return (
    <button className="save_button" onClick={onSave}>
      ОК
    </button>
  );
};

export default SaveButton;