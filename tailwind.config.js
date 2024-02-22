/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bggif': "url('./assets/images/gif/HeroGif.gif')",
        'Nexaibg': "url('./assets/images/web.p/BgNexAi.webp')",
        'Getbg': "url('./assets/images/web.p/Gettouch-bg-img.webp')",
        'Footerbg': "url('./assets/images/web.p/footer-bg-img.webp')",
      },

      backgroundSize: {
        'bgsize': "100% 100%"
      },
    },
  },
  plugins: [],
}
