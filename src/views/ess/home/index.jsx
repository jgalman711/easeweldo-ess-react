import Widget from "components/widget/Widget";
import Clock from "./components/Clock";
import Week from "./components/Week";
import { MdBarChart } from "react-icons/md";
import { columnsDataLeaves } from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";
import LeavesTable from "views/ess/tables/components/LeavesTable";

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-ful mt-3 flex h-fit flex-col gap-4 lg:grid lg:grid-cols-12">
        <div className="col-span-12 sm:col-span-5 3xl:col-span-4 lg:!mb-0">
          <Clock />
        </div>
        <div className="col-span-12 sm:col-span-7 3xl:col-span-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2 3xl:grid-cols-3">
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"Work Today"}
              subtitle={"08:00 - 17:00"}
              extraClass="col-span-1 lg:col-span-2 3xl:col-span-1"
            />
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"Clock In"}
              subtitle={"07:49:40"}
            />
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"Clock Out"}
              subtitle={"--:--:--"}
            />
          </div>
          <div className="grid mt-4">
            <Week />
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1">
        <LeavesTable
          columnsData={columnsDataLeaves}
          tableData={tableDataComplex}
        />
      </div>
    </div>
  );
};

export default Home;
