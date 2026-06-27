import { NextRequest, NextResponse } from "next/server";
import {
  getExhibitionById,
  updateExhibition,
  deleteExhibition,
} from "@/lib/json-db";

/**
 * GET /api/exhibitions/:id
 * Get a single exhibition by ID.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const exhibition = await getExhibitionById(id);

    if (!exhibition) {
      return NextResponse.json(
        { error: "Exhibition not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(exhibition);
  } catch (error) {
    console.error("Failed to get exhibition:", error);
    return NextResponse.json(
      { error: "Failed to get exhibition" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/exhibitions/:id
 * Update an exhibition by ID.
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updated = await updateExhibition(id, body);

    if (!updated) {
      return NextResponse.json(
        { error: "Exhibition not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Failed to update exhibition:", error);
    return NextResponse.json(
      { error: "Failed to update exhibition" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/exhibitions/:id
 * Delete an exhibition by ID.
 */
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = await deleteExhibition(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Exhibition not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Exhibition deleted" });
  } catch (error) {
    console.error("Failed to delete exhibition:", error);
    return NextResponse.json(
      { error: "Failed to delete exhibition" },
      { status: 500 }
    );
  }
}
