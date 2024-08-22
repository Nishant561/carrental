/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens:{
          '421' : {'max': '421px'},
          '683': {'max': '683px'},
          '675': {'max': '675px'},
          '854' : {'max' : '854px'},
          '879' : {'max': '879px'},
          '940' : {'max' : '940px'},
          '955' : {'max' : '955px'},
          '986' : {'max' : '986px'},
          '1009' : {'max': '1009px'},
          '1028' : {'max' : '1028px'},
          '1069' : {'max': '1069px'},
          '1099' : {'max':'1099px'} ,
          '1129' : {'max' : '1129px'},
          '1009min' : {'min': '1009px'},
          '1250' : {'max' : '1250px'},
          '1290' : {'max' : '1290px'} ,
          
        }


    },
  },
  plugins: [],
}

