import React from 'react';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
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
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      
      {/* Background Music Player */}
      {weddingData.music && weddingData.music.enabled && (
        <MusicPlayer musicPath={weddingData.music.audioPath} />
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
  );
}

export default App;
