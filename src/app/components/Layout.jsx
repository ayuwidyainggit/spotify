"use client";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

import { GrHomeRounded } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { IoMdBrowsers } from "react-icons/io";

import { PiBellSimple } from "react-icons/pi";
import { TbUsersGroup } from "react-icons/tb";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps() {
  try {
    const response = await fetch("/api/related-artist");

    if (!response.ok) {
      throw new Error("Failed to fetch data from /api/related-artist");
    }

    const data = await response.json();
    console.log("Fetched data:", data); // Should log the data fetched from the API
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: [] } }; // Return empty data in case of error
  }
}

export default function Layout({ children, data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query && Array.isArray(data)) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className="bg-black  h-screen overflow-hidden">
      <header className=" z-20 bg-black fixed top-0 w-full text-white h-[10%] grid grid-cols-12 ">
        {/* header web version */}
        <div className="hidden md:block md:col-span-4 md:flex md:p-1 md:gap-3">
          <BsChevronLeft style={{ width: "28px", height: "28px" }} />
          <BsChevronRight style={{ width: "28px", height: "28px" }} />
        </div>
        <div className="hidden md:block md:col-span-4 md:pt-1  md:flex md:gap-2">
          <div
            className="  w-[50px] h-[50px]  rounded-full p-2  flex items-center justify-center "
            style={{ backgroundColor: "rgba(108, 117, 125, 0.5)" }}
          >
            <Link href="/">
              <GrHomeRounded
                style={{
                  width: "28px",
                  height: "20px",
                  display: "relative",
                  color: "white",
                }}
              />
            </Link>
          </div>
          <div
            className="rounded-full w-[5000px] h-[50px] flex items-center px-2 gap-2 relative"
            style={{ backgroundColor: "rgba(108, 117, 125, 0.5)" }}
          >
            <LuSearch style={{ width: "28px", height: "28px" }} />
            <input
              type="text"
              placeholder="What do you want to play?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-300"
            />
            <div className="absolute top-3 right-3 border-l border-white pl-2">
              <IoMdBrowsers style={{ width: "28px", height: "28px" }} />
            </div>
          </div>
        </div>
        <div className=" hidden md:block md:col-span-4  md:flex md:justify-end md:gap-3 md:items-center md:pr-3">
          <PiBellSimple style={{ width: "25px", height: "25px" }} />
          <TbUsersGroup style={{ width: "25px", height: "25px" }} />
          <div className=" bg-pink-400 w-[40px] h-[40px] rounded-full flex justify-center items-center ">
            <p>A</p>
          </div>
        </div>

        {/* header mobile version */}
        <div className="col-span-2 block md:hidden  flex justify-center items-center">
          <Link href="/">
            <GrHomeRounded
              style={{
                width: "32px",
                height: "32px",
                display: "relative",
                color: "white",
              }}
            />
          </Link>
        </div>
        <div className="col-span-6 block md:hidden "></div>
        <div className="col-span-2  md:hidden  flex justify-center items-center">
          <LuSearch style={{ width: "28px", height: "28px" }} />
        </div>
        <div className="col-span-2  md:hidden  flex justify-center items-center">
          <div className=" bg-pink-400 w-[40px] h-[40px] rounded-full flex justify-center items-center ">
            <p>A</p>
          </div>
        </div>
      </header>
      <div className=" relative grid grid-cols-12  top-[10%] h-[80%]  ">
        <Sidebar data={data} />
        <div className=" col-span-12 md:col-span-9 ">
          <div className="">{children}</div>
          {/* Hasil pencarian */}
          {searchQuery && (
            <div className="mt-4">
              <h2 className="text-white mb-2">Search Results:</h2>
              {filteredResults.length > 0 ? (
                <ul className="text-white">
                  {filteredResults.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No results found.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className=" fixed bottom-0 w-full text-white h-[10%]">
        <Footer tracks={data} />
      </div>
    </div>
  );
}
