/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,jsx}', './node_modules/tw-elements/dist/js/**/*.jsx'
  ],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
