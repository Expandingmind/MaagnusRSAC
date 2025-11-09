import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Light Blue (CTA / header)
          blue: '#60A5FA',      // main - light blue
          blue2: '#3B82F6',     // hover / dark
          // Gold (accents, trust, highlights)
          gold: '#E8B243',
          gold2: '#C9962A',
          // Neutrals
          black: '#0B0D0F',
          off: '#FBFBFB',
          gray: '#F2F2F3',
        }
      },
      fontFamily: {
        heading: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        btn: '0 2px 0 #0B0D0F',
        card: '0 10px 30px rgba(0,0,0,.09)',
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      backgroundImage: {
        'speckle': "url('/textures/speckle.svg')",
        'noise': "url('/textures/noise.png')",
      }
    }
  },
  plugins: [],
}
export default config
