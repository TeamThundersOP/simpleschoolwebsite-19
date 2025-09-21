import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features: Feature[];
}

export const Feature197: React.FC<Feature197Props> = ({ features }) => {
  const [activeFeature, setActiveFeature] = useState<number>(features[0]?.id || 1);

  const handleFeatureClick = (featureId: number) => {
    setActiveFeature(activeFeature === featureId ? 0 : featureId);
  };

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-background m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-12 lg:gap-20 w-full m-0 p-0">
        {/* Header */}
        <div className="box-border flex flex-col items-center gap-4 lg:gap-6 w-full max-w-3xl text-center m-0 p-0">
          <h2 className="box-border w-full text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight m-0 p-0">
            Powerful Features for Modern Education
          </h2>
          <p className="box-border w-full text-muted-foreground text-base sm:text-lg font-normal leading-relaxed m-0 p-0">
            Discover the comprehensive tools and solutions that make our platform the perfect choice for schools worldwide.
          </p>
        </div>

        {/* Content Grid - Image Left, Content Right */}
        <div className="box-border flex items-center gap-8 lg:gap-12 w-full m-0 p-0 max-lg:flex-col">
          {/* Feature Image */}
          <div className="box-border flex-1 m-0 p-0">
            <AnimatePresence mode="wait">
              {activeFeatureData && (
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="box-border w-full m-0 p-0"
                >
                  <div className="box-border relative w-full m-0 p-0">
                    <img
                      src={activeFeatureData.image}
                      alt={activeFeatureData.title}
                      className="box-border w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-sm m-0 p-0"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg p-4 lg:p-6">
                      <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">
                        {activeFeatureData.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        {activeFeatureData.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Feature List */}
          <div className="box-border flex flex-col gap-4 flex-1 m-0 p-0">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="box-border border border-border rounded-lg overflow-hidden m-0 p-0"
                initial={false}
              >
                <button
                  onClick={() => handleFeatureClick(feature.id)}
                  className="box-border flex items-center justify-between w-full text-left p-4 lg:p-6 hover:bg-muted/50 transition-colors duration-200 m-0"
                >
                  <h3 className="box-border text-foreground text-lg sm:text-xl font-medium leading-tight m-0 p-0">
                    {feature.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeFeature === feature.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFeature === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="box-border p-4 lg:p-6 pt-0 m-0">
                        <p className="box-border text-muted-foreground text-sm sm:text-base font-normal leading-6 m-0 p-0">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};