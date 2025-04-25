// src/components/ui/Button.jsx
import React from "react";

export function Button({ children, className = "", type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
