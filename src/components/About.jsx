import { motion } from 'framer-motion';
import aboutImg from '../assets/IMG_2289.JPG.jpeg';

const About = () => {
  return (
    <section id="about" className="py-32 bg-brand-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Elegant offset frame */}
            <div className="absolute inset-0 border border-brand-gold/30 translate-x-6 translate-y-6 z-0"></div>

            <div className="aspect-[3/4] relative z-10 shadow-2xl overflow-hidden">
              <img
                src={aboutImg}
                alt="Narayan Banquet Hall Interior"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl max-w-xs z-20 hidden md:block border-l-4 border-brand-gold"
            >
              <p className="font-serif italic text-brand-gray text-lg mb-2">"A masterpiece of space & elegance."</p>
              <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">— Narayan Banquet</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-gold"></div>
              <span className="uppercase tracking-[0.2em] text-sm font-semibold text-brand-gold">Our Legacy</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-brand-dark mb-8 leading-tight">
              A Tradition of <br />
              <span className="italic font-light text-brand-gold">Excellence</span>
            </h2>

            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg mb-12">
              <p>
                Welcome to Narayan Banquet Hall, where we transform your special occasions into unforgettable, cinematic experiences. With our spacious halls and state-of-the-art facilities, we provide the perfect canvas for your dream events.
              </p>
              <p>
                Whether you are planning a grand wedding, a corporate gala, or an intimate gathering, our dedicated team of professionals ensures every meticulous detail is executed flawlessly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-5xl font-serif font-bold text-brand-dark mb-2">500<span className="text-brand-gold">+</span></h4>
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-medium">Events Hosted</p>
              </div>
              <div>
                <h4 className="text-5xl font-serif font-bold text-brand-dark mb-2">1,000</h4>
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-medium">Guest Capacity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
