// import artcle contents

import RubiksCubeBlindfolded from "./articles/001-rubiks-cube-blindfolded/rubiks-cube-blindfolded.js";
import ReactStateManagement from "./articles/002-react-state-management/react-state-management.js";

// import article preview images

import altSolvedCube from "./articles/001-rubiks-cube-blindfolded/alt-solved-cube-physical.jpg";
import reactLogo from "./articles/002-react-state-management/react-logo.png";

/* this will be sorted by publishDate, so can be in any order */
export const articles = [
  {
    title:
      "Understanding how someone else might be able to solve a Rubik's Cube blindfolded",
    link: "rubiks-cube-blindfolded",
    startDate: new Date("2021-07-31"),
    publishDate: new Date("2021-08-19"),
    editDate: "",
    image: altSolvedCube,
    tags: ["Rubik's Cubes"],
    preview:
      "This is the first in a series of articles about solving Rubik's Cubes blindfolded. There are no prerequisites — you don't need to know how to solve a Rubik's Cube, or anything about them really.",
    content: <RubiksCubeBlindfolded />,
  },
  {
    title: "State Management in React",
    link: "react-state-management",
    startDate: new Date("2021-10-09"),
    publishDate: new Date("2021-10-24"),
    editDate: "",
    image: reactLogo,
    tags: ["Programming", "React"],
    preview:
      "Explaining the problems I encountered with state management while creating the game Connect 4 in React, the solutions I came up with, and why they usually were not good solutions. Not a tutorial or guide.",
    content: <ReactStateManagement />,
  },
  /*
    title: "",
    link: "",
    startDate: new Date(''),
    publishDate: new Date(''),
    editDate: "",
    image: "",
    tags: [],
    preview: ""
    content: </>
  */
];
