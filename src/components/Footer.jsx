import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const quickLinks = ['Home', 'About', 'Services', 'Gallery', 'Contact'];
const serviceList = ['Wedding Ceremonies', 'Corporate Events', 'Birthday Parties', 'Anniversaries', 'Receptions', 'Custom Events'];

const Footer = () => {
  return (
    <footer className="bg-neutral text-white/60 pt-20 pb-8 relative overflow-hidden">
      {/* Top gold gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent opacity-60" />
      {/* Subtle mandala pattern */}
      <div className="absolute inset-0 mandala-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <p className="font-serif text-2xl font-bold text-white tracking-wider">NARAYAN</p>
              <p className="text-[0.6rem] tracking-[0.35em] uppercase font-semibold text-saffron">Banquet & Events</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light mb-7">
              A premier banquet hall in Uttarakhand, creating unforgettable celebrations with warmth, elegance, and tradition.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebook, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaWhatsapp, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-saffron hover:text-saffron hover:bg-saffron/10 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.25em] text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-light hover:text-saffron transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron/40 group-hover:bg-saffron transition-colors duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.25em] text-white font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {serviceList.map((item) => (
                <li key={item}>
                  <span className="text-sm font-light hover:text-saffron transition-colors duration-300 cursor-pointer flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald/40 group-hover:bg-emerald transition-colors duration-300" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.25em] text-white font-semibold mb-5">Find Us</h3>
            <ul className="space-y-4">
              {[
                { Icon: FaMapMarkerAlt, text: 'Narayan Banquet Hall, Uttarakhand, India' },
                { Icon: FaPhoneAlt,     text: '+91 98765 43210' },
                { Icon: FaEnvelope,     text: 'info@narayanbanquet.com' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={12} className="text-saffron mt-1 flex-shrink-0" />
                  <span className="text-sm font-light leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-8 px-6 py-3 bg-saffron hover:bg-saffron-deep text-white text-xs font-semibold tracking-widest uppercase transition-colors duration-300"
            >
              Book a Tour
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 gap-3">
          <p>© {new Date().getFullYear()} Narayan Banquet Hall. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
