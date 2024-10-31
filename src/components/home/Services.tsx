import { Card } from '@/components/ui/card';
import { Palette, ClipboardList, Users, Plane, Building2, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Event Decor',
    description: 'Transform your venue with our stunning decor and design services',
    details: {
      overview: 'Our expert designers create breathtaking environments that perfectly match your vision and style.',
      features: [
        'Custom floral arrangements and installations',
        'Ambient lighting design and setup',
        'Themed decor packages',
        'Table settings and centerpieces',
        'Backdrop and stage design',
        'Props and furniture rental'
      ],
      process: 'We begin with a detailed consultation to understand your vision, create mood boards and 3D visualizations, and handle everything from sourcing to setup and teardown.',
      pricing: 'Starting from $2,500, varies based on event size and requirements'
    }
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    title: 'Event Planning',
    description: 'Comprehensive planning services to bring your vision to life',
    details: {
      overview: 'From concept to execution, we handle every detail of your event planning journey.',
      features: [
        'Venue selection and booking',
        'Vendor coordination and management',
        'Timeline and checklist creation',
        'Budget planning and tracking',
        'Guest list management',
        'Day-of coordination'
      ],
      process: 'Our planning process starts 6-12 months before your event, with regular check-ins and updates throughout the journey.',
      pricing: 'Full-service planning starts at $5,000'
    }
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Event Coordination',
    description: 'Seamless coordination for a stress-free event experience',
    details: {
      overview: 'Professional on-site coordination ensuring your event runs smoothly from start to finish.',
      features: [
        'On-site event management',
        'Vendor arrival coordination',
        'Setup supervision',
        'Timeline management',
        'Guest coordination',
        'Emergency handling'
      ],
      process: 'We take over 4-6 weeks before your event, creating detailed timelines and backup plans.',
      pricing: 'Day-of coordination starts at $1,500'
    }
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'Destination Events',
    description: 'Creating magical moments at your chosen destination',
    details: {
      overview: 'Specialized in planning and executing extraordinary events at destinations worldwide.',
      features: [
        'Location scouting and selection',
        'Travel arrangements',
        'Local vendor coordination',
        'Cultural considerations',
        'Guest accommodation',
        'Activities planning'
      ],
      process: 'Planning begins 12-18 months in advance, including site visits and local partnerships.',
      pricing: 'Custom quotes based on destination and requirements'
    }
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Corporate Events',
    description: 'Professional corporate event management and execution',
    details: {
      overview: 'Elevate your corporate events with our professional planning and execution services.',
      features: [
        'Conference and seminar planning',
        'Team building events',
        'Product launches',
        'Award ceremonies',
        'Corporate retreats',
        'Networking events'
      ],
      process: 'We handle everything from venue selection to post-event reporting and analysis.',
      pricing: 'Corporate packages start at $3,500'
    }
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: 'Wedding Planning',
    description: 'Making your dream wedding a beautiful reality',
    details: {
      overview: 'Comprehensive wedding planning services to create your perfect celebration of love.',
      features: [
        'Full-service wedding planning',
        'Custom ceremony design',
        'Reception coordination',
        'Vendor selection and management',
        'Wedding day timeline',
        'Family coordination'
      ],
      process: 'Our signature wedding planning process spans 12-18 months, ensuring every detail is perfect.',
      pricing: 'Full wedding planning packages start at $8,000'
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
          <h2 className="text-5xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive event planning and management services tailored to your needs
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

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
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
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Our Process</h4>
              <p className="text-gray-600 text-sm sm:text-base">{selectedService?.details.process}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Investment</h4>
              <p className="text-gray-600 text-sm sm:text-base">{selectedService?.details.pricing}</p>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedService(null)}>
                Close
              </Button>
              <Button onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
                setSelectedService(null);
              }}>
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