import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { shouldShowGoogleAdsBanner, isBannerDismissed, dismissBanner } from "@/lib/adUtils";

interface GoogleAdsBannerProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

export default function GoogleAdsBanner({ onVisibilityChange }: GoogleAdsBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner should be shown
    const shouldShow = shouldShowGoogleAdsBanner() && !isBannerDismissed();
    setIsVisible(shouldShow);
    onVisibilityChange?.(shouldShow);
  }, [onVisibilityChange]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dismissBanner();
    setIsVisible(false);
    onVisibilityChange?.(false);
  };

  const handleBannerClick = () => {
    // Redirect to WhatsApp link
    window.open('https://wa.link/fairplusad', '_blank');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full lg:hidden"
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Clickable Banner Image */}
        <div
          onClick={handleBannerClick}
          className="cursor-pointer w-full"
        >
          <img 
            src="/fairplay-banner.webp" 
            alt="FairPlay - 500% Joining Bonus" 
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
