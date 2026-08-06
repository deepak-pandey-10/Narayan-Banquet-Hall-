import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',     href: '#hero' },
  { name: 'About',    href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Menu',     href: '#menu' },
  { name: 'Gallery',  href: '#gallery' },
  { name: 'Contact',  href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className={`font-serif text-2xl font-bold tracking-wider transition-colors duration-300 ${scrolled ? 'text-neutral' : 'text-white'}`}>
            NARAYAN
          </span>
          <span className={`text-[0.6rem] tracking-[0.35em] uppercase font-semibold transition-colors duration-300 ${scrolled ? 'text-emerald' : 'text-gold-light'}`}>
            Banquet Hall
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative text-[0.78rem] font-semibold tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? 'text-neutral hover:text-saffron' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-saffron group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
          <a
            href="#contact"
            className={`text-[0.75rem] font-semibold tracking-widest uppercase px-6 py-2.5 border-2 transition-all duration-300 ${
              scrolled
                ? 'border-saffron text-saffron hover:bg-saffron hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-saffron'
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-neutral' : 'text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-neutral font-semibold text-sm uppercase tracking-widest hover:text-saffron transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-center border-2 border-saffron text-saffron font-semibold text-sm uppercase tracking-widest py-3 hover:bg-saffron hover:text-white transition-all"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
