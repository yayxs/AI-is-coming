/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cursor: {
          DEFAULT: 'rgb(var(--cursor-color))',
          dark: 'rgb(var(--cursor-color-dark))',
        },
        perplexity: {
          DEFAULT: '#21808D',
          dark: '#21808D',
        },
        deepseek: {
          DEFAULT: 'rgb(var(--deepseek-color))',
          dark: 'rgb(var(--deepseek-color-dark))',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-blue': 'pulse-blue 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fade-in 0.2s ease-out',
        'scale-up': 'scale-up 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': {
            opacity: 0.8,
            'background-color': '#22c55e',
          },
          '50%': {
            opacity: 0.5,
            'background-color': '#16a34a',
          },
        },
        'pulse-blue': {
          '0%, 100%': {
            opacity: 0.8,
            'background-color': '#3b82f6',
          },
          '50%': {
            opacity: 0.5,
            'background-color': '#2563eb',
          },
        },
        'pulse-ring': {
          '0%': {
            transform: 'scale(0.95)',
            'box-shadow': '0 0 0 0 rgba(66, 153, 225, 0.7)',
          },
          '70%': {
            transform: 'scale(1)',
            'box-shadow': '0 0 0 10px rgba(66, 153, 225, 0)',
          },
          '100%': {
            transform: 'scale(0.95)',
            'box-shadow': '0 0 0 0 rgba(66, 153, 225, 0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'scale-up': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  safelist: [
    'hover:border-cursor',
    'hover:border-perplexity',
    'hover:border-deepseek',
    'hover:text-cursor',
    'hover:text-perplexity',
    'hover:text-deepseek',
    'hover:shadow-cursor',
    'hover:shadow-perplexity',
    'hover:shadow-deepseek',
    'group-hover:border-cursor',
    'group-hover:border-perplexity',
    'group-hover:border-deepseek',
    'group-hover:text-cursor',
    'group-hover:text-perplexity',
    'group-hover:text-deepseek',
    'dark:hover:border-cursor',
    'dark:hover:border-perplexity',
    'dark:hover:border-deepseek',
    'dark:hover:text-cursor',
    'dark:hover:text-perplexity',
    'dark:hover:text-deepseek',
    'dark:group-hover:border-cursor',
    'dark:group-hover:border-perplexity',
    'dark:group-hover:border-deepseek',
    'dark:group-hover:text-cursor',
    'dark:group-hover:text-perplexity',
    'dark:group-hover:text-deepseek',
  ],
  plugins: [],
}
