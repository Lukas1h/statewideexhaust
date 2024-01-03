import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'red': {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc9c9',
          '300': '#fea3a3',
          '400': '#fc6d6d',
          '500': '#f33030',
          '600': '#e12121',
          '700': '#bd1818',
          '800': '#9d1717',
          '900': '#821a1a',
          '950': '#470808',
        },    
        'grey':{
          '500':"#534545"
        }  
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        'md':'0px 10px 15px -3px rgba(0,0,0,0.1);'
      }
    },
  },
  plugins: [],
}
export default config
