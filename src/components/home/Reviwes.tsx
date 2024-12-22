import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Sheviane & Trishan",
    text: "We were blown away by the intricate details and vibrant colors in the decor for our wedding. The team understood our traditional Hindu rituals and ensured everything—from the mandap to the floral arrangements—was perfect. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    author: "Amrit & Fiza",
    text: "The decor for our nikah was stunning! The team incorporated traditional Pakistani elements like fresh flowers and elegant drapes beautifully. It felt both personal and luxurious. JazakAllah Khair!",
    rating: 5,
  },
  {
    id: 3,
    author: "Sierra & Jacob",
    text: "We wanted something simple yet elegant, and they absolutely nailed it! The blend of modern aesthetics and timeless charm made our wedding unforgettable. Thank you for making our dream come true!",
    rating: 5,
  },
  {
    id: 4,
    author: "Adwenpa & Morowa",
    text: "The decor team captured our vibrant culture perfectly! The bold colors and intricate patterns were spot-on, and they even included traditional elements that felt truly authentic. We couldn't have asked for more.",
    rating: 5,
  },
  {
    id: 5,
    author: "Karthik & Ishitha",
    text: "From the traditional banana leaves to the breathtaking temple-style mandap, the team brought our South Indian wedding vision to life. It was truly magical!",
    rating: 5,
  },
  {
    id: 6,
    author: "Nadia & Salman",
    text: "Our walima decor was breathtaking. The team honored our traditions with elegance and ensured every detail reflected our culture. Thank you for such a beautiful experience!",
    rating: 5,
  },
  {
    id: 7,
    author: "Archana & Sai",
    text: "Our wedding decor was a perfect mix of tradition and modernity. The team worked with us closely to ensure every element represented our heritage beautifully. Highly recommended!",
    rating: 5,
  },
  {
    id: 8,
    author: "Siyabonga & Amanda",
    text: "The decor exceeded all our expectations! The team made sure to include cultural elements we love while maintaining a chic and modern vibe. We'll treasure these memories forever!",
    rating: 5,
  },
  {
    id: 9,
    author: "Edner & Anusha",
    text: "Planning a fusion wedding was no easy task, but the decor team did an amazing job blending both cultures seamlessly. Our families were impressed with how beautiful everything looked!",
    rating: 5,
  },
  {
    id: 10,
    author: "Ede & Sandra",
    text: "Our church wedding was decorated with so much thought and care. The floral arrangements and traditional touches made the day feel special and unique. Thank you for everything!",
    rating: 5,
  },
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-primary-200/20 to-primary-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-900 font-display md:leading-tight">
            Love from Our clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl bg-clip-text font-display bg-gradient-to-r mx-auto">
            Discover the heartfelt experiences our amazing clients have shared
            about working with us. Here's what they love most!.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-12">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 -right-4 md:-left-12 md:-right-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg pointer-events-auto transition-all duration-200 hover:scale-105 border border-gray-100 backdrop-blur-sm flex items-center justify-center"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
              <span className="sr-only">Previous review</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg pointer-events-auto transition-all duration-200 hover:scale-105 border border-gray-100 backdrop-blur-sm flex items-center justify-center"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
              <span className="sr-only">Next review</span>
            </Button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className={cn(
                    "flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
                    "px-2 md:px-4 py-6"
                  )}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full flex flex-col relative">
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 italic flex-grow font-serif text-base md:text-lg leading-relaxed">
                      "{review.text}"
                    </p>

                    <footer className="mt-4">
                      <h4 className="text-lg font-semibold text-primary-900 font-display">
                        {review.author}
                      </h4>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
