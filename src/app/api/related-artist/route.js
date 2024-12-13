import { NextResponse } from "next/server";

export async function GET(request) {
  const data = [
    { id: 1, image: "/artist/adele.jpeg", artist: "Adele" },
    { id: 2, image: "/artist/ava_max.jpeg", artist: "Ava Max" },
    {
      id: 3,
      image: "/artist/avengedSevenfold.jpeg",
      artist: "Avenged Sevenfold",
    },
    { id: 4, image: "/artist/billie_eilish.jpeg", artist: "Billie Eilish" },
    { id: 5, image: "/artist/blackpink.jpg", artist: "Blackpink" },
    { id: 6, image: "/artist/brunomars.jpeg", artist: "Bruno Mars" },
    { id: 7, image: "/artist/BTS.webp", artist: "BTS" },
    { id: 8, image: "/artist/taylorSwift.webp", artist: "Taylor Swift" },
  ];

  return NextResponse.json(data);
}
