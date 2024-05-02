/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      'barlow-condensed': ["Barlow Condensed", 'sans-serif'],
      'barlow': ["Barlow", 'sans-serif'],
      'bellefair': ["Bellefair", 'serif']
    },
    extend: {
      backgroundImage: {
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
        'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}