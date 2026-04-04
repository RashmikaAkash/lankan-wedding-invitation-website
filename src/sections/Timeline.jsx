import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FloralDivider } from '../components/UI';

const Timeline = ({ story }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="timeline" className="py-32 px-4 bg-gradient-to-b from-ivory to-cream">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-maroon mb-6">
              අපගේ සිහින
            </h2>
            <FloralDivider />
            <p className="text-dark-text/80 text-lg font-serif italic">
              අවිඩුවීමෙතින් සිටි චිතුරිතයෙතින්
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {story.map((milestone, index) => (
            <motion.div
              key={index}
              className={`flex gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              variants={itemVariants}
            >
              {/* Timeline line and dot */}
              <div className="flex flex-col items-center min-w-fit">
                <motion.div
                  className="w-6 h-6 bg-gradient-to-r from-gold to-soft-gold rounded-full shadow-gold-glow-lg border-2 border-cream relative z-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                {index < story.length - 1 && (
                  <motion.div
                    className="w-1 flex-1 min-h-24 md:min-h-32 bg-gradient-to-b from-gold via-gold to-transparent opacity-40"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 pt-2">
                <motion.div
                  className="bg-gradient-to-br from-ivory via-cream to-champagne rounded-2xl p-6 md:p-8 hover:shadow-luxury transition-all duration-500 border border-soft-gold border-opacity-30"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <div className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-deep-maroon to-maroon bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-gold to-transparent opacity-50" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-deep-maroon mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-dark-text/80 leading-relaxed font-serif text-lg">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
