import SimpleTable from "components/table/SimpleTable";
import { columnsDataLeaves } from "../variables/columnsData";
import tableDataComplex from "../variables/tableDataComplex.json";

const PayrollsTable = () => {
  return (
    <SimpleTable
      columnsData={columnsDataLeaves}
      tableData={tableDataComplex}
      title="Payrolls"
    />
  );
};

export default PayrollsTable;
