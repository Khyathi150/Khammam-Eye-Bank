/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0B3C5D', dark: '#082A42', light: '#155A85' },
        secondary: { DEFAULT: '#0F766E', dark: '#0B5A54' },
        accent: { DEFAULT: '#D97706', dark: '#B45F04' },
        surface: '#F8FAFC',
        ink: '#0F172A',
        muted: '#64748B'
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      borderRadius: { card: '20px' },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(15, 23, 42, 0.10)',
        lift: '0 12px 32px -12px rgba(11, 60, 93, 0.25)'
      },
      maxWidth: { content: '1240px' }
    }
  },
  plugins: []
};
