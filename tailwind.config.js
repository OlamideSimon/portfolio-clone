/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "backgroundImage": {
        "web": "url('/src/assets/images/web_animation_bg.png')",
        "feDev": "url('/src/assets/images/fe_dev_bg.png')",
        "inDes": "url('/src/assets/images/interaction_design_bg.png')",
        "mobDev": "url('/src/assets/images/mobile_dev_bg.png')"
      },
      "fontFamily": {
        "corpsansbold": ['"Corporative Sans Rounded Condensed bold"'],
        "corpsansmedium": ['"Corporative Sans Rounded Condensed medium"'],
        "corpsansregular": ['"Corporative Sans Rounded Condensed regular"'],
        "blackbones": ['"Black Bones Personal Use"'],
      },
      "textColor": {
        "purple": '#6800FF'
      },
      "backgroundColor": {
        "purple": '#6800FF'
      },
      "keyframes": {
        "rotation": {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(180deg)' },
        }
      },
      "animation": {
        "rotate": 'rotation 2s'
      }
    },
  },
  plugins: [],
}
