import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "@/components/shared/Image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description?: string;
}

export function ImageModal({ isOpen, onClose, imageUrl, title, description }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        {description && (
          <div className="p-6 bg-white dark:bg-gray-900">
            <p className={cn(
              "text-sm text-gray-600 dark:text-gray-300",
              "leading-relaxed"
            )}>
              {description}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}