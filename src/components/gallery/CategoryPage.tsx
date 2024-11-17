// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowLeft,
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Image as ImageIcon,
//   Video,
// } from "lucide-react";
// import { motion } from "framer-motion";

// interface MediaItem {
//   id: number;
//   type: "photo" | "video";
//   url: string;
//   videoUrl?: string;
//   title: string;
//   category: string;
// }

// interface MediaItemProps {
//   item: MediaItem;
//   onClick: () => void;
// }

// const mediaData: Record<string, MediaItem[]> = {
//   beach: [
//     {
//       id: 1,
//       type: "photo",
//       url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377991/Snapinsta.app_431739756_427005106456087_8575211153147516235_n_1080_but9nn.jpg",
//       title: "Sunset Beach Wedding",
//       category: "beach",
//     },
//     {
//       id: 2,
//       type: "photo",
//       url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439611193_727330789596898_3003562067357843882_n_1080_es00m5.jpg",
//       title: "Beach Ceremony Setup",
//       category: "beach",
//     },
//     {
//       id: 3,
//       type: "video",
//       url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439556324_312460948611089_438385526687982987_n_1080_de3aqy.jpg",
//       videoUrl:
//         "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730373544/Snapinsta.app_video_BC47949C1B862947444903A974C7439E_video_dashinit_cdrgei.mp4",
//       title: "Beach Event Highlights",
//       category: "beach",
//     },
//   ],
//   birthday: [
//     {
//       id: 4,
//       type: "photo",
//       url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377980/Snapinsta.app_460166574_1885782978596943_2717914374280458260_n_1080_gojfgm.jpg",
//       title: "Birthday Party Setup",
//       category: "birthday",
//     },
//     {
//       id: 5,
//       type: "video",
//       url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439312418_998341661859188_8912747865335100013_n_1080_fpkp9j.jpg",
//       videoUrl:
//         "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730377981/Bringing_your_dream_of_a_timeless_white_and_green_ceremony_to_life._Every_detail_reflects_the_natural_elegance_and_serenity_of_your_love_story._WhiteAndGreenElegance_bride_groom_eventplanner_eventdecor_qjm8ee.mp4",
//       title: "Birthday Celebration",
//       category: "birthday",
//     },
//   ],
//   wedding: [
//     {
//       id: 6,
//       type: "photo",
//       url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377992/Snapinsta.app_426720273_403364885535196_1906358770923866044_n_1080_bp6h7y.jpg",
//       title: "Wedding Ceremony",
//       category: "wedding",
//     },
//     {
//       id: 7,
//       type: "video",
//       url: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377991/Snapinsta.app_431739756_427005106456087_8575211153147516235_n_1080_but9nn.jpg",
//       videoUrl:
//         "https://res.cloudinary.com/dmxc84rqd/video/upload/v1730377981/Whites_and_greens_for_a_love_that_s_pure_and_timeless._nikkahdecor_elegantsimplicity_nikkah_bride_groom_zvdswe.mp4",
//       title: "Wedding Highlights",
//       category: "wedding",
//     },
//   ],
// };

// function MediaItem({ item, onClick }: MediaItemProps) {
//   // const [images, setImages] = useState([]);
//   // const [error, setError] = useState("");

//   // console.log(images, error);

//   // useEffect(() => {
//   //   const fetchImages = async () => {
//   //     try {
//   //       const response = await fetch("http://localhost:5000/api/images");
//   //       const data = await response.json();
//   //       setImages(data.resources); // Use the `resources` array from Cloudinary API response
//   //     } catch (err) {
//   //       setError("Failed to fetch images.");
//   //       console.error(err);
//   //     }
//   //   };

//   //   fetchImages();
//   // }, []);

//   return (
//     <div
//       className="relative group cursor-pointer overflow-hidden rounded-xl"
//       onClick={onClick}
//     >
//       <img
//         src={item.url}
//         alt={item.title}
//         className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//       <div className="absolute top-4 right-4 z-10">
//         <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
//           {item.type === "photo" ? (
//             <ImageIcon className="h-4 w-4 text-white" />
//           ) : (
//             <Video className="h-4 w-4 text-white" />
//           )}
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//         {item.type === "video" && (
//           <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
//             <Video className="h-8 w-8 text-white" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export function CategoryPage() {
//   const { category = "" } = useParams();
//   const navigate = useNavigate();
//   const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
//   const [activeFilter, setActiveFilter] = useState("all");

//   const categoryMedia = mediaData[category] || [];
//   const filteredMedia =
//     activeFilter === "all"
//       ? categoryMedia
//       : categoryMedia.filter((item) => item.type === activeFilter);

//   const categoryTitles: Record<string, string> = {
//     beach: "Beach Events",
//     birthday: "Birthday Celebrations",
//     wedding: "Wedding Ceremonies",
//   };

//   const categoryDescriptions: Record<string, string> = {
//     beach: "Explore our collection of stunning beachside celebrations",
//     birthday: "Discover our magical birthday celebration moments",
//     wedding: "Browse through our elegant wedding ceremonies",
//   };

//   const handlePrevious = () => {
//     if (!selectedMedia) return;
//     const currentIndex = categoryMedia.findIndex(
//       (item) => item.id === selectedMedia.id
//     );
//     const previousIndex =
//       (currentIndex - 1 + categoryMedia.length) % categoryMedia.length;
//     setSelectedMedia(categoryMedia[previousIndex]);
//   };

//   const handleNext = () => {
//     if (!selectedMedia) return;
//     const currentIndex = categoryMedia.findIndex(
//       (item) => item.id === selectedMedia.id
//     );
//     const nextIndex = (currentIndex + 1) % categoryMedia.length;
//     setSelectedMedia(categoryMedia[nextIndex]);
//   };

//   return (
//     <div className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between mb-8">
//           <Button
//             variant="outline"
//             size="lg"
//             className="flex items-center gap-2 bg-white hover:bg-gray-50 shadow-sm border-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-full px-6"
//             onClick={() => navigate("/")}
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Home
//           </Button>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-bold mb-4">
//             {categoryTitles[category]}
//           </h1>
//           <p className="text-lg text-gray-600">
//             {categoryDescriptions[category]}
//           </p>
//         </motion.div>

//         <div className="flex justify-center mb-12">
//           <div className="flex gap-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm">
//             <Button
//               variant={activeFilter === "all" ? "default" : "ghost"}
//               onClick={() => setActiveFilter("all")}
//               className="rounded-full px-6"
//             >
//               All
//             </Button>
//             <Button
//               variant={activeFilter === "photo" ? "default" : "ghost"}
//               onClick={() => setActiveFilter("photo")}
//               className="rounded-full px-6"
//             >
//               <ImageIcon className="w-4 h-4 mr-2" />
//               Photos
//             </Button>
//             <Button
//               variant={activeFilter === "video" ? "default" : "ghost"}
//               onClick={() => setActiveFilter("video")}
//               className="rounded-full px-6"
//             >
//               <Video className="w-4 h-4 mr-2" />
//               Videos
//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredMedia.map((item) => (
//             <MediaItem
//               key={item.id}
//               item={item}
//               onClick={() => setSelectedMedia(item)}
//             />
//           ))}
//         </div>

//         <Dialog
//           open={!!selectedMedia}
//           onOpenChange={() => setSelectedMedia(null)}
//         >
//           <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
//             <DialogTitle className="sr-only">
//               {selectedMedia?.title || "Media Viewer"}
//             </DialogTitle>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-4 top-4 z-10 text-white hover:bg-white/20"
//               onClick={() => setSelectedMedia(null)}
//             >
//               <X className="h-6 w-6" />
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
//               onClick={handlePrevious}
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </Button>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
//               onClick={handleNext}
//             >
//               <ChevronRight className="h-6 w-6" />
//             </Button>

//             {selectedMedia?.type === "photo" ? (
//               <img
//                 src={selectedMedia.url}
//                 alt={selectedMedia.title}
//                 className="w-full h-auto max-h-[80vh] object-contain"
//               />
//             ) : selectedMedia?.type === "video" ? (
//               <video
//                 src={selectedMedia.videoUrl}
//                 controls
//                 autoPlay
//                 className="w-full h-auto max-h-[80vh]"
//               />
//             ) : null}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

import { useState, useMemo, memo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ImageIcon,
  Video,
} from "lucide-react";

interface MediaItem {
  id: number;
  title: string;
  type: "photo" | "video";
  url: string;
  fullUrl: string;
  videoUrl?: string;
  category: string;
}

// Memoized Media Item Component
const MediaItemComponent = memo(
  ({ item, onClick }: { item: MediaItem; onClick: () => void }) => (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      onClick={onClick}
    >
      <img
        src={item.url}
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
  )
);

MediaItemComponent.displayName = "MediaItemComponent";

// Navigation Button Component
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

export function CategoryPage() {
  const { category = "" } = useParams();
  const navigate = useNavigate();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  console.log(images, error);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/images");
        const data = await response.json();
        setImages(data.resources); // Use the `resources` array from Cloudinary API response
      } catch (err) {
        setError("Failed to fetch images.");
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  const categoryMedia = useMemo(
    () => [
      {
        id: 1,
        title: "Event Setup",
        type: "photo",
        url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731782398/IMG_2973_nadgzg.jpg",
        fullUrl:
          "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731782398/IMG_2973_nadgzg.jpg",
        category: "larkfield",
      },
      {
        id: 2,
        title: "Venue Decoration",
        type: "photo",
        url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731782087/IMG_2971_yaojri.jpg",
        fullUrl:
          "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731782087/IMG_2971_yaojri.jpg",
        category: "larkfield",
      },
      {
        id: 3,
        title: "Wedding Setup",
        type: "photo",
        url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731781239/DJI_20240914_084842_834_ft7422.jpg",
        fullUrl:
          "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731781239/DJI_20240914_084842_834_ft7422.jpg",
        category: "larkfield",
      },
      {
        id: 4,
        title: "Event Decor",
        type: "photo",
        url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731781103/IMG_2638_x2i4n1.jpg",
        fullUrl:
          "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731781103/IMG_2638_x2i4n1.jpg",
        category: "larkfield",
      },
      {
        id: 5,
        title: "Venue Setup",
        type: "photo",
        url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731780975/DJI_20240923_165716_024_dtlvhb.jpg",
        fullUrl:
          "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731780975/DJI_20240923_165716_024_dtlvhb.jpg",
        category: "larkfield",
      },
      {
        id: 6,
        title: "Wedding Decor",
        type: "photo",
        url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731780871/DJI_20240923_190743_544_bqt5rz.jpg",
        fullUrl:
          "https://res.cloudinary.com/dmxc84rqd/image/upload/v1731780871/DJI_20240923_190743_544_bqt5rz.jpg",
        category: "larkfield",
      },
    ],
    [category]
  );

  const filteredMedia = useMemo(
    () =>
      activeFilter === "all"
        ? categoryMedia
        : categoryMedia.filter((item) => item.type === activeFilter),
    [categoryMedia, activeFilter]
  );

  const handlePrevious = () => {
    if (!selectedMedia) return;
    const currentIndex = categoryMedia.findIndex(
      (item) => item.id === selectedMedia.id
    );
    const previousIndex =
      (currentIndex - 1 + categoryMedia.length) % categoryMedia.length;
    setSelectedMedia(categoryMedia[previousIndex] as any);
  };

  const handleNext = () => {
    if (!selectedMedia) return;
    const currentIndex = categoryMedia.findIndex(
      (item) => item.id === selectedMedia.id
    );
    const nextIndex = (currentIndex + 1) % categoryMedia.length;
    setSelectedMedia(categoryMedia[nextIndex] as any);
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

        {filteredMedia.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <MediaItemComponent
                key={item.id}
                item={item as any}
                onClick={() => setSelectedMedia(item as any)}
              />
            ))}
          </div>
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

        <Dialog
          open={!!selectedMedia}
          onOpenChange={() => setSelectedMedia(null)}
        >
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

            <NavButton direction="left" onClick={handlePrevious} />
            <NavButton direction="right" onClick={handleNext} />

            {selectedMedia?.type === "photo" ? (
              <img
                src={selectedMedia.fullUrl}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[80vh] object-contain"
                loading="eager"
              />
            ) : selectedMedia?.type === "video" && selectedMedia.videoUrl ? (
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
