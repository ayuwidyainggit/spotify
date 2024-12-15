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
  try {
    // Parse the request body
    const items = await request.json();

    // Check if the data is an array
    if (!Array.isArray(items)) {
      throw new Error("Expected an array of items");
    }

    // Validate each item
    items.forEach((item) => {
      const { id, image, artist, album, title, audio } = item;
      if (!id || !image || !artist || !album || !title || !audio) {
        throw new Error("Missing required fields in one of the items");
      }
    });

    // Clear the current data array and replace it with the new items
    data = items.map((item) => ({
      ...item,
      DatedAdd: new Date().toISOString(), // Set the current timestamp
    }));

    // Respond with the updated items
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
