import PayrollsTable from "../tables/components/PayrollsTable";
import tableDataComplex from "../home/variables/tableDataComplex.json";
import { columnsDataLeaves } from "../home/variables/columnsData";

const Payrolls = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 grid grid-cols-1">
        <PayrollsTable
          columnsData={columnsDataLeaves}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Payrolls;
