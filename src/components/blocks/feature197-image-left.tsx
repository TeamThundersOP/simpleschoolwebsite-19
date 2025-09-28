import React from "react";
import { Feature197 } from "@/components/blocks/accordion-feature-section";
import { TOKENS } from "@/design/tokens-from-home";

type Props = React.ComponentProps<typeof Feature197> & {
  title?: string;
  description?: string;
  isDark?: boolean;
};

export function Feature197ImageLeft({ title, description, isDark = false, ...props }: Props) {
  const textColor = isDark ? TOKENS.TEXT_ON_DARK : TOKENS.TEXT_ON_LIGHT;

  return (
    <section className={TOKENS.SECTION_PADDING}>
      <div className={TOKENS.CONTAINER_CLASS}>
        {title && <h2 className={`${TOKENS.H2_CLASS} ${textColor} mb-4`}>{title}</h2>}
        {description && <p className={`${TOKENS.BODY_CLASS} ${textColor} mb-10`}>{description}</p>}

        {/* Feature197 component with enforced image-left layout */}
        <div className="feature197-image-left">
          <Feature197 {...props} />
        </div>
      </div>
    </section>
  );
}
