import Tailwindcss from 'tailwindcss';
import Autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    Tailwindcss,
    Autoprefixer
  ],
}

