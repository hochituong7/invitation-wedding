import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        bounceIn: {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
        rotateContinuous: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20%)' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: "0.5" },
          '50%': { opacity: "1" },
        },
        bottomLeftToTopRight: {
          '0%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(100%, -100%)' },
        },
        
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
        slideInLeft: "slideInLeft 1s ease-out",
        slideInUp: "slideInUp 1s ease-out",
        slideInDown: "slideInDown 1s ease-out",
        zoomIn: "zoomIn 1s ease-out",
        zoomOut: "zoomOut 1s ease-out",
        rotateIn: "rotateIn 1s ease-out",
        bounceIn: "bounceIn 1s ease-out",
        shake: "shake 0.5s ease-out",
        rotateContinuous: "rotateContinuous 10s linear infinite",
        float: 'float 2s ease-in-out infinite',
        fadeInOut: 'fadeInOut 2s ease-in-out infinite',
        bottomLeftToTopRight: 'bottomLeftToTopRight 3s ease-in-out infinite',
      },
    },
  },
}
export default config
