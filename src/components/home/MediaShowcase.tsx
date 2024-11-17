import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageIcon, ArrowRight, Loader2, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { IGalleryTypes } from "@/types/gallery";
import { useGalleryImages } from "@/hooks/useGalleryImages";

// Memoized Image Component with loading optimization
const GalleryImage = memo(
  ({
    item,
    index,
    onNavigate,
  }: {
    item: IGalleryTypes;
    index: number;
    onNavigate: () => void;
  }) => {
    // Generate optimized image URL for thumbnails
    const thumbnailUrl = item.secure_url.replace(
      "/upload/",
      "/upload/c_scale,w_800,q_auto/"
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group cursor-pointer"
        onClick={onNavigate}
      >
        <div className="relative overflow-hidden rounded-xl shadow-md">
          <img
            src={thumbnailUrl}
            alt={item.display_name}
            loading={index < 3 ? "eager" : "lazy"}
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            decoding="async"
          />
          <div className="absolute top-4 right-4 z-10">
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <ImageIcon className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
        </div>
      </motion.div>
    );
  }
);

GalleryImage.displayName = "GalleryImage";

// Fallback component for loading and error states
const GalleryFallback = memo(
  ({ error, onRetry }: { error?: string; onRetry?: () => void }) => (
    <div className="col-span-full py-20 text-center">
      {error ? (
        <div className="space-y-4">
          <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
          <p className="text-gray-600 mb-4">{error}</p>
          {onRetry && (
            <Button
              variant="outline"
              onClick={onRetry}
              className="inline-flex items-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </Button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      )}
    </div>
  )
);

GalleryFallback.displayName = "GalleryFallback";

export function MediaShowcase() {
  const navigate = useNavigate();
  const { images, isLoading, error, retry } = useGalleryImages();

  const handleNavigate = () => navigate("/gallery");

  // Fallback images for static data
  const fallbackImages: IGalleryTypes[] = [
    {
      asset_id: 45,
      display_name: "Event Setup",
      secure_url:
        "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731782398/IMG_2973_nadgzg.jpg",
      asset_folder: "fallback",
      bytes: 0,
      created_at: "",
      format: "jpg",
      height: 300,
      public_id: "fallback_image",
      resource_type: "image",
      type: "upload",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731782398/IMG_2973_nadgzg.jpg",
      version: 1,
      width: 300,
    },
  ];

  // Use fallback images if API fails
  const displayImages = images.length > 0 ? images : fallbackImages;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of magical moments and celebrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            <GalleryFallback />
          ) : error ? (
            <GalleryFallback error={error} onRetry={retry} />
          ) : (
            displayImages
              .filter((item) => item.resource_type === "image")
              .slice(0, 6)
              .map((item, index) => (
                <GalleryImage
                  key={item.asset_id}
                  item={item}
                  index={index}
                  onNavigate={handleNavigate}
                />
              ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleNavigate}
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 rounded-full text-lg font-medium group"
          >
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
