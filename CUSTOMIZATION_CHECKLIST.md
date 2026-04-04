# 📋 Customization Checklist

Use this checklist to customize your wedding invitation website for your special couple. Edit all values in `src/data/weddingData.js`.

---

## 🎯 Step-by-Step Customization

### Step 1: Couple Names & Date

- [ ] Change `bride` name
  ```javascript
  bride: 'Your Bride Name',
  ```

- [ ] Change `groom` name
  ```javascript
  groom: 'Your Groom Name',
  ```

- [ ] Update wedding date (YYYY-MM-DD format)
  ```javascript
  weddingDate: '2025-06-15',  // Change to your date
  ```

- [ ] Update formatted date
  ```javascript
  weddingDateFormatted: 'June 15, 2025',
  ```

- [ ] Update tagline
  ```javascript
  tagline: 'Your romantic tagline here',
  ```

---

### Step 2: Couple Information

**Bride Section:**
- [ ] Change bride's full name
- [ ] Update bride's bio/about
- [ ] Add bride's image URL
- [ ] Verify image displays correctly

**Groom Section:**
- [ ] Change groom's full name
- [ ] Update groom's bio/about
- [ ] Add groom's image URL
- [ ] Verify image displays correctly

**Where to edit:**
```javascript
couple: {
  bride: {
    name: 'Bride Full Name',
    role: 'Bride',
    bio: 'Bride bio text...',
    image: 'URL to bride image'
  },
  groom: {
    name: 'Groom Full Name',
    role: 'Groom',
    bio: 'Groom bio text...',
    image: 'URL to groom image'
  }
}
```

---

### Step 3: Love Story Timeline

Update each milestone with your real story:

**Milestone 1:**
- [ ] Update year
- [ ] Change title
- [ ] Update story description

**Milestone 2:**
- [ ] Update year
- [ ] Change title
- [ ] Update story description

**Milestone 3:**
- [ ] Update year
- [ ] Change title
- [ ] Update story description

**Milestone 4:**
- [ ] Update year (usually current year)
- [ ] Change to wedding day
- [ ] Update description

**Want more/fewer milestones?**
Add or remove items from `story` array in `weddingData.js`

---

### Step 4: Event Details

**Venue Information:**
- [ ] Update venue name
  ```javascript
  venue: 'Your Venue Name',
  ```

- [ ] Update address
  ```javascript
  address: 'Full Address, City, Country',
  ```

**Date & Time:**
- [ ] Update event date
  ```javascript
  date: 'Month DD, YYYY',
  ```

- [ ] Update event time
  ```javascript
  time: 'HH:MM PM/AM',  // e.g., '6:00 PM'
  ```

**Dress Code:**
- [ ] Update dress code
  ```javascript
  dressCode: 'Semi-formal Indian Wear / Cocktail Attire',
  ```

**Contact Information:**
- [ ] Update phone number
  ```javascript
  contact: '+1 (555) 123-4567',
  ```

- [ ] Update email
  ```javascript
  email: 'you@example.com',
  ```

---

### Step 5: Gallery Images

Add your favorite couple photos:

- [ ] Image 1 URL (replace placeholder)
- [ ] Image 2 URL (replace placeholder)
- [ ] Image 3 URL (replace placeholder)
- [ ] Image 4 URL (replace placeholder)
- [ ] Image 5 URL (replace placeholder)
- [ ] Image 6 URL (replace placeholder)

**Add more images?**
Just add more URLs to the `gallery` array:
```javascript
gallery: [
  'URL 1',
  'URL 2',
  'URL 3',
  'URL 4',  // Add as many as you want
]
```

**Find free images:**
- Unsplash: https://unsplash.com (search for couple, wedding, etc)
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com
- Your own couple photos (upload to image hosting)

---

## 🎨 Optional: Customization

These are advanced customizations (optional):

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cream: '#FFFBF7',          // Main background
  blush: '#F9E5E1',          // Light pink
  rose: '#F4D4CE',           // Soft rose
  'rose-gold': '#B89968',    // Gold accents
  'muted-pink': '#E8C9C2',   // Muted pink
  'soft-pink': '#F5E6E2',    // Very soft pink
  'dark-text': '#3A3230',    // Text color
}
```

- [ ] Choose new primary color (replace rose-gold)
- [ ] Choose new background (replace cream)
- [ ] Choose new accent (replace blush)
- [ ] Test website appearance

### Change Fonts

Edit `index.html` to use different Google Fonts:
```html
<link 
  href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600&family=Lato:wght@300;400;500&display=swap" 
  rel="stylesheet" 
/>
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  serif: ['Your Serif Font', 'serif'],
  sans: ['Your Sans Font', 'sans-serif'],
}
```

- [ ] Choose serif fonts from Google Fonts (for headings)
- [ ] Choose sans-serif font (for body text)
- [ ] Update tailwind.config.js
- [ ] Verify fonts look good

### Change Navigation Initials

Edit `src/components/Navigation.jsx`:
```javascript
<div className="font-serif text-2xl font-semibold text-rose-gold">
  A & A  {/* ← Change to your initials */}
</div>
```

- [ ] Update navigation initials to couple's first letters

---

## ✅ Testing Checklist

After customization:

- [ ] **Homepage loads without errors** - Check browser console
- [ ] **All names are updated** - Review every section
- [ ] **Dates are correct** - Check wedding date everywhere
- [ ] **Images load** - Should see couple photos
- [ ] **Gallery images display** - All 6 (or your count)
- [ ] **Countdown timer works** - Shows days/hours/minutes/seconds
- [ ] **Navigation scrolls** - Links work and highlight active section
- [ ] **RSVP form works** - Can fill and submit
- [ ] **Mobile responsive** - Resize browser to test mobile view
- [ ] **Colors look good** - If you changed color scheme

---

## 🚀 Deployment Checklist

Before deploying to the internet:

- [ ] **Test locally** - Running `npm run dev`
- [ ] **Build successfully** - Run `npm run build` without errors
- [ ] **Check for typos** - Review all text
- [ ] **Test all links** - Click navigation, buttons, form
- [ ] **Mobile testing** - Check on actual phone
- [ ] **Image quality** - Verify all images are clear
- [ ] **Email works** - Verify contact email is correct
- [ ] **Countdown accurate** - Check wedding date in countdown
- [ ] **No console errors** - Open DevTools and check

---

## 🐛 Common Customization Issues

### Images Not Showing
❌ **Problem:** URL is incorrect or incomplete
✅ **Solution:** Make sure URL starts with `http://` or `https://`
```javascript
// Wrong ❌
image: 'unsplash.com/photo/xyz'

// Correct ✅
image: 'https://images.unsplash.com/photo/xyz?w=500'
```

### Countdown Shows Wrong Date
❌ **Problem:** `weddingDate` format incorrect
✅ **Solution:** Use YYYY-MM-DD format
```javascript
// Wrong ❌
weddingDate: '15-12-2024'

// Correct ✅
weddingDate: '2024-12-15'
```

### Website Looks the Same After Editing
❌ **Problem:** Browser showing cached version
✅ **Solution:** Hard refresh browser
- **Windows:** `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

### Form Not Working
❌ **Problem:** Incorrect form code
✅ **Solution:** Don't edit RSVP.jsx, only edit weddingData.js

### Fonts Look Wrong
❌ **Problem:** Font import missing in index.html
✅ **Solution:** Verify Google Fonts link in index.html

---

## 📝 Before/After Example

### Before Customization
```javascript
export const weddingData = {
  bride: 'Anya',
  groom: 'Aarav',
  // ... original data
};
```

### After Customization
```javascript
export const weddingData = {
  bride: 'Sarah',
  groom: 'James',
  // ... your custom data
};
```

---

## 🎯 Priority Customizations

**Must Do (Website Won't Make Sense Without):**
1. Couple names
2. Wedding date
3. Couple photos
4. Venue details
5. Event date/time

**Should Do (Improves Personalization):**
6. Couple bios
7. Love story timeline
8. Gallery images
9. Contact information
10. Dress code

**Nice to Have (Advanced Customization):**
11. Color scheme
12. Fonts
13. Navigation initials
14. Additional sections

---

## 📞 Customization Support

### For Each Component:

**Navigation**
- Edit initials in `src/components/Navigation.jsx`
- Links auto-connect to sections

**Hero Section**
- Names come from `weddingData.js`
- Tagline in `weddingData.js`
- Date in `weddingData.js`

**Couple Section**
- Names, bios, images in `couple` object
- All in `weddingData.js`

**Timeline**
- Edit `story` array
- All in `weddingData.js`

**Event Details**
- Edit `eventDetails` object
- All in `weddingData.js`

**Gallery**
- Add image URLs to `gallery` array
- All in `weddingData.js`

**RSVP Form**
- Form handles itself
- No customization needed (already works!)

**Location**
- Edit `eventDetails`
- Map auto-updates with venue address

**Footer**
- Names come from `weddingData.js`
- Date comes from `weddingData.js`

---

## ✨ Final Checklist Before Launch

- [ ] **Verified all names are correct**
- [ ] **Wedding date is accurate**
- [ ] **All images load properly**
- [ ] **Countdown timer calculates correctly**
- [ ] **Colors match your vision**
- [ ] **Typography is readable**
- [ ] **Mobile layout looks great**
- [ ] **Links work correctly**
- [ ] **Form submission works**
- [ ] **No typos or grammar errors**
- [ ] **Contact information is correct**
- [ ] **Ready to share with guests!**

---

## 🎉 You're Ready!

Once you've completed this checklist, your website is:
✅ Fully customized
✅ Ready to deploy
✅ Looking professional
✅ Ready to impress your guests!

---

**Next Steps:**
1. Deploy to Vercel or Netlify
2. Share the link with your guests
3. Watch those RSVPs come in!
4. Enjoy your special day! 💕

Happy wedding planning! 🎊✨
