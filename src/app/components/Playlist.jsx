"use client";

import Image from "next/image";
import React, { useState } from "react";

const Playlist = () => {
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      pict: "/adele.webp",
      artist: "adele",
      title: "Seperti Mati Lampu",
      Album: "NASSAR",
      dateAdded: "2 days ago ",
      time: "20:09",
    },
    {
      id: 2,
      pict: "/adele.webp",
      artist: "nassar",
      title: "Seperti Mati Lampu",
      Album: "NASSAR",
      dateAdded: "2 days ago ",
      time: "20:09",
    },
    {
      id: 3,
      pict: "/adele.webp",
      artist: "Billie Eilish",
      title: "Seperti Mati Lampu",
      Album: "NASSAR",
      dateAdded: "2 days ago ",
      time: "20:09",
    },
  ]);
  return (
    <div>
      <div className=" grid grid-cols-12 border border-white ">
        <div className=" col-span-1">
          <p className="text-white">#</p>
        </div>
        <div className=" col-span-3">
          <p className="text-white">Title</p>
        </div>
        <div className=" col-span-3">
          <p className="text-white">Album</p>
        </div>
        <div className=" col-span-3">
          <p className="text-white">Date Added</p>
        </div>
        <div className=" col-span-2">
          <p className="text-white">#</p>
        </div>
      </div>
      {playlist?.map((data, index) => (
        <div key={index} className=" grid grid-cols-12 border border-white ">
          <div className=" col-span-1">
            <p className="text-white">{data.id}</p>
          </div>
          <div className=" col-span-3">
            <Image
              src={data.pict}
              alt="pict"
              width={50}
              height={50}
              style={{ borderRadius: "10%" }}
            />
            <p className="text-gray-400">Title</p>
          </div>
          <div className=" col-span-3">
            <p className="text-white">{data.Album}</p>
          </div>
          <div className=" col-span-3">
            <p className="text-white">{data.dateAdded}</p>
          </div>
          <div className=" col-span-2">
            <p className="text-white">{data.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
