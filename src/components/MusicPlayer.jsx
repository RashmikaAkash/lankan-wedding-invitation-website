import React, { useState, useRef } from 'react';
import { Music, Music2, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicPlayer({
  audioPath,
  enabled = true,
  showEnterOverlay = true,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(!showEnterOverlay);
  const [showUI, setShowUI] = useState(true);

  const playAudio = async () => {
    if (!audioRef.current || !enabled) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
    }
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleEnterWithMusic = async () => {
    await playAudio();
    setHasEntered(true);
  };

  const toggleMusic = async () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      await playAudio();
    }
  };

  if (!enabled) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={audioPath}
        loop
        preload="auto"
        playsInline
        onError={() => console.log('Audio file not found or unable to load:', audioPath)}
      />

      {!hasEntered && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 backdrop-blur-sm">
          <button
            onClick={handleEnterWithMusic}
            className="px-8 py-4 bg-gradient-to-r from-gold to-soft-gold text-deep-maroon rounded-full text-lg font-semibold shadow-gold-glow-lg"
          >
            Enter With Music
          </button>
        </div>
      )}

      {hasEntered && (
        <>
          <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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

            <motion.div
              className="absolute bottom-20 right-0 bg-deep-maroon text-ivory px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-luxury"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: showUI ? 1 : 0, y: showUI ? 0 : 10 }}
              onMouseEnter={() => setShowUI(true)}
              onMouseLeave={() => setShowUI(false)}
            >
              {isPlaying ? 'Music is playing' : 'Click to play music'}
            </motion.div>
          </motion.div>

          {isPlaying && (
            <motion.div
              className="fixed top-24 right-8 z-40 hidden md:flex items-center gap-2 text-gold"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Music size={18} className="animate-pulse" />
              <span className="text-sm font-medium">Now Playing...</span>
            </motion.div>
          )}
        </>
      )}
    </>
  );
}
