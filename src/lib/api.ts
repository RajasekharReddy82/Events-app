import { IGalleryTypes } from "@/types/gallery";

const ROOT_URL = "https://ascenteventsbackend.vercel.app";
const API_URL = `${ROOT_URL}/api/images`;
const CACHE_KEY = "gallery_images";
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes

interface CacheData {
  timestamp: number;
  data: IGalleryTypes[];
}

export async function fetchGalleryImages(): Promise<IGalleryTypes[]> {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { timestamp, data }: CacheData = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (!data || !Array.isArray(data.resources)) {
      throw new Error("Invalid response format");
    }

    const images = data.resources;
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), data: images })
    );

    return images;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Gallery fetch failed: ${error.message}`);
    }
    throw new Error("Gallery fetch failed: Unknown error");
  }
}
