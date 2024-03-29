import React from "react";

// Admin Imports
import Home from "views/ess/home"
import Profile from "views/ess/profile";
import Payrolls from "views/ess/payrolls";
import PayrollDetails from "views/ess/payrollDetails";
import Timesheet from "views/ess/timesheet";
import SignIn from "views/auth/SignIn";
import ForgotPassword from "views/auth/ForgotPassword";

// Icon Imports
import {
  MdHome,
  MdPerson,
  MdLock,
  MdWork,
  MdAccessTimeFilled,
  MdQrCode,
  MdRequestPage,
  MdMoreTime,
  MdDateRange,
  // MdDateRange,
} from "react-icons/md";
import QrGenerate from "views/ess/qrGenerate";
import { IoIosQrScanner } from "react-icons/io";
import QrScan from "views/ess/qrScan";
import TimeCorrectionIndex from "views/ess/requests/timeCorrection";
import TimeCorrectionCreate from "views/ess/requests/timeCorrection/create";
import TimeCorrectionEdit from "views/ess/requests/timeCorrection/edit";
import LeavesIndex from "views/ess/requests/leaves";
import LeavesCreate from "views/ess/requests/leaves/create";
import LeavesEdit from "views/ess/requests/leaves/edit";

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
    name: "Time Records",
    layout: "/ess",
    path: "time-records",
    icon: <MdAccessTimeFilled className="h-6 w-6" />,
    component: <Timesheet />,
  },
  {
    name: "Time Corrections",
    path: "time-corrections",
    icon: <MdMoreTime className="h-6 w-6" />,
    layout: "/ess",
    sidebar: true,
    component: <TimeCorrectionIndex />,
  },
  {
    name: "Time Corrections",
    layout: "/ess",
    path: "time-corrections/:correctionId/edit",
    icon: <MdWork className="h-6 w-6" />,
    component: <TimeCorrectionEdit />,
    sidebar: false,
  },
  {
    name: "Time Corrections",
    path: "time-corrections/create",
    icon: <MdRequestPage className="h-6 w-6" />,
    layout: "/ess",
    sidebar: false,
    component: <TimeCorrectionCreate />,
  },
  {
    name: "Leaves",
    layout: "/ess",
    path: "leaves",
    icon: <MdDateRange className="h-6 w-6" />,
    component: <LeavesIndex />,
  },
  {
    name: "Create Leave",
    path: "leaves/create",
    icon: <MdDateRange className="h-6 w-6" />,
    layout: "/ess",
    sidebar: false,
    component: <LeavesCreate />,
  },
  {
    name: "Edit Leaves",
    layout: "/ess",
    path: "leaves/:leaveId/edit",
    icon: <MdDateRange className="h-6 w-6" />,
    component: <LeavesEdit />,
    sidebar: false,
  },
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
  }
];
export default routes;
