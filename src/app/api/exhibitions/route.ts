import { NextRequest, NextResponse } from "next/server";
import {
  readExhibitions,
  createExhibition,
} from "@/lib/json-db";
import { CreateExhibitionDto } from "@/types";

/**
 * GET /api/exhibitions
 * List all exhibitions.
 */
export async function GET() {
  try {
    const exhibitions = await readExhibitions();
    return NextResponse.json(exhibitions);
  } catch (error) {
    console.error("Failed to read exhibitions:", error);
    return NextResponse.json(
      { error: "Failed to read exhibitions" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/exhibitions
 * Create a new exhibition.
 */
export async function POST(request: NextRequest) {
  try {
    const body: CreateExhibitionDto = await request.json();

    // Basic validation
    if (!body.title || !body.artist) {
      return NextResponse.json(
        { error: "Title and artist are required" },
        { status: 400 }
      );
    }

    const exhibition = await createExhibition({
      title: body.title,
      description: body.description || "",
      artist: body.artist,
      imageUrl: body.imageUrl || "",
      year: body.year || new Date().getFullYear(),
      category: body.category || "general",
    });

    return NextResponse.json(exhibition, { status: 201 });
  } catch (error) {
    console.error("Failed to create exhibition:", error);
    return NextResponse.json(
      { error: "Failed to create exhibition" },
      { status: 500 }
    );
  }
}
