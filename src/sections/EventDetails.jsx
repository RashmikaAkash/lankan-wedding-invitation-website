import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Smartphone, Mail, Heart, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { FloralDivider, Card } from '../components/UI';
import CountdownTimer from '../components/CountdownTimer';

const EventDetails = ({ eventDetails, weddingDate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const detailItems = [
    {
      icon: Sparkles,
      label: 'දිනය',
      value: eventDetails.date,
    },
    {
      icon: Clock,
      label: 'නිරිත',
      value: eventDetails.time,
    },
    {
      icon: MapPin,
      label: 'නම',
      value: eventDetails.venue,
    },
    {
      icon: MapPin,
      label: 'ස්ථිතිය',
      value: eventDetails.address,
    },
    {
      icon: Smartphone,
      label: 'සම්බන්ධන',
      value: eventDetails.contact,
    },
    {
      icon: Mail,
      label: 'විද්‍යුත් තැපෑල',
      value: eventDetails.email,
    },
  ];

  return (
    <section id="details" className="py-32 px-4 bg-gradient-to-b from-champagne via-cream to-ivory">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-deep-maroon mb-6">
              විවිධතා
            </h2>
            <FloralDivider />
          </div>
        </ScrollReveal>

        {/* Countdown */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="mb-20 p-8 md:p-12 bg-gradient-to-br from-ivory to-cream rounded-3xl shadow-luxury border-2 border-gold border-opacity-30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-center font-serif text-3xl md:text-4xl font-bold text-deep-maroon mb-12">
              විවාහ දිනට ඉතිරි
            </h3>
            <CountdownTimer targetDate={weddingDate} />
          </motion.div>
        </ScrollReveal>

        {/* Details Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {detailItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="luxury" className="h-full p-8 text-center hover:shadow-gold-glow-lg">
                  <motion.div
                    className="flex justify-center mb-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-gold/20 to-soft-gold/10 rounded-full">
                      <Icon className="text-gold" size={32} />
                    </div>
                  </motion.div>
                  <p className="text-dark-text/60 text-sm font-serif font-semibold mb-2 tracking-wide">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg md:text-xl font-bold text-deep-maroon">
                    {item.value}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dress Code */}
        <ScrollReveal delay={0.4}>
          <motion.div
            className="p-8 md:p-12 bg-gradient-to-r from-deep-maroon via-maroon to-muted-red rounded-3xl shadow-luxury text-center text-ivory"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="text-gold" size={28} />
              <h3 className="font-serif text-3xl font-bold">
                සිට පෙතිර සටහන
              </h3>
              <Heart className="text-gold" size={28} />
            </div>
            <p className="text-lg md:text-xl font-serif text-cream">
              {eventDetails.dressCode}
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EventDetails;
