import { Card } from "@/components/ui/card";
import {
  Palette,
  Flower2,
  Layout,
  TableProperties,
  Lightbulb,
  Camera,
  Music,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Custom Event Décor",
    description:
      "Expert design team creating breathtaking décor tailored to your style and cultural traditions",
    details: {
      overview:
        "From opulent floral arrangements to intricate lighting designs, we craft stunning visual experiences that set the perfect tone for your event.",
      features: [
        "Customized design concepts",
        "Cultural elements integration",
        "Premium quality materials",
        "Professional installation",
        "Complete venue transformation",
        "Attention to detail",
      ],
      process:
        "We begin with a detailed consultation to understand your vision and cultural preferences, creating a unique design plan that brings your dreams to life.",
      pricing: "Custom quotes based on event requirements",
    },
  },
  {
    icon: <Flower2 className="w-8 h-8" />,
    title: "Floral Design",
    description:
      "Bespoke floral arrangements that create lasting impressions for any cultural celebration",
    details: {
      overview:
        "Our floral designs enhance your event's beauty while respecting cultural traditions and preferences.",
      features: [
        "Custom floral arrangements",
        "Cultural floral traditions",
        "Premium fresh flowers",
        "Archways and installations",
        "Bouquets and corsages",
        "Sustainable options",
      ],
      process:
        "We source the finest flowers and create arrangements that complement your event theme and cultural requirements.",
      pricing: "Packages starting from $2,000",
    },
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Themed Backdrops",
    description:
      "Sophisticated backdrops and staging that bring your theme to life",
    details: {
      overview:
        "Custom-designed and installed structures that create the perfect setting for your special moments.",
      features: [
        "Custom backdrop design",
        "Cultural motifs integration",
        "Premium materials",
        "Professional installation",
        "LED integration options",
        "Photo-worthy settings",
      ],
      process:
        "From design to installation, we create stunning backdrops that perfectly match your vision.",
      pricing: "Starting from $1,500",
    },
  },
  {
    icon: <TableProperties className="w-8 h-8" />,
    title: "Table Settings",
    description:
      "Elegant table settings and centerpieces that enhance the atmosphere",
    details: {
      overview:
        "Complete table décor solutions that create a cohesive and beautiful dining experience.",
      features: [
        "Custom centerpieces",
        "Premium linens",
        "Elegant place settings",
        "Coordinated colors",
        "Cultural elements",
        "Luxury touches",
      ],
      process:
        "We design and set up every table to create a harmonious and elegant dining atmosphere.",
      pricing: "Per table pricing available",
    },
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Lighting Design",
    description: "Transformative lighting that creates the perfect ambiance",
    details: {
      overview:
        "Professional lighting design that enhances your venue and creates magical atmospheres.",
      features: [
        "Custom lighting plans",
        "Mood lighting",
        "LED installations",
        "Spotlight features",
        "Color coordination",
        "Dynamic options",
      ],
      process:
        "We design and implement lighting solutions that transform your venue and highlight key features.",
      pricing: "Custom quotes based on venue size",
    },
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Affiliated Services",
    description: "Trusted vendor network for comprehensive event solutions",
    details: {
      overview:
        "While we specialize in décor, we partner with trusted vendors for additional services.",
      features: [
        "Photography services",
        "DJ & entertainment",
        "Dance floor installation",
        "Event coordination",
        "Catering referrals",
        "Vendor management",
      ],
      process:
        "We connect you with our network of trusted professionals to ensure every aspect of your event is perfect.",
      pricing: "Varies by service",
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized event décor services designed to elevate the ambiance of
            your celebration
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className="group p-8 hover:shadow-2xl transition-all duration-500 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 border-0 overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-6 text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Dialog
          open={!!selectedService}
          onOpenChange={() => setSelectedService(null)}
        >
          <DialogContent className="w-[90%] sm:w-[80%] max-w-2xl mx-auto bg-white text-gray-900">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl">
                {selectedService?.icon}
                {selectedService?.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600">
                {selectedService?.details.overview}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">What's Included</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService?.details.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Our Process</h4>
                <p className="text-gray-600">
                  {selectedService?.details.process}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Investment</h4>
                <p className="text-gray-600">
                  {selectedService?.details.pricing}
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    const contactSection =
                      document.getElementById("contact-section");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                    setSelectedService(null);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
