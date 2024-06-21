import { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Link, NavLink, useLocation } from "react-router-dom";
import Login from "@mui/icons-material/Login";
import React from "react";

function Sidebar() {
  const location = useLocation();
  //Close sidebar on load
  const [isOpen, setIsOpen] = useState(() => {
    return false;
  });
  //Swap open state based on previous value.
  const toggle = () => {
    setIsOpen((prevIsOpen: unknown) => !prevIsOpen);
  };

   (
    <li
      id="sidebar-login"
      className={location.pathname === "/login" ? "row active" : "row"}
    >
      <Link to="/login">
        <div className="row-icon">
          <Login />
        </div>
        <div
          className="row-title"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <p>Sign In</p>
        </div>
      </Link>
    </li>
  );

  // Sidebar list and HTML.
  const sidebarList = SidebarData.map((item, key) => {
    return (
      <React.Fragment key={key}>
        {
           (
            <li
              key={key}
              id={item.title}
              className={
                location.pathname.includes(String(item.route))
                  ? "row active"
                  : "row"
              }
            >
              <Link to={String(item.route)}>
                <div className="row-icon" key={key}>
                  {" "}
                  {item.icon}{" "}
                </div>
                <div
                  className="row-title"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <p>{item.title}</p>
                </div>
              </Link>
            </li>
          )
        }
      </React.Fragment>
    );
  });

  // Render HTML.
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div
        className="Sidebar"
        style={{ width: isOpen ? "250px" : "75px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={toggle}
      >
        <ul className="SidebarList">
          <li
            id="sidebar-logo"
            className={location.pathname === "/" ? "row active" : "row"}
          > 
          {/* rip pusheen logo */}
            
          </li>

          {sidebarList}
          
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
