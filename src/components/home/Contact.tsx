import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  Calendar,
  Users,
  DollarSign,
  MapPinned,
  Instagram,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  venue: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    venue: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await emailjs
      .sendForm("service_zjw0t9t", "template_w994oud", "#myForm", {
        publicKey: "j8Pwclj8JSITr_IcG",
      })
      .then(
        () => console.log("Event Details Submitted Successfully!"),
        (err) => console.error("Submission Failed:", err)
      );

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        venue: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      id="contact-section"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-900">
            Let's Create Something Extraordinary Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your vision with us, and let's begin crafting your perfect
            celebration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 shadow-lg glass-effect border-0 relative overflow-hidden">
              {/* Success Overlay */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We'll be in touch with you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8" id="myForm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Event Type
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        name="eventType"
                        required
                        disabled={isSubmitting}
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 appearance-none"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Event Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        name="eventDate"
                        required
                        disabled={isSubmitting}
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Guest Count
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="number"
                        name="guestCount"
                        required
                        disabled={isSubmitting}
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="Number of guests"
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Budget Range
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        name="budget"
                        required
                        disabled={isSubmitting}
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="2500-5000">$2500 - $5000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-20000">$10,000 - $20,000</option>
                        <option value="20000-50000">$20,000 - $50,000</option>
                        <option value="50000-100000">
                          $50,000 - $1,00,000
                        </option>
                        <option value="100000-150000">
                          $1,00,000 - $1,50,000
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">
                      Venue Location
                    </label>
                    <div className="relative">
                      <MapPinned className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="venue"
                        required
                        disabled={isSubmitting}
                        value={formData.venue}
                        onChange={handleChange}
                        placeholder="City, State or Venue Name"
                        className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200"
                    placeholder="Share your vision and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-medium rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white transition-all duration-300 relative overflow-hidden group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center"
                    >
                      <div className="w-6 h-6 border-3 border-t-white border-white/30 rounded-full animate-spin mr-2" />
                      Submitting...
                    </motion.div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Submit Inquiry
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 glass-effect-dark text-white border-0 h-full">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-gray-300">
                    We're here to turn your vision into reality
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.a
                    href="tel:9293938520"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-primary-500/20 p-3 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">+1 (929) 393-8520</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:contact@ascentevents.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-primary-500/20 p-3 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">
                        contact@ascenteventsny.org
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-primary-500/20 p-3 rounded-lg">
                      <MapPinned className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-300">New York & New Jersey</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-primary-500/20 p-3 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-300">
                        Mon - Sat: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </motion.div>

                  <motion.a
                    href="https://www.instagram.com/ascentevents_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300 group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-gray-300">@ascentevents_</p>
                    </div>
                  </motion.a>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-xl font-semibold mb-4">Our Promise</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      <span>Personalized Attention to Detail</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      <span>Cultural Sensitivity & Understanding</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      <span>Transparent Communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
