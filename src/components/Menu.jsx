import { motion } from 'framer-motion';
import menuBg from '../assets/IMG_2286.jpg';

const package1 = [
  'Pulao / Jeera Rice',
  'Shahi Paneer',
  'Dal Makhani / Peeli Dal / Rajma',
  'Mix Veg',
  'Raita',
  'Chutney',
  'Papad',
  'Salad',
  'Poori',
  'Gulab Jamun'
];

const package2 = [
  'Pulao / Jeera Rice',
  'Shahi Paneer / Matar Paneer',
  'Dal Makhani / Peeli Dal / Rajma',
  'Mix Veg',
  'Raita',
  'Chutney',
  'Papad',
  'Salad',
  'Poori',
  'Naan',
  'Tawa Veg',
  'Gulab Jamun'
];

const package3 = [
  'Jeera Rice',
  'Dal Makhani / Peeli Dal / Rajma',
  'Shahi Paneer',
  'Mix Veg',
  'Jholi Kofta',
  'Tawa Veg Bharwa',
  'Raita (Kheera)',
  'Papad',
  'Chutney',
  'Salad',
  'Poori',
  'Naan',
  'Gulab Jamun',
  'Tikki',
  'Chowmein',
  'Golgappa',
  'Coffee'
];

const package4 = [
  'Pulao / Jeera Rice',
  'Dal Makhani / Peeli Dal / Rajma',
  'Shahi Paneer',
  'Mix Veg',
  'Tawa Veg',
  'Raita (Kheera)',
  'Papad',
  'Chutney',
  'Salad',
  'Poori',
  'Naan',
  'Gulab Jamun',
  'Tikki',
  'Chowmein',
  'Golgappa',
  'Dosa',
  'Gajar Ka Halwa',
  'Chilla',
  'Coffee',
  'Moong Ka Halwa',
  'Dahi Bada',
  'Jholi Kofta'
];

const Menu = () => {
  return (
    <section id="menu" className="py-28 relative overflow-hidden bg-neutral">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={menuBg} alt="Menu Background" className="w-full h-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-neutral/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-transparent to-neutral/90" />
      </div>

      <div className="absolute inset-0 mandala-bg opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-emerald rounded-full" />
            <span className="text-emerald text-xs tracking-[0.3em] uppercase font-semibold">Culinary Delights</span>
            <span className="h-[2px] w-8 bg-emerald rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-3">
            Our Custom <span className="text-emerald italic font-light">Menus</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            Delight your guests with our expertly crafted traditional and contemporary feast packages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Package 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 border-t-4 border-emerald shadow-xl relative"
          >
            <div className="absolute top-0 right-0 w-8 h-8 bg-cream border-l border-b border-emerald/20 shadow-sm" />
            <h3 className="text-2xl font-serif text-neutral mb-2">Package 1</h3>
            <p className="text-xs uppercase tracking-widest text-emerald font-semibold mb-8 border-b border-neutral/10 pb-4">Essential Feast</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {package1.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald mt-1 text-[10px]">❖</span>
                  <span className="text-sm font-light text-neutral/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Package 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 md:p-10 border-t-4 border-saffron shadow-xl relative"
          >
            <div className="absolute top-0 right-0 w-8 h-8 bg-cream border-l border-b border-saffron/20 shadow-sm" />
            <h3 className="text-2xl font-serif text-neutral mb-2">Package 2</h3>
            <p className="text-xs uppercase tracking-widest text-saffron font-semibold mb-8 border-b border-neutral/10 pb-4">Classic Feast</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {package2.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-saffron mt-1 text-[10px]">❖</span>
                  <span className="text-sm font-light text-neutral/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Package 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 border-t-4 border-emerald shadow-xl relative"
          >
            <div className="absolute top-0 right-0 w-8 h-8 bg-cream border-l border-b border-emerald/20 shadow-sm" />
            <h3 className="text-2xl font-serif text-neutral mb-2">Package 3</h3>
            <p className="text-xs uppercase tracking-widest text-emerald font-semibold mb-8 border-b border-neutral/10 pb-4">Standard Feast</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {package3.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald mt-1 text-[10px]">❖</span>
                  <span className="text-sm font-light text-neutral/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Package 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 md:p-10 border-t-4 border-saffron shadow-xl relative"
          >
            <div className="absolute top-0 right-0 w-8 h-8 bg-cream border-l border-b border-saffron/20 shadow-sm" />
            <h3 className="text-2xl font-serif text-neutral mb-2">Package 4</h3>
            <p className="text-xs uppercase tracking-widest text-saffron font-semibold mb-8 border-b border-neutral/10 pb-4">Premium Grand Feast</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {package4.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-saffron mt-1 text-[10px]">❖</span>
                  <span className="text-sm font-light text-neutral/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Menu;
