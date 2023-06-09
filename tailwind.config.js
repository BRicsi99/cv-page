/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        'light-green': '#78cc6d',
        'light-green-250': 'rgb(120,204,109,0.25)',
      },
      maxHeight: {
        '8/10': '90vh',
      },
      screens: {
        'tel': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'tall': { 'raw': '(max-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      },
    }
  },
  plugins: [],
  darkMode: 'class',
}