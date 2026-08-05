import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import all venue photos
import img1 from '../assets/IMG_2283.jpg';
import img2 from '../assets/IMG_2284.jpg';
import img3 from '../assets/IMG_2285.jpg';
import img4 from '../assets/IMG_2286.jpg';
import img5 from '../assets/IMG_2287.jpg';
import img6 from '../assets/IMG_2290.jpg';
import img7 from '../assets/IMG_2291.jpg';
import img8 from '../assets/IMG_2293.jpg';
import img9 from '../assets/IMG_2294.jpg';

const galleryImages = [
  { src: img1, label: 'Main Banquet Hall' },
  { src: img2, label: 'Hall — Stage View' },
  { src: img3, label: 'Grand Hall' },
  { src: img4, label: 'Welcome Entrance' },
  { src: img5, label: 'Hall Interior' },
  { src: img6, label: 'Upper Level' },
  { src: img7, label: 'Spacious Corridor' },
  { src: img8, label: 'Hall Setup' },
  { src: img9, label: 'Event Space' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-brand-gold">Photo Gallery</span>
            <div className="h-[1px] w-12 bg-brand-gold"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Captivating <span className="italic font-light text-brand-gold-light">Moments</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Take a glimpse into the beautiful memories crafted at our venue.
          </p>
        </motion.div>

        {/* Main Swiper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-2xl border border-white/5 mb-6"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full aspect-[16/9]"
          >
            {galleryImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                    <span className="text-white/80 text-sm uppercase tracking-[0.2em] font-medium bg-black/30 px-4 py-2 backdrop-blur-sm">
                      {item.label}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {galleryImages.slice(0, 5).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
