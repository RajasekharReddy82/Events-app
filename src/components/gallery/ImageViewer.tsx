import { memo } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { MediaItem } from "@/types/gallery";

interface ImageViewerProps {
  media: MediaItem | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const NavButton = memo(
  ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick: () => void;
  }) => (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
      onClick={onClick}
      style={{ [direction]: "1rem" }}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6" />
      ) : (
        <ChevronRight className="h-6 w-6" />
      )}
    </Button>
  )
);

NavButton.displayName = "NavButton";

export const ImageViewer = memo(
  ({ media, onClose, onPrevious, onNext }: ImageViewerProps) => {
    if (!media) return null;

    return (
      <Dialog open={!!media} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <DialogTitle className="sr-only">Media Viewer</DialogTitle>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>

          <NavButton direction="left" onClick={onPrevious} />
          <NavButton direction="right" onClick={onNext} />

          {media.type === "photo" ? (
            <img
              src={media.fullUrl}
              alt={media.title}
              className="w-full h-auto max-h-[80vh] object-contain"
              loading="eager"
            />
          ) : media.type === "video" && media.videoUrl ? (
            <video
              src={media.videoUrl}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh]"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    );
  }
);

ImageViewer.displayName = "ImageViewer";
