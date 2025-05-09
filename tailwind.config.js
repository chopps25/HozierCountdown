/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        beige: '#F5F2E9',
        cream: '#F8F4E6',
        sage: '#7A8B76',
        gold: '#D4A64A',
        
        // Dark mode colors
        midnight: '#1A1F36',
        charcoal: '#A8A8B3',
        deepPurple: '#2D2140',
        purple: '#6B4F9E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/paper.png')",
        'parchment-texture': "url('https://www.transparenttextures.com/patterns/parchment.png')",
        'dark-gothic': "url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg')",
      },
    },
  },
  plugins: [],
};