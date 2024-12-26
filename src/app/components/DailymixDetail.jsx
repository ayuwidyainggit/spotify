"use client";

import useSWR, { mutate } from "swr";
import Image from "next/image";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useParams } from "next/navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());
const DailymixDetail = () => {
  const params = useParams();
  const { id } = params;

  const { data, error, isLoading } = useSWR(`/api/dailymix?id=${id}`, fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading artist details.</p>;

  const { banner, artist, music } = data;
  console.log("data detail ", data?.music);

  const handleAddMusic = async () => {
    const newMusic = data?.music; // Replace with dynamic data if required

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

  return (
    <div>
      <div className=" h-[260px] flex items-center  bg-gradient-to-b from-zinc-600 to-zinc-900">
        <div className=" px-4 h-[260px] flex items-center   bg-gradient-to-b from-zinc-600 to-zinc-900 relative">
          <Image
            src={data?.image}
            alt="banner"
            width={1700}
            height={260}
            style={{
              objectFit: "cover",
              borderRadius: "3%",
              width: "200px",
              height: "200px",
            }}
          />

          <p className=" text-9xl">{data?.title}</p>
        </div>
      </div>
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

      {data?.music?.map((data, index) => (
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
              src={data.image}
              alt="pict"
              width={50}
              height={50}
              style={{
                objectFit: "cover",
                borderRadius: "10%",
                width: "50px",
                height: "50px",
              }}
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

export default DailymixDetail;
