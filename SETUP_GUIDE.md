# Wedding Invitation Website - Quick Setup Guide

## 📋 Prerequisites

Before you begin, make sure you have:
- **Node.js** installed (v16 or higher) - Download from https://nodejs.org
- **npm** (comes with Node.js)
- A code editor like VS Code

## ⚡ Quick Start (5 Minutes)

### Step 1: Open Terminal

On Windows:
- Press `Win + R`, type `cmd`, press Enter
- Or search for "PowerShell" or "Terminal"

### Step 2: Navigate to Project Folder

```bash
cd "C:\Users\rashm\OneDrive\Desktop\Wedding card\wedding-invitation"
```

### Step 3: Install Dependencies

```bash
npm install
```

This will download and install all required packages. This may take 1-2 minutes.

### Step 4: Start Development Server

```bash
npm run dev
```

### Step 5: Open in Browser

The terminal will show:
```
  VITE v4.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Click the link or copy it to your browser address bar to view your website!

---

## 🛠️ Full Installation & Setup Steps

### 1. Install Node.js (If Not Already Installed)

1. Visit https://nodejs.org/
2. Download LTS version (recommended)
3. Run the installer and follow prompts
4. Accept all defaults
5. Verify installation by opening terminal and running:
   ```bash
   node --version
   npm --version
   ```

### 2. Navigate to Project Directory

**Using Command Line:**

```bash
cd "C:\Users\rashm\OneDrive\Desktop\Wedding card\wedding-invitation"
```

Or **Using VS Code:**
1. Open VS Code
2. Click File → Open Folder
3. Select the `wedding-invitation` folder
4. Press Ctrl + ~ to open terminal in VS Code

### 3. Install Dependencies

```bash
npm install
```

Expected packages to install:
- react (UI library)
- react-dom (React DOM rendering)
- vite (Build tool)
- @vitejs/plugin-react (Vite React plugin)
- tailwindcss (CSS framework)
- postcss & autoprefixer
- framer-motion (Animations)
- lucide-react (Icons)

### 4. Start Development Server

```bash
npm run dev
```

Your terminal output should show:
```
  VITE v4.3.9  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### 5. View Your Website

- Open your web browser
- Go to: `http://localhost:5173/`
- You should see the beautiful wedding invitation website!

---

## 📝 Available Commands

### Development Commands

**Start Development Server:**
```bash
npm run dev
```
- Starts local server with hot reload
- Any code change automatically refreshes the page
- Press `Ctrl + C` to stop

**Build for Production:**
```bash
npm run build
```
- Optimizes and compiles your project
- Creates `dist` folder with production files
- Use this for deployment

**Preview Production Build:**
```bash
npm run preview
```
- Starts a local server showing the production build
- Helps verify build works correctly before deployment

---

## 🎨 How to Customize Content

### Edit Couple Names & Details

1. Open: `src/data/weddingData.js`
2. Find this section:
   ```javascript
   export const weddingData = {
     bride: 'Anya',
     groom: 'Aarav',
   ```
3. Replace with your names
4. Save file (Ctrl + S)
5. Website automatically updates in browser!

### Edit Wedding Date

In the same file, change:
```javascript
weddingDate: '2024-12-15',  // Change to YYYY-MM-DD format
weddingDateFormatted: 'December 15, 2024',  // Human readable format
```

### Edit Couple Bios

Find the `couple` object and update:
```javascript
couple: {
  bride: {
    name: 'Your Bride Name',
    bio: 'Her bio text...',
    image: 'Image URL'
  },
  groom: {
    name: 'Your Groom Name',
    bio: 'His bio text...',
    image: 'Image URL'
  }
}
```

### Add Your Couple Photos

Replace image URLs with your own. Use free options:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

Example:
```javascript
image: 'https://images.unsplash.com/photo-YOUR-ID?w=500&h=600&fit=crop'
```

### Edit Event Details

Find `eventDetails` object:
```javascript
eventDetails: {
  venue: 'Your Venue Name',
  address: 'Full address here',
  date: 'Month DD, YYYY',
  time: 'HH:MM AM/PM',
  dressCode: 'Your dress code',
  contact: '+1 (555) 123-4567',
  email: 'your.email@example.com'
}
```

### Add Love Story Milestones

Edit the `story` array:
```javascript
story: [
  {
    year: '2019',
    title: 'First Meeting',
    description: 'Where did you meet?'
  },
  {
    year: '2021',
    title: 'Your Milestone',
    description: 'What happened?'
  },
  // Add more...
]
```

### Add Gallery Images

Find and update `gallery` array:
```javascript
gallery: [
  'Image URL 1',
  'Image URL 2',
  'Image URL 3',
  // Add more image URLs
]
```

---

## 🚀 Deployment

### Deploy to Vercel (Easiest - Free)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Your website is live in minutes!

### Deploy to Netlify (Easy - Free)

1. Run: `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `dist` folder
4. Done - your site is live!

### Deploy to Traditional Hosting

1. Run: `npm run build`
2. Upload contents of `dist` folder via FTP
3. Website is live!

---

## ❌ Troubleshooting

### "npm: command not found"
- Node.js not installed properly
- Restart your computer after installing Node
- Try reinstalling Node.js

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Changes not showing up
- Hard refresh browser: `Ctrl + Shift + R` (Windows)
- Clear browser cache
- Restart dev server: Stop with `Ctrl + C`, then `npm run dev`

### Build fails
- Delete `node_modules` folder
- Run: `npm install` again
- Then: `npm run build`

### Images not loading
- Check image URLs are accessible
- Make sure URLs are complete (start with http:// or https://)
- Try different image URLs

---

## 📁 Project Structure Quick Reference

```
wedding-invitation/
├── src/
│   ├── components/          ← Reusable components
│   ├── sections/            ← Page sections
│   ├── data/
│   │   └── weddingData.js   ← 📝 EDIT THIS TO CUSTOMIZE
│   ├── App.jsx              ← Main component
│   └── index.css            ← Global styles
├── index.html               ← Entry HTML
├── package.json             ← Dependencies
├── tailwind.config.js       ← Tailwind settings
└── vite.config.js           ← Build settings
```

---

## 🎯 Next Steps

1. **Customize Content** - Edit `src/data/weddingData.js` with your details
2. **Add Photos** - Update image URLs with your couple photos
3. **Test Responsively** - Open website on mobile, tablet, desktop
4. **Share** - Deploy and share link with guests
5. **Track RSVPs** - Guest responses are logged in browser console

---

## 💡 Tips for Best Results

✅ Use high-quality images (optimized, not too large)
✅ Keep story descriptions short and sweet
✅ Test on mobile before sharing
✅ Use your actual wedding date for countdown
✅ Customize colors if desired (advanced)
✅ Deploy early to test on different devices

---

## 📞 Useful Resources

- **React Docs** - https://react.dev
- **Vite** - https://vitejs.dev
- **Tailwind CSS** - https://tailwindcss.com
- **Framer Motion** - https://www.framer.com/motion
- **Free Images** - https://unsplash.com

---

## 🎉 You're Ready!

Your beautiful wedding invitation website is ready to impress! Customize it, deploy it, and share it with your guests.

**Happy wedding planning!** 💕

---

**Questions?** Check the main README.md for detailed documentation.
