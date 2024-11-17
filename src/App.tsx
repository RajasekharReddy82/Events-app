import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { MediaShowcase } from "@/components/home/MediaShowcase";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppDialog } from "@/components/WhatsAppDialog";
import { CategoryPage } from "@/components/gallery/CategoryPage";
import whatsApp from "./Assets/whatsappIcon.svg";
import { useState } from "react";

function HomePage() {
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
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <MediaShowcase />
      <Contact />

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
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
