/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}"],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateRows: {

      },
      colors: {
          'color1': '#185494',
          'color2': "#4676a9",
          'color3': '#7498bf',
          'color4': '#a3bbd4',
          'color5': '#3a3a3a',
          'color6': '#2b9cd4',
          'color7': '#55b0dd',
          'color8': '#80c4e5',
          'color9': '#aad7ee',
          'color10': '#eaeaea',
      },
    }
  },
  // variants: {
  //   extend: {
  //     opacity: ['disabled'],
  //   },
  // },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
  
}

