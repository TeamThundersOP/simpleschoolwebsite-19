import React from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  products: [
    "Code School Finland",
    "Finnish Experience",
    "Kindie Days",
    "Moomin Language School",
  ],
  company: ["Home", "About Us", "Contact"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

type SocialType = "facebook" | "twitter" | "linkedin" | "instagram";

interface SocialIconProps {
  type: SocialType;
  href: string;
}

const socialLinks: Record<SocialType, string> = {
  facebook: "https://facebook.com/schoolgrads",
  twitter: "https://twitter.com/schoolgrads",
  linkedin: "https://linkedin.com/company/schoolgrads",
  instagram: "https://instagram.com/schoolgrads",
};

const SocialIcon: React.FC<SocialIconProps> = ({ type, href }) => {
  const icons = {
    facebook: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.671 15.75l.5-3.25h-3.171v-2.11c0-.89.436-1.76 1.833-1.76h1.417V6.04S15.5 5.75 14.25 5.75c-2.25 0-3.25 1.36-3.25 3.83v2.17H8v3.25h3v7.25h2.5v-7.25h2.171z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.633 8.29c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.037.637.05.97.05 1.92 0 3.687-.653 5.096-1.75-1.797-.037-3.32-1.22-3.843-2.85.25.037.5.063.77.063.37 0 .74-.05 1.09-.144-1.87-.377-3.28-2.03-3.28-4.01v-.05c.55.305 1.18.49 1.85.51-1.1-.74-1.82-2-1.82-3.42 0-.75.2-1.45.55-2.05 2.01 2.47 5.02 4.09 8.41 4.26-.07-.3-.11-.62-.11-.95 0-2.28 1.85-4.13 4.13-4.13 1.19 0 2.27.5 3.03 1.3.94-.18 1.82-.53 2.61-1-.31.97-.97 1.78-1.83 2.29.84-.1 1.65-.32 2.4-.65-.56.83-1.27 1.56-2.09 2.14z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.339 17.5H5.67V9.5h2.669v8zm-1.335-9.09c-.85 0-1.54-.69-1.54-1.54 0-.85.69-1.54 1.54-1.54.85 0 1.54.69 1.54 1.54 0 .85-.69 1.54-1.54 1.54zm10.496 9.09h-2.67v-4.02c0-.96-.02-2.19-1.34-2.19-1.34 0-1.55 1.05-1.55 2.13v4.08h-2.67V9.5h2.56v1.09h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.8 3.25 4.14v4.17z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.5a3 3 0 110-6 3 3 0 010 6zm5.25-7.75a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0zm2.97 1.07c-.07-1.48-.41-2.8-1.5-3.89-1.09-1.09-2.41-1.43-3.89-1.5C13.13 3.01 12.87 3 12 3s-1.13.01-1.83.08c-1.48.07-2.8.41-3.89 1.5-1.09 1.09-1.43 2.41-1.5 3.89C3.01 10.87 3 11.13 3 12s.01 1.13.08 1.83c.07 1.48.41 2.8 1.5 3.89 1.09 1.09 2.41 1.43 3.89 1.5.7.07.96.08 1.83.08s1.13-.01 1.83-.08c1.48-.07 2.8-.41 3.89-1.5 1.09-1.09 1.43-2.41 1.5-3.89.07-.7.08-.96.08-1.83s-.01-1.13-.08-1.83zm-1.62 6.62a4.62 4.62 0 01-2.6 2.6c-.9.36-1.84.56-2.98.62-.7.07-.91.08-1.67.08s-.97-.01-1.67-.08c-1.14-.06-2.08-.26-2.98-.62a4.62 4.62 0 01-2.6-2.6c-.36-.9-.56-1.84-.62-2.98-.07-.7-.08-.91-.08-1.67s.01-.97.08-1.67c.06-1.14.26-2.08.62-2.98a4.62 4.62 0 012.6-2.6c.9-.36 1.84-.56 2.98-.62.7-.07.91-.08 1.67-.08s.97.01 1.67.08c1.14.06 2.08.26 2.98.62a4.62 4.62 0 012.6 2.6c.36.9.56 1.84.62 2.98.07.7.08.91.08 1.67s-.01.97-.08 1.67c-.06 1.14-.26 2.08-.62 2.98z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:text-[#b2e61b] transition-all duration-300 backdrop-blur-sm"
      aria-label={`Follow us on ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icons[type]}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021223] text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/">
              <img
                src="/lovable-uploads/af002aad-49a7-49c6-bd8f-d66970d17721.png"
                alt="School Grads Logo"
                className="h-16 w-auto brightness-0 invert"
                loading="lazy"
                width={120}
                height={64}
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Transforming Indian education with global excellence through Finnish pedagogy and
              innovative learning solutions.
            </p>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                FOLLOW US
              </h3>
              <div className="flex gap-3">
                <SocialIcon type="facebook" href={socialLinks.facebook} />
                <SocialIcon type="twitter" href={socialLinks.twitter} />
                <SocialIcon type="linkedin" href={socialLinks.linkedin} />
                <SocialIcon type="instagram" href={socialLinks.instagram} />
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">PRODUCTS</h3>
            <div className="space-y-3">
              {footerLinks.products.map((product, index) => (
                <div key={index} className="text-white/80 text-sm font-medium">
                  {product}
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">COMPANY</h3>
            <div className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <div key={index} className="text-white/80 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">CONTACT US</h3>
            <address className="not-italic space-y-4 text-sm">
              <div className="flex flex-col space-y-1">
                <span className="text-white/60 font-medium">Phone</span>
                <a
                  href="tel:+917499929999"
                  className="text-white/80 hover:text-[#b2e61b] transition-colors duration-300"
                  aria-label="Call School Grads"
                >
                  +91 74999 29999
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-white/60 font-medium">Email</span>
                <a
                  href="mailto:info@schoolgrads.ai"
                  className="text-white/80 hover:text-[#b2e61b] transition-colors duration-300 break-all"
                  aria-label="Email School Grads"
                >
                  info@schoolgrads.ai
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-white/60 font-medium">Address</span>
                <span className="text-white/80 text-sm leading-relaxed">
                  School Grads, 7, 1-636/40,
                  <br />
                  Near ESI Hospital, Model Colony,
                  <br />
                  Sundar Nagar, Erragadda,
                  <br />
                  Hyderabad, Telangana 500038
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">LEGAL</h3>
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((item, index) => (
                <span key={index} className="text-white/80 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">School Grads</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 text-xs sm:text-sm">
              <span className="text-white/60">Privacy Policy</span>
              <span className="text-white/60">Terms of Service</span>
              <span className="text-white/60">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
