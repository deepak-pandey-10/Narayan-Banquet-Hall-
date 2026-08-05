import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Your booking request has been received! We will contact you shortly.', {
      position: "bottom-right",
      autoClose: 5000,
      theme: "dark",
    });
    reset();
  };

  return (
    <section id="contact" className="py-28 bg-brand-light relative overflow-hidden">
      <ToastContainer />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-brand-gold">Get In Touch</span>
            <div className="h-[1px] w-12 bg-brand-gold"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Book Your <span className="italic font-light text-brand-gold">Event</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Reach out to us to check availability, discuss your requirements, and secure your perfect date.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left — Info + Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <FaMapMarkerAlt />, label: 'Address', value: 'Narayan Banquet Hall, Uttarakhand, India' },
                { icon: <FaPhoneAlt />, label: 'Phone', value: '+91 98765 43210' },
                { icon: <FaEnvelope />, label: 'Email', value: 'info@narayanbanquet.com' },
                { icon: <FaClock />, label: 'Open Hours', value: 'Mon – Sun: 9 AM – 9 PM' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 border border-gray-100 shadow-sm">
                  <div className="text-brand-gold mt-1">{item.icon}</div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">{item.label}</p>
                    <p className="text-brand-dark font-light text-sm leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-serif font-semibold text-brand-dark mb-6">Send a Booking Request</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input
                      {...register("firstName", { required: true })}
                      className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-gold outline-none transition-all text-sm"
                      placeholder="Raj"
                    />
                    {errors.firstName && <span className="text-red-400 text-xs mt-1 block">Required</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input
                      {...register("lastName", { required: true })}
                      className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-gold outline-none transition-all text-sm"
                      placeholder="Sharma"
                    />
                    {errors.lastName && <span className="text-red-400 text-xs mt-1 block">Required</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-gold outline-none transition-all text-sm"
                    placeholder="raj@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email required</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Event Type</label>
                    <select
                      {...register("eventType", { required: true })}
                      className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-gold outline-none transition-all text-sm text-gray-600"
                    >
                      <option value="">Select type</option>
                      <option>Wedding</option>
                      <option>Engagement</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Corporate Event</option>
                      <option>Other</option>
                    </select>
                    {errors.eventType && <span className="text-red-400 text-xs mt-1 block">Required</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      {...register("date", { required: true })}
                      className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-gold outline-none transition-all text-sm text-gray-600"
                    />
                    {errors.date && <span className="text-red-400 text-xs mt-1 block">Required</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Additional Details</label>
                  <textarea
                    {...register("message")}
                    rows="4"
                    className="w-full px-4 py-3 bg-brand-light border border-gray-200 focus:border-brand-gold outline-none transition-all resize-none text-sm"
                    placeholder="Expected guest count, special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-dark hover:bg-brand-gold text-white font-semibold py-4 tracking-widest uppercase transition-colors duration-300 text-sm"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right — Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 min-h-[500px] lg:min-h-full"
          >
            <div className="w-full h-full min-h-[500px] border border-gray-200 shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112028.9866442654!2d77.12642517658744!3d28.662580434460143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Narayan Banquet Hall Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
