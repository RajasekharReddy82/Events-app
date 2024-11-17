import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ImageIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Memoized Image Component
const GalleryImage = memo(
  ({
    item,
    index,
    onNavigate,
  }: {
    item: (typeof previewMedia)[0];
    index: number;
    onNavigate: (category: string) => void;
  }) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onNavigate(item.category)}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={item.url}
          alt=""
          loading={index < 3 ? "eager" : "lazy"}
          width={400}
          height={300}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-10">
          <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <ImageIcon className="h-4 w-4 text-white" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
      </div>
    </motion.div>
  )
);

GalleryImage.displayName = "GalleryImage";

// Optimized image URLs with Cloudinary transformations
const previewMedia = [
  {
    id: 1,
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731782398/IMG_2973_nadgzg.jpg",
    category: "larkfield",
  },
  {
    id: 2,
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731782087/IMG_2971_yaojri.jpg",
    category: "larkfield",
  },
  {
    id: 3,
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731781239/DJI_20240914_084842_834_ft7422.jpg",
    category: "larkfield",
  },
  {
    id: 4,
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731781103/IMG_2638_x2i4n1.jpg",
    category: "larkfield",
  },
  {
    id: 5,
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731780975/DJI_20240923_165716_024_dtlvhb.jpg",
    category: "larkfield",
  },
  {
    id: 6,
    type: "photo",
    url: "https://res.cloudinary.com/dmxc84rqd/image/upload/c_scale,w_800,q_auto/v1731780871/DJI_20240923_190743_544_bqt5rz.jpg",
    category: "larkfield",
  },
];

export function MediaShowcase() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/gallery`);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  console.log(images, error);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://ascenteventsbackend.vercel.app/api/images"
        );
        const data = await response.json();
        setImages(data.resources); // Use the `resources` array from Cloudinary API response
      } catch (err) {
        setError("Failed to fetch images.");
        console.error(err);
      }
    };

    fetchImages();
  }, []);

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
          {previewMedia.map((item, index) => (
            <GalleryImage
              key={item.id}
              item={item}
              index={index}
              onNavigate={() => handleNavigate()}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => handleNavigate()}
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
