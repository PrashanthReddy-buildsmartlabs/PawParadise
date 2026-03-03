# PawParadise Pets Hyderabad

A full-featured, responsive, and playful React static website for "PawParadise Pets Hyderabad". Built with modern web technologies to provide a premium experience for pet owners.

## 🐾 Features

- **Storefront**: Browse premium pet food, toys, and accessories.
- **Service Booking**: Information and booking for grooming, boarding, and vet tips.
- **Gallery**: A masonry layout of happy pets and transformations.
- **Responsive Design**: Mobile-first approach for all devices.
- **Smooth Animations**: Powered by Framer Motion for a premium feel.
- **SEO Optimized**: Meta tags for all pages using `react-helmet-async`.
- **Contact Form**: Integrated inquiry form (EmailJS ready).

## 🚀 Technologies Used

- **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PrashanthReddy-buildsmartlabs/PawParadise.git
   cd PawParadise
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment

The project is configured for easy deployment on **Netlify**:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Redirects**: A `_redirects` file is included in the `public` folder to handle React Router navigation.
- **Configuration**: `netlify.toml` is provided for environment setup.

## 📁 Project Structure

```text
PawParadise/
├── public/          # Static assets and redirects
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page views (Home, Products, etc.)
│   ├── App.jsx      # Root component and routes
│   └── main.jsx     # Entry point
├── index.html       # HTML template
├── tailwind.config.js
└── vite.config.js
```

---
Built with ❤️ for furry friends in Hyderabad.
