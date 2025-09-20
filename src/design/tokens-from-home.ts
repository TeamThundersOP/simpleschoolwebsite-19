export const TOKENS = {
  // Background alternation pattern from Home
  WHITE_BG_CLASS: "bg-white",
  BLUE_BG_CLASS: "bg-[#03182F]",
  
  // Container and spacing
  CONTAINER_CLASS: "max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16",
  SECTION_PADDING: "py-16 sm:py-20 lg:py-28",
  
  // Border radius and shadows
  RADIUS_CLASS: "rounded-2xl",
  RADIUS_LARGE: "rounded-2xl",
  SHADOW_CLASS: "shadow-sm",
  CARD_HOVER_SHADOW: "hover:shadow-xl",
  
  // Typography classes from Home
  H1_CLASS: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-medium leading-tight tracking-tight",
  H2_CLASS: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight",
  H3_CLASS: "text-xl sm:text-2xl lg:text-2xl font-medium leading-tight tracking-tight",
  H4_CLASS: "text-lg sm:text-xl lg:text-[22px] font-medium leading-tight tracking-tight",
  BODY_CLASS: "text-base sm:text-lg font-normal leading-relaxed",
  BODY_SMALL: "text-sm sm:text-base font-normal leading-6",
  MUTED_CLASS: "text-muted-foreground",
  
  // Colors from Home - using semantic tokens for proper contrast
  TEXT_DARK: "text-foreground",
  TEXT_LIGHT: "text-white",
  TEXT_ON_DARK: "text-white",
  TEXT_ON_LIGHT: "text-foreground",
  
  // Button classes (using shadcn/ui system + Home customs)
  BTN_PRIMARY_CLASS: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium transition-colors",
  BTN_SECONDARY_CLASS: "inline-flex items-center justify-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md font-medium transition-colors",
  
  // Custom button from Products page
  BTN_CUSTOM_PRIMARY: "flex justify-center items-center gap-2 border cursor-pointer bg-[#0C0504] text-white px-4 py-2.5 rounded-full border-solid border-[#0C0504] transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:scale-105",
  
  // Icon sizing from Home
  ICON_SIZE: "w-10 h-10 sm:w-12 sm:h-12",
  ICON_SIZE_SMALL: "w-4 h-4 sm:w-5 sm:h-5",
  
  // Card styles from Home
  CARD_BASE: "flex flex-col items-start gap-6 lg:gap-8 p-6 bg-gray-50 rounded-2xl",
  CARD_PRODUCT: "flex flex-col items-start gap-6 lg:gap-8 flex-1 group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl hover:bg-gray-50/50 p-4 -m-4",
};