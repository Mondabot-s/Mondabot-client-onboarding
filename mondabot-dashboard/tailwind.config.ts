import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
    './src/dashboard/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D62F8B',
        background: '#FFF9F9',
        'content-bg': '#FFFFFF',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        'sidebar-bg': '#FFFFFF',
        'icon-color': '#6B7280',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config; 