import React, { useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';

const SubtleAlert = ({ type, extraClass, title, description }) => {

  const [isHidden, setIsHidden] = useState(false);
  const handleRemoveClick = () => {
    setIsHidden(true);
  };

  const alertClasses = `flex justify-between h-[72px] w-full items-center py-[6px] pl-[17px] pr-[6px] dark:!bg-navy-700 rounded-lg ${isHidden ? 'hidden' : ''} ${extraClass || ''} ${
    type === 'success' ? 'bg-green-200' :
    type === 'error' ? 'bg-red-200' :
    type === 'info' ? 'bg-blue-200' : ''
  }`;
  return (
    <div className={ alertClasses }>
      <div className="flex h-full w-full gap-2 pt-[6px] justify-start">
        <MdCheckCircle 
          className="text-green-500 mt-1"
          size={20}
        />
        <h5 className="text-base text-navy-700 dark:!text-white flex flex-col">
          <span className="pr-[5px] font-bold text-navy-700 dark:!text-white">{ title }</span>
          { description }
        </h5>
      </div>
      <div className="mb-[26px] flex rounded-md hover:bg-white/20 text-navy-700 dark:text-white h-9 w-9 cursor-pointer items-center justify-center text-xl font-bold" onClick={handleRemoveClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
    </div>
  );
};

export default SubtleAlert;