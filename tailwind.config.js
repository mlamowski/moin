/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
	screens: {
		'sm': {'max': '767px'},
		// => @media (min-width: 640px and max-width: 767px) { ... }
  
		'md': {'min': '768px', 'max': '1023px'},
		// => @media (min-width: 768px and max-width: 1023px) { ... }
  
		'lg': {'min': '1024px', 'max': '1279px'},
		// => @media (min-width: 1024px and max-width: 1279px) { ... }
  
		'xl': {'min': '1280px', 'max': '1535px'},
		// => @media (min-width: 1280px and max-width: 1535px) { ... }
  
		'2xl': {'min': '1536px'},
		// => @media (min-width: 1536px) { ... }
	  },
    extend: {},
    height: {
		"10v": "10vh",
		"20v": "20vh",
		"30v": "30vh",
		"40v": "40vh",
		"50v": "50vh",
		"60v": "60vh",
		"70v": "70vh",
		"80v": "80vh",
		"90v": "90vh",
		"100v": "100vh",
		"10w": "10vw",
		"20w": "20vw",
		"25w": "25vw",
		"30w": "30vw",
		"40w": "40vw",
		"50w": "50vw",
		"60w": "60vw",
		"70w": "70vw",
		"80w": "80vw",
		"90w": "90vw",
		"100w": "100vw",
		"4/5": "80%",
		"5/6": "56.25%",
		"1/5": "20%",
		"1/6": "15%",
		"1/8": "12%",
		"1/10": "10%",
		"1/20": "5%",
		},
    spacing: {
		"10v": "10vh",
		"20v": "20vh",
		"30v": "30vh",
		"40v": "40vh",
		"50v": "50vh",
		"60v": "60vh",
		"70v": "70vh",
		"80v": "80vh",
		"90v": "90vh",
		"100v": "100vh",
     	"10w": "10vw",
		"20w": "20vw",
		"25w": "25vw",
		"30w": "30vw",
		"40w": "40vw",
		"50w": "50vw",
		"60w": "60vw",
		"70w": "70vw",
		"80w": "80vw",
		"90w": "90vw",
		"100w": "100vw",
		"4/5": "80%",
		"5/6": "56.25%",
		"1/5": "20%",
		"1/6": "15%",
		"1/8": "12%",
		"1/10": "10%",
		"1/20": "5%",
		},
    fontFamily: {
		'sans': ['Comfortaa'],
		'serif': ['Comfortaa'],
		'mono': ['Comfortaa'],
		'display': ['Comfortaa',"bold"],
		'titan': ['Titan One'],
		'lilita': ['Lilita One'],
		'sigmar': ['Sigmar One'],
		'concert': ['Concert One'],
		'fredoka': ['Fredoka One'],
		'body': ['Comfortaa'],
    }
  },
  plugins: [],
}
