import React from 'react';
import { MdOutlineError } from 'react-icons/md';

const SubtleMultiAlert = ({ type, extraClass, title, description }) => {
  const color = `${
    type === 'success' ? 'green' :
    type === 'error' ? 'red' :
    type === 'info' ? 'yellow' : 'blue'
  }`;

  return (
    <div className={`flex justify-between w-full items-center py-[6px] pl-[17px] pr-[6px] bg-${color}-100 dark:!bg-navy-700 rounded-lg ${extraClass || ''}`}>
      <div className="flex h-full w-full gap-2 py-[6px] justify-start">
        <MdOutlineError className={`w-5 h-5 text-${color}-500 dark:text-white`}/>
        <h5 className="text-base text-navy-700 dark:!text-white flex flex-col">
          <span className="pr-[5px] font-bold text-navy-700 dark:!text-white">{title}</span>
          {description && typeof description === 'object' && (
            Object.keys(description).map((key) => (
              <div key={key}>
                <ul>
                  {description[key].map((errorMessage, index) => (
                    <li key={index} className="text-sm">
                      {errorMessage}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </h5>
      </div>
    </div>
  );
};

export default SubtleMultiAlert;