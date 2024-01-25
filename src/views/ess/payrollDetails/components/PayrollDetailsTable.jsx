import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { useMemo } from "react";

const PayrollDetailsTable = (props) => {
  const { columnsData, tableData, title } = props;

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
                   className={`border-b border-gray-200 pb-[10px] ${
                     column.render('Header') === 'Amount' ? 'text-right' : 'text-start pr-8'
                   } dark:!border-navy-700`}
                 >
                   <p className="text-md tracking-wide font-semibold text-gray-600">
                     {column.render('Header')}
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
                    if (cell.column.Header === "Label") {
                      data = (
                        <p className="text-sm font-bold text-right text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "Amount") {
                      data = (
                        <p className="text-sm font-bold text-right text-navy-700 dark:text-white">
                          {cell.value}
                        </p>
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
                        className="py-1.5 sm:text-[14px]"
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
    </Card>
  );
};

export default PayrollDetailsTable;
