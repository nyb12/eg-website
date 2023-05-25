import Dashboard from "pages/front-end/Dashboard";
import Profile from "pages/admin/facilitator/Profile";
import FacilitatorView from "pages/admin/facilitator/View";
import AdminHome from "pages/admin/AdminHome";
import FacilitatorForm from "../pages/admin/FacilitatorForm";
import NotFound from "pages/NotFound";
import orientationScreen from "pages/front-end/orientation/orientationScreen";

// import { CheatSheet } from "@shiksha/common-lib";
export default [
  { path: "/admin/view/:id", component: FacilitatorView },
  { path: "/admin/facilitator-onbording", component: FacilitatorForm },
  { path: "/admin/profile", component: Profile },
  { path: "/orientation", component: orientationScreen },
  { path: "/admin", component: AdminHome },
  { path: "/", component: AdminHome },
  { path: "/orientation", component: OrientationScreen },
  // { path: "/cheatsheet", component: CheatSheet },
  { path: "*", component: NotFound },
];
