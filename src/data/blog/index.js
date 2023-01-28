//// article contents

import RubiksCubeBlindfolded from "./001-rubiks-cube-blindfolded/rubiks-cube-blindfolded.js";
import ReactStateManagement from "./002-react-state-management/react-state-management.js";
import TerminalCustomCommands from "./003-terminal-custom-commands/terminal-custom-commands.js";
import TestingReactHooks from "./004-testing-react-hooks/testing-react-hooks.js";

//// article images

import rubiksCubeBlindfoldedImage from "./001-rubiks-cube-blindfolded/alt-solved-cube-physical.jpg";
import reactStateManagementImage from "./002-react-state-management/react-logo.png";
import terminalCustomCommandsImage from "./003-terminal-custom-commands/code-icon.png";
// currently using default image for TestingReactHooks

//// list of articles

// this will be sorted by publishDate, so can be in any order
export const articles = [
  {
    title:
      "Understanding how someone else might be able to solve a Rubik's Cube blindfolded",
    link: "rubiks-cube-blindfolded",
    startDate: new Date("2021-07-31"),
    publishDate: new Date("2021-08-19"),
    // editDate: new Date(""),
    image: rubiksCubeBlindfoldedImage,
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
    editDate: new Date("2021-11-08"),
    image: reactStateManagementImage,
    tags: ["Programming", "React"],
    preview:
      "Explaining the problems I encountered with state management while creating the game Connect 4 in React, the solutions I came up with, and why they usually were not good solutions. Not a tutorial or guide.",
    content: <ReactStateManagement />,
  },
  {
    title: "Terminal Custom Commands",
    link: "terminal-custom-commands",
    startDate: new Date("2021-11-26"),
    publishDate: new Date("2022-01-03"),
    // editDate: new Date(""),
    image: terminalCustomCommandsImage,
    tags: ["Programming", "Terminal"],
    preview:
      "Overview of a relatively quick and simple way to remove some friction from project workflow and avoid forgetting steps.",
    content: <TerminalCustomCommands />,
  },
  {
    title: "Testing React Hooks - Actions, Effects, & Mocking",
    link: "testing-react-hooks",
    startDate: new Date("2022-04-23"),
    publishDate: new Date("2022-05-27"),
    // editDate: new Date(""),
    // image: ,
    tags: ["Programming", "React", "Testing"],
    preview:
      "The basics of testing in React, and solutions to various problems I encountered while trying to test my own custom hooks.",
    content: <TestingReactHooks />,
  },
  /*
  {
    title: "",
    link: "",
    startDate: new Date(""),
    publishDate: new Date(""),
    // editDate: new Date(""),
    image: ,
    tags: [],
    preview: "",
    content: < />
  }
  */
];
