import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  name: string;
  background: {
    main: string;
    optionsdiv: string;
    optionselect: string;
    homeComponent: string;
    Buttons: string;
    spanHover: string;
    spanActive: string;
    correctEffect: string;
    wrongEffect: string;
  };
  color: {
    main: string;
    optiontext: string;
    questionstext: string;
    Buttons: string,
    spanHover: string;
    spanActive: string;
    wrongColor: string;
  };
  backgroundimg:{
    sunimgcolor: string;
    moonimgcolor: string;
    main: string;
    correctEffect: string;
    wrongEffect: string;
  };
  border: {
    correctEffect: string;
    wrongEffect: string;
    spanActive: string;
  }
}
export interface Themes {
  light: Theme; 
  dark: Theme;
}


export const themes: Themes = {
  light: {
    name: "light",
    background: {
      main: "#F4F6FA",
      optionsdiv: "#FFFFFF",
      optionselect: "#F4F6FA",
      homeComponent: "#F4F6FA",
      Buttons: "#A729F5",
      spanHover: "#F6E7FF",
      spanActive: "#A729F5",
      correctEffect: "#26D782",
    wrongEffect:  "#EE5454",
    },
    color: {
      main:"#313E51",
      optiontext: "#3B4D66",
      questionstext: "#3B4D66",
      Buttons: "#FFFFFF",
      spanHover: "#A729F5",
      spanActive: "#FFFF;",
      wrongColor: "#EE5454",
    },
    backgroundimg: {
      sunimgcolor: "/icon-sun-dark.svg",
      moonimgcolor: "/icon-moon-dark.svg",
      main: "/pattern-background-desktop-light.svg",
      wrongEffect: "/icon-incorrect.svg",
      correctEffect: "/icon-correct.svg",
    },
    border: {
      wrongEffect: "#EE5454",
      correctEffect: "#26D782",
      spanActive: "#A729F5",
    },
   
  },
  dark: {
    name: "dark",
    background: {
      main: "#313E51",
      optionselect: "#3B4D66",
      optionsdiv: "#3B4D66",
      homeComponent: "#313E51",
      Buttons: "#A729F5",
      spanHover: "#F6E7FF",
      spanActive: "#A729F5",
      correctEffect: "#26D782",
      wrongEffect:  "#EE5454",
    },
    color: {
      main: "#FFFFFF",
      optiontext: "#FFFFFF",
      questionstext: "#FFFFFF",
      Buttons: "#FFFFFF",
      spanHover: "#A729F5",
      spanActive: "#FFFF;",
      wrongColor: "#FFFFFF",
    },
    backgroundimg:{
      sunimgcolor: "/icon-sun-light.svg",
      moonimgcolor: "/icon-moon-light.svg",
      main: "pattern-background-desktop-dark.svg",
      wrongEffect: "/icon-incorrect.svg",
      correctEffect: "/icon-correct.svg",
    },
    border: {
      wrongEffect: "#EE5454",
      correctEffect: "#26D782",
      spanActive:" #A729F5",
    },
   
  },
};