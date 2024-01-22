import React from "react";

const Button = ({ label, status, id, onClick, extra}) => {
  let buttonClass = `px-4 py-3 linear flex cursor-pointer items-center justify-center rounded-xl font-bold transition duration-200 ${extra || ''}`;

  if (status === "positive") {
    buttonClass += " bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white";
  } else if (status === "negative") {
    buttonClass += " bg-red-500 hover:bg-red-600 active:bg-red-700 text-white";
  } else {
    buttonClass += " bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white";
  }

  return (
    <button className={buttonClass} id={id} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
