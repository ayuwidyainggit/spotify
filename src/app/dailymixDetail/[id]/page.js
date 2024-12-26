import ArtistDetail from "@/app/components/ArtistDetail";
import DailymixDetail from "@/app/components/DailymixDetail";
import Layout from "@/app/components/Layout";
import Playlist from "@/app/components/Playlist";
import Image from "next/image";

const page = () => {
  return (
    <Layout>
      <div className="overflow-y-scroll h-screen  mt-2 mx-2 rounded-md ">
        <DailymixDetail />
      </div>
    </Layout>
  );
};

export default page;
