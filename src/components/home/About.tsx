import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  Heart,
  Sparkles,
  Star,
  Shield,
  Users,
  Trophy,
} from "lucide-react";

export function About() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-white pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-primary-200/20 to-primary-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary-600 font-semibold tracking-wider uppercase mb-4 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent font-display bg-gradient-to-r from-primary-600 to-primary-900">
            About Ascent Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
                alt="Luxury Event Setup"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative Border */}
            <div className="absolute -inset-4 border-2 border-primary-200 rounded-2xl -z-10 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="prose prose-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ascent Events is a premier event décor company based in Queens,
                NY, and New Jersey, serving clients nationwide. We specialize in
                creating stunning, customized décor that brings every event to
                life, no matter the theme, style, or cultural tradition.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Whether you’re planning a wedding, cultural celebration,
                corporate event, or milestone party, we deliver exceptional
                décor that reflects your vision—all at very reasonable prices.
                Our goal is to transform your event into an unforgettable
                experience while ensuring high-quality service that fits your
                budget.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: "Local Expertise",
                  description: "Based in Queens & NJ",
                },
                {
                  icon: <Globe2 className="w-6 h-6" />,
                  title: "Nationwide Service",
                  description: "Available across USA",
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Cultural Respect",
                  description: "Honoring traditions",
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Custom Design",
                  description: "Unique for you",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in creating extraordinary experiences
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Transparency",
                description: "Clear communication in every step",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Excellence",
                description: "Exceeding expectations always",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description: "Working together for success",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Integrity",
                description: "Trust in every interaction",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-primary-50">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
