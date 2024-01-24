import React from "react";

const Button = ({ label, status, id, onClick, disabled, extra, isLoading, type }) => {
  let buttonClass = `text-white px-4 py-3 linear flex cursor-pointer items-center justify-center disabled rounded-xl font-bold transition duration-200 ${extra || ''}`;

  if (disabled) {
    buttonClass += " bg-green-400 disabled cursor-default";
  }else if (status === "positive") {
    buttonClass += " bg-brand-500 hover:bg-brand-600 active:bg-brand-700";
  } else if (status === "negative") {
    buttonClass += " bg-red-500 hover:bg-red-600 active:bg-red-700";
  } else {
    buttonClass += " bg-blue-500 hover:bg-blue-600 active:bg-blue-700";
  }

  return (
    <button
      type={type}
      className={buttonClass}
      id={id}
      onClick={onClick}
      disabled={isLoading} // Disable the button when isLoading is true
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {label}
    </button>
  );
};

export default Button;
