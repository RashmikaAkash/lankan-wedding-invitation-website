import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FloralDivider, Card } from '../components/UI';
import { Heart } from 'lucide-react';

const Couple = ({ couple }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="couple" className="py-32 px-4 bg-luxury-gradient">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-dancing text-5xl md:text-6xl font-bold text-deep-maroon mb-6">
              The Groom & The Bride
            </h2>
            <FloralDivider />
            <p className="text-dark-text/80 text-3xl font-dancing">
              Destiny brought us together, and love has bound us forever. As we step into our new life together, we cherish the presence and blessings of our beloved family and friends.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Bride */}
          <motion.div variants={itemVariants}>
            <Card variant="luxury" className="h-full overflow-hidden group">
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <motion.img
                  src={couple.bride.image}
                  alt={couple.bride.name}
                  className="w-full h-full object-cover object-[50%_18%] md:object-[50%_20%] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
              <div className="p-8 bg-gradient-to-b from-ivory to-cream">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-0.5 flex-1 bg-gold opacity-50" />
                  <Heart className="w-5 h-5 text-gold" />
                  <div className="h-0.5 flex-1 bg-gold opacity-50" />
                </div>
                <h3 className="font-dancing text-3xl font-bold text-deep-maroon mb-2 text-center">
                  {couple.bride.name}
                </h3>
                <p className="text-gold font-serif font-semibold mb-4 text-center text-sm uppercase">
                  {couple.bride.role}
                </p>
                <p className="text-dark-text/80 leading-relaxed text-center font-serif">
                  {couple.bride.bio}
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Groom */}
          <motion.div variants={itemVariants}>
            <Card variant="luxury" className="h-full overflow-hidden group">
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <motion.img
                  src={couple.groom.image}
                  alt={couple.groom.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
              <div className="p-8 bg-gradient-to-b from-ivory to-cream">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-0.5 flex-1 bg-gold opacity-50" />
                  <Heart className="w-5 h-5 text-gold" />
                  <div className="h-0.5 flex-1 bg-gold opacity-50" />
                </div>
                <h3 className="font-dancing text-3xl font-bold text-deep-maroon mb-2 text-center">
                  {couple.groom.name}
                </h3>
                <p className="text-gold font-serif font-semibold mb-4 text-center text-sm uppercase">
                  {couple.groom.role}
                </p>
                <p className="text-dark-text/80 leading-relaxed text-center font-serif">
                  {couple.groom.bio}
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;
