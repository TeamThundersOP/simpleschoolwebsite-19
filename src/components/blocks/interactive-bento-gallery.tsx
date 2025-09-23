"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
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

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        {mediaItems.map((item, index) => {
          // Define varied layout patterns for visual interest
          const getLayoutClass = (index: number) => {
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
                return "md:col-span-1 md:row-span-1"; // Standard item
              case 5:
                return "md:col-span-1 md:row-span-1"; // Standard item
              case 6:
                return "md:col-span-1 md:row-span-2"; // Tall item
              case 7:
                return "md:col-span-2 md:row-span-1"; // Wide item
              case 8:
                return "md:col-span-1 md:row-span-1"; // Standard item
              case 9:
                return "md:col-span-1 md:row-span-2"; // Tall item
              case 10:
                return "md:col-span-2 md:row-span-1"; // Wide item
              case 11:
                return "md:col-span-1 md:row-span-1"; // Standard item
              default:
                return "md:col-span-1 md:row-span-1";
            }
          };

          return (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300 ${getLayoutClass(index)}`}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(item)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    muted
                    loop
                    autoPlay
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <video
                    src={selectedItem.url}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{selectedItem.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBentoGallery;
