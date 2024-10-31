import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Video,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const photos = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377991/Snapinsta.app_431739756_427005106456087_8575211153147516235_n_1080_but9nn.jpg",
    category: "wedding",
    videoUrl: "",
  },
  {
    id: 2,
    title: "Traditional weddings",
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439611193_727330789596898_3003562067357843882_n_1080_es00m5.jpg",
    category: "wedding",
    videoUrl: "",
  },
  {
    id: 3,
    title: "Luxury Birthday Gala",
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439556324_312460948611089_438385526687982987_n_1080_de3aqy.jpg",
    category: "birthday",
    videoUrl: "",
  },
  {
    id: 4,
    title: "Beachside Wedding",
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377980/Snapinsta.app_460166574_1885782978596943_2717914374280458260_n_1080_gojfgm.jpg",
    category: "wedding",
    videoUrl: "",
  },
  {
    id: 5,
    title: "Outdoor weddings",
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439312418_998341661859188_8912747865335100013_n_1080_fpkp9j.jpg",
    category: "wedding",
    videoUrl: "",
  },
];

const videos = [
  {
    id: 6,
    title: "Luxury Wedding Highlights",
    type: "video",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", //thumbnail
    videoUrl:
      "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730373544/Snapinsta.app_video_BC47949C1B862947444903A974C7439E_video_dashinit_cdrgei.mp4",
    category: "wedding",
  },
  {
    id: 7,
    title: "Traditional weddings",
    type: "video",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377992/Snapinsta.app_426720273_403364885535196_1906358770923866044_n_1080_bp6h7y.jpg",
    videoUrl:
      "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730377981/Bringing_your_dream_of_a_timeless_white_and_green_ceremony_to_life._Every_detail_reflects_the_natural_elegance_and_serenity_of_your_love_story._WhiteAndGreenElegance_bride_groom_eventplanner_eventdecor_qjm8ee.mp4",
    category: "wedding",
  },
  {
    id: 8,
    title: "Destination Wedding",
    type: "video",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
    videoUrl:
      "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730377981/Whites_and_greens_for_a_love_that_s_pure_and_timeless._nikkahdecor_elegantsimplicity_nikkah_bride_groom_zvdswe.mp4",
    category: "wedding",
  },
];

interface MediaItemProps {
  item: (typeof photos)[0] | (typeof videos)[0];
  onClick: () => void;
}

function MediaItem({ item, onClick }: MediaItemProps) {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      onClick={onClick}
    >
      <img
        src={
          item.type === "photo" ? item.url : (item as (typeof videos)[0]).url
        }
        alt={item.title}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {item.type === "video" && (
          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
            <Play className="h-8 w-8 text-white" />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-medium">{item.title}</h3>
        <p className="text-white/80 text-sm capitalize">{item.category}</p>
      </div>
    </div>
  );
}

export function MediaShowcase() {
  const [selectedMedia, setSelectedMedia] = useState<
    ((typeof photos)[0] | (typeof videos)[0]) | null
  >(null);
  const [activeTab, setActiveTab] = useState("photos");

  const currentList = activeTab === "photos" ? photos : videos;

  const handlePrevious = () => {
    if (!selectedMedia) return;
    const currentIndex = currentList.findIndex(
      (item) => item.id === selectedMedia.id
    );
    const previousIndex =
      (currentIndex - 1 + currentList.length) % currentList.length;
    setSelectedMedia(currentList[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedMedia) return;
    const currentIndex = currentList.findIndex(
      (item) => item.id === selectedMedia.id
    );
    const nextIndex = (currentIndex + 1) % currentList.length;
    setSelectedMedia(currentList[nextIndex]);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Event Gallery</h2>
          <p className="text-lg text-muted-foreground">
            Explore our collection of magical moments and celebrations
          </p>
        </div>

        <Tabs
          defaultValue="photos"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="photos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((item) => (
                <MediaItem
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedMedia(item)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((item) => (
                <MediaItem
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedMedia(item)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog
          open={!!selectedMedia}
          onOpenChange={() => setSelectedMedia(null)}
        >
          <DialogContent className="w-[90%] sm:w-[80%] max-w-4xl p-0 overflow-hidden bg-black">
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

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-xl font-medium">
                {selectedMedia?.title}
              </h3>
              <p className="text-white/80 capitalize">
                {selectedMedia?.category}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
