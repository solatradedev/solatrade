/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08090c',
        surface: { DEFAULT: '#0d0f14', 2: '#13161d', 3: '#1a1d26' },
        accent: { DEFAULT: '#00dc82', dim: 'rgba(0,220,130,0.08)' },
        purple: { DEFAULT: '#8b5cf6', dim: 'rgba(139,92,246,0.08)' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
