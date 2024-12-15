"use client";

import useSWR from "swr";

import React from "react";
import { IoLibrarySharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";

import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import { BsPinAngleFill } from "react-icons/bs";

import { HiMiniMusicalNote } from "react-icons/hi2";
import { TfiMenuAlt } from "react-icons/tfi";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Sidebar = () => {
  const { data, error, isLoading } = useSWR("/api/related-artist", fetcher);

  return (
    <div
      className=" col-span-3  text-white p-4 mt-2 h-screen overflow-y-scroll "
      style={{ backgroundColor: "rgba(64, 64, 64, 0.4)" }}
    >
      <div className="relative  flex items-center gap-2">
        <IoLibrarySharp
          style={{ width: "25px", height: "25px", color: "gray" }}
        />
        <p className=" font-semibold text-gray-400">Your Library</p>
        <div className="absolute right-2 gap-2  flex items-center">
          <FaPlus style={{ width: "20px", height: "20px", color: "gray" }} />
          <GrLinkNext
            style={{ width: "20px", height: "20px", color: "gray" }}
          />
        </div>
      </div>
      <div className=" flex gap-2 mt-4">
        <div
          className=" px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(64, 64, 64, 1)" }}
        >
          <p className="">Playlist</p>
        </div>
        <div
          className=" px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(64, 64, 64, 1)" }}
        >
          <p className="">Artist</p>
        </div>
      </div>
      <div className=" mt-4 flex justify-between">
        <LuSearch style={{ color: "gray" }} />
        <div className=" flex gap-2 items-center">
          <p className="font-thin text-sm text-gray-400">Creator</p>
          <TfiMenuAlt style={{ color: "gray" }} />
        </div>
      </div>
      <div className="mt-4 flex   hover:bg-opacity-50 hover:bg-zinc-600 p-2 rounded-md">
        <div className="bg-gradient-to-br from-[#3d07ed] to-[#bebff7] w-[50px] h-[50px] flex justify-center items-center rounded-md">
          <Image alt="like" src="/heart.png" width={20} height={20} />
        </div>
        <div className="ml-4 ">
          <p>Liked Song</p>
          <div className=" flex gap-2  ">
            <BsPinAngleFill style={{ color: "green" }} />
            <Link href="/playlist">
              <p className=" text-sm font-thin text-gray-400">
                Playlist <span>.</span> <span>186 songs</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Link href="/playlist">
        <div className="mt-4 flex hover:bg-opacity-50 hover:bg-zinc-600 p-2 rounded-md">
          <div
            className=" w-[50px] h-[50px] flex justify-center items-center rounded-md "
            style={{ backgroundColor: "rgba(64, 64, 64, 0.4)" }}
          >
            <HiMiniMusicalNote />
          </div>

          <div className="ml-4 flex items-center">
            <p className=" text-sm font-thin text-gray-400">Playlist</p>
          </div>
        </div>
      </Link>
      {/* list  */}

      <div className=" ">
        {data?.map((data, index) => (
          <Link href={`/artistDetail/${data.id}`} key={index}>
            <div
              key={index}
              className=" mt-4 flex gap-4 hover:bg-opacity-50 hover:bg-zinc-600 p-2 rounded-md"
            >
              <Image
                alt="artist"
                src={data.image}
                width={50}
                height={50}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="">
                <p className=" font-medium">{data.artist}</p>
                <p className=" font-thin text-sm text-gray-400">Artist</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* end list */}
    </div>
  );
};

export default Sidebar;
