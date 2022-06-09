import React from "react";
import { useSelector } from "react-redux";
import Routes from "../../routes/Routes";
import SlideBar from "../sidebar/SideBar";
import TopNav from "../topnav/TopNav";
import "./layout.scss";

const Layout = () => {
  const theme = useSelector((state: any) => state.themeReducer);

  return (
    <div className={`admin-dashboard ${theme.them} ${theme.color}`}>
      <SlideBar />
      <div className="main">
        <div className="main-topnav">
          <TopNav />
        </div>
        <div className="main-content">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default Layout;
