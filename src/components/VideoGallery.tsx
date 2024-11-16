import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videos = [
  {
    id: 1,
    title: "Luxury Wedding Highlights",
    thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-together-in-the-sunset-42557-large.mp4",
    description: "Highlights from an elegant wedding featuring stunning decorations and emotional moments."
  },
  {
    id: 2,
    title: "Corporate Awards Gala",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-people-toasting-at-a-celebration-4640-large.mp4",
    description: "Annual corporate awards ceremony celebrating excellence and achievement."
  },
  {
    id: 3,
    title: "Destination Wedding",
    thumbnail: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-couple-walking-and-hugging-on-the-beach-42590-large.mp4",
    description: "A magical destination wedding set against breathtaking natural backdrops."
  }
];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setSelectedVideo(videos[(currentIndex - 1 + videos.length) % videos.length]);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setSelectedVideo(videos[(currentIndex + 1) % videos.length]);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Video Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <Card 
            key={video.id}
            className="cursor-pointer group overflow-hidden hover:shadow-xl transition-all duration-300"
            onClick={() => {
              setSelectedVideo(video);
              setCurrentIndex(index);
            }}
          >
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{video.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <DialogTitle className="sr-only">{selectedVideo?.title}</DialogTitle>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 text-white hover:bg-white/20"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {selectedVideo && (
            <>
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                playsInline
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-medium">{selectedVideo.title}</h3>
                <p className="text-white/80 mt-2">{selectedVideo.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}