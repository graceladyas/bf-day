/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      borderRadius: {
        'lg': '10px',
      },
  
      maxWidth: {
        'container' : '1170px'
      },
  
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 600,
      },
  
      fontSize: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '24px': '24px',
        '32px': '32px',
        '36px': '36px',
      },
  
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      },
  
      colors: {
        primary: {
          50: '#FFE7CD',
          100: '#FFDDB8',
          200: '#FFCA8F',
          300: '#FFB667',
          400: '#FFA33E',
          500: '#FF8F15',
          600: '#DC7300',
          700: '#A45500',
          800: '#6C3800',
          900: '#341B00',
        },
        secondary: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        error: {
          50: '#FDE4E3',
          100: '#FBD3D0',
          200: '#F9AFAA',
          300: '#F68B84',
          400: '#F3685E',
          500: '#F04438',
          600: '#DF1E11',
          700: '#AB170D',
          800: '#771009',
          900: '#430905',
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: 'x#78350F',
        },
        success: {
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
        },
      },
    },
  },
  plugins: [],
}

