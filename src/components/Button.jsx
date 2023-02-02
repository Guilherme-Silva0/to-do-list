import React from "react";
import "../css/Button.css";

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
