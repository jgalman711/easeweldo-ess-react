import React from 'react';

function SelectField(props) {
  const { label, value, options, onChange, id, disabled, state, extra } = props;

  return (
    <div className={`relative ${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ml-3 font-bold`}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`mt-2 h-12 w-full px-3 py-2 border rounded-xl bg-white/0 text-sm outline-none appearance-none cursor-pointer ${
            disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
              ? "border-red-500 text-red-500 dark:!border-red-400 dark:!text-red-400"
              : state === "success"
              ? "border-green-500 text-green-500 dark:!border-green-400 dark:!text-green-400"
              : "border-gray-200 dark:!border-white/10 dark:text-white"
          }`}
        >
          <option>Select Type</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectField;
