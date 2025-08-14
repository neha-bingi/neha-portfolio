# Neha Bingi - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features a clean design with smooth animations and full mobile responsiveness.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with subtle animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels
- **Contact Form**: Integrated with Netlify Forms
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance**: Optimized for fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended) or Netlify

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd neha-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **`components/hero.tsx`**: Name and tagline
- **`components/about.tsx`**: About section content
- **`components/projects.tsx`**: Project details and links
- **`components/skills.tsx`**: Technical skills
- **`components/contact.tsx`**: Contact information
- **`components/footer.tsx`**: Social media links
- **`app/page.tsx`**: SEO metadata

### Images
Replace placeholder images in the `public` folder:
- Add your professional headshot
- Add project screenshots
- Update image paths in components

### Colors & Styling
The design uses a blue accent color (`#2563eb`). To change:
- Update `bg-blue-600` and `hover:bg-blue-700` classes
- Modify the gradient in the hero section
- Adjust skill tag colors in the skills section

### Contact Form
The contact form is set up for Netlify Forms. To use:

1. **For Netlify deployment**: No additional setup needed
2. **For other platforms**: Replace the form with your preferred service (EmailJS, Formspree, etc.)

## 🚀 Deployment

### Netlify (Recommended for contact form)

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out` (if using static export) or `.next`
   - The contact form will automatically work with Netlify Forms

### Vercel

1. **Deploy with Vercel CLI**
   \`\`\`bash
   npm i -g vercel
   vercel
   \`\`\`

2. **Or connect GitHub repository**
   - Import project in Vercel dashboard
   - Deploy automatically on push

### Other Platforms

For static hosting (GitHub Pages, etc.):
\`\`\`bash
npm run build
npm run export
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── about.tsx            # About section
│   ├── contact.tsx          # Contact form
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section
│   ├── projects.tsx         # Projects showcase
│   └── skills.tsx           # Skills grid
├── public/                  # Static assets
└── README.md               # This file
\`\`\`

## 🎯 Performance Tips

- **Images**: Use WebP format for better compression
- **Fonts**: Fonts are optimized with `next/font`
- **Components**: All components are optimized for performance
- **SEO**: Meta tags and structured data included

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Neha Bingi**

For questions or support, reach out at bingineha841@gmail.com
