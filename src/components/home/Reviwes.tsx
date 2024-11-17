import { memo } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  couple: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    couple: "Sheviane & Trishan",
    text: "We were blown away by the intricate details and vibrant colors in the decor for our wedding. The team understood our traditional Hindu rituals and ensured everything—from the mandap to the floral arrangements—was perfect. Highly recommended!",
  },
  {
    id: 2,
    couple: "Amrit & Fiza",
    text: "The decor for our nikah was stunning! The team incorporated traditional Pakistani elements like fresh flowers and elegant drapes beautifully. It felt both personal and luxurious. JazakAllah Khair!",
  },
  {
    id: 3,
    couple: "Sierra & Jacob",
    text: "We wanted something simple yet elegant, and they absolutely nailed it! The blend of modern aesthetics and timeless charm made our wedding unforgettable. Thank you for making our dream come true!",
  },
  {
    id: 4,
    couple: "Adwenpa & Morowa",
    text: "The decor team captured our vibrant culture perfectly! The bold colors and intricate patterns were spot-on, and they even included traditional elements that felt truly authentic. We couldn't have asked for more.",
  },
  {
    id: 5,
    couple: "Karthik & Ishitha",
    text: "From the traditional banana leaves to the breathtaking temple-style mandap, the team brought our South Indian wedding vision to life. It was truly magical!",
  },
  {
    id: 6,
    couple: "Nadia & Salman",
    text: "Our walima decor was breathtaking. The team honored our traditions with elegance and ensured every detail reflected our culture. Thank you for such a beautiful experience!",
  },
  {
    id: 7,
    couple: "Archana & Sai",
    text: "Our wedding decor was a perfect mix of tradition and modernity. The team worked with us closely to ensure every element represented our heritage beautifully. Highly recommended!",
  },
  {
    id: 8,
    couple: "Siyabonga & Amanda",
    text: "The decor exceeded all our expectations! The team made sure to include cultural elements we love while maintaining a chic and modern vibe. We'll treasure these memories forever!",
  },
  {
    id: 9,
    couple: "Edner & Anusha",
    text: "Planning a fusion wedding was no easy task, but the decor team did an amazing job blending both cultures seamlessly. Our families were impressed with how beautiful everything looked!",
  },
  {
    id: 10,
    couple: "Ede & Sandra",
    text: "Our church wedding was decorated with so much thought and care. The floral arrangements and traditional touches made the day feel special and unique. Thank you for everything!",
  },
];

const ReviewCard = memo(({ review }: { review: Review }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center transform rotate-12">
      <Quote className="w-6 h-6 text-white" />
    </div>

    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>

    <p className="text-gray-700 mb-6 font-serif italic leading-relaxed">
      "{review.text}"
    </p>

    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 font-display">
          {review.couple}
        </h4>
      </div>
    </div>
  </motion.div>
));

ReviewCard.displayName = "ReviewCard";

export function Reviews() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-900 font-display">
            Love from Our Couples
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-serif">
            Hear what our wonderful couples have to say about their experience
            with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
