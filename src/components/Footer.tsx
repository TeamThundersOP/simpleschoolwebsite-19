import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  products: [
    { name: "Code School Finland", href: "/code-school" },
    { name: "Finnish Experience", href: "/finnish-experience" },
    { name: "Kindie Days", href: "/kindie-days" },
    { name: "Moomin Language School", href: "/moomin-language-school" }
  ],
  services: [
    { name: "For Students", href: "/students" },
    { name: "For Teachers", href: "/teachers" },
    { name: "School Management", href: "/school-management" },
    { name: "All Services", href: "/services" }
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Product Page", href: "/product" },
    { name: "Contact", href: "#contact" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" }
  ]
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
  instagram: "https://instagram.com/schoolgrads"
};

// All icons are now white, matching the UI's monochrome/white icon style.
const SocialIcon: React.FC<SocialIconProps> = ({ type, href }) => {
  const icons = {
    facebook: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.12"/>
        <path d="M16.671 15.75l.5-3.25h-3.171v-2.11c0-.89.436-1.76 1.833-1.76h1.417V6.04S15.5 5.75 14.25 5.75c-2.25 0-3.25 1.36-3.25 3.83v2.17H8v3.25h3v7.25h2.5v-7.25h2.171z" fill="white"/>
      </svg>
    ),
    twitter: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.12"/>
        <path d="M19.633 8.29c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.037.637.05.97.05 1.92 0 3.687-.653 5.096-1.75-1.797-.037-3.32-1.22-3.843-2.85.25.037.5.063.77.063.37 0 .74-.05 1.09-.144-1.87-.377-3.28-2.03-3.28-4.01v-.05c.55.305 1.18.49 1.85.51-1.1-.74-1.82-2-1.82-3.42 0-.75.2-1.45.55-2.05 2.01 2.47 5.02 4.09 8.41 4.26-.07-.3-.11-.62-.11-.95 0-2.28 1.85-4.13 4.13-4.13 1.19 0 2.27.5 3.03 1.3.94-.18 1.82-.53 2.61-1-.31.97-.97 1.78-1.83 2.29.84-.1 1.65-.32 2.4-.65-.56.83-1.27 1.56-2.09 2.14z" fill="white"/>
      </svg>
    ),
    linkedin: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.12"/>
        <path d="M8.339 17.5H5.67V9.5h2.669v8zm-1.335-9.09c-.85 0-1.54-.69-1.54-1.54 0-.85.69-1.54 1.54-1.54.85 0 1.54.69 1.54 1.54 0 .85-.69 1.54-1.54 1.54zm10.496 9.09h-2.67v-4.02c0-.96-.02-2.19-1.34-2.19-1.34 0-1.55 1.05-1.55 2.13v4.08h-2.67V9.5h2.56v1.09h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.8 3.25 4.14v4.17z" fill="white"/>
      </svg>
    ),
    instagram: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.12"/>
        <path d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.5a3 3 0 110-6 3 3 0 010 6zm5.25-7.75a1.05 1.05 0 11-2.1 0 1.05 1.05 0 012.1 0zm2.97 1.07c-.07-1.48-.41-2.8-1.5-3.89-1.09-1.09-2.41-1.43-3.89-1.5C13.13 3.01 12.87 3 12 3s-1.13.01-1.83.08c-1.48.07-2.8.41-3.89 1.5-1.09 1.09-1.43 2.41-1.5 3.89C3.01 10.87 3 11.13 3 12s.01 1.13.08 1.83c.07 1.48.41 2.8 1.5 3.89 1.09 1.09 2.41 1.43 3.89 1.5.7.07.96.08 1.83.08s1.13-.01 1.83-.08c1.48-.07 2.8-.41 3.89-1.5 1.09-1.09 1.43-2.41 1.5-3.89.07-.7.08-.96.08-1.83s-.01-1.13-.08-1.83zm-1.62 6.62a4.62 4.62 0 01-2.6 2.6c-.9.36-1.84.56-2.98.62-.7.07-.91.08-1.67.08s-.97-.01-1.67-.08c-1.14-.06-2.08-.26-2.98-.62a4.62 4.62 0 01-2.6-2.6c-.36-.9-.56-1.84-.62-2.98-.07-.7-.08-.91-.08-1.67s.01-.97.08-1.67c.06-1.14.26-2.08.62-2.98a4.62 4.62 0 012.6-2.6c.9-.36 1.84-.56 2.98-.62.7-.07.91-.08 1.67-.08s.97.01 1.67.08c1.14.06 2.08.26 2.98.62a4.62 4.62 0 012.6 2.6c.36.9.56 1.84.62 2.98.07.7.08.91.08 1.67s-.01.97-.08 1.67c-.06 1.14-.26 2.08-.62 2.98z" fill="white"/>
      </svg>
    )
  };

  return (
    <a
      href={href}
      className="hover:opacity-80 transition-opacity rounded-full bg-white/10 p-2 flex items-center justify-center"
      aria-label={`Follow us on ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
    >
      {icons[type]}
    </a>
  );
};

const Footer: React.FC = () => {
  const renderFooterLink = (link: { name: string; href: string }) => {
    if (link.href.startsWith('#')) {
      return (
        <a
          key={link.href}
          href={link.href}
          className="box-border text-white/90 text-sm sm:text-base font-normal leading-6 cursor-pointer m-0 p-0 hover:text-[#b2e61b] transition-colors duration-200"
        >
          {link.name}
        </a>
      );
    }
    
    return (
      <Link
        key={link.href}
        to={link.href}
        className="box-border text-white/90 text-sm sm:text-base font-normal leading-6 cursor-pointer m-0 p-0 hover:text-[#b2e61b] transition-colors duration-200"
      >
        {link.name}
      </Link>
    );
  };

  return (
    <footer className="box-border flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-10 bg-[#021223] m-0 px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-14 lg:py-16 overflow-x-hidden">
      <div className="box-border flex max-w-screen-xl flex-col items-center gap-8 sm:gap-10 w-full m-0 p-0">
        <div className="box-border flex flex-wrap justify-between items-start w-full m-0 p-0 gap-8 sm:gap-10 md:gap-12">
          {/* Logo and Company Info */}
          <div className="box-border flex flex-col items-start gap-4 m-0 p-0 max-w-sm">
            <Link to="/" className="box-border flex w-auto h-14 sm:h-16 md:h-20 justify-start items-center shrink-0 m-0 p-0">
              <img 
                src="/lovable-uploads/af002aad-49a7-49c6-bd8f-d66970d17721.png" 
                alt="School Grads Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert drop-shadow-lg"
                loading="lazy"
                width={140}
                height={64}
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Transforming Indian education with global excellence through Finnish pedagogy and innovative learning solutions.
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav className="box-border flex flex-1 flex-wrap items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 m-0 p-0 max-md:flex-col max-md:gap-6 max-md:w-full" aria-label="Footer Navigation">
            <div className="box-border flex flex-col items-start gap-4 sm:gap-5 m-0 p-0 min-w-[140px]">
              <h3 className="box-border text-white text-lg sm:text-xl font-bold leading-7 sm:leading-8 m-0 p-0 mb-1">
                Products
              </h3>
              {footerLinks.products.map(renderFooterLink)}
            </div>
            
            <div className="box-border flex flex-col items-start gap-4 sm:gap-5 m-0 p-0 min-w-[140px]">
              <h3 className="box-border text-white text-lg sm:text-xl font-bold leading-7 sm:leading-8 m-0 p-0 mb-1">
                Services
              </h3>
              {footerLinks.services.map(renderFooterLink)}
            </div>
            
            <div className="box-border flex flex-col items-start gap-4 sm:gap-5 m-0 p-0 min-w-[140px]">
              <h3 className="box-border text-white text-lg sm:text-xl font-bold leading-7 sm:leading-8 m-0 p-0 mb-1">
                Company
              </h3>
              {footerLinks.company.map(renderFooterLink)}
            </div>
            
            <div className="box-border flex flex-col items-start gap-4 sm:gap-5 m-0 p-0 min-w-[140px]">
              <h3 className="box-border text-white text-lg sm:text-xl font-bold leading-7 sm:leading-8 m-0 p-0 mb-1">
                Legal
              </h3>
              {footerLinks.legal.map(renderFooterLink)}
            </div>
          </nav>
          
          {/* Contact and Social Section */}
          <div className="box-border flex flex-col items-start gap-6 m-0 p-0 min-w-[250px] max-md:w-full">
            {/* Contact Us Section */}
            <div className="box-border flex flex-col items-start gap-4 sm:gap-5 m-0 p-0 w-full">
              <h3 className="box-border text-white text-lg sm:text-xl font-bold leading-7 sm:leading-8 m-0 p-0 mb-1">
                Contact Us
              </h3>
              <address className="not-italic box-border text-white/90 text-sm font-normal leading-6 m-0 p-0 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Phone:</span>
                  <a 
                    href="tel:+917499929999" 
                    className="hover:text-[#b2e61b] transition-colors duration-200 underline underline-offset-2" 
                    aria-label="Call School Grads"
                  >
                    +91 74999 29999
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Email:</span>
                  <a 
                    href="mailto:info@schoolgrads.ai" 
                    className="hover:text-[#b2e61b] transition-colors duration-200 underline underline-offset-2" 
                    aria-label="Email School Grads"
                  >
                    info@schoolgrads.ai
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Address:</span>
                  <span className="text-white/80 text-sm leading-relaxed">
                    School Grads, 7, 1-636/40,<br />
                    Near ESI Hospital, Model Colony,<br />
                    Sundar Nagar, Erragadda,<br />
                    Hyderabad, Telangana 500038
                  </span>
                </div>
              </address>
            </div>
            
            {/* Social Media Section */}
            <div className="box-border flex flex-col items-start gap-3 sm:gap-4 m-0 p-0 w-full">
              <span className="text-white text-lg font-bold mb-1">Follow Us</span>
              <div className="flex flex-row gap-3 sm:gap-4">
                <SocialIcon type="facebook" href={socialLinks.facebook} />
                <SocialIcon type="twitter" href={socialLinks.twitter} />
                <SocialIcon type="linkedin" href={socialLinks.linkedin} />
                <SocialIcon type="instagram" href={socialLinks.instagram} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="box-border w-full h-px bg-[rgba(255,255,255,0.12)] m-0 p-0" />
        
        {/* Bottom Section */}
        <div className="box-border flex flex-col sm:flex-row justify-between items-center w-full gap-4 m-0 p-0">
          <p className="box-border text-white/70 text-xs sm:text-sm font-normal leading-5 m-0 p-0 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-white">School Grads</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
            <Link to="/privacy" className="text-white/70 hover:text-[#b2e61b] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-[#b2e61b] transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-white/70 hover:text-[#b2e61b] transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
