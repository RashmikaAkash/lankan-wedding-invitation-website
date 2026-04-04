/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sri Lankan Luxury Wedding Palette
        ivory: '#F5F1ED',
        cream: '#FAF8F5',
        champagne: '#F4E8DD',
        'soft-gold': '#D4AF9F',
        gold: '#C9A961',
        maroon: '#5D2E3A',
        'deep-maroon': '#3D1F28',
        'muted-red': '#8B4A56',
        'blush-pink': '#F5D7D0',
        'dusty-rose': '#D4A5A0',
        'brown-accent': '#7B6B63',
        'dark-text': '#2D2420',
      },
      fontFamily: {
        serif: ['Noto Serif Sinhala', 'serif'],
        sans: ['Noto Sans Sinhala', 'sans-serif'],
        display: ['Noto Serif Sinhala', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        abhaya: ['"Abhaya Libre"', 'serif'],
        'sinhala-calligraphy': ['"SinhalaCalligraphy"', '"Sinhala Calligraphy"', '"Abhaya Libre"', 'serif'],
        'tharu-malee': ['"Tharu Digital Malee"', '"TharuDigitalMalee"', '"Abhaya Libre"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(201, 169, 97, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(201, 169, 97, 0.8)' },
        },
      },
      boxShadow: {
        'soft': '0 8px 20px rgba(45, 36, 32, 0.08)',
        'soft-lg': '0 12px 40px rgba(45, 36, 32, 0.15)',
        'luxury': '0 10px 40px rgba(93, 46, 58, 0.2)',
        'gold-glow': '0 0 20px rgba(201, 169, 97, 0.3)',
        'gold-glow-lg': '0 0 40px rgba(201, 169, 97, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
    },
  },
  plugins: [],
}
