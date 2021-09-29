export var themes = [
     {
      text1: `black`,
      text2: `rgba(0,0,0,0.7)`,
      primary: `#3913B8`,
      secondary: "#2FB5FC",
      backgroundColor: `#FFF0F5`,
      card: {
        backgroundColor: `#FFF0F5`,
        boxShadow: `0px 50px 100px rgba(34, 79, 169, 0.3),
        inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)`,
        backgroundColorFull: `rgba(255, 255, 255, 1)`,
      },
      cardHover: {
        backgroundColor: `rgba(68, 66, 178, 0.1)`,
        boxShadow: `inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2)`,
      },
      pricingCard: {
        backgroundColor: `rgba(255, 255, 255, 0.3)`,
      },
      status: {
        backgroundColor: "rgba(68, 66, 178, 0.1)",
      },
      modal: {
        backgroundColor: `rgba(255, 255, 255, 0.6)`,
        boxShadow: `0px 50px 100px rgba(34, 79, 169, 0.3),
        inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)`,
        backgroundColorFull: `rgba(255, 255, 255, 1)`,
      },
    },
    {
      text1: `white`,
      text2: `rgba(255,255,255,0.7)`,
      backgroundColor: `#0F1019`,
      card: {
        backgroundColor: `#0F1019`,
        boxShadow: `0px 30px 60px rgba(0, 0, 0, 0.25),
        inset 0 0 0 0.5px rgba(255, 255, 255, 0.2)`,
        backgroundColorFull: `rgba(15, 14, 71, 1)`,
      },
      cardHover: {
        backgroundColor: `rgba(255, 255, 255, 0.1)`,
        boxShadow: `inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)`,
      },
      pricingCard: {
        backgroundColor: `rgba(31, 31, 71, 0.6)`,
      },
      status: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
      modal: {
        backgroundColor: `rgba(50, 61, 109, 0.5)`,
        boxShadow: `0px 50px 100px rgba(0, 0, 0, 0.25),
        inset 0 0 0 0.5px rgba(255, 255, 255, 0.3)`,
        backgroundColorFull: `rgba(15, 14, 71, 1)`,
      },
    },
]

export function switchThemes() {
    let b = themes[1];
    themes[1] = themes[0];
    themes[0] = b;

}