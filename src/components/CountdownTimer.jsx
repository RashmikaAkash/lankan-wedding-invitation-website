import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBox = (value, label, index) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold to-soft-gold rounded-xl blur-lg opacity-30" />
        <div className="relative bg-gradient-to-br from-ivory to-cream rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] border border-gold border-opacity-30 shadow-luxury">
          <div className="text-3xl md:text-5xl font-serif font-bold bg-gradient-to-r from-deep-maroon to-maroon bg-clip-text text-transparent">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </motion.div>
      <p className="text-xs md:text-sm text-dark-text font-serif font-semibold mt-3 text-center">
        {label}
      </p>
    </motion.div>
  );

  return (
    <motion.div
      className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 flex-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {timeBox(time.days, 'දිනු', 0)}
      
      <motion.div
        className="text-2xl md:text-3xl text-gold font-serif font-bold opacity-50 mx-1 md:mx-2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        :
      </motion.div>
      
      {timeBox(time.hours, 'පැය', 1)}
      
      <motion.div
        className="text-2xl md:text-3xl text-gold font-serif font-bold opacity-50 mx-1 md:mx-2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        :
      </motion.div>
      
      {timeBox(time.minutes, 'මිනිත්තු', 2)}
      
      <motion.div
        className="text-2xl md:text-3xl text-gold font-serif font-bold opacity-50 mx-1 md:mx-2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        :
      </motion.div>
      
      {timeBox(time.seconds, 'තත්පර', 3)}
    </motion.div>
  );
};

export default CountdownTimer;
