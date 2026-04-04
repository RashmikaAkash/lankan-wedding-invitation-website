import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import Couple from './sections/Couple';
import Timeline from './sections/Timeline';
import EventDetails from './sections/EventDetails';
import Gallery from './sections/Gallery';
import RSVP from './sections/RSVP';
import Location from './sections/Location';
import Footer from './sections/Footer';
import { weddingData } from './data/weddingData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMerging, setIsMerging] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let mergeTimer;
    const minLoaderDuration = 1600;
    const startTime = Date.now();

    const startMerge = () => {
      const elapsed = Date.now() - startTime;
      const waitTime = Math.max(0, minLoaderDuration - elapsed);

      mergeTimer = setTimeout(() => {
        if (isMounted) {
          setIsMerging(true);
        }
      }, waitTime);
    };

    if (document.readyState === 'complete') {
      startMerge();
    } else {
      window.addEventListener('load', startMerge, { once: true });
    }

    return () => {
      isMounted = false;
      clearTimeout(mergeTimer);
      window.removeEventListener('load', startMerge);
    };
  }, []);

  useEffect(() => {
    if (!isMerging) return undefined;

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(hideTimer);
  }, [isMerging]);

  return (
    <>
      <div
        className={`bg-cream min-h-screen transition-opacity duration-500 ${
          isLoading ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'
        }`}
      >
        <Navigation />

        {/* Background Music Player */}
        {weddingData.music && weddingData.music.enabled && (
          <MusicPlayer
            audioPath={weddingData.music.audioPath}
            showEnterOverlay={weddingData.music.showEnterOverlay}
          />
        )}

        <Hero
          bride={weddingData.groom}
          groom={weddingData.bride}
          tagline={weddingData.tagline}
          weddingDateFormatted={weddingData.weddingDateFormatted}
        />

        <Couple couple={weddingData.couple} />

        <Timeline story={weddingData.story} />

        <EventDetails
          eventDetails={weddingData.eventDetails}
          weddingDate={weddingData.weddingDate}
        />

        <Gallery images={weddingData.gallery} />

        <RSVP />

        <Location eventDetails={weddingData.eventDetails} />

        <Footer
          bride={weddingData.bride}
          groom={weddingData.groom}
          weddingDateFormatted={weddingData.weddingDateFormatted}
        />
      </div>

      {isLoading && <LoadingScreen isMerging={isMerging} />}
    </>
  );
}

export default App;
