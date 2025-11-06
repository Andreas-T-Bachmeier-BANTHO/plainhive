/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ph-bg': '#0B0E0C',
        'ph-surface': '#111613',
        'ph-muted': '#9BA8A1',
        'ph-accent': '#0EA371',
        'ph-accent-2': '#0C8D61',
        'ph-border': '#1C2520'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 0 0 1px rgba(255,255,255,0.02)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
