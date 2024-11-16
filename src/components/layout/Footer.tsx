import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ascent Events. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>in New Jersey</span>
          </div>
        </div>
      </div>
    </footer>
  );
}