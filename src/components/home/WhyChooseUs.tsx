import { motion } from 'framer-motion';
import { Award, Users, Sparkles, Shield } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Ascent Events?</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Circular Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80"
                  alt="Luxury Event Setup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Simplified decorative elements with CSS-only animations */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-full [animation:spin_12s_linear_infinite]" />
              <div className="absolute -inset-8 border-2 border-primary/10 rounded-full [animation:spin_20s_linear_infinite]" />
            </div>
          </motion.div>

          {/* Right Side - Reasons */}
          <div className="lg:w-1/2 space-y-6">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Unmatched Expertise",
                description: "At Ascent Events, we take pride in offering exceptional event décor services that set your events apart. We understand the importance of creating a cohesive, beautiful atmosphere."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Trusted Network",
                description: "While we specialize in décor, our network of affiliated vendors ensures that all aspects of your event—from photography and music to coordination—are handled by trusted professionals."
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Cultural Excellence",
                description: "We excel in creating décor for diverse cultural celebrations, including American weddings, Desi celebrations, traditional Nigerian weddings, and Spanish fiestas."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Commitment to Excellence",
                description: "Our commitment to transparency means you'll always know what to expect. We're dedicated to delivering more than promised."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center transform-gpu transition-transform duration-300 hover:scale-110">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Simplified background elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>
    </section>
  );
}