import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const isActivePage = (path) => location.pathname === path;
  const isActiveDropdown = (items) => items.some(item => location.pathname === item.path);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    if (window.innerWidth >= 1024) { // Only for desktop
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setActiveDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Only for desktop
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (window.innerWidth < 1024) { // Only for mobile
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Programs dropdown items
  const programItems = [
    {name: "All Programs", path:"/StackenzoPrograms"},
    { name: "Events", path: "/Programs" },
    { name: "College Programs", path: "/WorkShops" },
    { name: "School Programs", path: "/Robotics" }
  ];

  // Services dropdown items
  const serviceItems = [
    { name: "All Services", path :"/Services"},
    { name: "IT Services", path: "/WebServices" },
    { name: "Digital Marketing", path: "/DigitalMarketing" },
    { name: "R&D Projects", path: "/R_AND_D" },
    { name: "GSIN", path: "/Community" }
  ];

  const dropdowns = [
    {
      id: "programs",
      label: "Programs",
      items: programItems,
    },
    {
      id: "services",
      label: "Services",
      items: serviceItems,
    }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full flex justify-between items-center 
      px-4 sm:px-6 md:px-10 py-3 sm:py-4 
      bg-white backdrop-blur-xl border-b border-gray-200 z-50">
      
      {/* Logo */}
      <Link to="/" onClick={closeAll} className="z-50 flex items-center gap-2">
        <img 
          src="/images/Stackenzo small Logo.jpg.jpeg" 
          alt="Stackenzo" 
          className="h-8 sm:h-10 md:h-12 w-auto hover:opacity-80 transition-opacity"
        />
        <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-[#1E301E] hover:text-[#2E7D32] transition-colors">
          Stackenzo
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-2">
        {/* Home Link */}
        <Link
          to="/"
          onClick={closeAll}
          className={`px-3 py-2 text-[#1A1A1A] hover:text-[#1E301E] transition font-medium rounded-lg hover:bg-[#E8F5E9] ${
            isActivePage('/') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
          }`}
        >
          Home
        </Link>

        {/* About Link */}
        <Link
          to="/About"
          onClick={closeAll}
          className={`px-3 py-2 text-[#1A1A1A] hover:text-[#1E301E] transition font-medium rounded-lg hover:bg-[#E8F5E9] ${
            isActivePage('/About') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
          }`}
        >
          About
        </Link>

        {/* Careers Link */}
        <Link
          to="/Career"
          onClick={closeAll}
          className={`px-3 py-2 text-[#1A1A1A] hover:text-[#1E301E] transition font-medium rounded-lg hover:bg-[#E8F5E9] ${
            isActivePage('/Career') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
          }`}
        >
          Careers
        </Link>

        {/* Gallery Link */}
        <Link
          to="/Gallerypage"
          onClick={closeAll}
          className={`px-3 py-2 text-[#1A1A1A] hover:text-[#1E301E] transition font-medium rounded-lg hover:bg-[#E8F5E9] ${
            isActivePage('/Gallerypage') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
          }`}
        >
          Gallery
        </Link>

        {/* Dynamic Dropdowns - Hover based for desktop */}
        {dropdowns.map((dropdown) => (
          <div 
            key={dropdown.id} 
            className="relative"
            onMouseEnter={() => handleMouseEnter(dropdown.id)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center space-x-1 px-3 py-2 text-[#1A1A1A] hover:text-[#1E301E] transition font-medium rounded-lg hover:bg-[#E8F5E9] ${
                activeDropdown === dropdown.id ? 'text-[#1E301E] bg-[#E8F5E9]' : ''
              } ${
                isActiveDropdown(dropdown.items) ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
              }`}
            >
              <span>{dropdown.label}</span>
              {activeDropdown === dropdown.id ? 
                <ChevronUp className="w-4 h-4 ml-1" /> : 
                <ChevronDown className="w-4 h-4 ml-1" />
              }
            </button>
            
            {activeDropdown === dropdown.id && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white 
                backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl py-2 overflow-hidden
                animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {/* Decorative gradient line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1E301E] to-[#2E7D32]" />
                
                {dropdown.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2.5 text-[#1A1A1A] hover:text-[#1E301E] 
                      hover:bg-[#E8F5E9] transition-all duration-200 border-l-2 border-transparent
                      hover:border-[#1E301E] ml-1 mr-1 rounded ${
                      isActivePage(item.path) ? 'bg-[#E8F5E9] text-[#1E301E] border-[#1E301E]' : ''
                    }`}
                    onClick={closeAll}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Contact Link */}
        <Link
          to="/Contact"
          onClick={closeAll}
          className={`px-3 py-2 text-[#1A1A1A] hover:text-[#1E301E] transition font-medium rounded-lg hover:bg-[#E8F5E9] ${
            isActivePage('/Contact') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#1A1A1A] hover:text-[#1E301E] transition p-2 rounded-md hover:bg-[#E8F5E9] z-50 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {isOpen ? 
          <X className="w-6 h-6" strokeWidth={2.5} /> : 
          <Menu className="w-6 h-6" strokeWidth={2.5} />
        }
      </button>

      {/* Mobile Navigation - Click based for mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white 
          backdrop-blur-xl border-b border-gray-200 lg:hidden shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-0 px-4 py-3">
            {/* Home Link */}
            <Link
              to="/"
              onClick={closeAll}
              className={`py-3 px-4 text-[#1A1A1A] hover:text-[#1E301E] hover:bg-[#E8F5E9] transition font-medium
                border-b border-gray-100 text-base flex items-center ${
                isActivePage('/') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
              }`}
            >
              Home
            </Link>

            {/* About Link */}
            <Link
              to="/About"
              onClick={closeAll}
              className={`py-3 px-4 text-[#1A1A1A] hover:text-[#1E301E] hover:bg-[#E8F5E9] transition font-medium
                border-b border-gray-100 text-base flex items-center ${
                isActivePage('/About') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
              }`}
            >
              About
            </Link>

            {/* Careers Link */}
            <Link
              to="/Career"
              onClick={closeAll}
              className={`py-3 px-4 text-[#1A1A1A] hover:text-[#1E301E] hover:bg-[#E8F5E9] transition font-medium
                border-b border-gray-100 text-base flex items-center ${
                isActivePage('/Career') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
              }`}
            >
              Careers
            </Link>

            {/* Gallery Link */}
            <Link
              to="/Gallerypage"
              onClick={closeAll}
              className={`py-3 px-4 text-[#1A1A1A] hover:text-[#1E301E] hover:bg-[#E8F5E9] transition font-medium
                border-b border-gray-100 text-base flex items-center ${
                isActivePage('/Gallerypage') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
              }`}
            >
              Gallery
            </Link>

            {/* Mobile Dropdowns - Click based for mobile */}
            {dropdowns.map((dropdown) => (
              <div key={dropdown.id} className="border-b border-gray-100">
                <button
                  onClick={() => toggleDropdown(dropdown.id)}
                  className={`flex justify-between items-center w-full py-3 px-4 
                    text-[#1A1A1A] hover:text-[#1E301E] hover:bg-[#E8F5E9] transition font-medium text-base ${
                    activeDropdown === dropdown.id ? 'text-[#1E301E] bg-[#E8F5E9]' : ''
                  } ${
                    isActiveDropdown(dropdown.items) ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
                  }`}
                >
                  <span className="flex items-center">
                    {dropdown.label}
                  </span>
                  {activeDropdown === dropdown.id ? 
                    <ChevronUp className="w-5 h-5" /> : 
                    <ChevronDown className="w-5 h-5" />
                  }
                </button>
                
                {activeDropdown === dropdown.id && (
                  <div className="pl-4 pb-2 space-y-1 animate-in slide-in-from-top-1 duration-200">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={closeAll}
                        className={`block py-2.5 px-4 text-[#1A1A1A] hover:text-[#1E301E] hover:bg-[#E8F5E9] 
                          transition-all duration-200 border-l-2 border-[#1E301E]/30 ml-2 text-base ${
                          isActivePage(item.path) ? 'bg-[#E8F5E9] text-[#1E301E] border-[#1E301E]' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Link */}
            <Link
              to="/Contact"
              onClick={closeAll}
              className={`py-3 px-4 text-[#1A1A1A] hover:text-[#1E301E] hover:bg-[#E8F5E9] transition font-medium
                border-b border-gray-100 text-base flex items-center ${
                isActivePage('/Contact') ? 'bg-[#E8F5E9] text-[#1E301E]' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;