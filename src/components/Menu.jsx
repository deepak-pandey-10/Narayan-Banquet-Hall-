import { motion } from 'framer-motion';
import menuBg from '../assets/IMG_2286.jpg';
import packageImg1 from '../assets/IMG_2283.jpg';
import packageImg2 from '../assets/IMG_2284.jpg';
import packageImg3 from '../assets/IMG_2290.jpg';
import packageImg4 from '../assets/IMG_2293.jpg';
import nonVegImg from '../assets/IMG_2294.jpg';

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

const nonVegItems = [
  'Mutton',
  'Chicken',
  'Biryani',
  'Mutton Korma',
  'Cold Drink',
  'Ice Cream',
  'Fruit Chaat',
  'Chilli Chicken',
  'Chilli Paneer',
  'Chicken Roll'
];

const packages = [
  {
    title: 'Package 1',
    subtitle: 'Essential Feast',
    items: package1,
    accent: 'emerald',
    image: packageImg1,
  },
  {
    title: 'Package 2',
    subtitle: 'Classic Feast',
    items: package2,
    accent: 'saffron',
    image: packageImg2,
  },
  {
    title: 'Package 3',
    subtitle: 'Standard Feast',
    items: package3,
    accent: 'emerald',
    image: packageImg3,
  },
  {
    title: 'Package 4',
    subtitle: 'Premium Grand Feast',
    items: package4,
    accent: 'saffron',
    image: packageImg4,
  },
];

const accentStyles = {
  emerald: {
    border: 'border-emerald',
    text: 'text-emerald',
    corner: 'border-emerald/20',
    marker: 'text-emerald',
    wash: 'from-emerald/10',
  },
  saffron: {
    border: 'border-saffron',
    text: 'text-saffron',
    corner: 'border-saffron/20',
    marker: 'text-saffron',
    wash: 'from-saffron/10',
  },
  crimson: {
    border: 'border-crimson',
    text: 'text-crimson',
    corner: 'border-crimson/20',
    marker: 'text-crimson',
    wash: 'from-crimson/10',
  },
};

const MenuCard = ({ title, subtitle, items, accent, image, delay = 0, wide = false, note }) => {
  const style = accentStyles[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
      className={`${wide ? 'md:col-span-2' : ''} group relative overflow-hidden bg-white p-8 md:p-10 border-t-4 ${style.border} shadow-xl`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-24 group-hover:scale-105 group-hover:opacity-32 transition-all duration-700"
      />
      <div className={`absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 ${style.wash} to-cream/88`} />
      <div className="absolute inset-0 mandala-bg opacity-25" />
      <div className={`absolute top-0 right-0 w-8 h-8 bg-cream/95 border-l border-b ${style.corner} shadow-sm`} />

      <div className="relative z-10">
        <div className={`flex flex-col ${wide ? 'lg:flex-row lg:items-end lg:justify-between' : ''} gap-4 mb-8 border-b border-neutral/10 pb-5`}>
          <div>
            <h3 className="text-2xl font-serif text-neutral mb-2">{title}</h3>
            <p className={`text-xs uppercase tracking-widest ${style.text} font-semibold`}>{subtitle}</p>
          </div>
          {note && (
            <p className="text-neutral/55 font-light text-sm max-w-xl leading-relaxed">
              {note}
            </p>
          )}
        </div>
        <ul className={`grid grid-cols-1 sm:grid-cols-2 ${wide ? 'lg:grid-cols-3' : ''} gap-y-3 gap-x-6`}>
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className={`${style.marker} mt-1 text-[10px]`}>❖</span>
              <span className="text-sm font-light text-neutral/82">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

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
          {packages.map((pkg, i) => (
            <MenuCard
              key={pkg.title}
              {...pkg}
              delay={i * 0.1}
            />
          ))}

          {/* Non-Veg Add-ons */}
          <MenuCard
            title="Non-Veg Add-ons"
            subtitle="Special Menu Options"
            items={nonVegItems}
            accent="crimson"
            image={nonVegImg}
            delay={0.4}
            wide
            note="You can also customize the menu yourself by choosing dishes from our veg and non-veg options."
          />

          {/* Custom Menu Note */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="md:col-span-2 bg-cream/95 border border-saffron/30 px-7 py-6 md:px-9 md:py-7 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-saffron text-xs uppercase tracking-[0.25em] font-semibold mb-2">Customize Your Feast</p>
                <h3 className="text-2xl md:text-3xl font-serif text-neutral leading-tight">Make your own menu for your celebration.</h3>
              </div>
              <p className="text-neutral/60 font-light text-sm md:text-right max-w-md leading-relaxed">
                Mix items from different packages, add non-veg dishes, or request a custom spread based on your guests and event style.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Menu;
