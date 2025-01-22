"use client";

import useSWR, { mutate } from "swr";
import Image from "next/image";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Playlist = () => {
  const { data, error, isLoading } = useSWR("/api/playlist", fetcher);

  const handleAddMusic = async () => {
    const newMusic = data; // Replace with dynamic data if required

    console.log("Sending data:", JSON.stringify(newMusic));

    try {
      const response = await fetch("/api/playmusic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMusic),
      });

      const result = await response.json();
      console.log("API response:", result);

      if (response.ok) {
        mutate("/api/playmusic"); // Revalidate data to reflect changes
      } else {
        console.error("Failed to update music:", result.error);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const handleAddMusic2 = async (musicItem) => {
    const musicArray = [musicItem]; // Wrap the selected item in an array

    console.log("Sending data:", JSON.stringify(musicArray));

    try {
      const response = await fetch("/api/playmusic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(musicArray), // Send as an array
      });

      const result = await response.json();
      console.log("API response:", result);

      if (response.ok) {
        mutate("/api/playmusic"); // Revalidate data to reflect changes
      } else {
        console.error("Failed to update music:", result.error);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div>
      <div className=" w-[50px] h-[50px] bg-green-500 p-2 flex justify-center items-center rounded-full ml-4 my-3">
        <FaPlay onClick={handleAddMusic} />
      </div>
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

      {data?.map((data, index) => (
        <div
          key={index}
          className=" group grid grid-cols-12  mb-2 p-2 items-center hover:bg-opacity-50 hover:bg-zinc-600 hover:rounded-md  "
        >
          <div className=" col-span-1 flex justify-center">
            <p className="text-white text-center group-hover:hidden">
              {data.id}
            </p>
            <div className="text-white hidden group-hover:block  ">
              <IoIosPlay onClick={() => handleAddMusic2(data)} />
            </div>
          </div>
          <div className=" col-span-4 flex gap-3">
            <Image
              src={data.image}
              alt="pict"
              width={50}
              height={50}
              style={{ borderRadius: "10%" }}
            />
            <div className="">
              <p className="text-white">{data.title}</p>
              <p className="text-gray-400 text-sm">{data.artist}</p>
            </div>
          </div>
          <div className=" col-span-3">
            <p className="text-gray-400 text-sm text-left">{data.album}</p>
          </div>
          <div className=" col-span-3 flex justify-between">
            <p className="text-gray-400 text-sm text-left">{data.DatedAdd}</p>
            <div className=" hidden group-hover:block">
              <FaCheckCircle style={{ color: "green" }} />
            </div>
          </div>
          <div className=" col-span-1">
            <p className="text-gray-400 text-sm text-center">{data.DatedAdd}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
