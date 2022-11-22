// Temporary until CMS connected.

import newDirection from "../images/new-direction.png";
import tjingFunding from "../images/tjing-funding.png";
import masterThesis from "../images/master-thesis.png";
import emotionStar from "../images/emotion-star.png";

export const projects = [
  {
    title: "New Direction",
    text: "Website connected to a CMS for a car rental service.",
    image: newDirection,
    year: 2022,
    action: {
      text: "Result",
      link: "https://new-direction-web.vercel.app/",
    },
  },
  {
    title: "Tjing Funding",
    text: "CMS-controlled funding site for a Disc-Golf association",
    image: tjingFunding,
    year: 2021,
    action: {
      text: "Result",
      link: "https://funding.tjing.se/",
    },
  },
  {
    title: "Productivity Enhancement",
    text: "Using nudging and gamification to improve productivity in a work management platform",
    image: masterThesis,
    year: 2021,
    action: {
      text: "Thesis",
      link: "https://drive.google.com/file/d/1k02fv4qH0mJsnthsxDA_GxILaDvm9ce9/view?usp=sharing",
    },
  },
  {
    title: "Emotion Star",
    text: "A game controlled with facial expressions.",
    image: emotionStar,
    year: 2020,
    action: {
      text: "Github",
      link: "https://github.com/josefssonemil/emotion-star",
    },
  },
  // {
  //   title: "Four in one",
  //   text: "Game designed to improve collaborative abilites in autistic children.",
  //   image: newDirection,
  //   tags: ["Swift, UX Design"],
  //   action: {
  //     text: "Github",
  //     link: "https://github.com/josefssonemil/Four-in-one",
  //   },
  // },
];
