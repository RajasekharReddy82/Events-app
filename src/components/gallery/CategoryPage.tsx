import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ImageIcon, Video, Loader2, RefreshCcw } from "lucide-react";
import { MediaGrid } from "./MediaGrid";
import { ImageViewer } from "./ImageViewer";
import { useGalleryImages } from "@/hooks/useGalleryImages";
import { IGalleryTypes, MediaItem } from "@/types/gallery";

// Transform API data to MediaItem format
const transformApiData = (apiItem: IGalleryTypes): MediaItem => ({
  id: apiItem.asset_id,
  title: apiItem.display_name,
  type: apiItem.resource_type === "video" ? "video" : "photo",
  url: apiItem.secure_url.replace("/upload/", "/upload/c_scale,w_800,q_auto/"),
  fullUrl: apiItem.secure_url,
  category: apiItem.asset_folder,
  videoUrl: apiItem.resource_type === "video" ? apiItem.secure_url : undefined,
});

export function CategoryPage() {
  const navigate = useNavigate();
  const { images, isLoading, error, retry } = useGalleryImages();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "photo" | "video">(
    "all"
  );

  const mediaData = useMemo(() => images.map(transformApiData), [images]);

  const filteredMedia = useMemo(
    () =>
      activeFilter === "all"
        ? mediaData
        : mediaData.filter((item) => item.type === activeFilter),
    [activeFilter, mediaData]
  );

  const handlePrevious = () => {
    if (!selectedMedia) return;
    const currentIndex = mediaData.findIndex(
      (item) => item.id === selectedMedia.id
    );
    const previousIndex =
      (currentIndex - 1 + mediaData.length) % mediaData.length;
    setSelectedMedia(mediaData[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedMedia) return;
    const currentIndex = mediaData.findIndex(
      (item) => item.id === selectedMedia.id
    );
    const nextIndex = (currentIndex + 1) % mediaData.length;
    setSelectedMedia(mediaData[nextIndex]);
  };

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 shadow-sm border-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-full px-6"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>

          <div className="flex gap-4">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className="rounded-full w-10 h-10 p-0"
            >
              <span className="sr-only">All</span>
              <span className="text-sm">All</span>
            </Button>
            <Button
              variant={activeFilter === "photo" ? "default" : "outline"}
              onClick={() => setActiveFilter("photo")}
              className="rounded-full w-10 h-10 p-0"
            >
              <span className="sr-only">Photos</span>
              <ImageIcon className="w-4 h-4" />
            </Button>
            <Button
              variant={activeFilter === "video" ? "default" : "outline"}
              onClick={() => setActiveFilter("video")}
              className="rounded-full w-10 h-10 p-0"
            >
              <span className="sr-only">Videos</span>
              <Video className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20">
            <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin mb-4" />
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="mb-4">
              <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Failed to load gallery
            </h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button
              variant="outline"
              onClick={retry}
              className="inline-flex items-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </Button>
          </div>
        ) : filteredMedia.length > 0 ? (
          <MediaGrid items={filteredMedia} onSelect={setSelectedMedia} />
        ) : (
          <div className="text-center py-20">
            <div className="mb-4">
              {activeFilter === "video" ? (
                <Video className="w-12 h-12 mx-auto text-gray-400" />
              ) : (
                <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {activeFilter === "all" ? "media" : activeFilter + "s"}{" "}
              available
            </h3>
            <p className="text-gray-600">Check back later for updates</p>
          </div>
        )}

        <ImageViewer
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
