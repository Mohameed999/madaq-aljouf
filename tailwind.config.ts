import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: '#6C8C2D',
        golden: '#FFC300',
        beige: '#F2E6CE',
        terracotta: '#C6452D',
        mint: '#A9D68B',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        'btn': '8px',
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

export default config
