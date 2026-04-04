import React, { useState, useRef, useEffect } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicPlayer({ audioPath, enabled = true }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current || !enabled) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        console.log('Audio autoplay prevented. User interaction required.');
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, enabled]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  if (!enabled) return null;

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        src={audioPath}
        crossOrigin="anonymous"
        onError={() => console.log('Audio file not found or unable to load:', audioPath)}
      />

      {/* Floating Music Control Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={toggleMusic}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
            isPlaying
              ? 'bg-gradient-to-r from-gold to-soft-gold shadow-gold-glow-lg'
              : 'bg-gradient-to-r from-maroon to-deep-maroon shadow-luxury hover:shadow-gold-glow'
          } text-ivory`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Music2 size={24} className="animate-pulse" />
          ) : (
            <Volume2 size={24} />
          )}

          {/* Glow effect when playing */}
          {isPlaying && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gold opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-gold opacity-30"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />
            </>
          )}
        </motion.button>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-20 right-0 bg-deep-maroon text-ivory px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-luxury"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showUI ? 1 : 0, y: showUI ? 0 : 10 }}
          onMouseEnter={() => setShowUI(true)}
          onMouseLeave={() => setShowUI(false)}
        >
          {isPlaying ? 'සිත් සුවිමට නතු වෙයි 🎵' : 'සංගීතය ඉහළට'}
        </motion.div>
      </motion.div>

      {/* Music Indicator in Hero */}
      {isPlaying && (
        <motion.div
          className="fixed top-24 right-8 z-40 hidden md:flex items-center gap-2 text-gold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Music size={18} className="animate-pulse" />
          <span className="text-sm font-medium">සිත්ගිණි සුස්සුසු සංගීතය...</span>
        </motion.div>
      )}
    </>
  );
}
