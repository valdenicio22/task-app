/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['inter', 'sans-serif'],
      },
      colors: {
        'base-gray-100': '#f2f2f2',
        'base-gray-200': '#d9d9d9',
        'base-gray-300': '#808080',
        'base-gray-400': '#333333',
        'base-gray-500': '#262626',
        'base-gray-600': '#1a1a1a',
        'base-gray-700': '#0d0d0d',
        'brand-purple': '#8284fa',
        'brand-purple-dark': '#5e60ce',
        'brand-blue': '#4ea8de',
        'brand-blue-dark': '#1e6f9f',
        danger: '#e25858',
      },
    },
  },
  plugins: [],
}
