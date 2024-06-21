import DisciplinesDetailPage from "./pages/disciplines/DisciplinesDetailPage";
import DisciplinesPage from "./pages/disciplines/DisciplinesPage";
import DisciplinesPageAdd from "./pages/disciplines/DisciplinesPageAdd";
import ParticipantDetailPage from "./pages/partiscipants/ParticipantDetailPage";
import ParticipantPage from "./pages/partiscipants/ParticipantPage";
import ParticipantPageAdd from "./pages/partiscipants/ParticipantPageAdd";
import ResultsDetailPage from "./pages/results/ResultsDetailPage";
import ResultsPage from "./pages/results/ResultsPage";
import ResultsPageAdd from "./pages/results/ResultsPageAdd";


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
       
         <ResultsPage />
      
     ),
  },
   {
     path: "/results/add",
     Element: () => (
       
         <ResultsPageAdd />
      
     ),
  },
  
   {
     path: "/results/:id",
     Element: () => (
       
         <ResultsDetailPage />
      
     ),
  },
   {
     path: "/disciplines",
     Element: () => (
       
         <DisciplinesPage />
      
     ),
  },
   {
     path: "/disciplines/add",
     Element: () => (
       
         <DisciplinesPageAdd />
      
     ),
  },
  
   {
     path: "/disciplines/:id",
     Element: () => (
       
         <DisciplinesDetailPage />
      
     ),
  },
  
  
  // ROUTES NOT IN SIDEBAR
  {
    path: "/",
    Element: ParticipantPage,
  },
  {
    path: "*",
    Element: ParticipantPage,
  },
];

export { AppRoutes };
