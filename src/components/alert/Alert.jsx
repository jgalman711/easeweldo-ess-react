import React from 'react';

const Alert = ({ type, title, description, extraClass }) => {
  const alertClasses = `p-3 rounded-md ${extraClass || ''} ${
    type === 'success' ? 'bg-green-500 text-white' :
    type === 'error' ? 'bg-red-500 text-white' :
    type === 'info' ? 'bg-blue-500 text-white' : ''
  }`;

  return (
    <div className={alertClasses}>
      <div className='flex h-full w-full items-center gap-2 justify-start'>
        <h5 className="text-base text-white">
          <span className="pr-[5px] font-bold">{ title }</span> { description }
        </h5>
      </div>
    </div>
  );
};

export default Alert;