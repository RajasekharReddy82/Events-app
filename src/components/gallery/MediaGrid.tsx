import { memo } from "react";
import { ImageIcon, Video } from "lucide-react";
import { MediaItem } from "@/types/gallery";

interface MediaGridProps {
  items: MediaItem[];
  onSelect: (item: MediaItem) => void;
}

const MediaItemComponent = memo(
  ({ item, onClick }: { item: MediaItem; onClick: () => void }) => {
    // Generate thumbnail URL for videos by appending video transformation parameters
    const thumbnailUrl =
      item.type === "video"
        ? item.url.replace(
            "/upload/",
            "/upload/w_800,h_600,c_fill,q_auto,f_jpg/"
          )
        : item.url;

    return (
      <div
        className="relative group cursor-pointer overflow-hidden rounded-xl"
        onClick={onClick}
      >
        <img
          src={thumbnailUrl}
          alt={item.title}
          loading="lazy"
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-10">
          <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
            {item.type === "photo" ? (
              <ImageIcon className="h-4 w-4 text-white" />
            ) : (
              <Video className="h-4 w-4 text-white" />
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {item.type === "video" && (
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
              <Video className="h-8 w-8 text-white" />
            </div>
          )}
        </div>
      </div>
    );
  }
);

MediaItemComponent.displayName = "MediaItemComponent";

export const MediaGrid = memo(({ items, onSelect }: MediaGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item) => (
      <MediaItemComponent
        key={item.id}
        item={item}
        onClick={() => onSelect(item)}
      />
    ))}
  </div>
));

MediaGrid.displayName = "MediaGrid";
