import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Trendcard = ({ img, artist, rank }) => {
  const [play, setPlay] = useState(false);
  const vidElement = useRef();

  const playVideo = () =>{
    if (play) {
      vidElement.current.pause();
    }else{
      vidElement.current.play();
    }
    setPlay(!play)
  }

  const fullScreen = (e) =>{
    e.requestFullscreen();
  }

  return (
    <div className="trendcard">
      <div className="ctr">
        <div className="play" onClick={()=>playVideo()}>
          {!play ? "play": "pause"}
        </div>
      </div>
      <div className="vid">
        <video onDoubleClick={(e)=>fullScreen(e.target)} src={img} ref={vidElement} loop></video>
      </div>
    </div>
  )
}

export default Trendcard;