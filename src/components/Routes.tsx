import UsersPage from "./pages/users/UsersPage";


const AppRoutes = [
   {
     path: "/my-page",
     Element: () => (
       
         <UsersPage />
      
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
