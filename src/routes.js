import React from "react";

// Admin Imports
import Home from "views/ess/home"
import Profile from "views/ess/profile";
import Payrolls from "views/ess/payrolls";
import PayrollDetails from "views/ess/payrollDetails";
import Timesheet from "views/ess/timesheet";
import SignIn from "views/auth/SignIn";
import ForgotPassword from "views/auth/ForgotPassword";
// import Leaves from "views/ess/leaves";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdLock,
  MdWork,
  MdAccessTimeFilled,
  MdQrCode,
  // MdDateRange,
} from "react-icons/md";
import QrGenerate from "views/ess/qrGenerate";
import { IoIosQrScanner } from "react-icons/io";
import QrScan from "views/ess/qrScan";

const routes = [
  {
    name: "Home",
    layout: "/ess",
    path: "home",
    icon: <MdHome className="h-6 w-6" />,
    component: <Home />,
  },
  {
    name: "Profile",
    layout: "/ess",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Timesheet",
    layout: "/ess",
    path: "timesheet",
    icon: <MdAccessTimeFilled className="h-6 w-6" />,
    component: <Timesheet />,
  },
  // {
  //   name: "Leaves",
  //   layout: "/ess",
  //   path: "leaves",
  //   icon: <MdDateRange className="h-6 w-6" />,
  //   component: <Leaves />,
  // },
  {
    name: "Payrolls",
    layout: "/ess",
    path: "payrolls",
    icon: <MdWork className="h-6 w-6" />,
    component: <Payrolls />,
  },
  {
    name: "Generate QR",
    layout: "/ess",
    path: "generate-qr",
    icon: <MdQrCode className="h-6 w-6" />,
    component: <QrGenerate />,
  },
  {
    name: "Scan QR",
    layout: "/ess",
    path: "scan-qr",
    icon: <IoIosQrScanner className="h-6 w-6" />,
    component: <QrScan />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "login",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
    sidebar: false
  },
  {
    name: "Forgot Password",
    layout: "/auth",
    path: "forgot-password",
    icon: <MdLock className="h-6 w-6" />,
    component: <ForgotPassword />,
    sidebar: false
  },
  {
    name: "Payroll Details",
    layout: "/ess",
    path: "payrolls/:payrollId", // Use a dynamic parameter to capture payroll ID
    icon: <MdWork className="h-6 w-6" />,
    component: <PayrollDetails />,
    sidebar: false,
  },
];
export default routes;
