import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const phoneNumber = '+91 9897273236';
const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
const address = 'Narayan Banquet Hall, Pithoragarh, near Sports Stadium, Jagdamba Colony, Road, Pithoragarh, Machhina Kholi, Uttarakhand 262501';
const encodedAddress = encodeURIComponent(address);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

const infoItems = [
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: address,
    action: 'Open in Maps',
    href: mapsUrl,
    accent: 'bg-saffron/10 text-saffron border-saffron/20',
  },
  {
    icon: FaWhatsapp,
    label: 'Phone / WhatsApp',
    value: phoneNumber,
    action: 'Chat on WhatsApp',
    href: whatsappUrl,
    accent: 'bg-emerald/10 text-emerald border-emerald/20',
  },
  {
    icon: FaClock,
    label: 'Opening Hours',
    value: 'Mon - Sun: 9 AM - 9 PM',
    action: 'Open Daily',
    accent: 'bg-crimson/10 text-crimson border-crimson/20',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-28 bg-cream-dark relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-50 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />

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
            <span className="text-saffron text-xs tracking-[0.3em] uppercase font-semibold">Get In Touch</span>
            <span className="h-[2px] w-8 bg-saffron rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-neutral mb-3">
            Visit or <span className="text-saffron italic font-light">Message Us</span>
          </h2>
          <p className="text-neutral/55 max-w-xl mx-auto font-light leading-relaxed">
            Find us easily, call through WhatsApp, or drop by during our daily opening hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
            {infoItems.map(({ icon: Icon, label, value, action, href, accent }, i) => {
              const Card = href ? 'a' : 'div';

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="h-full"
                >
                  <Card
                    href={href}
                    target={href ? '_blank' : undefined}
                    rel={href ? 'noreferrer' : undefined}
                    className="group relative flex h-full min-h-[150px] items-start gap-5 bg-white border border-saffron/15 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-saffron/35 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-saffron scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                    <div className={`w-13 h-13 border ${accent} flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-neutral/40 font-semibold mb-2">{label}</p>
                      <h3 className="text-lg md:text-xl font-serif text-neutral leading-snug mb-4">{value}</h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
                        {action}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 bg-white border border-saffron/15 p-3 shadow-xl shadow-neutral/5"
          >
            <div className="relative h-[360px] lg:h-full min-h-[500px] overflow-hidden">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Narayan Banquet Hall Location"
              />
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute left-4 bottom-4 bg-saffron hover:bg-saffron-deep text-white px-5 py-3 text-xs uppercase tracking-[0.18em] font-semibold shadow-lg transition-colors duration-300"
              >
                Open in Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
