import LeavesTable from "../tables/components/LeavesTable";
import tableDataComplex from "../home/variables/tableDataComplex.json";
import { columnsDataLeaves } from "../home/variables/columnsData";

const Leaves = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 grid grid-cols-1">
        <LeavesTable
          columnsData={columnsDataLeaves}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Leaves;
