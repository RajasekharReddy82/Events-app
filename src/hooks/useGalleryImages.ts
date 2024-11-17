import { useState, useEffect, useCallback } from "react";
import { IGalleryTypes } from "@/types/gallery";
import { fetchGalleryImages } from "@/lib/api";

export function useGalleryImages() {
  const [images, setImages] = useState<IGalleryTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const loadImages = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const data = await fetchGalleryImages();
      setImages(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load images";
      setError(errorMessage);
      console.error("Gallery error:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  return {
    images,
    isLoading,
    error,
    retry: loadImages,
  };
}
