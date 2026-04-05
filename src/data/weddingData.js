import songTrack from '../assets/Song.mp3';
import brideImage from '../assets/bride.jpeg';
import groomImage from '../assets/groom.jpg';

export const weddingData = {
  // === COUPLE NAMES (in Sinhala) ===
  bride: 'Amiduni',
  groom: 'Akash',
  tagline: 'අතිනත ගැනීමේ ප්‍රීතිය නිමිත්තෙන්',
  
  // === WEDDING DATE (Edit this) ===
  weddingDate: '2026-07-18',
  weddingDateFormatted: '2026 ජූලි 18',
  
  // === INVITATION MESSAGE ===
  invitationTitle: 'ශ්‍රී සුභ මංගලම්',
  invitationMessage: 'ශ්‍රී ලංකාවේ ඔබේ ප්‍රිය පෙම්කරුවරු ආන්‍යා හා අවන්ත එක් බැවට විවාහ වෙමින්, ඔබ නුදුටු සුවිශේෂ දිනට එකතු වීමට ආරාධනා කරමු.',

  // === COUPLE DETAILS ===
  couple: {
    bride: {
      name: 'Amiduni Hiroshika',
      role: 'Bride',
      bio: 'විජේදාස මැතිතුමන් සහ එම මැතිණියගේ ආදරණීය දියණියයි. වෘත්තියෙන් ගුරුවරියක වන ඇය, ගුණවත්කමින් හා දයාවෙන් පිරි හදවතක් ඇති යුවතියකි.',
      image: brideImage
    },
    groom: {
      name: 'Rashmika Akash',
      role: 'Groom',
      bio: 'වසන්ත මැතිතුමන් සහ එම මැතිණියගේ ආදරණීය පුත්‍රයායි. වෘත්තියෙන් මෘදුකාංග ඉංජිනේරුවකු වන ඔහු, බුද්ධිමත් මෙන්ම නිහතමානී ගතිගුණවලින් පිරි තරුණයෙකි.',
      image: groomImage
    }
  },

  // === LOVE STORY TIMELINE (Edit this) ===
  story: [
    {
      year: '2021',
      title: 'පළමු හමුවීම',
      description: 'කොළඹ වෙතින් මිතුරු සෝදිස් බඳුවෙන් අපි පළමු අවස්ථාවට හමුවිණු. එක් බැබුවීමක් හා හිම සිතක් සතින් අපගේ හලිම දිනුස ඇරැඹුණි.'
    },
    {
      year: '2022',
      title: 'මෙරාඩ',
      description: 'කැන්ඩි උතුරු ගිරිවලට අපි ගිය දී, අපි නිතර එකතු ජීවිතය ගිතර කිරීමට නිරෝධක දෙමිතුරු ගිනී ඇති ඔබ හැටි මතුවිණි.'
    },
    {
      year: '2023',
      title: 'අවන්තගේ යෝජනා',
      description: 'නුවර දුරට යි මිතුරු තුන් දෙනා සිතින් අවන්ත ගිණු ගිගිම මතට එතුරු කර පෙනිණු. හැබැයි අපි වසර දුතුතු දී අවිඩ‍ුවීමට පිටින් ගිනී ඇතිමු.'
    },
    {
      year: '2026',
      title: 'අපගේ විශේෂ දිනය',
      description: 'අවසාන වශයෙන්, අපි බලා සිටි දිනය එතිනි. අපගේ ඉතුරු පටි඼ුවටත් හිතින් පිට ගිණු කිරීමට ඔබ අපත් එකතු හෝ ගිනී.'
    }
  ],

  // === EVENT DETAILS (Edit these) ===
  eventDetails: {
    venue: 'සිනමන් ග්‍රෑන්ඩ්, කොළඹ',
    venueEn: 'Cinamon Grand, Colombo',
    address: 'කිරුල උතුරු, කොළඹ, ශ්‍රී ලංකා',
    addressEn: 'Kirulapona, Colombo, Sri Lanka',
    date: '2026 ජූලි 18',
    time: 'පෙ.ව. 10:30',
    dressCode: 'සම්ප්‍රදායික සිංහල මඩුවමුවන්/',
    dressCodeEn: 'Traditional Sinhala Wedding Attire',
    contact: '+94 (70) 1234567',
    email: 'anya.awantha@wedding.lk'
  },

  // === GALLERY IMAGES (Edit these image URLs) ===
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516795971207-75679068413e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1560807707-62f3f2f555f9?w=400&h=400&fit=crop'
  ],

  // === MUSIC CONFIG (Edit audio file path) ===
  music: {
    enabled: true,
    audioPath: songTrack,
    showEnterOverlay: true
  }
};
