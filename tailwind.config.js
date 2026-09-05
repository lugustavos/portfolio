/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f5f7fa',
        surface: '#ffffff',
        ink: '#17202e',
        muted: '#5a6678',
        line: '#e2e8f0',
        brand: '#0f766e',
        'brand-dark': '#0b5d56',
        'brand-soft': '#e3f4f1',
        accent: '#f59e0b',
        navy: '#14213d',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1120px' },
    },
  },
  plugins: [],
}
