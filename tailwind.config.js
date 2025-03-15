const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        inter: ["var(--font-inter), sans-serif"],
        muli: ["Muli", "sans-serif"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(3deg)' },
        },
        fadeIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        circle1: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        circle2: {
          '0%': { transform: 'rotate(120deg)' },
          '100%': { transform: 'rotate(480deg)' }
        },
        circle3: {
          '0%': { transform: 'rotate(240deg)' },
          '100%': { transform: 'rotate(600deg)' }
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float2 4s ease-in-out 1.5s infinite',
        'float-more-delayed': 'float3 4s ease-in-out 3s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'circle-1': 'circle1 8s linear infinite',
        'circle-2': 'circle2 8s linear infinite',
        'circle-3': 'circle3 8s linear infinite'
      },
    },
  },
  plugins: [],
};
