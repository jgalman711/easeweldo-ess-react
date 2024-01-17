import TimesheetTable from "../tables/components/TimesheetTable";
import tableDataComplex from "../home/variables/tableDataComplex.json";
import { columnsDataLeaves } from "../home/variables/columnsData";

const Timesheet = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 grid grid-cols-1">
        <TimesheetTable
          columnsData={columnsDataLeaves}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Timesheet;
