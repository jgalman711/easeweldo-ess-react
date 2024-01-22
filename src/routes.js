import React from "react";

// Admin Imports
import Home from "views/ess/home"
import Profile from "views/ess/profile";
import Payrolls from "views/ess/payrolls";
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
  MdDateRange,
} from "react-icons/md";
import Leaves from "views/ess/leaves";

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
  {
    name: "Leaves",
    layout: "/ess",
    path: "leaves",
    icon: <MdDateRange className="h-6 w-6" />,
    component: <Leaves />,
  },
  {
    name: "Payrolls",
    layout: "/ess",
    path: "payrolls",
    icon: <MdWork className="h-6 w-6" />,
    component: <Payrolls />,
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
  }
];
export default routes;
