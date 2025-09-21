import React from "react";
import { TOKENS } from "@/design/tokens-from-home";

type Props = {
  index: number;
  children: React.ReactNode;
  className?: string;
};

export function AltSection({ index, children, className = "" }: Props) {
  const bg = index % 2 === 0 ? TOKENS.WHITE_BG_CLASS : TOKENS.BLUE_BG_CLASS;
  
  return (
    <div className={`${bg} w-full ${className}`}>
      {children}
    </div>
  );
}