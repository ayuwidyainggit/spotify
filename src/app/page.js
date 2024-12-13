import Image from "next/image";
import Layout from "./components/Layout";
import Play from "./components/Play";
import HomeSpotify from "./components/HomeSpotify";

export default function Home() {
  return (
    <Layout>
      <div className="overflow-y-scroll h-screen">
        <HomeSpotify />
      </div>
    </Layout>
  );
}
