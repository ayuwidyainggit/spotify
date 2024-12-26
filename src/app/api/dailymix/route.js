import { NextResponse } from "next/server";

export async function GET(request, Request) {
  const data = [
    {
      id: 1,
      title: "DAILY MIX 1",
      image: "/artist/dailymix1.png",
      artist: ["Armada", "D Bagindas", "Wali", "The Changcuters"],
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
          image: "/artist/ava_max.jpeg",
          artist: "Ava Max",
          album: "So Am I",
          title: "So Am I",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/AvaMax_SoAmI.mp3",
        },
        {
          id: 3,
          image: "/artist/babymonster.jpg",
          artist: "Baby Monster",
          album: "Drip",
          title: "Drip",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/BABYMONSTER_DRIP.mp3",
        },
      ],
    },
    {
      id: 2,
      title: "DAILY MIX 2",
      image: "/artist/dailymix2.png",
      artist: ["Bayu Skak", "Sule", "The Changcuters", "Ada Band"],
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
          image: "/artist/ava_max.jpeg",
          artist: "Ava Max",
          album: "So Am I",
          title: "So Am I",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/AvaMax_SoAmI.mp3",
        },
        {
          id: 3,
          image: "/artist/babymonster.jpg",
          artist: "Baby Monster",
          album: "Drip",
          title: "Drip",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/BABYMONSTER_DRIP.mp3",
        },
      ],
    },

    {
      id: 3,
      title: "DAILY MIX 3",
      image: "/artist/dailymix3.png",
      artist: ["Alan Walker", "Agnez Mo", "Rich Brian"],
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
          image: "/artist/ava_max.jpeg",
          artist: "Ava Max",
          album: "So Am I",
          title: "So Am I",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/AvaMax_SoAmI.mp3",
        },
        {
          id: 3,
          image: "/artist/babymonster.jpg",
          artist: "Baby Monster",
          album: "Drip",
          title: "Drip",
          DatedAdd: "2024-12-21T23:00:00",
          audio: "/audio/BABYMONSTER_DRIP.mp3",
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
  return NextResponse.json(data);
}
