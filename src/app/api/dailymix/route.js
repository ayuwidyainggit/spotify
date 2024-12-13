import { NextResponse } from "next/server";

export async function GET(request, Request) {
  const data = [
    {
      id: 1,
      image: "/artist/adele.jpeg",
      artist: ["Adele", "Ava Max", "Billie Eilish"],
    },
    {
      id: 2,
      image: "/artist/adele.jpeg",
      artist: ["Adele", "Ava Max", "Billie Eilish"],
    },
    {
      id: 3,
      image: "/artist/adele.jpeg",
      artist: ["Adele", "Ava Max", "Billie Eilish"],
    },
    {
      id: 4,
      image: "/artist/adele.jpeg",
      artist: ["Adele", "Ava Max", "Billie Eilish"],
    },
    {
      id: 5,
      image: "/artist/adele.jpeg",
      artist: ["Adele", "Ava Max", "Billie Eilish"],
    },
    {
      id: 6,
      image: "/artist/adele.jpeg",
      artist: ["Adele", "Ava Max", "Billie Eilish"],
    },
  ];

  return NextResponse.json(data);
}
