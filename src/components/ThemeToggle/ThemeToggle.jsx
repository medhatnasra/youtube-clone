import React from "react";

import "./style.css";

import { tubecontext } from "../../Helpers/Context";
import { useContext } from "react";


const ThemeToggle = ({ toggle }) => {

  const { ThemeToggle } = useContext(tubecontext);
  return (
    <button className="theme-toggle" onClick={toggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="472.39"
        height="472.39"
        viewBox="0 0 472.39 472.39"
      >
        <g className={ThemeToggle ? "toggle-sun change" : "toggle-sun"}>
          <path
            fill={ThemeToggle ? "#FFF" : "#000"}
            d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z"
          />
        </g>
        <g className={ThemeToggle ? "toggle-circle change" : "toggle-circle"}>
          <circle
            className="cls-1"
            cx="236.2"
            cy="236.2"
            r="103.78"
            fill={ThemeToggle ? "#FFF" : "#000"}
          />
        </g>
      </svg>
    </button>
  );
};

export default ThemeToggle;
