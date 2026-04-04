import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FloralDivider } from '../components/UI';

const Gallery = ({ images = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  // Default gallery items if not provided
  const galleryImages = images.length > 0
    ? images
    : Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        src: `https://images.unsplash.com/photo-${1519741497674 + i * 100}?w=500&h=500&fit=crop`,
        alt: `Gallery ${i + 1}`,
      }));

  return (
    <section id="gallery" className="py-32 px-4 bg-gradient-to-b from-ivory via-champagne to-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-maroon mb-6">
              ගෝත්‍ර
            </h2>
            <p className="text-lg md:text-xl text-dark-text/70 font-serif mb-8">
              ඔබගේ ඉතිරි සිහින සහ විශේෂ අවස්ථා
            </p>
            <FloralDivider />
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id || index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-gold-glow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-ivory to-cream border-3 border-gold border-opacity-20">
                <img
                  src={typeof image === 'string' ? image : image.src}
                  alt={typeof image === 'string' ? `Gallery Item ${index + 1}` : image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Decorative Border Glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-gold/0 rounded-lg group-hover:border-gold/40 transition-all duration-300"
                  animate={{ boxShadow: ['0 0 0 0 rgba(201, 169, 97, 0)', '0 0 20px 0 rgba(201, 169, 97, 0.3)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Corner Ornaments */}
                <motion.div
                  className="absolute top-3 left-3 text-gold/40 text-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  ✦
                </motion.div>
                <motion.div
                  className="absolute bottom-3 right-3 text-gold/40 text-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  ✦
                </motion.div>
              </div>

              {/* Luxury Frame Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-soft-gold/10 to-gold/20 rounded-2xl -z-10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Message */}
        <ScrollReveal delay={0.4}>
          <motion.div
            className="mt-20 p-12 text-center bg-gradient-to-r from-deep-maroon/10 via-gold/10 to-maroon/10 rounded-3xl border-2 border-gold/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-xl md:text-2xl text-deep-maroon leading-relaxed">
              එක එක මුහුණත සිරුරත්, එක එක සිනුවත ඔබගේ ප්‍රේම සහ සතුටේ සාක්ෂියි.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Gallery;
