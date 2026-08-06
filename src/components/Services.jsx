import { motion } from 'framer-motion';
import { FaUtensils, FaCamera, FaMusic, FaGlassCheers, FaParking, FaSnowflake } from 'react-icons/fa';

const services = [
  {
    icon: <FaUtensils size={22} className="text-saffron" />,
    title: 'Gourmet Catering',
    desc: 'Multi-cuisine menus crafted by expert chefs — from traditional Indian feasts to continental spreads.',
    accent: 'from-saffron/10 to-saffron/5',
    border: 'border-saffron/20',
  },
  {
    icon: <FaGlassCheers size={22} className="text-emerald" />,
    title: 'Elegant Décor',
    desc: 'Bespoke floral arrangements, stage setups, and thematic décor that breathe life into your vision.',
    accent: 'from-emerald/10 to-emerald/5',
    border: 'border-emerald/20',
  },
  {
    icon: <FaCamera size={22} className="text-crimson" />,
    title: 'Photography',
    desc: 'Professional photography and videography to preserve every cherished moment beautifully.',
    accent: 'from-crimson/10 to-crimson/5',
    border: 'border-crimson/20',
  },
  {
    icon: <FaMusic size={22} className="text-saffron" />,
    title: 'Entertainment',
    desc: 'Live bands, DJs, and anchoring services to keep the energy high and guests engaged throughout.',
    accent: 'from-saffron/10 to-saffron/5',
    border: 'border-saffron/20',
  },
  {
    icon: <FaParking size={22} className="text-emerald" />,
    title: 'Ample Parking',
    desc: 'Spacious and secure parking facility ensuring a convenient, hassle-free arrival for all guests.',
    accent: 'from-emerald/10 to-emerald/5',
    border: 'border-emerald/20',
  },
  {
    icon: <FaSnowflake size={22} className="text-crimson" />,
    title: 'Comfort & Climate',
    desc: 'Fully air-conditioned halls with backup power ensuring perfect comfort in any weather.',
    accent: 'from-crimson/10 to-crimson/5',
    border: 'border-crimson/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* Background dot texture */}
      <div className="absolute inset-0 mandala-bg opacity-60 pointer-events-none" />

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative p-8 bg-gradient-to-br ${svc.accent} border ${svc.border} rounded-sm hover:shadow-xl transition-all duration-500 overflow-hidden`}
            >
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-saffron group-hover:w-full transition-all duration-500 rounded-full" />

              <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm border ${svc.border} group-hover:scale-110 transition-transform duration-300`}>
                {svc.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-neutral mb-2">{svc.title}</h3>
              <p className="text-neutral/60 font-light text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
