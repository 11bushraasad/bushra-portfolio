/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#120C1E',
          soft: '#1D1530',
          line: '#3A2A55'
        },
        paper: {
          DEFAULT: '#F5EFFF',
          muted: '#B9A9DA'
        },
        pink: {
          DEFAULT: '#FF5FB4',
          soft: '#FFA9DD'
        },
        magenta: {
          DEFAULT: '#C147E9',
          soft: '#E29CFF'
        },
        lavender: {
          DEFAULT: '#B9A6FF',
          soft: '#DCD2FF'
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        pixel: '4px 4px 0 0 #120C1E',
        'pixel-pink': '4px 4px 0 0 #FF5FB4',
        'pixel-sm': '2px 2px 0 0 #120C1E'
      }
    }
  },
  plugins: []
}
