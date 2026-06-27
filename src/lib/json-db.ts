import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { Exhibition } from "@/types";

// On Vercel, /tmp is the only writable directory for serverless functions.
// For local dev, we use ./data/ directory.
const isVercel = process.env.VERCEL === "1";
const DATA_DIR = isVercel ? "/tmp" : path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "exhibitions.json");

/**
 * Ensure data directory and file exist before any read/write.
 */
async function ensureDb(): Promise<void> {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  if (!existsSync(DB_FILE)) {
    await writeFile(DB_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

/**
 * Read all exhibitions from JSON file.
 */
export async function readExhibitions(): Promise<Exhibition[]> {
  await ensureDb();
  const raw = await readFile(DB_FILE, "utf-8");
  return JSON.parse(raw) as Exhibition[];
}

/**
 * Write all exhibitions to JSON file.
 */
async function writeExhibitions(exhibitions: Exhibition[]): Promise<void> {
  await ensureDb();
  await writeFile(DB_FILE, JSON.stringify(exhibitions, null, 2), "utf-8");
}

/**
 * Get exhibition by ID.
 */
export async function getExhibitionById(
  id: string
): Promise<Exhibition | undefined> {
  const exhibitions = await readExhibitions();
  return exhibitions.find((e) => e.id === id);
}

/**
 * Create a new exhibition.
 */
export async function createExhibition(
  data: Omit<Exhibition, "id" | "createdAt" | "updatedAt">
): Promise<Exhibition> {
  const exhibitions = await readExhibitions();
  const now = new Date().toISOString();
  const newExhibition: Exhibition = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
  exhibitions.push(newExhibition);
  await writeExhibitions(exhibitions);
  return newExhibition;
}

/**
 * Update an exhibition by ID.
 */
export async function updateExhibition(
  id: string,
  data: Partial<Omit<Exhibition, "id" | "createdAt" | "updatedAt">>
): Promise<Exhibition | null> {
  const exhibitions = await readExhibitions();
  const index = exhibitions.findIndex((e) => e.id === id);
  if (index === -1) return null;

  exhibitions[index] = {
    ...exhibitions[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await writeExhibitions(exhibitions);
  return exhibitions[index];
}

/**
 * Delete an exhibition by ID.
 */
export async function deleteExhibition(id: string): Promise<boolean> {
  const exhibitions = await readExhibitions();
  const index = exhibitions.findIndex((e) => e.id === id);
  if (index === -1) return false;

  exhibitions.splice(index, 1);
  await writeExhibitions(exhibitions);
  return true;
}
