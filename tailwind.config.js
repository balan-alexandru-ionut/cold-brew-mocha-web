import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mocha: {
          primary: '#faf7ff',
          secondary: '#8685EF',
          accent: '#ee6c4d',
          neutral: '#faf7ff',
          'base-content': '#000000',
          'base-100': '#000000'
        }
      }
    ]
  }
}
