/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadedIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        fadedOut: {
          '100%': { transform: 'scale(0.9)', opacity: '0' },
          '0%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        fadedIn: 'fadedIn 0.3s ease-in-out',
        fadedOut: 'fadedOut 0.3s ease-in-out'
      },
    }
  },
  plugins: [],
}