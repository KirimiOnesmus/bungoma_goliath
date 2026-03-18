import React, {useState,useEffect} from 'react';
import { MdMail, MdPhone, MdLocationOn, MdFacebook    } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = ({ onNavigate }) => {  
  
  const [isScrolled, setIsScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  // const location = useLocation();

   useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const quickLinks = [
    { name: 'Home', page: '/' },
    { name: 'About Us', page: '/about' },
    { name: 'Services', page: '/services' },
    { name: 'Blog', page: '/blog' },
    { name: 'Contact', page: '/contact' }
  ];

  const services = [
    'Social Media Marketing',
    'Brand Strategy',
    'Content Creation',
    'Digital Advertising',
    'Influencer Marketing',
    'Business Growth'
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: AiFillInstagram,
      url: 'https://instagram.com/goliathwabungoma',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook',
      icon: MdFacebook ,
      url: 'https://facebook.com/goliathwabungoma',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaXTwitter,
      url: 'https://twitter.com/goliathwabungoma',
      color: 'hover:text-sky-500'
    }
  ];

   const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-slate-900 text-white">

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                G
              </div>
              <div>
                <h3 className="text-white font-black text-xl tracking-tight">GOLIATH</h3>
                <p className="text-orange-400 text-xs font-bold tracking-wider">WA BUNGOMA</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Kenya's premier marketing agency. We help businesses reach new heights through innovative strategies and measurable results.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 transition-all hover:bg-slate-700 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <a
                    onClick={() => handleNavigation(link.page)}
                    className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    onClick={() => onNavigate('services')}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center space-x-2 cursor-pointer group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 transition-all duration-300"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0722555330"
                  className="flex items-start space-x-3 text-slate-400 hover:text-orange-400 transition-colors group"
                >
                  <MdPhone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-white">Phone / WhatsApp</p>
                    <p>0722555330</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@goliathmarketing.co.ke"
                  className="flex items-start space-x-3 text-slate-400 hover:text-orange-400 transition-colors group"
                >
                  <MdMail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="break-all">info@goliathmarketing.co.ke</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-slate-400">
                  <MdLocationOn  className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p>Bungoma, Kenya</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Goliath Wa Bungoma Marketing. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                onClick={() => onNavigate('services')}
                className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                onClick={() => onNavigate('services')}
                className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
         
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;