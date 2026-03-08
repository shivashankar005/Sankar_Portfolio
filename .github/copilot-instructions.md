# GitHub Copilot Instructions for Professional Portfolio Project

This project is a modern, professional portfolio website built with React, TypeScript, Tailwind CSS, and advanced visualization libraries.

## Project Overview

- **Type**: React Web Application Portfolio
- **Build Tool**: Vite
- **Technology Stack**: React 18, TypeScript, Tailwind CSS, Framer Motion, Recharts
- **Target**: Professional and production-ready portfolio with advanced visualizations

## Key Technologies

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom glass morphism effects
- **Animations**: Framer Motion for smooth transitions
- **Data Visualization**: Recharts for charts and graphs
- **Icons**: Lucide React for SVG icons
- **Development**: Vite for fast development server

## Project Structure

```
src/
├── components/        # React components (Hero, Skills, Experience, Projects, etc.)
├── App.tsx           # Main application component
├── index.css         # Global styles with Tailwind
└── main.tsx          # Entry point
```

## Development Guidelines

### Adding New Sections
1. Create a new TSX file in `src/components/`
2. Use Framer Motion for animations
3. Follow the existing styling patterns with glass effects
4. Use responsive Tailwind classes

### Updating Data
- Modify data arrays in each component file
- Keep the structure consistent with existing examples
- Use realistic placeholder data during development

### Styling Approach
- Use Tailwind CSS for utility classes
- Add custom CSS in `src/index.css` for complex effects
- Maintain the dark theme with blue/cyan accent colors
- Ensure responsive design with md: and lg: breakpoints

### Animation Best Practices
- Use Framer Motion variants for complex animations
- Keep animation duration between 0.3-0.8s
- Use `whileInView` for scroll-triggered animations
- Implement staggered animations for lists

## Quick Commands

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization Points

1. **Personal Info**: Update Hero.tsx with your name and title
2. **Skills Data**: Modify data arrays in Skills.tsx
3. **Projects**: Add your projects in Projects.tsx
4. **Experience**: Update timeline in Experience.tsx
5. **Contact**: Update contact info in Contact.tsx
6. **Colors**: Adjust theme in tailwind.config.js

## Performance Considerations

- Lazy load images in Projects section
- Code-split components with React.lazy() if needed
- Monitor bundle size with `npm run build`
- Use Framer Motion's optimization for 60fps animations

## Accessibility

- Semantic HTML structure throughout
- Proper heading hierarchy (h1, h2, h3)
- Color contrast meets WCAG AA standards
- Keyboard navigation support for all interactive elements

## Future Enhancements

Consider adding:
- Dark/light theme toggle
- Multi-language support
- Blog section
- Newsletter signup
- Analytics integration
- CMS integration for dynamic content

## Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
