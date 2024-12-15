import { NextResponse } from "next/server";

let data = [
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
];
export async function GET() {
  return NextResponse.json(data);
}

export async function POST(request) {
  const { id } = await request.json();
  const { image } = await request.json();
  const { artist } = await request.json();
  const { album } = await request.json();
  const { title } = await request.json();
  const { DatedAdd } = await request.json();
  const { audio } = await request.json();

  const newData = { id, image, artist, album, DatedAdd: Date.now(), audio };
  data.push(newData);
  return NextResponse.json(newData, { status: 201 });
}
