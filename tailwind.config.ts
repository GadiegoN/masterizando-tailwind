import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8257E6'
      }
    },
  },
  plugins: [],
}
export default config
