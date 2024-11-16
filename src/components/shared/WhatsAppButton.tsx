import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  const phoneNumber = '917981447285'; // Added country code (91) for India
  const message = 'Hi';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] shadow-lg z-50 p-0 flex items-center justify-center group transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  );
}