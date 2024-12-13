import { NextResponse } from "next/server";

export async function GET(request) {
  const data = [
    {
      id: 1,
      image: "/artist/adele.jpeg",
      artist: "Adele",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
    {
      id: 2,
      image: "/artist/ava_max.jpeg",
      artist: "Ava Max",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
    {
      id: 3,
      image: "/artist/avengedSevenfold.jpeg",
      artist: "Avenged Sevenfold",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
    {
      id: 4,
      image: "/artist/billie_eilish.jpeg",
      artist: "Billie Eilish",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
    {
      id: 5,
      image: "/artist/blackpink.jpg",
      artist: "Blackpink",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
    {
      id: 6,
      image: "/artist/brunomars.jpeg",
      artist: "Bruno Mars",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
    {
      id: 7,
      image: "/artist/BTS.webp",
      artist: "BTS",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
    {
      id: 8,
      image: "/artist/taylorSwift.webp",
      artist: "Taylor Swift",
      album: "21",
      title: "Set Fire To The Rain",
      DatedAdd: "2024-12-21T23:00:00",
    },
  ];

  return NextResponse.json(data);
}
