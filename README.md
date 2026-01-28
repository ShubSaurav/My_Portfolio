# 🚀 Shubham Saurav - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my professional journey, projects, and creative work.

![Portfolio Preview](https://img.shields.io/badge/React-18+-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.0+-purple?logo=vite)

## ✨ Features

### 🎨 Modern Design
- **Glass Morphism Effects** - Sleek, modern UI with frosted glass aesthetics
- **3D Carousel Gallery** - Interactive slideshow with left-right stacked window effects
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **Dark Theme** - Eye-friendly dark color scheme with gradient accents
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop

### 📸 Gallery Section
- **3D Perspective Carousel** - Showcase images with previous/next previews in stacked view
- **Auto-Discovery** - Automatically loads images from `src/assets/gallery/`
- **Vertical Scrolling Grid** - 4 columns × 4 rows with smooth scroll
- **Lightbox Modal** - Full-screen image viewing
- **Mouse Wheel Navigation** - Scroll through carousel slides effortlessly
- **Visual Feedback** - Blue glow effect during carousel scrolling

### 🎓 Certifications
- **Auto-Discovery System** - Automatically loads certificates from folders
- **Category Filtering** - Organize by LinkedIn, Coursera, Hackathons, Workshops, etc.
- **PDF Support** - Embedded PDF viewer for certificate viewing
- **Thumbnail Previews** - 3-column grid with clean card layout
- **Modal Display** - Full-screen certificate viewing

### 📱 Additional Features
- **Projects Showcase** - Highlight your best work with live demos and GitHub links
- **Experience Timeline** - Professional journey with company details
- **Skills Section** - Visual representation of technical expertise
- **Contact Form** - Easy way for visitors to reach out
- **Smooth Navigation** - Anchor links with scroll-to-section

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Type Safety:** TypeScript 5.0+
- **Styling:** Tailwind CSS 3.0+
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Icons:** Lucide React
- **UI Components:** shadcn/ui

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShubSaurav/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
shubham-saurav-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── GallerySection.tsx      # 3D carousel + grid
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ui/              # shadcn/ui components
│   ├── assets/              # Static assets
│   │   ├── gallery/         # Gallery images (auto-loaded)
│   │   └── certificates/    # Certificates (auto-loaded)
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Public static files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts
```

## 🎯 Usage

### Adding Gallery Images

1. Place your images in `src/assets/gallery/`
2. Supported formats: PNG, JPG, JPEG, WebP, GIF
3. Images will be automatically discovered and displayed
4. Use descriptive filenames (e.g., `project-name.jpg`)

**Example:**
```
src/assets/gallery/
├── project-1.jpg
├── event-photo-1.png
└── artwork-2.webp
```

### Adding Certificates

1. Create category folders in `src/assets/certificates/`:
   - `linkedin/` - LinkedIn Learning certificates
   - `coursera/` - Coursera certificates
   - `participation/hackathon/` - Hackathon certificates
   - `participation/workshop/` - Workshop certificates
   - `participation/meetings/` - Meeting certificates

2. Place PDF or image files in respective folders
3. Certificates will be auto-categorized and displayed

**Example:**
```
src/assets/certificates/
├── linkedin/
│   └── react-certificate.pdf
├── coursera/
│   └── ml-specialization.pdf
└── participation/
    ├── hackathon/
    │   └── hackathon-2024.jpg
    └── workshop/
        └── aws-workshop.pdf
```

### Customization

**Update Personal Information:**
- Edit `src/components/HeroSection.tsx` for intro
- Edit `src/components/AboutSection.tsx` for bio
- Edit `src/components/ContactSection.tsx` for contact details

**Update Projects:**
- Edit the projects array in `src/components/ProjectsSection.tsx`

**Update Skills:**
- Edit the skills data in `src/components/SkillsSection.tsx`

**Update Experience:**
- Edit the experience timeline in `src/components/ExperienceSection.tsx`

## 🎨 Color Customization

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: "your-color",
      secondary: "your-color",
      accent: "your-color",
    }
  }
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
bun run build
```

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://shubsaurav.github.io/My_Portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

This project uses:
- **ESLint** for code linting
- **TypeScript** for type safety
- **Tailwind CSS** for consistent styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shubham Saurav**

- GitHub: [@ShubSaurav](https://github.com/ShubSaurav)
- Portfolio: [Live Site URL]

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Built with [Vite](https://vitejs.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **If you like this portfolio, please give it a star on GitHub!**

Made with ❤️ by Shubham Saurav
