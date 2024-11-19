import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPinned, Clock, Instagram } from "lucide-react";

export function ContactInfo() {
  return (
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
            href="tel:+19293938520"
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
            href="mailto:contact@ascenteventsny.org"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
            whileHover={{ x: 8 }}
          >
            <div className="bg-primary-500/20 p-3 rounded-lg group-hover:bg-primary-500/30 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-300">contact@ascenteventsny.org</p>
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
              <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
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
  );
}
