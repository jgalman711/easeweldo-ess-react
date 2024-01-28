import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Pagination = ({
  onPageChange,
  paginationData
}) => {
  return (
    <div className="flex items-center justify-between p-4 pl-0 border-t border-gray-200 dark:!border-navy-700">
      <p className="text-gray-600">Showing {paginationData.from} to {paginationData.to} of {paginationData.total} entries</p>
      <div className="flex space-x-2">
        {paginationData?.links?.map((link, index, array) => (
          <button
            key={link.label}
            type="button"
            onClick={() => onPageChange(link.url)}
            className={`px-3 py-2 border rounded-3xl cursor-pointer focus:outline-none w-10 h-10 ${
              link.active ? 'bg-brand-500 text-white' : ''
            }`}
          >
            {index === 0 ? (
              <MdChevronLeft />
            ) : index === array.length - 1 ? (
              <MdChevronRight />
            ) : link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
