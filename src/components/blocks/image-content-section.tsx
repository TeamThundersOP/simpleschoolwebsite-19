import React from "react";
import { motion } from "framer-motion";
import { TOKENS } from "@/design/tokens-from-home";

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "right";
  className?: string;
  isDark?: boolean;
};

export function ImageContentSection({
  imageSrc,
  imageAlt,
  title,
  body,
  ctaLabel,
  ctaHref,
  align = "left",
  className = "",
  isDark = false,
}: Props) {
  const textColor = isDark ? TOKENS.TEXT_ON_DARK : TOKENS.TEXT_ON_LIGHT;
  
  return (
    <section className={`${TOKENS.SECTION_PADDING} ${className}`}>
      <div className={TOKENS.CONTAINER_CLASS}>
        <div className={`flex items-center gap-8 lg:gap-20 w-full max-lg:flex-col max-lg:gap-8 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
          <motion.div 
            className="flex flex-col items-start gap-6 lg:gap-8 flex-1"
            initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start gap-4 lg:gap-6 w-full">
              <h2 className={`w-full ${TOKENS.H2_CLASS} ${textColor}`}>
                {title}
              </h2>
              <div className={`w-full ${TOKENS.BODY_CLASS} ${textColor}`}>
                {body}
              </div>
            </div>
            {ctaLabel && ctaHref && (
              <a 
                href={ctaHref} 
                className={`${TOKENS.BTN_CUSTOM_PRIMARY} min-w-[160px] text-center no-underline`}
              >
                <span className="text-white font-medium">
                  {ctaLabel}
                </span>
              </a>
            )}
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: align === "left" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`h-80 sm:h-96 lg:h-[640px] w-full aspect-[15/16] object-cover ${TOKENS.RADIUS_LARGE} transition-transform duration-300 hover:scale-105`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}