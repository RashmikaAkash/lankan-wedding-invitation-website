import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Moon, Sun } from 'lucide-react';
import { Button } from '../components/UI';
import heroBackground from '../assets/Hero image.png';
import heroMobileBackground from '../assets/Hero mobile.png';

const Hero = ({ bride, groom, tagline, weddingDateFormatted }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  // Floating decoration particles
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold rounded-full opacity-30"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${(i * 100) / 12}%`,
            top: `${Math.random() * 50}%`,
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Hero background"
          className="absolute inset-0 hidden h-full w-full object-cover object-center scale-[1.02] md:block"
        />
        <img
          src={heroMobileBackground}
          alt="Hero background mobile"
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.02] md:hidden"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-ivory/45 via-cream/35 to-champagne/45" /> */}
        <div className="absolute inset-0 bg-black/5" />
        {/* Decorative gradients */}
        {/* <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold via-soft-gold to-transparent rounded-full blur-3xl opacity-12"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-maroon via-deep-maroon to-transparent rounded-full blur-3xl opacity-10"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        /> */}
        <FloatingParticles />
      </div>

      {/* Content */}
       <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
{/* Subtitle */}
<motion.div 
  variants={itemVariants} 
  className="mb-6 flex items-center justify-center gap-3"
>
  {/* Moon (Hada) */}
  {/* <Moon className="w-7 h-7 md:w-8 md:h-8 text-gold" /> */}

  <p className="text-[#D4AF37] md:text-[#4A101D] font-sinhala-calligraphy font-bold text-5xl tracking-wide leading-tight text-shadow-gold drop-shadow-[0_4px_12px_rgba(201,169,97,0.35)]">
    ශ්‍රී සුභ මංගලම්!
  </p>

  {/* Sun (Ira) */}
  {/* <Sun className="w-7 h-7 md:w-8 md:h-8 text-gold" /> */}
</motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-1 md:mb-6">
          <h1 className="font-dancing text-6xl md:text-8xl font-bold text-dark-text leading-tight">
            <motion.span
              className="block text-[#D4AF37] md:text-[#4A101D] font-dancing"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="block md:inline">{bride}</span>
              <span className="block md:inline">&nbsp;&amp;&nbsp;</span>
              <span className="block md:inline">{groom}</span>
            </motion.span>
            {/* <motion.span
              className="block text-gold my-2 md:my-4"
              animate={{ rotateZ: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              & 
            </motion.span>
            <motion.span
              className="block text-deep-maroon"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
            >
              {groom}
            </motion.span> */}
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-gold opacity-50" />
          <span className="text-2xl text-gold opacity-50">✦</span>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-gold opacity-50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-4xl text-[#4A101D] md:text-white font-abhaya font-light mb-4 md:mb-8 leading-relaxed px-1"
        >
          {tagline}
        </motion.p>

        {/* Wedding Date */}
        <motion.div
          variants={itemVariants}
          className="mb-12 inline-block"
        >
          <div className="px-8 py-4 bg-gradient-to-r from-ivory to-cream rounded-full border-2 border-gold border-opacity-50 shadow-luxury">
            <p className="text-2xl text-deep-maroon font-serif font-bold">
              {weddingDateFormatted}
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button
            onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
            variant="primary"
          >
            View Details
          </Button>
          <Button
            variant="secondary"
            onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
          >
            RSVP Now
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-gold opacity-70" size={34} />
      </motion.div>

      {/* Decorative corner elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-gold opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, linear: true }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl text-gold opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, linear: true }}
      >
        ✦
      </motion.div>
    </section>
  );
};

export default Hero;
