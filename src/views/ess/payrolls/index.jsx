import tableDataComplex from "../home/variables/tableDataComplex.json";
import { columnsDataLeaves } from "../home/variables/columnsData";
import SimpleTable from "components/table/SimpleTable";

const Payrolls = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 grid grid-cols-1">
        <SimpleTable
          columnsData={columnsDataLeaves}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Payrolls;
