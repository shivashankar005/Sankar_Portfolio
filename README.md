# Professional Portfolio

A stunning, modern portfolio website built with React, TypeScript, and cutting-edge web technologies. Features advanced visualizations, smooth animations, and a professional design.

## 🎨 Features

### Design & UX
- **Modern Dark Theme** - Sleek dark GUI with gradient accents
- **Responsive Design** - Fully responsive across all devices
- **Smooth Animations** - Beautiful transitions using Framer Motion
- **Glass Morphism** - Modern glass effect components
- **Interactive Elements** - Engaging hover effects and interactions

### Advanced Visualizations
- **Skill Proficiency Chart** - Bar chart showing skill levels
- **Learning Progress** - Line chart tracking improvement over time
- **Comprehensive Overview** - Radar chart for multi-dimensional skills
- **Real-time Data** - Dynamic chart updates and interactions

### Sections
- **Hero Section** - Eye-catching introduction with CTA buttons
- **Skills & Expertise** - Organized skill categories with visualizations
- **Experience Timeline** - Professional journey and education timeline
- **Featured Projects** - Showcase of best work with project details
- **Contact Form** - Easy way to get in touch
- **Navigation** - Fixed responsive navigation with mobile menu

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **CSS Processing**: PostCSS & Autoprefixer

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Header and navigation
│   ├── Hero.tsx          # Hero/landing section
│   ├── Skills.tsx        # Skills with charts
│   ├── Experience.tsx    # Timeline section
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── App.tsx              # Main app component
├── App.css              # App styles
├── index.css            # Global styles
└── main.tsx             # Entry point
```

## 🎯 Key Components Explained

### Skills Section
Features three different chart types:
- **Bar Chart**: Shows proficiency levels for different skills
- **Line Chart**: Displays learning progress over time
- **Radar Chart**: Comprehensive overview of all competencies

### Experience Timeline
- Alternating left-right layout
- Animated timeline dots
- Organized by work experience and education
- Skill tags for each position

### Projects Gallery
- 3-column responsive grid
- Project image, description, and tech stack
- Live demo and source code links
- Visit count and rating badges

## 🎨 Customization

### Update Personal Information
Edit these files to personalize your portfolio:
- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/Skills.tsx` - Your skills and proficiencies
- `src/components/Experience.tsx` - Work history and education
- `src/components/Projects.tsx` - Your projects and work samples
- `src/components/Contact.tsx` - Contact information

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#1f2937',
  secondary: '#3b82f6',
  accent: '#60a5fa',
}
```

### Add Your Data
Update the data arrays in each component with real information:
- Experience, skills, and project details
- Real links to your GitHub, LinkedIn, etc.
- Actual project images and descriptions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ✨ Features Highlight

- ⚡ Fast performance with Vite
- 📊 Interactive charts and visualizations
- 🎬 Smooth page transitions and animations
- 📱 Mobile-first responsive design
- 🌙 Dark theme optimized for readability
- ♿ Semantic HTML for accessibility
- 🔍 SEO-friendly structure

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### Deploy to GitHub Pages
Update `vite.config.ts` with your repository name, then:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push
```

## 📝 Performance Tips

- Images are lazy-loaded
- Chunk splitting for optimal code splitting
- CSS is automatically purged with Tailwind
- Framer Motion optimized for 60fps animations

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Clear node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and make it your own!

---

**Happy coding! 🚀**
