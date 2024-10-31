import { Instagram } from 'lucide-react';

export function Social() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Follow Us</h2>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.instagram.com/ascentevents_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >
              <Instagram className="w-8 h-8" />
              <span className="text-lg font-medium group-hover:underline">@ascentevents_</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}