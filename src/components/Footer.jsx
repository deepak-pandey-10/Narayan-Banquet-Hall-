import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-serif font-bold text-white tracking-widest">NARAYAN</h2>
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold font-semibold">Banquet & Events</p>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm font-light">
              Crafting unforgettable moments in an atmosphere of pure elegance and sophistication since decades.
            </p>
            <div className="flex space-x-3">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-sm hover:text-brand-gold transition-colors duration-300 font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Wedding Ceremonies', 'Corporate Events', 'Birthday Parties', 'Anniversaries', 'Custom Gatherings'].map((item, i) => (
                <li key={i}>
                  <span className="text-sm hover:text-brand-gold transition-colors duration-300 font-light cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-6">Find Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-gold mt-1 flex-shrink-0" size={12} />
                <span className="text-sm font-light leading-relaxed">Narayan Banquet Hall, Uttarakhand, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-brand-gold flex-shrink-0" size={12} />
                <span className="text-sm font-light">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-gold flex-shrink-0" size={12} />
                <span className="text-sm font-light">info@narayanbanquet.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Narayan Banquet Hall. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
