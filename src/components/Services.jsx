import { motion } from 'framer-motion';
import {
  FaCamera,
  FaCheck,
  FaGlassCheers,
  FaMusic,
  FaParking,
  FaRegCalendarCheck,
  FaSnowflake,
  FaUtensils,
} from 'react-icons/fa';
import serviceImg from '../assets/IMG_2291.jpg';

const services = [
  {
    icon: FaUtensils,
    title: 'Gourmet Catering',
    desc: 'Multi-cuisine menus crafted by expert chefs — from traditional Indian feasts to continental spreads.',
    accent: 'text-saffron bg-saffron/10 border-saffron/20',
    line: 'bg-saffron',
  },
  {
    icon: FaGlassCheers,
    title: 'Elegant Décor',
    desc: 'Bespoke floral arrangements, stage setups, and thematic décor that breathe life into your vision.',
    accent: 'text-emerald bg-emerald/10 border-emerald/20',
    line: 'bg-emerald',
  },
  {
    icon: FaCamera,
    title: 'Photography',
    desc: 'Professional photography and videography to preserve every cherished moment beautifully.',
    accent: 'text-crimson bg-crimson/10 border-crimson/20',
    line: 'bg-crimson',
  },
  {
    icon: FaMusic,
    title: 'Entertainment',
    desc: 'Live bands, DJs, and anchoring services to keep the energy high and guests engaged throughout.',
    accent: 'text-saffron bg-saffron/10 border-saffron/20',
    line: 'bg-saffron',
  },
  {
    icon: FaParking,
    title: 'Ample Parking',
    desc: 'Spacious and secure parking facility ensuring a convenient, hassle-free arrival for all guests.',
    accent: 'text-emerald bg-emerald/10 border-emerald/20',
    line: 'bg-emerald',
  },
  {
    icon: FaSnowflake,
    title: 'Comfort & Climate',
    desc: 'Fully air-conditioned halls with backup power ensuring perfect comfort in any weather.',
    accent: 'text-crimson bg-crimson/10 border-crimson/20',
    line: 'bg-crimson',
  },
];

const highlights = [
  'Dedicated event planning support',
  'Custom layouts for every celebration',
  'Trusted local vendor coordination',
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cream/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-saffron rounded-full" />
            <span className="text-saffron text-xs tracking-[0.3em] uppercase font-semibold">What We Offer</span>
            <span className="h-[2px] w-8 bg-saffron rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral mb-3">
            Premium <span className="text-saffron italic font-light">Services</span>
          </h2>
          <p className="text-neutral/55 max-w-xl mx-auto font-light leading-relaxed">
            Every detail thoughtfully arranged so you can focus entirely on celebrating.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-stretch mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative min-h-[460px] overflow-hidden rounded-sm shadow-2xl"
          >
            <img
              src={serviceImg}
              alt="Decorated Narayan Banquet Hall event space"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-neutral/30 to-transparent" />
            <div className="absolute inset-0 border border-white/15" />
            <div className="absolute left-6 right-6 bottom-6 md:left-8 md:right-8 md:bottom-8">
              <div className="inline-flex items-center gap-2 bg-white/12 backdrop-blur-md border border-white/20 px-4 py-2 mb-5">
                <FaRegCalendarCheck className="text-saffron-light" size={14} />
                <span className="text-white/85 text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
                  End-to-End Planning
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-4">
                One team for every part of your event.
              </h3>
              <p className="text-white/68 font-light leading-relaxed max-w-md">
                From first walkthrough to the final guest departure, our team keeps the setup, food, décor, and flow coordinated.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 bg-cream border border-saffron/15 p-6 md:p-7 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-white border border-saffron/20 flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-saffron" size={10} />
                    </span>
                    <p className="text-sm text-neutral/70 leading-relaxed font-light">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  className="group relative bg-white border border-neutral/10 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-saffron/30 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 h-1 w-14 ${svc.line} group-hover:w-full transition-all duration-500`} />
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`relative w-12 h-12 border ${svc.accent} flex items-center justify-center mb-5 shadow-sm`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="relative text-xl font-serif font-semibold text-neutral mb-2">{svc.title}</h3>
                  <p className="relative text-neutral/60 font-light text-sm leading-relaxed">{svc.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="bg-neutral text-white border border-saffron/25 px-6 py-7 md:px-9 md:py-8 shadow-xl shadow-neutral/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-saffron-light text-xs tracking-[0.25em] uppercase font-semibold mb-2">Need a custom setup?</p>
              <h3 className="text-2xl md:text-3xl font-serif leading-tight">Tell us the occasion, guest count, and date.</h3>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-4 bg-saffron hover:bg-saffron-deep text-white font-semibold tracking-widest uppercase text-xs transition-colors duration-300 shadow-lg shadow-saffron/20"
            >
              Plan My Event
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
