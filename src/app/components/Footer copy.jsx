import Image from "next/image";
import React from "react";

import { FiPlusCircle } from "react-icons/fi";

import { BsShuffle } from "react-icons/bs";
import { IoMdSkipBackward } from "react-icons/io";
import { IoIosPause } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { FiRepeat } from "react-icons/fi";

import { AiOutlinePlaySquare } from "react-icons/ai";
import { LuMic2 } from "react-icons/lu";
import { HiMiniQueueList } from "react-icons/hi2";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { CgMiniPlayer } from "react-icons/cg";
import { MdCloseFullscreen } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" grid grid-cols-12  h-full bg-black ">
      <div className=" col-span-4  flex items-center ">
        <Image
          src="/adele.webp"
          alt="play"
          width={60}
          height={60}
          className=" rounded-md"
        />
        <div className=" ml-4">
          <p className=" font-medium">Adele</p>
          <p className="text-xs font-thin text-gray-400">Seperti Mati Lampu</p>
        </div>
        <div className=" flex items-center ml-4">
          <FiPlusCircle
            style={{ width: "20px", height: "20px", color: "gray" }}
          />
        </div>
      </div>

      <div className=" col-span-4  flex flex-col items-center justify-center gap-3">
        <div className="flex justify-center gap-4 items-center">
          <BsShuffle style={{ width: "20px", height: "20px", color: "gray" }} />
          <IoMdSkipBackward
            style={{ width: "20px", height: "20px", color: "gray" }}
          />
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
          <IoMdSkipForward
            style={{
              width: "20px",
              height: "20px",
              color: "gray",
            }}
          />
          <FiRepeat
            style={{
              width: "20px",
              height: "20px",
              color: "gray",
            }}
          />
        </div>
        <div className="flex justify-center gap-4 items-center">
          <p className=" text-xs text-gray-400 font-thin">3:23</p>
          <div className="w-[350px] border-2 border-white rounded-full h-0 "></div>
          <p className=" text-xs text-gray-400 font-thin">3:23</p>
        </div>
      </div>

      <div className=" col-span-4  flex items-center justify-center gap-3 ">
        <AiOutlinePlaySquare style={{ color: "gray" }} />
        {/* <LuMic2 style={{ color: "gray" }} /> */}
        <HiMiniQueueList style={{ color: "gray" }} />
        <HiOutlineDeviceMobile style={{ color: "gray" }} />
        <HiOutlineSpeakerWave style={{ color: "gray" }} />
        <CgMiniPlayer style={{ color: "gray" }} />
        <div className="w-[100px] border-2 border-white rounded-full h-0 "></div>
        <MdCloseFullscreen style={{ color: "gray" }} />
      </div>
    </div>
  );
};

export default Footer;
