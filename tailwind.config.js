/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vsc: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          actbar: '#333333',
          status: '#007ACC',
          border: '#3e3e42',
          text: '#d4d4d4',
          dim: '#6e7681',
          accent: '#007ACC',
          'accent-bright': '#4fc3f7',
          green: '#4ec9b0',
          blue: '#569cd6',
          orange: '#ce9178',
          yellow: '#dcdcaa',
          comment: '#6a9955',
          purple: '#c586c0',
          red: '#f44747',
          selection: '#264f78',
          tab: '#2d2d2d',
          hover: '#2a2d2e',
          'line-highlight': '#282828',
          number: '#b5cea8',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', '"Courier New"', 'monospace'],
        sans: ['"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        slideDown: {
          from: { opacity: 0, transform: 'translateY(-8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        glow: {
          from: { boxShadow: '0 0 5px #007ACC40' },
          to: { boxShadow: '0 0 20px #007ACC80, 0 0 40px #007ACC30' },
        }
      },
      boxShadow: {
        'vsc': '0 2px 8px rgba(0,0,0,0.5)',
        'vsc-lg': '0 8px 32px rgba(0,0,0,0.6)',
        'accent': '0 0 20px rgba(0,122,204,0.3)',
        'inner-accent': 'inset 0 0 20px rgba(0,122,204,0.05)',
      }
    },
  },
  plugins: [],
}
