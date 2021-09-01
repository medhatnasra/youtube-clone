import React from "react";

import "./rowstyle.css";


import { tubecontext } from "../../Helpers/Context";
import { useContext } from "react";



const SideBarRow = ({ selected, Icon, title }) => {
  const {ThemeToggle } = useContext(tubecontext);

  return (
    <li className={selected ? "sidebarrow selected" : "sidebarrow"}>
      <Icon
        style={ThemeToggle ? {fontSize : 27, color : "#FFF" } : {fontSize : 27}}
        className={selected ? "sidebarrow__icon selected" : "sidebarrow__icon"}
      />
      <span
        className={selected ? "sidebarrow__title selected" : "sidebarrow__title"}
        style={ThemeToggle ? { color : "#FFF" } : {}}
      >
        {title}
      </span>
    </li>
  );
};

export default SideBarRow;
