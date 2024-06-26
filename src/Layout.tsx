import { useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import "./Layout.css";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const BlankBackLocations = [
    "/participant-detail"
  ];

  const useIsBlankBackPage = (BlankBackLocations: string[]) => {
    const [isBlankBackPage, setIsBlankBackPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
      const isBlankBack = BlankBackLocations.some((route) =>
        location.pathname.startsWith(route)
      );
      setIsBlankBackPage(isBlankBack);
    }, [BlankBackLocations, location.pathname]);

    return isBlankBackPage;
  };

  const isBlankBackPage = useIsBlankBackPage(BlankBackLocations);

  return (
    <div className="app-layout">
      <Sidebar />
      <main
        className={`page-content ${
          isBlankBackPage ? "hidden-background" : ""
        } `}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
