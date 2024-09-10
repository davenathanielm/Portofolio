/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight:{
          'custom' : '45rem'
      },

      fontFamily: {
          satoshi :['SATOSHI'],
          satoshiMedium :['SATOSHIMEDIUM'],
          satoshiBlack :['SATOSHIBLACK'],
          cocogoose:['COCOGOOSE'],
          nexa:['NEXA'],
          altehaas:['ALTEHAAS'],
          altehaasBold:['ALTEHAASBOLD'],
          rubikoneRegular:['RUBIKONE'],
          magazinegrotesqueBlack:['MAGAZINEGROTESQUEBLACK'],
          magazinegrotesqueBold:['MAGAZINEGROTESQUEBOLD'],
          magazinegrotesqueExtralight:['MAGAZINEGROTESQUEEXTRALIGHT'],
          magazinegrotesqueHeavy:['MAGAZINEGROTESQUEHEAVY'],
          magazinegrotesqueLight:['MAGAZINEGROTESQUELIGHT'],
          magazinegrotesqueRegular:['MAGAZINEGROTESQUEREGULAR'],
          magazinegrotesqueSemibold:['MAGAZINEGROTESQUESEMIBOLD'],
          magazinegrotesqueThin:['MAGAZINEGROTESQUETHIN'],
          neuePlakRegular:['NEUEPLAKREGULAR'],
          neuePlakSemiBold:['NEUEPLAKSEMIBOLD'],
      },

      colors: {
        customPurple :'#7e62d9',
        customBackgroundNavBar : '#322152',
        customBackgroundButton : '#6412d6',
        customBackgroundServices:'#1c1924',
        customRocket: '#d5153c',
        customBackgroundProject :'#232323'
      },
    },
  },
  plugins: [],
}