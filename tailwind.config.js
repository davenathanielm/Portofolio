/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'extra-sm': '2px',
      },
      backgroundImage:{
        'spaceImage': "url('/src/assets/background/space.png')",
      },
      spacing: {
        'custom-mx': '28rem',
        'customLinePadding': '29rem'
      },
      maxHeight:{
          'custom' : '45rem',
      },
      maxWidth:{
          'custom' : '45rem',
      },
      height:{
          'customCard': '23rem'
      },
      width:{
          'customCardWidth': '40rem',
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
          larsseitMedium:['LARSSEITMEDIUM'],
          larsseitBold:['LARSSEITBOLD'],
      },

        colors: {
          customPurple :'#7e62d9',
          customBackgroundNavBar : '#322152',
          customBackgroundButton : '#6412d6',
          customBackgroundServices:'#1c1924',
          customRocket: '#d5153c',
          customBackgroundProject :'#232323',
          customGreen : '#0aff9d',
          customLanguage : '#d896ff',
          customBallPurple : '#d20ef9',
          customBallBlue : '#5100ec',
          customBallCream : '#ffaf7c',
        },
    },
  },
  plugins: [],
}