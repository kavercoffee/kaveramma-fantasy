import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { shouldShowGoogleAdsBanner } from "@/lib/adUtils";

interface GoogleAdsBannerProps {
  onVisibilityChange?: (isVisible: boolean) => void;
}

export default function GoogleAdsBanner({ onVisibilityChange }: GoogleAdsBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner should be shown
    const shouldShow = shouldShowGoogleAdsBanner();
    setIsVisible(shouldShow);
    onVisibilityChange?.(shouldShow);
  }, [onVisibilityChange]);

  const handleBannerClick = () => {
    // Redirect to WhatsApp link
    window.open('https://wa.link/fairplayad', '_blank');
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
