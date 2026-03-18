import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdPhone, MdMail   } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';


const Header = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: '/' },
    { name: 'About', page: '/about' },
    { name: 'Services', page: '/services' },
    { name: 'Blog', page: '/blog' },
    { name: 'Contact', page: '/contact' }
  ];

    const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    
      <div className="hidden lg:block bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:0712345678" className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
                <MdPhone  className="w-4 h-4" />
                <span>0712345678</span>
              </a>
              <a href="mailto:info@goliathmarketing.co.ke" className="flex items-center space-x-2 hover:text-orange-400 transition-colors">
                <MdMail  className="w-4 h-4" />
                <span>info@goliathmarketing.co.ke</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-400">Follow us:</span>
              <a href="https://instagram.com/goliathwabungoma" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/goliathwabungoma" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                Facebook
              </a>
              <a href="https://twitter.com/goliathwabungoma" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav 
        className={`sticky top-0 lg:top-8 w-full z-50 transition-all duration-300 rounded-md ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-white/90 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
             onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                G
              </div>
              <div>
                <h1 className="text-slate-900 font-black text-xl tracking-tight group-hover:text-orange-500 transition-colors">
                  GOLIATH
                </h1>
                <p className="text-orange-500 text-xs font-bold tracking-wider">
                  WA BUNGOMA
                </p>
              </div>
            </button>

           {/* Desktop */}
            <div className="hidden lg:flex items-center space-x-8 cursor-pointer">
              {navItems.map((item) => (
                <a
                  key={item.page}
                 onClick={() => handleNavigation(item.page)}
                  className={`font-semibold transition-colors relative group ${
                    location.pathname === item.page
                      ? 'text-orange-500'
                      : 'text-slate-700 hover:text-orange-500'
                  }`}
                >
                  {item.name}
       
                  {location.pathname === item.page && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-500"></span>
                  )}
                
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </div>

            
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavigation('/contact')}
                className="bg-orange-500 text-white px-6 py-2.5 cursor-pointer rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all"
              >
                Get Started
              </button>
            </div>

            
            <a
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {isMobileMenuOpen ? (
                <MdClose  className="w-6 h-6 text-slate-900" />
              ) : (
                <MdMenu className="w-6 h-6 text-slate-900" />
              )}
            </a>
          </div>
        </div>

     
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-white border-t border-slate-200 shadow-lg">
            <div className="container mx-auto px-6 py-6 space-y-4">
             
              {navItems.map((item) => (
                <a
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full px-4 py-3 rounded-lg font-semibold transition-all cursor-pointer text-center ${
                     location.pathname === item.page
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a
                  href="tel:0712345678"
                  className="flex items-center space-x-3 px-4 py-2 text-slate-700 hover:text-orange-500 transition-colors"
                >
                  <MdPhone className="w-5 h-5" />
                  <span className="font-semibold">0712345678</span>
                </a>
                <a
                  href="mailto:info@goliathmarketing.co.ke"
                  className="flex items-center space-x-3 px-4 py-2 text-slate-700 hover:text-orange-500 transition-colors"
                >
                  <MdMail  className="w-5 h-5" />
                  <span className="font-semibold">info@goliathmarketing.co.ke</span>
                </a>
              </div>

              
              <button
              onClick={() => handleNavigation('/contact')}
                className="w-full bg-orange-500 cursor-pointer text-white py-3 rounded-xl font-bold shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20 lg:h-28"></div>
    </>
  );
};

export default Header;