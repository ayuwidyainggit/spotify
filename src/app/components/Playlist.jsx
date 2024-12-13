"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

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
      <div className=" grid grid-cols-12 border-b mb-2 px-2 border-gray-500 mb-4 pb-4 ">
        <div className=" col-span-1">
          <p className="text-gray-400 text-sm text-center ">#</p>
        </div>
        <div className=" col-span-4">
          <p className="text-gray-400 text-sm text-left">Title</p>
        </div>
        <div className=" col-span-3">
          <p className="text-gray-400 text-sm text-left">Album</p>
        </div>
        <div className=" col-span-3">
          <p className="text-gray-400 text-sm text-left">Date Added</p>
        </div>
        <div className=" col-span-1 flex justify-center">
          <p className="text-gray-400 text-sm ">
            <IoTimeOutline />
          </p>
        </div>
      </div>
      {playlist?.map((data, index) => (
        <div
          key={index}
          className=" group grid grid-cols-12  mb-2 p-2 items-center hover:bg-opacity-50 hover:bg-zinc-600 hover:rounded-md  "
        >
          <div className=" col-span-1 flex justify-center">
            <p className="text-white text-center group-hover:hidden">
              {data.id}
            </p>
            <div className="text-white hidden group-hover:block  ">
              <IoIosPlay />
            </div>
          </div>
          <div className=" col-span-4 flex gap-3">
            <Image
              src={data.pict}
              alt="pict"
              width={50}
              height={50}
              style={{ borderRadius: "10%" }}
            />
            <div className="">
              <p className="text-white">Title</p>
              <p className="text-gray-400 text-sm">Artist</p>
            </div>
          </div>
          <div className=" col-span-3">
            <p className="text-gray-400 text-sm text-left">{data.Album}</p>
          </div>
          <div className=" col-span-3 flex justify-between">
            <p className="text-gray-400 text-sm text-left">{data.dateAdded}</p>
            <div className=" hidden group-hover:block">
              <FaCheckCircle style={{ color: "green" }} />
            </div>
          </div>
          <div className=" col-span-1">
            <p className="text-gray-400 text-sm text-center">{data.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
