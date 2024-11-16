import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phoneNumber: string;
}

export function WhatsAppDialog({
  open,
  onOpenChange,
  phoneNumber,
}: WhatsAppDialogProps) {
  const handleWhatsAppWeb = () => {
    // Format phone number to include country code without any special characters
    const formattedNumber = `1${phoneNumber.replace(/\D/g, "")}`;
    const message = "Hi";
    window.open(
      `https://web.whatsapp.com/send?phone=${formattedNumber}&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact via WhatsApp</DialogTitle>
          <DialogDescription>
            Click below to continue to WhatsApp Web and start your conversation.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Button
              onClick={handleWhatsAppWeb}
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Continue to WhatsApp Web
            </Button>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="secondary"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
