import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12B981',
          dark: '#0E966A',
          light: '#34D399'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
