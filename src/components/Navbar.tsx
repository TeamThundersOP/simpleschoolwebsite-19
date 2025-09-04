import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const servicesItems = [
    { name: 'Overview', href: '/services' },
    { name: 'Students', href: '/services/students' },
    { name: 'Teachers', href: '/services/teachers' },
    { name: 'School Management', href: '/services/school-management' }
  ];

  const productsItems = [
    { name: 'Code School', href: '/code-school' },
    { name: 'Finnish Experience', href: '/finnish-experience' },
    { name: 'Grapho Game', href: '/grapho-game' },
    { name: 'Kindie Days', href: '/kindie-days' },
    { name: 'Moomin Language School', href: '/moomin-language-school' }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="box-border flex w-full flex-col items-center fixed z-[1000] bg-white m-0 p-0 border-b-[rgba(0,0,0,0.10)] border-b border-solid top-0 shadow-sm">
      <div className="box-border flex h-[72px] justify-between items-center w-full m-0 px-16 py-0 max-md:px-8 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="box-border flex justify-between items-center flex-1 max-w-screen-xl w-full m-0 p-0">
          <Link to="/" className="box-border flex justify-center items-center shrink-0 m-0 p-0">
            <img 
              src="/lovable-uploads/af002aad-49a7-49c6-bd8f-d66970d17721.png" 
              alt="School Grads Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>
          
          <nav className="box-border flex justify-center items-center gap-8 m-0 p-0 max-sm:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="box-border text-gray-900 text-base font-normal leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="box-border flex items-center gap-1 text-gray-900 text-base font-normal leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors"
              >
                Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 bg-card border border-border rounded-md shadow-lg min-w-[200px] z-50">
                  {servicesItems.map((item, index) => (
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

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('products')}
                className="box-border flex items-center gap-1 text-gray-900 text-base font-normal leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors"
              >
                Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`}>
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

            <Link to="/about" className="box-border text-gray-900 text-base font-normal leading-6 cursor-pointer m-0 p-0 hover:text-gray-600 transition-colors">
              About Us
            </Link>
          </nav>

          <div className="box-border flex justify-center items-center gap-4 m-0 p-0">
            <button className="box-border flex justify-center items-center gap-2 border cursor-pointer bg-gray-900 m-0 px-2.5 py-1 rounded-[100px] border-solid border-gray-900 hover:bg-gray-800 transition-colors">
              <span className="box-border text-white text-base font-normal leading-6 m-0 p-0">
                Book Appointment
              </span>
            </button>
            <button 
              className="sm:hidden text-gray-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden w-full bg-white border-t border-[rgba(0,0,0,0.10)]">
          <nav className="flex flex-col gap-4 p-4">
            <Link to="/" className="text-gray-900 text-base font-normal leading-6 cursor-pointer hover:text-gray-600 transition-colors">
              Home
            </Link>
            
            {/* Mobile Services */}
            <div>
              <button
                onClick={() => handleDropdownToggle('services-mobile')}
                className="flex items-center justify-between w-full text-gray-900 text-base font-normal leading-6 cursor-pointer hover:text-gray-600 transition-colors"
              >
                Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {activeDropdown === 'services-mobile' && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {servicesItems.map((item, index) => (
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

            {/* Mobile Products */}
            <div>
              <button
                onClick={() => handleDropdownToggle('products-mobile')}
                className="flex items-center justify-between w-full text-gray-900 text-base font-normal leading-6 cursor-pointer hover:text-gray-600 transition-colors"
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

            <Link to="/about" className="text-gray-900 text-base font-normal leading-6 cursor-pointer hover:text-gray-600 transition-colors">
              About Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
