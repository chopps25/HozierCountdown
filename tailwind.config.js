/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: '#00008B', // Dark blue
        secondary: '#8B4513', // Brown
        accent: '#FFD700', // Golden yellow
        forest: '#228B22', // Forest green
        
        // Dark mode colors
        darkPrimary: '#000000', // Black
        darkSecondary: '#8B4513', // Brown
        darkAccent: '#FFD700', // Golden yellow
        darkForest: '#228B22', // Forest green
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};