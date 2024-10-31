import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector('section:nth-of-type(2)');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)),
              url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80)
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative inline-block mb-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 tracking-tight">
              Ascent Events
            </h1>
            <motion.div
              className="absolute -inset-4 border-2 border-white/20 rounded-2xl"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Elevating Your Special Moments with{" "}
            <span className="font-medium bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 text-transparent bg-clip-text">
              Exquisite Decor
            </span>
            ,{" "}
            <span className="font-medium bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 text-transparent bg-clip-text">
              Planning
            </span>{" "}
            &{" "}
            <span className="font-medium bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 text-transparent bg-clip-text">
              Coordination
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="group bg-white text-black hover:bg-white/90 text-lg px-10 py-7 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              onClick={scrollToContact}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Book Your Event
              <motion.span
                className="absolute inset-0 rounded-full bg-white/20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </Button>
            <Button
              size="lg"
              className="group bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-lg px-10 py-7 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border-2 border-white/50"
              onClick={scrollToServices}
            >
              Explore Services
              <motion.span
                className="absolute inset-0 rounded-full bg-white/10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.1,
                }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/90 text-center cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm font-light tracking-wider uppercase mb-4"
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-full filter blur-3xl"
        />
      </div>
    </div>
  );
}