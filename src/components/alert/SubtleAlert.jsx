import React, { useState } from 'react';
import { MdOutlineError } from 'react-icons/md';

const SubtleAlert = ({ type, extraClass, title, description }) => {

  const [isHidden, setIsHidden] = useState(false);
  const handleRemoveClick = () => {
    setIsHidden(true);
  };

  const color = `${
    type === 'success' ? 'green' :
    type === 'error' ? 'red' :
    type === 'info' ? 'yellow' : 'blue'
  }`;

  return (
    <div className={`flex items-center p-4 mb-4 text-sm text-${color}-800 rounded-lg bg-${color}-50 dark:bg-gray-800 dark:text-${color}-400 ${isHidden ? 'hidden' : ''} ${extraClass || ''}`} role="alert">
      <MdOutlineError className='w-5 h-5' />
      <div className='ml-2'>
        <span className="font-medium">{title}</span> {description}
      </div>
      <button type="button" className={`ms-auto -mx-1.5 -my-1.5 bg-${color}-50 text-${color}-500 rounded-lg focus:ring-2 focus:ring-${color}-400 p-1.5 hover:bg-${color}-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700`} aria-label="Close" onClick={handleRemoveClick}>
        <span className="sr-only">Close</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default SubtleAlert;