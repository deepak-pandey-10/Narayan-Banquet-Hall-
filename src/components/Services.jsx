import { motion } from 'framer-motion';
import { FaUtensils, FaCamera, FaMusic, FaGlassCheers, FaParking, FaSnowflake } from 'react-icons/fa';

const services = [
  {
    title: 'Gourmet Catering',
    description: 'Exquisite culinary experiences crafted by our master chefs to delight every guest at your celebration.',
    icon: <FaUtensils className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: 'Elegant Decor',
    description: 'Bespoke decorations and floral arrangements that bring your unique vision to life beautifully.',
    icon: <FaGlassCheers className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: 'Photography',
    description: 'Capture every precious moment with our expert in-house photography and videography partners.',
    icon: <FaCamera className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: 'Entertainment',
    description: 'Top-tier DJs, live bands, and performers to keep your event lively and truly memorable.',
    icon: <FaMusic className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: 'Ample Parking',
    description: 'Safe and spacious parking facility for all your guests, ensuring a hassle-free arrival.',
    icon: <FaParking className="w-6 h-6 text-brand-gold" />,
  },
  {
    title: 'AC & Climate',
    description: 'Fully air-conditioned halls ensuring a comfortable experience no matter the season.',
    icon: <FaSnowflake className="w-6 h-6 text-brand-gold" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-brand-gold">What We Offer</span>
            <div className="h-[1px] w-12 bg-brand-gold"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Our Premium <span className="italic font-light text-brand-gold">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            We offer comprehensive event solutions ensuring a seamless and spectacular experience from start to finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-left p-10 bg-brand-light border border-gray-100 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-gold group-hover:w-full transition-all duration-500 ease-out"></div>

              <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
