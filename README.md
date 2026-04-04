# Wedding Invitation Website 💍

A modern, elegant, and fully responsive wedding invitation website built with React, Vite, Tailwind CSS, and Framer Motion. This is a portfolio-quality demo project showcasing a premium wedding template.

## ✨ Features

- **Responsive Design** - Mobile-first approach, optimized for all device sizes
- **Smooth Animations** - Beautiful scroll animations and transitions using Framer Motion
- **Elegant UI** - Luxury color palette with soft romantic styling
- **Interactive Elements** - Countdown timer, responsive gallery, working RSVP form
- **Fast Performance** - Built with Vite for lightning-fast development and production builds
- **Clean Code** - Well-organized, reusable components with proper separation of concerns
- **Easy Customization** - Simple data structure for personalization

## 🎯 Sections Included

1. **Hero Section** - Eye-catching welcome with couple names and call-to-action
2. **Couple Profile** - Beautiful introduction cards for bride and groom
3. **Our Story Timeline** - Romantic milestone timeline of the relationship
4. **Event Details** - Venue, date, time, dress code, and live countdown timer
5. **Gallery** - Responsive image gallery with hover effects
6. **RSVP Form** - Frontend form for guest confirmations
7. **Location** - Embedded Google Maps and venue information
8. **Footer** - Thank you message and contact information

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Navigate to the project directory:**
```bash
cd "wedding-invitation"
```

2. **Install dependencies:**
```bash
npm install
```

This will install:
- `react` and `react-dom`
- `vite` and `@vitejs/plugin-react`
- `tailwindcss`, `postcss`, and `autoprefixer`
- `framer-motion` for animations
- `lucide-react` for beautiful icons

### Running the Project

**Development Server:**
```bash
npm run dev
```

The application will start at `http://localhost:5173`

**Build for Production:**
```bash
npm run build
```

Generated files will be in the `dist/` directory.

**Preview Production Build:**
```bash
npm run preview
```

## 📁 Project Structure

```
wedding-invitation/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Sticky navbar with active states
│   │   ├── UI.jsx              # Reusable UI components (Button, Card, Dividers)
│   │   ├── ScrollReveal.jsx     # Scroll animation wrapper
│   │   └── CountdownTimer.jsx   # Wedding countdown timer
│   ├── sections/
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── Couple.jsx          # Couple profile cards
│   │   ├── Timeline.jsx        # Love story timeline
│   │   ├── EventDetails.jsx    # Event information and countdown
│   │   ├── Gallery.jsx         # Image gallery grid
│   │   ├── RSVP.jsx            # RSVP form component
│   │   ├── Location.jsx        # Venue location with map
│   │   └── Footer.jsx          # Footer section
│   ├── data/
│   │   └── weddingData.js      # Centralized content data
│   ├── assets/                 # Images, icons (if stored locally)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Tailwind and global styles
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Project dependencies
└── .gitignore                  # Git ignore file
```

## 🎨 Customization Guide

### Changing Couple Names and Details

Edit `src/data/weddingData.js`:

```javascript
export const weddingData = {
  bride: 'Your Bride Name',
  groom: 'Your Groom Name',
  tagline: 'Your romantic tagline',
  weddingDate: 'YYYY-MM-DD',
  weddingDateFormatted: 'Month DD, YYYY',
  // ... rest of the data
};
```

### Updating Couple Information

In the same file, update the `couple` object:

```javascript
couple: {
  bride: {
    name: 'Bride Full Name',
    role: 'Bride',
    bio: 'Your bride\'s bio...',
    image: 'URL to bride image'
  },
  groom: {
    name: 'Groom Full Name',
    role: 'Groom',
    bio: 'Your groom\'s bio...',
    image: 'URL to groom image'
  }
}
```

### Customizing the Love Story Timeline

Edit the `story` array in `src/data/weddingData.js`:

```javascript
story: [
  {
    year: '2019',
    title: 'First Meeting',
    description: 'Your story here...'
  },
  // Add or modify milestones
]
```

### Changing Event Details

Update the `eventDetails` object:

```javascript
eventDetails: {
  venue: 'Your Venue Name',
  address: 'Complete Address',
  date: 'Month DD, YYYY',
  time: 'HH:MM AM/PM',
  dressCode: 'Your dress code',
  contact: 'Phone Number',
  email: 'Email Address'
}
```

### Adding Gallery Images

Update the `gallery` array with image URLs:

```javascript
gallery: [
  'URL to image 1',
  'URL to image 2',
  // Add more image URLs
]
```

**Tip:** Use free image services like:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      cream: '#FFFBF7',
      blush: '#F9E5E1',
      rose: '#F4D4CE',
      'rose-gold': '#B89968',
      'muted-pink': '#E8C9C2',
      // Add your custom colors
    },
  },
}
```

### Modifying Font

The project uses Google Fonts. To change fonts, edit `index.html`:

```html
<link 
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" 
  rel="stylesheet" 
/>
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  serif: ['Your Font', 'serif'],
  sans: ['Your Font', 'sans-serif'],
}
```

## 🌐 Deploying Your Website

### Option 1: Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel automatically detects Vite configuration
5. Click "Deploy"

Your site will be live in minutes!

### Option 2: Netlify

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done!

### Option 3: Traditional Hosting

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web host (via FTP, cPanel, etc.)
3. Your site is live!

## 💻 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📦 Dependencies

- **React 18** - UI library
- **Vite 4** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion 10** - Animation library
- **Lucide React** - Icon library

## 🎨 Design Features

- **Soft Luxury Color Palette** - Cream, blush, rose gold, and muted pink
- **Typography** - Playfair Display for headings, Inter for body text
- **Animations** - Smooth fade-in, slide-up, and scroll reveal effects
- **Responsive** - Mobile-first design that scales beautifully
- **Interactive** - Hover effects, form handling, countdown timer
- **Accessibility** - Semantic HTML, proper contrast ratios

## 🔧 Advanced Customization

### Adding a Background Music Toggle

Create a new component `src/components/MusicToggle.jsx` and integrate it into the navigation.

### Custom Form Validation

Enhance the RSVP form in `src/sections/RSVP.jsx` with email validation and phone number formatting.

### Backend Integration

To save RSVP data to a backend:

1. Replace the form submission in `RSVP.jsx` with an API call
2. Use `fetch` or `axios` to send data to your backend
3. Store data in a database (Firebase, MongoDB, etc.)

### Adding More Sections

1. Create a new component in `src/sections/`
2. Import and use it in `App.jsx`
3. Add navigation link in `Navigation.jsx`

## 📝 Best Practices

✅ Keep all couple information in `weddingData.js` for easy updates
✅ Use existing components (Button, Card, ScrollReveal) for consistency
✅ Test responsiveness across devices
✅ Optimize images before adding to gallery
✅ Use meaningful variable and component names
✅ Add comments for complex logic

## 🚀 Performance Tips

- Optimize images using [TinyPNG](https://tinypng.com)
- Use CDN-hosted images for faster loading
- Enable gzip compression on your server
- Use the production build for deployment: `npm run build`
- Test performance with Chrome DevTools

## 📞 Support & Resources

- **React Documentation** - https://react.dev
- **Vite Documentation** - https://vitejs.dev
- **Tailwind CSS** - https://tailwindcss.com
- **Framer Motion** - https://www.framer.com/motion
- **Lucide Icons** - https://lucide.dev

## 📄 License

This project is provided as a portfolio template. Feel free to customize and use it for your own wedding or as a client project.

## 🎉 Final Notes

This is a complete, production-ready wedding invitation website designed to impress clients and guests. With proper customization of content and images, this template can be deployed as a live wedding website within minutes.

**Happy wedding planning! 💕**

---

Built with ❤️ using React, Vite, and Tailwind CSS
