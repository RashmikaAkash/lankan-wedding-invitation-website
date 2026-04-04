import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { FloralDivider } from '../components/UI';

const Location = ({ eventDetails }) => {
  return (
    <section id="location" className="py-32 px-4 bg-gradient-to-b from-ivory via-cream to-champagne">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-maroon mb-6">
              වෙන්න ස්ථිතිය
            </h2>
            <FloralDivider />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="rounded-3xl overflow-hidden shadow-luxury h-96 md:h-[500px] border-3 border-gold border-opacity-30"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5322447277823!2d73.79046952346828!3d15.289873322159628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sTaj%20Exotica%20Resort%20%26%20Spa%2C%20Goa!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </ScrollReveal>

          {/* Venue Details */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-6">
              {/* Main Venue Card */}
              <motion.div
                className="bg-gradient-to-br from-ivory to-cream rounded-3xl p-12 shadow-luxury border-2 border-gold border-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradien-to-br from-gold/20 to-soft-gold/10 rounded-full mt-1">
                    <MapPin className="text-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-deep-maroon mb-3">
                      වෙන්නේ ස්ථිතිය
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-maroon mb-2">
                      {eventDetails.venue}
                    </p>
                    <p className="text-dark-text/70 text-base md:text-lg font-serif leading-relaxed">
                      {eventDetails.address}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="bg-gradient-to-br from-deep-maroon via-maroon to-muted-red rounded-3xl p-8 shadow-luxury text-ivory"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Phone size={24} className="text-gold" />
                  සම්බන්ධන තොරතුරු
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-cream text-sm font-serif opacity-80">දුරකථන</p>
                      <p className="text-lg font-serif">{eventDetails.contact}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-cream text-sm font-serif opacity-80">විද්‍යුත් තැපෑල</p>
                      <p className="text-lg font-serif">{eventDetails.email}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Directions */}
              <motion.div
                className="bg-gradient-to-br from-cream to-ivory rounded-3xl p-8 shadow-luxury border-2 border-gold border-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-serif text-xl md:text-2xl font-bold text-deep-maroon mb-4 flex items-center gap-3">
                  <Navigation className="text-gold" size={24} />
                  පිහිටීම
                </h3>
                <p className="text-dark-text/70 mb-6 font-serif leading-relaxed">
                  වෙන්නේ ගිලින් පහසුවෙන් ප්‍රවේශ විය හැකිය. අපගේ සගයන් සඳහා ප්‍රචුර පාර්කින් ලබා ඇත.
                </p>
                <a
                  href="https://www.google.com/maps/search/Taj+Exotica+Resort+Goa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-soft-gold text-deep-maroon font-serif font-bold rounded-full hover:shadow-gold-glow transition-all duration-300 group"
                >
                  <span>ගිලින් ස්ථිතිය බලන්න</span>
                  <Navigation className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Location;
