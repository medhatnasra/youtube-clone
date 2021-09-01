import React from "react";
import "./style.css";

import { tubecontext } from "../../Helpers/Context";
import { useContext } from "react";


const ChannelRow = ({ title, views, created, channel }) => {
  const { ThemeToggle } = useContext(tubecontext);

  return (
    <div className="channelrow">
      <img
        src={`https://dummyimage.com/350x220/c4c4c4/ffffff&text=${channel}`}
        alt=""
      />
      <div className="text">
        <h3 style={ThemeToggle ? { color: "white" } : {}}>{title}</h3>
        <span style={ThemeToggle ? { color: "lightgrey" } : {}}>{views}</span>●<span style={ThemeToggle ? { color: "lightgrey" } : {}}>{created}</span>
        <h5 style={ThemeToggle ? { color: "lightgrey" } : {}}>{channel}</h5>
        <p className="para" style={ThemeToggle ? { color: "lightgrey" } : {}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          dolores animi, nisi deleniti reprehenderit sint omnis voluptatum
          accusantium? Officiis, est.
        </p>
      </div>
    </div>
  );
};

export default ChannelRow;
