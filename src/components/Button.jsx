import React from "react";
import "../css/Button.css";

const Button = ({ children, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="button">
      {children}
    </button>
  );
};

export default Button;
