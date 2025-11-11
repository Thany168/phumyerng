import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
