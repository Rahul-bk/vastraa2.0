/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mountain: {
          teal: '#1E5B6E',
          'teal-dark': '#164757',
          'teal-light': '#257288',
          navy: '#112A38',
          'navy-dark': '#0B1C26',
          slate: '#546E7A',
          bg: '#EFF5F7',
          border: '#D7E3E7',
        },
        studio: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 12px rgba(17, 42, 56, 0.06)',
        'card-hover': '0 12px 28px rgba(17, 42, 56, 0.12)',
      },
    },
  },
  plugins: [],
}
