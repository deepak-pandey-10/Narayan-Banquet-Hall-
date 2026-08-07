import { motion } from 'framer-motion';
import heroBg from '../assets/first.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Narayan Banquet Hall Exterior" className="w-full h-full object-cover object-center" />
        {/* Layered gradient: dark bottom + dark tint overlay */}
        <div className="absolute inset-0 bg-neutral/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-transparent to-transparent" />
      </div>

      {/* Decorative dot pattern */}
      <div className="absolute inset-0 z-0 mandala-bg opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-[1px] w-10 bg-gold" />
          <span className="text-gold-light text-xs tracking-[0.35em] uppercase font-semibold">Since 2005 · Pithoragarh, UK</span>
          <span className="h-[1px] w-10 bg-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.08] mb-6"
        >
          Your Dream Event,{' '}
          <br className="hidden md:block" />
          <span className="text-saffron-light italic font-light">Our Grand Stage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
        >
          A spacious, vibrant banquet hall for weddings, celebrations & corporate events — crafted with warmth and tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-10 py-4 bg-saffron hover:bg-saffron-deep text-white font-semibold tracking-widest uppercase text-sm transition-all duration-300 shadow-lg shadow-saffron/30"
          >
            Reserve Your Date
          </a>
          <a
            href="#gallery"
            className="px-10 py-4 border-2 border-white/50 text-white hover:border-saffron-light hover:text-saffron-light font-semibold tracking-widest uppercase text-sm transition-all duration-300"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-[1px] h-14 bg-white/15 relative overflow-hidden">
          <motion.div
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
            className="absolute left-0 w-full h-1/2 bg-saffron"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
