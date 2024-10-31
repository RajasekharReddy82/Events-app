import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
          

      </DialogContent>
    </Dialog>
  );
}