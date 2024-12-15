import { NextResponse } from "next/server";

export async function GET(request) {
  const data = [
    {
      id: 1,
      image: "/artist/adele.jpeg",
      artist: "Adele",
      banner: "/artist/banner-adele.jpeg",
      music: [
        {
          id: 1,
          image: "/artist/adele.jpeg",
          artist: "Adele",
          album: "21",
          title: "Dont You Remember",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/Adele_Dont_You_Remember.mp3",
        },
        {
          id: 2,
          image: "/artist/adele.jpeg",
          artist: "Adele",
          album: "21",
          title: "Set Fire to the Rain",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/Adele-Set-Fire-to-the-Rain.mp3",
        },
        {
          id: 3,
          image: "/artist/adele.jpeg",
          artist: "Adele",
          album: "21",
          title: "Someone Like You",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/Adele-Someone-Like-You.mp3",
        },
      ],
    },
    {
      id: 2,
      image: "/artist/ava_max.jpeg",
      artist: "Ava Max",
      banner: "/artist/banner-avamax.webp",
      music: [
        {
          id: 1,
          image: "/artist/ava_max.jpeg",
          artist: "Ava Max",
          album: "Heaven&Hell",
          title: "H.E.A.V.E.N",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/AVA-MAX-heaven.mp3",
        },
        {
          id: 2,
          image: "/artist/ava_max.jpeg",
          artist: "Ava Max",
          album: "Heaven&Hell",
          title: "Take You To Hell",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/AVA-MAX-Take-You-To-Hell.mp3",
        },
        {
          id: 3,
          image: "/artist/ava_max.jpeg",
          artist: "Ava Max",
          album: "Heaven&Hell",
          title: "So Am I",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/AvaMax_SoAmI.mp3",
        },
      ],
    },
    {
      id: 3,
      image: "/artist/babymonster.jpg",
      artist: "Baby Monster",
      banner: "/artist/banner-babymomster.jpg",
      music: [
        {
          id: 1,
          image: "/artist/babymonster.jpg",
          artist: "Baby Monster",
          album: "DRIP",
          title: "DRIP",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/BABYMONSTER_DRIP.mp3",
        },
        {
          id: 2,
          image: "/artist/babymonster.jpg",
          artist: "Baby Monster",
          album: "DRIP",
          title: "Take You To Hell",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/BABYMONSTER-click-clack.mp3",
        },
        {
          id: 3,
          image: "/artist/babymonster.jpg",
          artist: "Baby Monster",
          album: "DRIP",
          title: "So Am I",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/BABYMONSTER-forever.mp3",
        },
      ],
    },
  ];

  // Extract the `id` from the URL
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    // Filter data by the provided id
    const filteredData = data.find((item) => item.id === parseInt(id));
    return NextResponse.json(filteredData || {});
  }

  // Return all data if no id is provided
  return NextResponse.json(data);
}
