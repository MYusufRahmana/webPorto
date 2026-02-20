// app/lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get full URL for image files
 */
export function getImageUrl(path: string | null | undefined): string | null {
  if (!path) return null;

  // Jika sudah full URL
  if (path.startsWith("http")) {
    return path;
  }

  // Hapus 'storage/' jika sudah ada di path
  const cleanPath = path.replace(/^storage\//, "");

  // Gunakan environment variable
  const baseUrl =
    process.env.NEXT_PUBLIC_STORAGE_URL || "http://localhost:8000/storage";
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Get full URL for file attachments (certificates, CV, etc)
 */
export function getFileUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (path.startsWith("http")) return path;

  const cleanPath = path.replace(/^storage\//, "");
  const baseUrl =
    process.env.NEXT_PUBLIC_STORAGE_URL || "http://localhost:8000/storage";
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Parse JSON string to array safely
 */
export function parseJsonArray<T>(json: string | T[] | null | undefined): T[] {
  if (!json) return [];

  if (Array.isArray(json)) {
    return json;
  }

  if (typeof json === "string") {
    try {
      const parsed = JSON.parse(json);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  return [];
}
