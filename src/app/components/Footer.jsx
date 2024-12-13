"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FiPlay, FiPause, FiSkipForward, FiSkipBack } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

import { BsShuffle } from "react-icons/bs";
import { IoMdSkipBackward } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { FiRepeat } from "react-icons/fi";
import { IoIosPlay } from "react-icons/io";

import { AiOutlinePlaySquare } from "react-icons/ai";
import { LuMic2 } from "react-icons/lu";
import { HiMiniQueueList } from "react-icons/hi2";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { CgMiniPlayer } from "react-icons/cg";
import { MdCloseFullscreen } from "react-icons/md";

const Footer = () => {
  const audioRef = useRef(null); // Referensi ke elemen audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Menyimpan progress audio

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
    if (audioRef.current) {
      audioRef.current.currentTime += direction === "forward" ? 10 : -10; // Skip 10 detik
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration) {
        setProgress((currentTime / duration) * 100); // Hitung progress dalam persen
      }
    }
  };

  return (
    <div className="grid grid-cols-12 h-full bg-black text-white p-4">
      {/* Bagian Kiri */}
      <div className="col-span-4 flex items-center">
        <Image
          src="/adele.webp"
          alt="Now Playing"
          width={60}
          height={60}
          className="rounded-md"
        />
        <div className="ml-4">
          <p className="font-medium">Adele</p>
          <p className="text-xs font-thin text-gray-400">Seperti Mati Lampu</p>
        </div>
      </div>

      {/* Bagian Tengah */}
      <div className="col-span-4 flex flex-col items-center">
        <audio
          ref={audioRef}
          src="/audio/instrument1.mp3"
          onTimeUpdate={handleTimeUpdate} // Pantau perubahan waktu audio
        ></audio>
        {/* <div className="flex items-center gap-4 mt-4">
          <button onClick={() => handleSkip("backward")}>
            <FiSkipBack size={24} />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <FiPause size={28} /> : <FiPlay size={28} />}
          </button>
          <button onClick={() => handleSkip("forward")}>
            <FiSkipForward size={24} />
          </button>
        </div> */}
        <div className="flex justify-center gap-4 items-center">
          <BsShuffle style={{ width: "20px", height: "20px", color: "gray" }} />
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
              style={{
                width: "20px",
                height: "20px",
                color: "gray",
              }}
            />
          </button>

          <FiRepeat
            style={{
              width: "20px",
              height: "20px",
              color: "gray",
            }}
          />
        </div>
        <div className="relative w-full h-1 bg-gray-700 rounded-full mt-4">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full"
            style={{ width: `${progress}%` }} // Lebar sesuai progress
          ></div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="col-span-4 flex items-center justify-end">
        <p className="text-sm text-gray-400">Custom Controls</p>
      </div>
    </div>
  );
};

export default Footer;
