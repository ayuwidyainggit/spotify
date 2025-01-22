"use client";

import React, { useRef, useState, useEffect } from "react";
import useSWR from "swr";
import Image from "next/image";
import { BsShuffle } from "react-icons/bs";
import {
  IoMdSkipBackward,
  IoIosPause,
  IoMdSkipForward,
  IoIosPlay,
} from "react-icons/io";
import { FiRepeat } from "react-icons/fi";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Footer = () => {
  const audioRef = useRef(null); // Reference to audio element
  const { data, error } = useSWR("/api/playmusic", fetcher, {
    refreshInterval: 5000, // Re-fetch data setiap 5 detik
  }); // Fetch music data

  // console.log("dataa", data);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Track progress
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0); // Index of the current track

  // Play the first track on render if data exists
  useEffect(() => {
    if (data && data.length > 0) {
      setCurrentTrackIndex(0); // Default to the first track
    }
  }, [data]);

  const currentTrack = data ? data[currentTrackIndex] : null; // Get current track

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkip = (direction) => {
    if (data && data.length > 0) {
      let newIndex = currentTrackIndex;
      if (direction === "forward") {
        newIndex = (currentTrackIndex + 1) % data.length; // Next track, loop to the start
      } else if (direction === "backward") {
        newIndex = (currentTrackIndex - 1 + data.length) % data.length; // Previous track, loop to the end
      }
      setCurrentTrackIndex(newIndex);
      setProgress(0); // Reset progress for new track
      setIsPlaying(true); // Pause before playing the new track
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((currentTime / duration) * 100); // Calculate progress percentage
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Load the new track
      if (isPlaying) {
        audioRef.current.play(); // Automatically play if it was playing
      }
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <div className="grid grid-cols-12 h-full bg-black text-white  p-0 sm:p-4">
      {/* web version */}
      {/* Left Section */}
      <div className="hidden md:block  md:col-span-4 md:flex md:items-center">
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
      <div className=" hidden md:block md:col-span-4 md:flex md:flex-col md:items-center">
        {currentTrack && (
          <audio
            ref={audioRef}
            src={currentTrack.audio}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => handleSkip("forward")} // Move to next track when current ends
          ></audio>
        )}
        <div className="flex justify-center gap-4 items-center">
          {/* <BsShuffle style={{ width: "20px", height: "20px", color: "gray" }} /> */}
          <button onClick={() => handleSkip("backward")}>
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
          {/* next */}
          <button onClick={() => handleSkip("forward")}>
            <IoMdSkipForward
              style={{ width: "20px", height: "20px", color: "gray" }}
            />
          </button>
          {/* <FiRepeat style={{ width: "20px", height: "20px", color: "gray" }} /> */}
        </div>
        <div className="relative w-full h-1 bg-gray-700 rounded-full mt-4">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:col-span-4 md:flex md:items-center md:justify-end">
        {/* <p className="text-sm text-gray-400">Custom Controls</p> */}
      </div>

      {/* mobile version */}
      <div className="block md:hidden col-span-12 bg-gray-700 rounded-md ">
        <div className=" flex m-3 justify-between">
          {currentTrack && (
            <div className=" flex">
              <Image
                src={currentTrack.image}
                alt={currentTrack.title}
                width={60}
                height={60}
                style={{
                  borderRadius: "3%",
                  objectFit: "cover",
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="ml-4">
                <p className="font-semibold text-white">{currentTrack.title}</p>
                <p className="font-thin">{currentTrack.artist}</p>
              </div>
            </div>
          )}

          {currentTrack && (
            <audio
              ref={audioRef}
              src={currentTrack.audio}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => handleSkip("forward")} // Move to next track when current ends
            ></audio>
          )}
          <div className=" flex justify-center gap-4 items-center">
            <button onClick={() => handleSkip("backward")}>
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
            <button onClick={() => handleSkip("forward")}>
              <IoMdSkipForward
                style={{ width: "20px", height: "20px", color: "gray" }}
              />
            </button>
          </div>
        </div>
        <div className="relative  w-full h-1 bg-gray-700 rounded-full mt-4">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
