import login from "../../images/login.svg";
import card2 from "../../images/card2.svg";
import info from "../../images/info.svg";

export const HomeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited trasactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: card2,
  alt: "zero fee",
  dark: true,
  primary: true,
  darkText: false,
};

export const HomeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Acess",
  headLine: "Login to you account at any time",
  description:
    "We have you covered no matter where your are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: login,
  alt: "Login",
  dark: false,
  primary: false,
  darkText: true,
};

export const HomeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headLine: "Creating an account is extremely easy ",
  description:
    "Get everything set up and readu in under 3 minutes. All you need to do is add your information and you're ready to go",
  buttonLabel: "Start Now",
  imgStart: false,
  img: info,
  alt: "Info",
  dark: false,
  primary: false,
  darkText: true,
};
