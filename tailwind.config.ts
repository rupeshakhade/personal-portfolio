import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 30px 80px rgba(148, 163, 184, 0.16)',
      },
      backgroundImage: {
        'hero-glass': 'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.12), transparent 25%), radial-gradient(circle at 80% 15%, rgba(59, 130, 246, 0.08), transparent 30%), linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 248, 255, 0.85) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#f8fafc',
      },
    },
  },
  plugins: [],
};

export default config;
