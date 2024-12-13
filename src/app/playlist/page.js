import Layout from "../components/Layout";
import { HiMiniMusicalNote } from "react-icons/hi2";
import Playlist from "../components/Playlist";

const page = () => {
  return (
    <Layout>
      <div className="overflow-y-scroll h-screen  mt-2 mx-2 rounded-md ">
        <div className=" h-[260px] flex items-center gap-4 px-4 bg-gradient-to-b from-zinc-600 to-zinc-900">
          <div className=" flex items-center justify-center bg-zinc-900 w-[150px] h-[150px] rounded-md">
            <HiMiniMusicalNote
              style={{ width: "60px", height: "60px", color: "gray" }}
            />
          </div>
          <div className="  h-[150px] ">
            <p className="text-white text-sm">Public Playlist</p>
            <p className="text-white text-[100px] font-extrabold -mt-6">
              My Playlist #4
            </p>
            <p className="text-white font-semibold -mt-4">Ayu Widya</p>
          </div>
        </div>

        <Playlist />
      </div>
    </Layout>
  );
};

export default page;
