import React from "react";
import Logo from "../../logo.svg";

import SecondLogo from "../../SecondLogo.svg";

import "./style.css";
import { Link } from "react-router-dom";

import { tubecontext } from "../../Helpers/Context";

// Material UI
import MenuIcon from "@material-ui/icons/Menu";
import MicIcon from "@material-ui/icons/Mic";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCall from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PageviewIcon from "@material-ui/icons/Pageview";
import { useContext } from "react";
import Theme from "../ThemeToggle/ThemeToggle";

const Header = ({ toggle }) => {
  const {
    BarToggle,
    setBarToggle,
    setSearchInput,
    SearchInput,
    ThemeToggle,
    setThemeToggle,
  } = useContext(tubecontext);



  return (
    <div className={`header ${ThemeToggle && "dark"}`}>
      <div className="header__first">
        <MenuIcon
          style={{
            fontSize: 27,
            cursor: "pointer",
            color: ThemeToggle ? "white" : "",
          }}
          onClick={() => setBarToggle(!BarToggle)}
        />
        <Link to="/">
          <img
            src={ThemeToggle ? SecondLogo : Logo}
            alt=""
            className="header__logo"
            onClick={() => setSearchInput("")}
          />
        </Link>
      </div>
      <div className="header__second">
        <input
          type="text"
          className="header__input"
          placeholder="Search"
          value={SearchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          style={
            ThemeToggle
              ? {
                  backgroundColor: "hsl(0, 0%, 10%)",
                  color: "white",
                  border: "2px solid grey",
                }
              : {}
          }
        />

        <Link to={SearchInput !== "" ? `/search/${SearchInput}` : ""}>
          <PageviewIcon
            style={{
              fontSize: 55,
              marginLeft: "-.70rem",
              cursor: "pointer",
              color: ThemeToggle ? "white" : "#666666",
            }}
          />
        </Link>
        <MicIcon
          style={{
            fontSize: 27,
            cursor: "pointer",
            color: ThemeToggle ? "white" : "",
          }}
        />
      </div>
      <div className="header__third">
        <Theme
          toggle={() => setThemeToggle(!ThemeToggle)}
          className="header__theme"
        />
        <VideoCall
          style={{
            fontSize: 27,
            cursor: "pointer",
            color: ThemeToggle ? "white" : "",
          }}
          className="header__videocall"
        />
        <AppsIcon
          style={{
            fontSize: 27,
            cursor: "pointer",
            color: ThemeToggle ? "white" : "",
          }}
          className="header__appsicon"
        />
        <NotificationsIcon
          style={{
            fontSize: 27,
            cursor: "pointer",
            color: ThemeToggle ? "white" : "",
          }}
          className="header__not"
        />
        <AccountCircleIcon
          style={{
            fontSize: 40,
            cursor: "pointer",
            color: ThemeToggle ? "white" : "",
          }}
          className="header__account"
        />
      </div>
    </div>
  );
};

export default Header;
