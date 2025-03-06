import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, Suspense, lazy } from "react";
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppDialog } from "@/components/WhatsAppDialog";
import whatsApp from "./Assets/whatsappIcon.svg";

// Lazy load components
const Hero = lazy(() => import("@/components/home/Hero"));
const About = lazy(() => import("@/components/home/About"));
const Services = lazy(() => import("@/components/home/Services"));
const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));
const MediaShowcase = lazy(() => import("@/components/home/MediaShowcase"));
const Reviews = lazy(() => import("./components/home/Reviwes"));
const Contact = lazy(() => import("@/components/home/Contact"));
const CategoryPage = lazy(() => import("@/components/gallery/CategoryPage"));

// HomePage component with lazy-loaded sections
function HomePage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <MediaShowcase />
      <Reviews />
      <Contact />
    </Suspense>
  );
}

function App() {
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phoneNumber = "9293938520";
    const message = "Hi";

    if (isMobile) {
      const formattedNumber = `1${phoneNumber.replace(/\D/g, "")}`;
      window.location.href = `whatsapp://send?phone=${formattedNumber}&text=${encodeURIComponent(
        message
      )}`;
    } else {
      setWhatsappOpen(true);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main>
          <Suspense
            fallback={<div className="text-center p-10">Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<CategoryPage />} />
            </Routes>
          </Suspense>
        </main>

        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 group"
          aria-label="Contact on WhatsApp"
        >
          <img
            src={whatsApp}
            alt="WhatsApp"
            title="Chat with us on WhatsApp"
            className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300"
          />
        </button>

        <WhatsAppDialog
          open={whatsappOpen}
          onOpenChange={setWhatsappOpen}
          phoneNumber="9293938520"
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
