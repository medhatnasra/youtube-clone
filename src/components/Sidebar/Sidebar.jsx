import React from "react";
import SideBarRow from "../SideBarRow/SideBarRow";
import "./style.css";

import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Theme from "../ThemeToggle/ThemeToggle";

import { tubecontext } from "../../Helpers/Context";
import { useContext } from "react";

import VideoCall from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";

const Sidebar = () => {
  const { BarToggle, setSearchInput, ThemeToggle, setThemeToggle } =
    useContext(tubecontext);
  return (
    <div
      className={BarToggle ? "sidebar show" : "sidebar"}
      style={ThemeToggle ? { backgroundColor: "#282828" } : {}}
    >
      <Link to="/" onClick={() => setSearchInput("")}>
        <SideBarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <SideBarRow Icon={ExploreIcon} title="Explore" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch later" />
      <SideBarRow Icon={ThumbUpAltIcon} title="Liked videos" />
      <SideBarRow Icon={ExpandMoreIcon} title="Show more" />
      <div className="changing">
        <Theme
          toggle={() => setThemeToggle(!ThemeToggle)}
          className="header__theme"
        />

        <VideoCall
          className="sidebar__videocall"
          style={{
            color: ThemeToggle ? "white" : "",
          }}
        />
        <AppsIcon
          className="sidebar__apps"
          style={{
            color: ThemeToggle ? "white" : "",
          }}
        />
        <NotificationsIcon
          className="sidebar__not"
          style={{
            color: ThemeToggle ? "white" : "",
          }}
        />
        <AccountCircleIcon
          className="sidebar__account"
          style={{
            color: ThemeToggle ? "white" : "",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
