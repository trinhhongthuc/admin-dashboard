import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createAction } from "../../redux/action/themeAction";
import images from "./../../assets/listImages";
import "./topnav.scss";

const TopNav = () => {
  const refInfo = useRef<HTMLUListElement | null>(null);
  const refNotify = useRef<HTMLUListElement | null>(null);
  const [colorActive, setColorActive] = useState<string>("");

  const dispatch = useDispatch();

  const handleChangeClass = (classActive: string) => {
    const classInfo = refInfo.current?.classList;
    const classNotify = refNotify.current?.classList;

    if (classActive === "info") {
      if (classInfo?.contains("active")) classInfo?.remove("active");
      else {
        classInfo?.add("active");
        classNotify?.remove("active");
      }
    } else {
      if (classNotify?.contains("active")) classNotify?.remove("active");
      else {
        classNotify?.add("active");
        classInfo?.remove("active");
      }
    }
  };

  return (
    <div className="top-nav">
      <div className="top-nav__search">
        <input type="text" name="" placeholder="Search here..." id="" />

        <SearchIcon />
      </div>

      <div className="top-nav__info">
        <div className="avatar" onClick={() => handleChangeClass("info")}>
          <img src={images.avatar} alt="avatar" />
          <span>Hồng Thức</span>

          <ul
            className="top-nav__dropdown top-nav__info-dropdown"
            ref={refInfo}
          >
            <li>
              <AccountBoxIcon />
              <span>Profile</span>
            </li>
            <li>
              <SettingsIcon />
              <span>Setting</span>
            </li>

            <li>
              <LogoutIcon />
              <span>Logout</span>
            </li>
          </ul>
        </div>

        <div className="notify" onClick={() => handleChangeClass("notify")}>
          <NotificationsNoneIcon />
          <span>32</span>

          <ul
            className="top-nav__dropdown top-nav__notify-dropdown"
            ref={refNotify}
          >
            <li>
              <WarningAmberIcon />
              <span>Curabitur id eros quis nunc suscipit blandit</span>
            </li>
            <li>
              <ShoppingCartIcon />
              <span>
                Duis malesuada justo eu sapien elementum, in semper diam posuere
              </span>
            </li>

            <li>
              <WarningAmberIcon />
              <span>
                Donec at nisi sit amet tortor commodo porttitor pretium a erat
              </span>
            </li>

            <li>
              <ShoppingCartIcon />
              <span>In gravida mauris et nisi</span>
            </li>

            <li>
              <WarningAmberIcon />
              <span>Curabitur id eros quis nunc suscipit blandit</span>
            </li>

            <p>view All</p>
          </ul>
        </div>

        <div className="color" onClick={() => setColorActive("color")}>
          <ColorLensIcon />
        </div>
        <div
          className={`drop-right__wrapper ${
            !!colorActive && colorActive === "color" ? "active" : ""
          }`}
        >
          <div className="drop-right__wrapper-close">
            <p>Theme setting</p>
            <CloseIcon onClick={() => setColorActive("")} />
          </div>
          <h4 className="drop-right__wrapper-title">Choose mode</h4>
          <ul className="drop-right__wrapper-list">
            <li>
              {" "}
              <span
                className="drop-right__wrapper-list-color drop-right__wrapper-list-color-light"
                onClick={() => {
                  dispatch(createAction("SET_THEME", "light"));
                }}
              >
                <CheckIcon />
              </span>
              <span className="drop-right__wrapper-list-text">light</span>
            </li>
            <li>
              <span
                className="drop-right__wrapper-list-color drop-right__wrapper-list-color-dark"
                onClick={() => {
                  dispatch(createAction("SET_THEME", "dark"));
                }}
              >
                <CheckIcon />
              </span>
              <span className="drop-right__wrapper-list-text">dark</span>
            </li>
          </ul>

          <h4 className="drop-right__wrapper-title">Choose color</h4>
          <ul className="drop-right__wrapper-list">
            <li>
              <span className="drop-right__wrapper-list-color drop-right__wrapper-list-color__blue"></span>
              <span className="drop-right__wrapper-list-text">Blue</span>
            </li>
            <li>
              <span className="drop-right__wrapper-list-color  drop-right__wrapper-list-color__green"></span>
              <span className="drop-right__wrapper-list-text">green</span>
            </li>
            <li>
              <span className="drop-right__wrapper-list-color  drop-right__wrapper-list-color__red"></span>
              <span className="drop-right__wrapper-list-text">Red</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
