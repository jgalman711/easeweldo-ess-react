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
import { MdOutlineArrowForward } from "react-icons/md";

const PayrollsTable = (props) => {
  const { columnsData, tableData, title, viewAll } = props;

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
  initialState.pageSize = 5;

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between">
        {title && (
          <div className="mb-6 text-xl font-bold text-navy-700 dark:text-white">
            {title}
          </div>
        )}
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
                    let payrollLink = `${encodeURIComponent(cell.value)}`;
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
                          to={payrollLink}
                          className="text-sm font-bold underline text-blue-500 hover:text-blue-600 dark:text-white"
                        >
                          View
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
      {viewAll && (
        <div className="mt-1 flex items-center justify-end text-brand-500">
          <Link to="/ess/payrolls" className="flex items-center p-3 font-semibold">
            View All
            <MdOutlineArrowForward className="mx-2 text-xl" />
          </Link>
        </div>
      )}
    </Card>
  );
};

export default PayrollsTable;
