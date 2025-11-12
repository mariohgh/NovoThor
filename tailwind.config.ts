import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'novothor-red': '#C8342D',
        'novothor-dark': '#0b0c0d',
      },
      fontFamily: {
        sans: ['aktiv-grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'h-scale': 'clamp(2.5rem, 8vw, 6rem)',
      },
    },
  },
  plugins: [],
}
export default config
