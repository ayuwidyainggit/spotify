"use client";

import React from "react";
import Image from "next/image";
import { useAudio } from "../context/AudioContext";
import {
  IoMdSkipBackward,
  IoMdSkipForward,
  IoIosPause,
  IoIosPlay,
} from "react-icons/io";

const Footer = ({ tracks }) => {
  const { isPlaying, currentTrack, progress, handlePlayPause, handleSkip } =
    useAudio();

  return (
    <div className="">
      {/* web version */}
      <div className="">
        <div className="grid grid-cols-12 h-full bg-black text-white p-0 sm:p-4">
          {/* Left Section */}
          <div className="hidden md:block md:col-span-4 md:flex md:items-center">
            {currentTrack && (
              <>
                <Image
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <p className="font-medium">{currentTrack.artist}</p>
                  <p className="text-xs font-thin text-gray-400">
                    {currentTrack.title}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Center Section */}
          <div className="hidden md:block md:col-span-4 md:flex md:flex-col md:items-center">
            <div className="flex justify-center gap-4 items-center">
              <button onClick={() => handleSkip("backward", tracks)}>
                <IoMdSkipBackward
                  style={{ width: "20px", height: "20px", color: "gray" }}
                />
              </button>
              <button onClick={handlePlayPause}>
                {isPlaying ? (
                  <IoIosPause
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "100%",
                      padding: "5px",
                    }}
                  />
                ) : (
                  <IoIosPlay
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "100%",
                      padding: "5px",
                    }}
                  />
                )}
              </button>
              <button onClick={() => handleSkip("forward", tracks)}>
                <IoMdSkipForward
                  style={{ width: "20px", height: "20px", color: "gray" }}
                />
              </button>
            </div>
            <div className="relative w-full h-1 bg-gray-700 rounded-full mt-4">
              <div
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 h-full bg-black text-white p-0 sm:p-4">
          {/* Left Section */}
          <div className="hidden md:block md:col-span-4 md:flex md:items-center">
            {currentTrack && (
              <>
                <Image
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <p className="font-medium">{currentTrack.artist}</p>
                  <p className="text-xs font-thin text-gray-400">
                    {currentTrack.title}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Center Section */}
          <div className="hidden md:block md:col-span-4 md:flex md:flex-col md:items-center">
            <div className="flex justify-center gap-4 items-center">
              <button onClick={() => handleSkip("backward", tracks)}>
                <IoMdSkipBackward
                  style={{ width: "20px", height: "20px", color: "gray" }}
                />
              </button>
              <button onClick={handlePlayPause}>
                {isPlaying ? (
                  <IoIosPause
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "100%",
                      padding: "5px",
                    }}
                  />
                ) : (
                  <IoIosPlay
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "100%",
                      padding: "5px",
                    }}
                  />
                )}
              </button>
              <button onClick={() => handleSkip("forward", tracks)}>
                <IoMdSkipForward
                  style={{ width: "20px", height: "20px", color: "gray" }}
                />
              </button>
            </div>
            <div className="relative w-full h-1 bg-gray-700 rounded-full mt-4">
              <div
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}

      <div className="">
        <div className="grid grid-cols-12 h-[95px] items-center rounded-md bg-gray-700 text-white p-0 sm:p-4 ">
          <div className="block md:hidden col-span-2 md:flex md:items-center ">
            {currentTrack && (
              <>
                <Image
                  src={currentTrack.image}
                  alt={currentTrack.title}
                  width={60}
                  height={60}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10%",
                    width: "60px",
                    height: "60px",
                  }}
                />
              </>
            )}
          </div>

          <div className="block md:hidden col-span-6 md:flex md:items-center ">
            {currentTrack && (
              <>
                <div className="ml-4">
                  <p className=" text-base font-semibold">
                    {currentTrack.artist}
                  </p>
                  <p className="text-sm font-thin text-gray-400">
                    {currentTrack.title}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="blocl md:hidden col-span-4 md:flex md:flex-col md:items-center">
            <div className="flex justify-center gap-4 items-center">
              <button onClick={() => handleSkip("backward", tracks)}>
                <IoMdSkipBackward
                  style={{ width: "20px", height: "20px", color: "gray" }}
                />
              </button>
              <button onClick={handlePlayPause}>
                {isPlaying ? (
                  <IoIosPause
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "100%",
                      padding: "5px",
                    }}
                  />
                ) : (
                  <IoIosPlay
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "black",
                      backgroundColor: "white",
                      borderRadius: "100%",
                      padding: "5px",
                    }}
                  />
                )}
              </button>
              <button onClick={() => handleSkip("forward", tracks)}>
                <IoMdSkipForward
                  style={{ width: "20px", height: "20px", color: "gray" }}
                />
              </button>
            </div>
            <div className="relative w-full h-1 bg-gray-700 rounded-full mt-4">
              <div
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
