import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 30px 80px rgba(56, 189, 248, 0.18)',
      },
      backgroundImage: {
        'hero-glass': 'radial-gradient(circle at 20% 20%, rgba(45, 212, 255, 0.14), transparent 25%), radial-gradient(circle at 80% 15%, rgba(59, 130, 246, 0.12), transparent 30%), linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.85) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#0f172a',
      },
    },
  },
  plugins: [],
};

export default config;
