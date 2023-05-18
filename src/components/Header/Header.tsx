import React, { ReactNode } from "react";
import "./css/Header.css"

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="header">
      <h4>Календарь</h4>
      {children}
    </div>
  );
}

export default Header;