import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ConstructionIcon from "@mui/icons-material/Construction";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AssignmentIcon from "@mui/icons-material/Assignment";

// NOTE: Sidebar data is loaded in sequence together with Routes.tsx ("../Routes.tsx").
// This means that the order of the routes and the order of the sidebar items HAS to be the same - otherwise the items will route to other routes when clicked on...
// If you want to change the order, you will have to do it both in the Routes.tsx and in the SidebarData.

export const SidebarData = [
  
  {
    title: "Participants",
    role: [],
    icon: <AccountCircleIcon />,
    route: "/participants",
  },
  {
    title: "Results",
    role: [],
    icon: <AssignmentIcon />,
    route: "/results",
  },
  {
    title: "Disciplines",
    role: [],
    icon: <ConstructionIcon />,
    route: "/disciplines",
  },
 
];
