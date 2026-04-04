import React from 'react';
import { motion } from 'framer-motion';

export function SectionDivider() {
  return (
    <motion.div
      className="section-divider"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    />
  );
}

export function SectionDividerLuxury() {
  return (
    <motion.div
      className="section-divider-luxury"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="ornament">✦</span>
    </motion.div>
  );
}

export function FloralDivider() {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 my-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex-1 h-px bg-gradient-to-r from-transparent to-gold opacity-40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="text-3xl text-gold opacity-50"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✦
      </motion.div>
      <motion.div
        className="flex-1 h-px bg-gradient-to-l from-transparent to-gold opacity-40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}

export function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    luxury: 'btn-luxury'
  };

  return (
    <motion.button
      className={variants[variant] || variants.primary}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function Card({ children, className = '', variant = 'standard', ...props }) {
  const cardClass = variant === 'luxury' ? 'card-luxury' : 'card';
  
  return (
    <motion.div
      className={`${cardClass} ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
