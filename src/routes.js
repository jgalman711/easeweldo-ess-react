import React from "react";

// Admin Imports
import Home from "views/ess/home"
import Profile from "views/ess/profile";
import Payrolls from "views/ess/payrolls";
import Timesheet from "views/ess/timesheet";

// import DataTables from "views/admin/tables";
// import MainDashboard from "views/admin/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  // MdBarChart,
  MdPerson,
  MdLock,
  MdWork,
  MdOutlineCalendarToday,
  MdAccessTime,
} from "react-icons/md";
import Leaves from "views/ess/leaves";

const routes = [
  // {
  //   name: "Main Dashboard",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <MainDashboard />,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  {
    name: "Home",
    layout: "/ess",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Timesheet",
    layout: "/ess",
    path: "timesheet",
    icon: <MdAccessTime className="h-6 w-6" />,
    component: <Timesheet />,
  },
  {
    name: "Payrolls",
    layout: "/ess",
    path: "payrolls",
    icon: <MdWork className="h-6 w-6" />,
    component: <Payrolls />,
  },
  {
    name: "Leaves",
    layout: "/ess",
    path: "leaves",
    icon: <MdOutlineCalendarToday className="h-6 w-6" />,
    component: <Leaves />,
  },
  {
    name: "Profile",
    layout: "/ess",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  }
];
export default routes;
