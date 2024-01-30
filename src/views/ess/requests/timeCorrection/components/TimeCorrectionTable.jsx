import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { useMemo } from "react";
import SubtleBadge from "components/badge/SubtleBadge";
import { Link } from "react-router-dom";
import { MdCreate } from "react-icons/md";
import Pagination from "components/pagination/Pagination";

const TimeCorrectionsTable = (props) => {
  const { columnsData, tableData, paginationData, onPageChange } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 100;

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div className="flex items-center justify-between pr-4">
        <div className="text-gray-600">
          {/* <span>Your Label</span> */}
        </div>
        <Link
          to="create"
          className="mb-4 text-white p-4 linear flex cursor-pointer items-center justify-center rounded-3xl font-bold transition duration-200 bg-brand-500 text-center"
        >
          <MdCreate />
        </Link>
      </div>
      <div className="mt-2 h-full overflow-x-auto xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-8 pb-[10px] text-start dark:!border-navy-700 whitespace-nowrap"
                  >
                    <p className="text-md tracking-wide font-semibold text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            { data.length > 0 ? (
              page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    let link = `edit/${encodeURIComponent(cell.value)}`;
                    if (cell.column.Header === "Status") {
                      data = (
                        <SubtleBadge
                          state={cell.value}
                          label={cell.value}
                        />
                      );
                    } else if (cell.column.Header === "Date") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          { cell?.value?.substring(0, 11) }
                        </p>
                      );
                    } else if (cell.column.Header === "Action") {
                      data = (
                        <Link
                          className="text-md flex items-center p-3 font-semibold underline text-blue-500 hover:text-blue-600 dark:text-white"
                          to={link}
                        >
                          Edit
                        </Link>
                      );
                    } else {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[18px] pr-2 sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
              }) 
            ) : ( 
              <tr>
                <td
                  colSpan={columns.length}
                  className="pt-[24px] pb-[18px] text-md text-center text-gray-600"
                >
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {paginationData.total > paginationData.per_page && (
        <Pagination
          onPageChange={onPageChange}
          paginationData={paginationData}
        />
      )}
    </Card>
  );
};

export default TimeCorrectionsTable;
