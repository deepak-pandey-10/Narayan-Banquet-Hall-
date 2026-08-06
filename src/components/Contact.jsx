import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const infoItems = [
  { icon: FaMapMarkerAlt, label: 'Address',    value: 'Narayan Banquet Hall, Uttarakhand, India' },
  { icon: FaPhoneAlt,     label: 'Phone',      value: '+91 98765 43210' },
  { icon: FaEnvelope,     label: 'Email',      value: 'info@narayanbanquet.com' },
  { icon: FaClock,        label: 'Open Hours', value: 'Mon – Sun: 9 AM – 9 PM' },
];

const eventTypes = ['Wedding', 'Engagement', 'Birthday', 'Anniversary', 'Corporate Event', 'Other'];

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("🎉 Request received! We'll be in touch soon.", {
      position: 'bottom-right',
      autoClose: 5000,
      theme: 'colored',
      style: { background: '#e8710a' },
    });
    reset();
  };

  return (
    <section id="contact" className="py-28 bg-cream-dark relative overflow-hidden">
      <ToastContainer />

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-saffron/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/8 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
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
            Book Your <span className="text-saffron italic font-light">Celebration</span>
          </h2>
          <p className="text-neutral/55 max-w-xl mx-auto font-light leading-relaxed">
            Ready to celebrate? Fill in the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left col — info + form (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 border border-saffron/10 shadow-sm hover:shadow-md hover:border-saffron/30 transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-saffron" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-neutral/40 font-semibold mb-0.5">{label}</p>
                    <p className="text-neutral/80 font-light text-sm leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white p-8 border border-saffron/10 shadow-sm">
              <h3 className="text-xl font-serif text-neutral mb-7">Send a Booking Request</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: 'firstName', label: 'First Name', placeholder: 'Raj', rule: { required: true } },
                    { id: 'lastName',  label: 'Last Name',  placeholder: 'Sharma', rule: { required: true } },
                  ].map(({ id, label, placeholder, rule }) => (
                    <div key={id}>
                      <label className="block text-[0.65rem] uppercase tracking-widest text-neutral/50 font-semibold mb-2">{label}</label>
                      <input
                        {...register(id, rule)}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 bg-cream text-sm border border-gray-200 focus:border-saffron outline-none transition-colors"
                      />
                      {errors[id] && <span className="text-crimson text-xs mt-1 block">This field is required</span>}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest text-neutral/50 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    placeholder="raj@example.com"
                    className="w-full px-4 py-3 bg-cream text-sm border border-gray-200 focus:border-saffron outline-none transition-colors"
                  />
                  {errors.email && <span className="text-crimson text-xs mt-1 block">Valid email required</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-widest text-neutral/50 font-semibold mb-2">Event Type</label>
                    <select
                      {...register('eventType', { required: true })}
                      className="w-full px-4 py-3 bg-cream text-sm border border-gray-200 focus:border-saffron outline-none transition-colors text-neutral/70"
                    >
                      <option value="">Select type</option>
                      {eventTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                    {errors.eventType && <span className="text-crimson text-xs mt-1 block">Required</span>}
                  </div>
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-widest text-neutral/50 font-semibold mb-2">Preferred Date</label>
                    <input
                      type="date"
                      {...register('date', { required: true })}
                      className="w-full px-4 py-3 bg-cream text-sm border border-gray-200 focus:border-saffron outline-none transition-colors text-neutral/70"
                    />
                    {errors.date && <span className="text-crimson text-xs mt-1 block">Required</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest text-neutral/50 font-semibold mb-2">Message / Requirements</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Expected guest count, special requirements..."
                    className="w-full px-4 py-3 bg-cream text-sm border border-gray-200 focus:border-saffron outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-saffron hover:bg-saffron-deep text-white font-semibold uppercase tracking-widest py-4 text-sm transition-colors duration-300 shadow-md shadow-saffron/20"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right col — Map (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 min-h-[500px]"
          >
            <div className="w-full h-full min-h-[500px] border border-saffron/15 shadow-sm overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112028.9866442654!2d77.12642517658744!3d28.662580434460143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Narayan Banquet Hall Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
