"use client";

import useSWR from "swr";
import Image from "next/image";
import React from "react";

import { IoIosPlay } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import Dailymix from "./Dailymix";
import Artist from "./Artist";

const fetcher = (url) => fetch(url).then((res) => res.json());
const HomeSpotify = () => {
  const { data, error, isLoading } = useSWR("/api/related-artist", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching related artists.</p>;
  return (
    <div className="  mx-4 h-screen overflow-y-hidden md:overflow-y-scroll ">
      <Artist />
      <div className=" hidden md:block md:relative md:w-[1050px] md:h-[200px] md:rounded-md md:p-2 md:mt-2">
        <Image
          alt="banner"
          src="/banner.png"
          layout="fill"
          objectFit="cover"
          className=" rounded-md"
        />
      </div>
      <div className=" hidden md:block md:flex md:mt-4  md:gap-3">
        <div
          className=" py-1 px-3 rounded-full "
          style={{ backgroundColor: "rgba(108, 117, 125, 0.5)" }}
        >
          <p className="text-white">All</p>
        </div>

        <div
          className=" py-1 px-3 rounded-full "
          style={{ backgroundColor: "rgba(108, 117, 125, 0.5)" }}
        >
          <p className="text-white">Music</p>
        </div>

        <div
          className=" py-1 px-3 rounded-full "
          style={{ backgroundColor: "rgba(108, 117, 125, 0.5)" }}
        >
          <p className="text-white">Podcast</p>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-12 md:gap-2 md:mt-3">
        {data?.slice(0, 8).map((data, index) => (
          <div
            key={index}
            className=" col-span-3  rounded-md flex items-center gap-3 hover:bg-opacity-60 bg-zinc-600 bg-opacity-50"
          >
            <Image
              alt="artist"
              src={data.image}
              width={55}
              height={55}
              className=" rounded-md"
            />
            <p className=" text-white font-semibold">{data.artist}</p>
          </div>
        ))}
      </div>

      {/* album */}
      <Dailymix />
    </div>
  );
};

export default HomeSpotify;
