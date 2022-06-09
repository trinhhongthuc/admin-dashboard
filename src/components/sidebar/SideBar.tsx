import ArchiveIcon from "@mui/icons-material/Archive";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LabelIcon from "@mui/icons-material/Label";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import images from "./../../assets/listImages";
import "./sidebar.scss";

const menu = [
  {
    icon: <DashboardIcon />,
    name: "Overview",
    class: "overview",
    path: "overview",
  },
  {
    icon: <LabelIcon />,
    name: "Tickers",
    class: "ticker",
    path: "ticker",
  },
  {
    icon: <LightbulbIcon />,
    name: "Ideas",
    path: "idea",
    class: "idea",
  },
  {
    icon: <PermContactCalendarIcon />,
    name: "Contacts",
    path: "contact",
    class: "contact",
  },
  {
    icon: <SupportAgentIcon />,
    name: "Agents",
    path: "agent",
    class: "agent",
  },
  {
    icon: <ArchiveIcon />,
    name: "article",
    path: "article",
    class: "article",
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [active, setActive] = useState<string>(location.pathname.slice(1));

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={images.logo} alt="logo" />
        <span> Dashboard kit</span>
      </div>

      <ul className="sidebar-menu">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`sidebar-menu__list ${
              active === item.class ? "active" : ""
            }`}
            onClick={() => {
              setActive(item.class);
              navigate(`/${item.path}`);
            }}
          >
            <span className="sidebar-menu__list-icon">{item.icon}</span>
            <span className="sidebar-menu__list-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
