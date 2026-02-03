# Firebase Storage Setup Guide

## 🚀 Quick Start

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" → Enter name → Continue
3. Disable Google Analytics (optional) → Create project

### 2. Enable Storage

1. In Firebase Console, go to **Build** > **Storage**
2. Click **Get Started**
3. Use these security rules for public read access:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

4. Click **Next** → **Done**

### 3. Get Firebase Configuration

1. Go to **Project Settings** (gear icon) > **General**
2. Scroll to "Your apps" → Click Web icon `</>`
3. Register app → Copy the config values
4. Paste them into `.env.local`:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 4. Upload Files to Firebase

**Option A: Manual Upload (Easiest)**

1. Go to Firebase Console > Storage
2. Click **Upload file** or **Upload folder**
3. Upload your images/PDFs
4. Click on each file → Copy the download URL
5. Add URLs to `.env.local`:

```env
VITE_PROFILE_IMAGE=https://firebasestorage.googleapis.com/v0/b/.../profile.jpg?alt=media&token=...
VITE_ABOUT_IMAGE=https://firebasestorage.googleapis.com/v0/b/.../about/winning.jpg?alt=media&token=...
VITE_RESUME_URL=https://firebasestorage.googleapis.com/v0/b/.../resume.pdf?alt=media&token=...
```

**Option B: Script Upload (Advanced)**

```bash
npm install -D ts-node @types/node
npx ts-node scripts/uploadToFirebase.ts
```

### 5. Test Locally

```bash
npm run dev
```

Visit http://localhost:5173 - your images should load from Firebase!

### 6. Deploy

```bash
git add .
git commit -m "Setup Firebase Storage"
git push
```

**Important:** `.env.local` is ignored by git - your sensitive files stay private! 🔒

## 📦 What's Protected

These files are now in `.gitignore` and won't be pushed to GitHub:

- `public/profile-pic/*.jpg`
- `public/gallery/*.jpeg`
- `*.pdf`
- `.env.local`

## ✅ Checklist

- [ ] Create Firebase project
- [ ] Enable Storage with public read rules
- [ ] Copy Firebase config to `.env.local`
- [ ] Upload images to Firebase Storage
- [ ] Copy download URLs to `.env.local`
- [ ] Test locally (`npm run dev`)
- [ ] Commit and push (sensitive files excluded)

## 🆘 Troubleshooting

**Images not loading?**
- Check `.env.local` has correct URLs
- Verify Firebase Storage rules allow read
- Check browser console for errors

**Can't upload?**
- Enable Firebase Authentication first
- Or use manual upload via Firebase Console

**Need help?** Check [Firebase Storage docs](https://firebase.google.com/docs/storage)
