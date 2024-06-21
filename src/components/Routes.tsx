import ParticipantDetailPage from "./pages/users/ParticipantDetailPage";
import ParticipantPage from "./pages/users/ParticipantPage";
import UsersPage from "./pages/users/ParticipantPage";
import ParticipantPageAdd from "./pages/users/ParticipantPageAdd";


const AppRoutes = [
   {
     path: "/participants",
     Element: () => (
       
         <ParticipantPage />
      
     ),
  },
   {
     path: "/participants/add",
     Element: () => (
       
         <ParticipantPageAdd />
      
     ),
  },
  
   {
     path: "/participants/:id",
     Element: () => (
       
         <ParticipantDetailPage />
      
     ),
  },
  
   {
     path: "/results",
     Element: () => (
       
         <ParticipantPage />
      
     ),
  },
   {
     path: "/disciplines",
     Element: () => (
       
         <ParticipantPage />
      
     ),
  },

  // ROUTES NOT IN SIDEBAR
  {
    path: "/",
    Element: UsersPage,
  },
  {
    path: "*",
    Element: UsersPage,
  },
];

export { AppRoutes };
