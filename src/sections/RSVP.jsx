import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { FloralDivider, Button } from '../components/UI';

const RSVP = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attending: 'yes',
    guestCount: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form submission handling
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        attending: 'yes',
        guestCount: '1',
        message: '',
      });
    }, 5000);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-32 px-4 bg-gradient-to-b from-champagne via-cream to-ivory">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
              >
                <CheckCircle className="text-gold" size={80} />
              </motion.div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-maroon mb-4">
              ස්තුතියි!
            </h2>
            <p className="text-xl md:text-2xl text-dark-text/70 mb-4 font-serif">
              ඔබගේ පිළිතුරු සඳුනු
            </p>
            <p className="text-lg text-dark-text/60 font-serif">
              ඔබ සමඟ ඔබගේ විශේෂ දිනයේ සුවිසිට සිටිමු!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-32 px-4 bg-gradient-to-b from-champagne via-cream to-ivory">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-maroon mb-6">
              පිළිතුරු දෙන්න
            </h2>
            <FloralDivider />
            <p className="text-lg md:text-xl text-dark-text/70 font-serif">
              කරුණාකර ඔබගේ සහභාගිතාවය තහවුරු කරන්න
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-ivory to-cream rounded-3xl shadow-luxury p-12 space-y-8 border-2 border-gold border-opacity-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Full Name */}
            <div>
              <label className="block text-deep-maroon font-serif font-semibold mb-3 text-lg">
                සම්පූර්ණ නම *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl focus:outline-none focus:border-opacity-100 focus:shadow-gold-glow transition-all bg-ivory/50 text-dark-text font-serif"
                placeholder="ඔබගේ සම්පූර්ණ නම"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-deep-maroon font-serif font-semibold mb-3 text-lg">
                විද්‍යුත් තැපෑල *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl focus:outline-none focus:border-opacity-100 focus:shadow-gold-glow transition-all bg-ivory/50 text-dark-text font-serif"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-deep-maroon font-serif font-semibold mb-3 text-lg">
                දුරකථන අංකය *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl focus:outline-none focus:border-opacity-100 focus:shadow-gold-glow transition-all bg-ivory/50 text-dark-text font-serif"
                placeholder="+94 (555) 123-4567"
              />
            </div>

            {/* Attending */}
            <div>
              <label className="block text-deep-maroon font-serif font-semibold mb-4 text-lg">
                සහභාගී වනවාද? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={handleChange}
                    className="mr-3 w-5 h-5 accent-gold"
                  />
                  <span className="text-dark-text font-serif text-lg group-hover:text-gold transition-colors">
                    ඔව්, මම අසනු ඇත
                  </span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={handleChange}
                    className="mr-3 w-5 h-5 accent-gold"
                  />
                  <span className="text-dark-text font-serif text-lg group-hover:text-gold transition-colors">
                    ක්ෂමා කරන්න, මට නොහැක
                  </span>
                </label>
              </div>
            </div>

            {/* Guest Count */}
            {formData.attending === 'yes' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-deep-maroon font-serif font-semibold mb-3 text-lg">
                  අමුත්තන් ගණන *
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl focus:outline-none focus:border-opacity-100 focus:shadow-gold-glow transition-all bg-ivory/50 text-dark-text font-serif"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'අමුත්තා' : 'අමුත්තන්'}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label className="block text-deep-maroon font-serif font-semibold mb-3 text-lg">
                පණිවිඩය (විකල්ප)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gold border-opacity-30 rounded-xl focus:outline-none focus:border-opacity-100 focus:shadow-gold-glow transition-all resize-none bg-ivory/50 text-dark-text font-serif"
                placeholder="ඔබගේ පිතිකම සහ ආशිර්වාද පෙන්වන්න..."
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <motion.button
                type="submit"
                className="btn-luxury relative px-12 py-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Heart size={20} />
                  ඔබගේ පිළිතුරු තහවුරු කරන්න
                </span>
              </motion.button>
            </div>
          </motion.form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RSVP;
