"use client";

import useSWR from "swr";

import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Dailymix = () => {
  const { data, error, isLoading } = useSWR("/api/dailymix", fetcher);

  console.log("dailymix", data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching related artists.</p>;
  return (
    <div className=" mt-10  h-screen overflow-y-hidden md:overflow-y-scroll ">
      <div className=" flex items-center justify-between ">
        <p className="text-white text-2xl  font-semibold">Made for Ayu Widya</p>
        {/* <p className="text-gray-300 text-sm font-bold">Show all</p> */}
      </div>
      {/* web version */}
      <div className=" hidden md:block md:grid md:grid-cols-12 md:gap-2 md:h-[200px]  ">
        {data?.slice(0, 6).map((data, index) => (
          <Link
            href={`/dailymixDetail/${data.id}`}
            key={index}
            className=" group relative   col-span-2 flex flex-col items-center  p-2 rounded-md hover:bg-opacity-50 hover:bg-zinc-600"
          >
            <div>
              <Image
                alt="artist"
                src={data?.image}
                width={150}
                height={150}
                style={{ borderRadius: "5%" }}
              />
              <div className="   w-[150px] mt-2 ">
                <p className="text-gray-300 text-sm">
                  {data?.artist
                    .map((artist) => artist) // Ambil hanya nama artis
                    .join(", ") // Gabungkan dengan koma dan spasi
                    .substring(0, 20) +
                    (data?.artist.map((artist) => artist).join(", ").length > 20
                      ? "..."
                      : "")}
                </p>
              </div>
              <div className=" absolute bg-green-700 rounded-full p-3 top-[50%] right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaPlay />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* mobile version */}
      <div className=" grid-cols-12 block md:hidden flex overflow-x-scroll  ">
        {data?.slice(0, 6).map((data, index) => (
          <Link
            href={`/dailymixDetail/${data.id}`}
            key={index}
            className=" flex-shrink-0 group relative   col-span-2 flex flex-col items-center  p-2 rounded-md hover:bg-opacity-50 hover:bg-zinc-600"
          >
            <div>
              <Image
                alt="artist"
                src={data?.image}
                width={150}
                height={150}
                style={{ borderRadius: "5%" }}
              />
              <div className="   w-[150px] mt-2 ">
                <p className="text-gray-300 text-sm">
                  {data?.artist
                    .map((artist) => artist) // Ambil hanya nama artis
                    .join(", ") // Gabungkan dengan koma dan spasi
                    .substring(0, 20) +
                    (data?.artist.map((artist) => artist).join(", ").length > 20
                      ? "..."
                      : "")}
                </p>
              </div>
              <div className=" absolute bg-green-700 rounded-full p-3 top-[50%] right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaPlay />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dailymix;
