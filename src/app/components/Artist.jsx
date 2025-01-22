"use client";

import useSWR from "swr";

import React from "react";

import Image from "next/image";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Artist = () => {
  const { data, error, isLoading } = useSWR("/api/related-artist", fetcher);

  return (
    <div
      className="block md:hidden pl-4 md:pl-0 col-span-12  md:col-span-3  md:text-white md:p-4 md:mt-2 md:h-screen md:overflow-y-scroll "
      style={{ backgroundColor: "rgba(64, 64, 64, 0.4)" }}
    >
      {/* mobile version */}
      <div className=" text-white block md:hidden">
        <div className="">
          <p className="text-white font-semibold text-2xl">Popular Artist </p>
        </div>
        <div className="flex overflow-x-scroll">
          {data?.map((data, index) => (
            <Link href={`/artistDetail/${data.id}`} key={index}>
              <div
                key={index}
                className="flex-shrink-0  mt-4  gap-4 hover:bg-opacity-50 hover:bg-zinc-600 p-2 rounded-md"
                style={{ width: "160px" }}
              >
                <Image
                  alt="artist"
                  src={data.image}
                  width={150}
                  height={150}
                  style={{
                    borderRadius: "3%",
                    objectFit: "cover",
                    width: "150px",
                    height: "150px",
                  }}
                />
                <p className=" font-medium text-xl">{data.artist}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
