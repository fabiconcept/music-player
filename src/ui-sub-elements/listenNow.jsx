import React, { useState } from 'react';
import Songlist from './components/songlist';
import Trendcard from './components/trendcard';
import Nowplaying from './nowplaying';

import v1 from "../videos/v1.mp4";
import v2 from "../videos/v2.mp4";
import v3 from "../videos/v3.mp4";
import v4 from "../videos/v4.mp4";
import v5 from "../videos/v5.mp4";
import v6 from "../videos/v6.mp4";

const ListenNow = ({songListMetaData, loadedSong, seLoadedSong}) => {

  let num = 0;

  const data = [
    {img: v4, artist: "Wizkid", rank: "1"},
    {img: v3, artist: "Wizkid", rank: "1"},
    {img: v6, artist: "Wizkid", rank: "1"},
    {img: v5, artist: "Wizkid", rank: "1"},
    {img: v1, artist: "Wizkid", rank: "1"},
    {img: v2, artist: "Wizkid", rank: "1"},
  ]


  return (
    <div className="main">
        <section>
            <label>Videos</label>
            <div className="trend-cards">
              {data.map(item =>(
                <Trendcard key={num++} img ={item.img} artist = {item.artist} rank={item.rank}/>
              ))}
            </div>
        </section>
        <section>
            <label><span>Top Picks</span> </label>
            <Songlist extra='lis' data = {songListMetaData} loadedSong={loadedSong} seLoadedSong={seLoadedSong}/>
        </section>
        <Nowplaying canplay = {true} seLoadedSong={seLoadedSong} data = {songListMetaData} loadedSong={loadedSong}/>
    </div>
  )
}

export default ListenNow