/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1B0F0B',
        cocoa: '#2B1710',
        mocha: '#4A2C22',
        cream: '#F6ECE2',
        sand: '#E9D8C8',
        blush: '#E7B9AC',
        rose: '#D69A8C',
        bronze: '#B98A5B',
        burgundy: '#5A1A22',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        sans: ['"Jost"', '"Inter"', 'sans-serif'],
      },
      borderRadius: {
        'arch': '999px 999px 24px 24px',
        'arch-sm': '400px 400px 16px 16px',
      },
      letterSpacing: {
        'widest-custom': '0.3em',
        'subtle': '0.15em',
      },
      boxShadow: {
        'polaroid': '0 12px 32px -8px rgba(27, 15, 11, 0.18), 0 4px 12px rgba(27, 15, 11, 0.08)',
        'glow-bronze': '0 0 25px rgba(185, 138, 91, 0.25)',
        'wax-seal': 'inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 6px 16px rgba(90, 26, 34, 0.35)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
