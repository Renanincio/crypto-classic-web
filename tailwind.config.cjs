/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Dm: ["DM Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        'service': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
      backgroundImage: {
        'roadline': "url('./src/assets/roadmap-line.svg')",
      },
    },
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

      llg: { max: "1170px" },
			// => @media (max-width: 1170px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  
  colors: {
    blue: {
      900: "#ffffff",
    },
  },
  plugins: [],
};
