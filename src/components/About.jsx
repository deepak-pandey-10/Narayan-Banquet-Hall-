import { motion } from 'framer-motion';
import aboutImg from '../assets/IMG_2289.JPG.jpeg';

const stats = [
  { value: '500+', label: 'Events Hosted' },
  { value: '1,000', label: 'Guest Capacity' },
  { value: '18+', label: 'Years of Trust' },
  { value: '100%', label: 'Client Satisfaction' },
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-cream relative overflow-hidden">
      {/* Subtle warm accent circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-saffron/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-saffron rounded-full" />
            <span className="text-saffron text-xs tracking-[0.3em] uppercase font-semibold">Who We Are</span>
            <span className="h-[2px] w-8 bg-saffron rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral">
            A Legacy Built on <span className="text-saffron italic font-light">Celebrations</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="w-full lg:w-[45%] relative"
          >
            {/* Offset border frame — emerald color */}
            <div className="absolute inset-0 border-2 border-emerald/40 translate-x-5 translate-y-5 z-0 rounded-sm" />
            
            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl aspect-[4/5]">
              <img
                src={aboutImg}
                alt="Narayan Banquet Hall accommodation"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              {/* Bottom overlay badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral/90 to-transparent px-6 pb-6 pt-16">
                <p className="text-white font-serif italic text-lg">"Where every event becomes a memory."</p>
                <p className="text-gold-light text-xs tracking-widest uppercase mt-1 font-semibold">— Narayan Banquet</p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="w-full lg:w-[55%]"
          >
            <div className="space-y-5 text-neutral/70 font-light leading-relaxed text-lg mb-10">
              <p>
                Welcome to <strong className="text-saffron font-semibold">Narayan Banquet Hall</strong> — a premier event venue nestled in the heart of Uttarakhand. Our spacious, vibrant halls have hosted hundreds of joyous weddings, corporate gatherings, and grand celebrations over the past 18 years.
              </p>
              <p>
                Our vibrant, well-lit halls adorned with distinctive green ceiling motifs and warm orange walls create a uniquely festive atmosphere. We combine traditional warmth with modern facilities to make every event truly special.
              </p>
            </div>

            {/* Feature bullets */}
            <div className="space-y-3 mb-12">
              {[
                'Spacious main hall with capacity for 1000+ guests',
                'In-house catering with multi-cuisine menu options',
                'Dedicated bridal rooms & guest accommodation',
                'Ample parking with security',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-saffron flex-shrink-0" />
                  <span className="text-neutral/75 font-light text-sm">{feat}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center p-4 bg-white border border-saffron/15 rounded-sm shadow-sm"
                >
                  <p className="text-3xl font-serif font-bold text-saffron">{s.value}</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral/50 mt-1 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
