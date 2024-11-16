import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "beach",
    title: "Beach Events",
    image: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377991/Snapinsta.app_431739756_427005106456087_8575211153147516235_n_1080_but9nn.jpg",
    description: "Stunning beachside celebrations"
  },
  {
    id: "birthday",
    title: "Birthday Events",
    image: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377982/Snapinsta.app_439611193_727330789596898_3003562067357843882_n_1080_es00m5.jpg",
    description: "Memorable birthday celebrations"
  },
  {
    id: "wedding",
    title: "Wedding Events",
    image: "https://res.cloudinary.com/dmxc84rqd/image/upload/v1730377980/Snapinsta.app_460166574_1885782978596943_2717914374280458260_n_1080_gojfgm.jpg",
    description: "Elegant wedding ceremonies"
  }
];

export function MediaShowcase() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Explore Our Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of magical moments and celebrations across different types of events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/gallery/${category.id}`)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-center">{category.title}</h3>
                  <p className="text-white/80 text-center mb-4">{category.description}</p>
                  <Button 
                    variant="outline" 
                    className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30"
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}