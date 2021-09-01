import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./style.css";

import one from "./thumb/One.png";
import two from "./thumb/two.png";
import three from "./thumb/three.png";
import four from "./thumb/four.png";
import five from "./thumb/five.png";
import six from "./thumb/six.png";
import seven from "./thumb/seven.png";
import eight from "./thumb/eight.png";
import nine from "./thumb/nine.png";
import ten from "./thumb/ten.png";
import eleven from "./thumb/eleven.png";
import twelve from "./thumb/twelve.png";

import { tubecontext } from "../../Helpers/Context";
import { useContext } from "react";

const Videos = () => {
  const { ThemeToggle } = useContext(tubecontext);

  return (
    <div
      className="videos"
      style={ThemeToggle ? { backgroundColor: "hsl(0, 0%, 10%)" } : {}}
    >
      <VideoCard
        title="Kodaline - All I Want (slowed+reverb)"
        avatar="https://i.ibb.co/BCPz7fn/yuna.jpg"
        views="10M views"
        time="2 years ago"
        thumb={one}
        channel="Yuna Akiyama"
      />
      <VideoCard
        title="Self Taught Programmers... Listen Up. "
        avatar="https://i.ibb.co/6r6mqS6/unnamed.jpg"
        views="400k views"
        time="4 months ago"
        thumb={two}
        channel="Kenny Gunderman"
      />
      <VideoCard
        title="What A Day In A Programmers Life Is Actually Like"
        avatar="https://i.ibb.co/L8cFjVd/unnamed.jpg"
        views="700k views"
        time="5 months ago"
        thumb={three}
        channel="Kalle Hallden"
      />
      <VideoCard
        title="why you NEED math for programming"
        avatar="https://i.ibb.co/DG4f5m3/unnamed.jpg"
        views="3M views"
        time="7 months ago"
        thumb={four}
        channel="Joma Tech"
      />
      <VideoCard
        title="code-fi / lofi beats to code/relax to"
        avatar="https://i.ibb.co/6XmpbLf/unnamed.jpg"
        views="4M views"
        time="2 years ago"
        thumb={five}
        channel="The AMP Channel"
      />
      <VideoCard
        title="Three Days Grace - Fallen Angel (Audio) "
        avatar="https://i.ibb.co/pvPnVCF/unnamed.jpg"
        views="31M views"
        time="6 years ago"
        thumb={six}
        channel="Three Days Grace"
      />
      <VideoCard
        title="Lord Huron - The Night We Met (Official Lyric Video)"
        avatar="https://i.ibb.co/ypz15xJ/unnamed.jpg"
        views="119M views"
        time="5 years ago"
        thumb={seven}
        channel="Lord Huron"
      />
      <VideoCard
        title="How I learned to code and landed a job (no CS degree!)"
        avatar="https://i.ibb.co/NKQskWL/unnamed.jpg"
        views="300k views"
        time="9 months ago"
        thumb={eight}
        channel="Coder Coder"
      />
      <VideoCard
        title="Lana Del Rey - Born To Die (Official Music Video)"
        avatar="https://i.ibb.co/LN0VHBC/channels4-profile.jpg"
        views="500M views"
        time="9 months ago"
        thumb={nine}
        channel="Lana Del Rey"
      />
      <VideoCard
        title="Lana Del Rey - Blue Jeans"
        avatar="https://i.ibb.co/LN0VHBC/channels4-profile.jpg"
        views="300M views"
        time="10 years ago"
        thumb={ten}
        channel="Lana Del Rey"
      />
      <VideoCard
        title="Lord Huron - La Belle Fleur Sauvage (Alive from Whispering Pines)"
        avatar="https://i.ibb.co/ypz15xJ/unnamed.jpg"
        views="44k views"
        time="22 days ago"
        thumb={eleven}
        channel="Lord Huron"
      />
      <VideoCard
        title="code-fi / lofi beats to code/relax to #2"
        avatar="https://i.ibb.co/6XmpbLf/unnamed.jpg"
        views="47k views"
        time="5 months ago"
        thumb={twelve}
        channel="The AMP Channel"
      />
    </div>
  );
};

export default Videos;
