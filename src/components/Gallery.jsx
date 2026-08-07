import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import img1 from '../assets/IMG_2283.jpg';
import img2 from '../assets/IMG_2284.jpg';
import img3 from '../assets/IMG_2285.jpg';
import img4 from '../assets/IMG_2286.jpg';
import img5 from '../assets/IMG_2287.jpg';
import img6 from '../assets/IMG_2290.jpg';
import img7 from '../assets/IMG_2291.jpg';
import img8 from '../assets/IMG_2293.jpg';
import img9 from '../assets/IMG_2294.jpg';

const images = [
  { src: img1},
  { src: img2 },
  { src: img3 },
  { src: img4},
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="gallery" className="py-28 bg-neutral relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 mandala-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[2px] w-8 bg-saffron rounded-full" />
            <span className="text-saffron text-xs tracking-[0.3em] uppercase font-semibold">Our Venue</span>
            <span className="h-[2px] w-8 bg-saffron rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-3">
            A Glimpse of <span className="text-saffron italic font-light">Grandeur</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto font-light">
            Explore every corner of Narayan Banquet Hall through our curated photo gallery.
          </p>
        </motion.div>

        {/* Main Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-sm shadow-2xl border border-white/5 mb-4"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Thumbs]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            speed={1000}
            className="aspect-[16/9]"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    {/* <span className="bg-saffron/90 text-white text-xs uppercase tracking-[0.2em] font-semibold px-5 py-2 backdrop-blur-sm">
                      {img.label}
                    </span> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={8}
          slidesPerView={4}
          watchSlidesProgress
          breakpoints={{
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 9 },
          }}
          className="thumbs-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-square overflow-hidden rounded-sm cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300 border-2 border-transparent [.swiper-slide-thumb-active_&]:opacity-100 [.swiper-slide-thumb-active_&]:border-saffron">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover object-center" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
