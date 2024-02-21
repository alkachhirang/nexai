/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bggif': "url('./assets/images/gif/HeroGif.gif')",
        'Nexaibg': "url('./assets/images/png/BgNexAi.webp')",
        'Getbg': "url('./assets/images/png/Gettouch-bg-img.png')",
        'Footerbg': "url('./assets/images/png/footer-bg-img.png')",
      },

      backgroundSize: {
        'bgsize': "100% 100%"
      },
    },
  },
  plugins: [],
}
