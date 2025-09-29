"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ZoomIn } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
  thumbnail?: string; // Optional thumbnail for better loading
}

interface InteractiveBentoGalleryProps {
  mediaItems: MediaItem[];
  title?: string;
  description?: string;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  mediaItems,
  title = "Gallery Collection",
  description = "Explore our curated collection",
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());

  const openModal = useCallback((item: MediaItem) => {
    setSelectedItem(item);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  }, []);

  const handleImageError = useCallback((itemId: number) => {
    setImageLoadErrors((prev) => new Set([...prev, itemId]));
  }, []);

  // Memoize grid layout calculations for better performance
  const gridLayout = useMemo(() => {
    const getLayoutClass = (index: number, span?: string) => {
      // Use custom span if provided, otherwise use algorithmic layout
      if (span && span !== "standard") {
        switch (span) {
          case "large":
            return "md:col-span-2 md:row-span-2";
          case "wide":
            return "md:col-span-2 md:row-span-1";
          case "tall":
            return "md:col-span-1 md:row-span-2";
          case "standard":
          default:
            return "md:col-span-1 md:row-span-1";
        }
      }

      // Fallback to algorithmic layout
      switch (index) {
        case 0:
          return "md:col-span-2 md:row-span-2"; // Large hero item
        case 1:
          return "md:col-span-1 md:row-span-1"; // Standard item
        case 2:
          return "md:col-span-1 md:row-span-2"; // Tall item
        case 3:
          return "md:col-span-2 md:row-span-1"; // Wide item
        case 4:
        case 5:
          return "md:col-span-1 md:row-span-1"; // Standard items
        case 6:
          return "md:col-span-1 md:row-span-2"; // Tall item
        case 7:
          return "md:col-span-2 md:row-span-1"; // Wide item
        default:
          return "md:col-span-1 md:row-span-1";
      }
    };

    return mediaItems.map((item, index) => ({
      ...item,
      layoutClass: getLayoutClass(index, item.span),
    }));
  }, [mediaItems]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {gridLayout.map((item, index) => {
          const hasError = imageLoadErrors.has(item.id);

          return (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-100 ${item.layoutClass}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(item)}
            >
              {/* Loading state background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

              {item.type === "image" ? (
                <>
                  {!hasError ? (
                    <img
                      src={item.thumbnail || item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={() => handleImageError(item.id)}
                      onLoad={(e) => {
                        // Remove loading background once image loads
                        const target = e.target as HTMLImageElement;
                        const loadingBg = target.parentElement?.querySelector(".animate-pulse");
                        if (loadingBg) {
                          (loadingBg as HTMLElement).style.display = "none";
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <div className="text-center text-gray-500">
                        <ZoomIn className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Image unavailable</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedData={(e) => {
                      // Remove loading background once video loads
                      const target = e.target as HTMLVideoElement;
                      const loadingBg =
                        target.parentElement?.parentElement?.querySelector(".animate-pulse");
                      if (loadingBg) {
                        (loadingBg as HTMLElement).style.display = "none";
                      }
                    }}
                    onMouseEnter={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.pause();
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-75 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm md:text-lg mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm line-clamp-2 opacity-75 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Modal with better performance and UX */}
      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[95vh] bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 transition-all duration-200 backdrop-blur-sm hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Media content */}
              <div className="relative bg-black">
                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    loading="eager"
                  />
                ) : (
                  <video
                    src={selectedItem.url}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-auto max-h-[70vh] object-contain"
                    preload="auto"
                  />
                )}
              </div>

              {/* Content section */}
              <div className="p-6 md:p-8 max-h-[25vh] overflow-y-auto">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {selectedItem.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBentoGallery;
