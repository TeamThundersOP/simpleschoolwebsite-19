import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Removed services dropdown - now direct link

  const productsItems = [
    { name: 'Code School', href: '/code-school' },
    { name: 'Finnish Experience', href: '/finnish-experience' },
    // { name: 'Grapho Game', href: '/grapho-game' },
    { name: 'Kindie Days', href: '/kindie-days' },
    { name: 'Moomin Language School', href: '/moomin-language-school' }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="box-border flex w-full flex-col items-center fixed z-[1000] bg-white m-0 p-0 border-b-[rgba(0,0,0,0.10)] border-b border-solid top-0 shadow-sm">
      <div className="box-border flex h-[64px] sm:h-[72px] justify-between items-center w-full m-0 px-4 sm:px-6 md:px-8 lg:px-12 py-0">
        <div className="box-border flex justify-between items-center flex-1 max-w-screen-xl w-full m-0 p-0">
          <Link to="/" className="box-border flex justify-center items-center shrink-0 m-0 p-0" aria-label="Home">
            <img 
              src="/logo.svg" 
              alt="School Grads Logo" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              width="112"
              height="56"
              loading="eager"
              decoding="async"
            />
          </Link>
          
          <nav className="box-border flex justify-center items-center gap-4 sm:gap-6 md:gap-8 m-0 p-0 max-md:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="box-border text-gray-900 text-sm sm:text-base font-bold leading-5 sm:leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors">
              Home
            </Link>
            
            <Link to="/services" className="box-border text-gray-900 text-sm sm:text-base font-bold leading-5 sm:leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors">
              Services
            </Link>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('products')}
                className="box-border flex items-center gap-1 text-gray-900 text-sm sm:text-base font-bold leading-5 sm:leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors"
              >
                Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-md shadow-lg min-w-[200px] z-50">
                  {productsItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-2 text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="box-border text-gray-900 text-sm sm:text-base font-bold leading-5 sm:leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors">
              About Us
            </Link>
          </nav>

          <div className="box-border flex justify-center items-center gap-2 sm:gap-3 md:gap-4 m-0 p-0">
            <button className="box-border flex justify-center items-center gap-1 sm:gap-2 border cursor-pointer bg-gray-900 m-0 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-[100px] border-solid border-gray-900 hover:bg-gray-800 transition-colors">
              <span className="box-border text-white text-xs sm:text-sm md:text-base font-bold leading-4 sm:leading-5 md:leading-6 m-0 p-0">
                Book Appointment
              </span>
            </button>
            <button 
              className="md:hidden text-gray-900 p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-[rgba(0,0,0,0.10)]">
          <nav className="flex flex-col gap-4 p-4">
            <Link to="/" className="text-gray-900 text-base font-bold leading-6 cursor-pointer hover:text-gray-600 transition-colors">
              Home
            </Link>
            
            <Link to="/services" className="text-gray-900 text-base font-bold leading-6 cursor-pointer hover:text-gray-600 transition-colors">
              Services
            </Link>

            {/* Mobile Products */}
            <div>
              <button
                onClick={() => handleDropdownToggle('products-mobile')}
                className="flex items-center justify-between w-full text-gray-900 text-base font-bold leading-6 cursor-pointer hover:text-gray-600 transition-colors"
              >
                Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${activeDropdown === 'products-mobile' ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeDropdown === 'products-mobile' && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {productsItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      className="text-gray-600 text-sm hover:text-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-900 text-base font-bold leading-6 cursor-pointer hover:text-gray-600 transition-colors">
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
