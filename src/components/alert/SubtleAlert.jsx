import React from 'react';
import { MdOutlineError } from 'react-icons/md';

const SubtleAlert = ({ type, extraClass, title, description }) => {
  const color = `${
    type === 'success' ? 'green' :
    type === 'error' ? 'red' :
    type === 'info' ? 'yellow' : 'blue'
  }`;

  return (
    <div className={`flex items-center p-4 mb-4 text-sm text-${color}-500 rounded-lg bg-${color}-100 dark:bg-gray-800 dark:text-white ${extraClass || ''}`} role="alert">
      <MdOutlineError className={`w-5 h-5 text-${color}-500 dark:text-white`}/>
      <div className='ml-2'>
        <span className="font-medium">{title}</span> {description}
      </div>
    </div>
  );
};

export default SubtleAlert;