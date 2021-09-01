import React from "react";
import "./style.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { tubecontext } from "../../Helpers/Context";

import { useContext } from "react";
import { Avatar } from "@material-ui/core";
import ChannelRow from "../ChannelRow/ChannelRow";

const SearchPage = () => {
  const { SearchInput, ThemeToggle } = useContext(tubecontext);

  const Upperkeu = () => {
    const words = SearchInput.split(" ");
    words.forEach((k, i) => {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    });
    return words.join(" ");
  };

  return (
    <div
      className="searchpage"
      style={ThemeToggle ? { backgroundColor: "hsl(0, 0%, 10%)" } : {}}
    >
      <div className="searchpage__filter">
        <TuneOutlinedIcon
          className="searchpage__tuneout"
          style={ThemeToggle ? { color: "lightgrey" } : {}}
        />
        <span style={ThemeToggle ? { color: "lightgrey" } : {}}>Filters</span>
      </div>
      <hr className="hr" />
      <div className="flex-container">
        <div className="col1">
          <Avatar
            className="profile__avatar"
            style={{ width: "150px", height: "150px", margin: "auto" }}
          />
        </div>
        <div className="col2">
          <h3 style={ThemeToggle ? { color: "white" } : {}}>{Upperkeu()}</h3>
          <span style={ThemeToggle ? { color: "lightgrey" } : {}}>1M subs</span>
          ●
          <span style={ThemeToggle ? { color: "lightgrey" } : {}}>
            615 videos
          </span>
          <p
            className="intro__para"
            style={ThemeToggle ? { color: "lightgrey" } : {}}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quod deleniti minima modi vitae in molestias blanditiis id, tenetur
            porro?
          </p>
        </div>
        <div className="col3">
          <button>Subscribe</button>
        </div>
      </div>
      <hr className="hr" />

      <h4
        className="latest__para"
        style={ThemeToggle ? { color: "white" } : {}}
      >
        Latest From {SearchInput.charAt(0).toUpperCase() + SearchInput.slice(1)}
      </h4>

      <ChannelRow
        title="Tailwind CSS in 2 minutes (edited title)"
        views="16k views"
        created="16 days ago"
        channel={Upperkeu()}
      />
      <ChannelRow
        title="Awesome Micro Animations With Figma Tutorial"
        views="100k views"
        created="2 months ago"
        channel={Upperkeu()}
      />
      <ChannelRow
        title="Build Parallax Website With HTML CSS & Javascript"
        views="2M views"
        created="1 year ago"
        channel={Upperkeu()}
      />
      <ChannelRow
        title="Awesome Full Page Scroll Effect Tutorial!"
        views="1M views"
        created="3 years ago"
        channel={Upperkeu()}
      />
    </div>
  );
};

export default SearchPage;
