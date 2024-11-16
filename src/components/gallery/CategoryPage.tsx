import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";

interface MediaItem {
  id: number;
  type: "photo" | "video";
  url: string;
  videoUrl?: string;
  title: string;
  category: string;
}

interface MediaItemProps {
  item: MediaItem;
  onClick: () => void;
}

const mediaData: Record<string, MediaItem[]> = {
  beach: [
    {
      id: 1,
      type: "photo",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377991/Snapinsta.app_431739756_427005106456087_8575211153147516235_n_1080_but9nn.jpg",
      title: "Sunset Beach Wedding",
      category: "beach"
    },
    {
      id: 2,
      type: "photo",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439611193_727330789596898_3003562067357843882_n_1080_es00m5.jpg",
      title: "Beach Ceremony Setup",
      category: "beach"
    },
    {
      id: 3,
      type: "video",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439556324_312460948611089_438385526687982987_n_1080_de3aqy.jpg",
      videoUrl: "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730373544/Snapinsta.app_video_BC47949C1B862947444903A974C7439E_video_dashinit_cdrgei.mp4",
      title: "Beach Event Highlights",
      category: "beach"
    }
  ],
  birthday: [
    {
      id: 4,
      type: "photo",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377980/Snapinsta.app_460166574_1885782978596943_2717914374280458260_n_1080_gojfgm.jpg",
      title: "Birthday Party Setup",
      category: "birthday"
    },
    {
      id: 5,
      type: "video",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439312418_998341661859188_8912747865335100013_n_1080_fpkp9j.jpg",
      videoUrl: "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730377981/Bringing_your_dream_of_a_timeless_white_and_green_ceremony_to_life._Every_detail_reflects_the_natural_elegance_and_serenity_of_your_love_story._WhiteAndGreenElegance_bride_groom_eventplanner_eventdecor_qjm8ee.mp4",
      title: "Birthday Celebration",
      category: "birthday"
    }
  ],
  wedding: [
    {
      id: 6,
      type: "photo",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377992/Snapinsta.app_426720273_403364885535196_1906358770923866044_n_1080_bp6h7y.jpg",
      title: "Wedding Ceremony",
      category: "wedding"
    },
    {
      id: 7,
      type: "video",
      url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377991/Snapinsta.app_431739756_427005106456087_8575211153147516235_n_1080_but9nn.jpg",
      videoUrl: "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730377981/Whites_and_greens_for_a_love_that_s_pure_and_timeless._nikkahdecor_elegantsimplicity_nikkah_bride_groom_zvdswe.mp4",
      title: "Wedding Highlights",
      category: "wedding"
    }
  ]
};

function MediaItem({ item, onClick }: MediaItemProps) {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      onClick={onClick}
    >
      <img
        src={item.url}
        alt={item.title}
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

export function CategoryPage() {
  const { category = "" } = useParams();
  const navigate = useNavigate();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categoryMedia = mediaData[category] || [];
  const filteredMedia = activeFilter === "all" 
    ? categoryMedia
    : categoryMedia.filter(item => item.type === activeFilter);

  const categoryTitles: Record<string, string> = {
    beach: "Beach Events",
    birthday: "Birthday Celebrations",
    wedding: "Wedding Ceremonies"
  };

  const categoryDescriptions: Record<string, string> = {
    beach: "Explore our collection of stunning beachside celebrations",
    birthday: "Discover our magical birthday celebration moments",
    wedding: "Browse through our elegant wedding ceremonies"
  };

  const handlePrevious = () => {
    if (!selectedMedia) return;
    const currentIndex = categoryMedia.findIndex(item => item.id === selectedMedia.id);
    const previousIndex = (currentIndex - 1 + categoryMedia.length) % categoryMedia.length;
    setSelectedMedia(categoryMedia[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedMedia) return;
    const currentIndex = categoryMedia.findIndex(item => item.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % categoryMedia.length;
    setSelectedMedia(categoryMedia[nextIndex]);
  };

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 shadow-sm border-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-full px-6"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">{categoryTitles[category]}</h1>
          <p className="text-lg text-gray-600">{categoryDescriptions[category]}</p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm">
            <Button
              variant={activeFilter === "all" ? "default" : "ghost"}
              onClick={() => setActiveFilter("all")}
              className="rounded-full px-6"
            >
              All
            </Button>
            <Button
              variant={activeFilter === "photo" ? "default" : "ghost"}
              onClick={() => setActiveFilter("photo")}
              className="rounded-full px-6"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Photos
            </Button>
            <Button
              variant={activeFilter === "video" ? "default" : "ghost"}
              onClick={() => setActiveFilter("video")}
              className="rounded-full px-6"
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <MediaItem
              key={item.id}
              item={item}
              onClick={() => setSelectedMedia(item)}
            />
          ))}
        </div>

        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
            <DialogTitle className="sr-only">
              {selectedMedia?.title || "Media Viewer"}
            </DialogTitle>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-10 text-white hover:bg-white/20"
              onClick={() => setSelectedMedia(null)}
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

            {selectedMedia?.type === "photo" ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : selectedMedia?.type === "video" ? (
              <video
                src={selectedMedia.videoUrl}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
              />
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}