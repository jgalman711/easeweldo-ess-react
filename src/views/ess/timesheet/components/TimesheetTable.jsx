import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { useMemo } from "react";
import SubtleBadge from "components/badge/SubtleBadge";

const TimesheetTable = (props) => {
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
  initialState.pageSize = 100;

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between">
        {title && (
          <div className="mb-6 text-xl font-bold text-navy-700 dark:text-white">
            {title}
          </div>
        )}
      </div>
      <div className="mt-2 h-full overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
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
                    if (cell.column.Header === "Status") {
                      cell.value = cell.value === "missed-clock-out" || cell.value === "missed-clock-in" ? "missed" : cell.value;
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
                    } else if (cell.column.Header === "Clock In" || cell.column.Header === "Clock Out") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          { cell?.value ? cell?.value : "--:--:--"}
                        </p>
                      );
                    } else if (cell.column.Header === "Source") {
                      data = (
                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                          { cell?.value || "Default"}
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
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
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

export default TimesheetTable;
