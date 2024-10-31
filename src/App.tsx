import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { MediaShowcase } from "@/components/home/MediaShowcase";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppDialog } from "@/components/WhatsAppDialog";
import whatsApp from "./Assets/whatsappIcon.svg";

function App() {
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const phoneNumber = "9293938520";
    const message = "Hi";

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=1${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
    } else {
      setWhatsappOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <MediaShowcase />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 group"
        aria-label="Contact on WhatsApp"
      >
        <img
          src={whatsApp}
          alt="aaaa"
          title="Chat with us on WhatsApp"
          className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300"
        />
      </button>

      <WhatsAppDialog
        open={whatsappOpen}
        onOpenChange={setWhatsappOpen}
        phoneNumber="9293938520"
      />
    </div>
  );
}

export default App;
