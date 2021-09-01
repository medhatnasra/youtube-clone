import React from "react";
import "./style.css";
import { Avatar } from "@material-ui/core";

import { tubecontext } from "../../Helpers/Context";
import { useContext } from "react";

const VideoCard = ({ title, views, time, rdate, thumb, channel, avatar }) => {
  const { ThemeToggle } = useContext(tubecontext);

  return (
    <div className="videocard">
      <img src={thumb} className="videocard__thumb" alt="" />
      <div className="videocard__flex">
        <div className="avatar">
          <Avatar src={avatar} />
        </div>
        <div className="second">
          <h4 style={ThemeToggle ? { color: "#FFF" } : {}}>{title}</h4>
          <p style={ThemeToggle ? { color: "lightgrey" } : {}}>{channel}</p>
          <p style={ThemeToggle ? { color: "lightgrey" } : {}}>
            {views} ● {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
