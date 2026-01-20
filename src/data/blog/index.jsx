//// article contents

import RubiksCubeBlindfolded from "./001-rubiks-cube-blindfolded/RubiksCubeBlindfolded";
import ReactStateManagement from "./002-react-state-management/ReactStateManagement";
import TerminalCustomCommands from "./003-terminal-custom-commands/TerminalCustomCommands";
import TestingReactHooks from "./004-testing-react-hooks/TestingReactHooks";
import ParityInBlindfoldedSolving from "./005-parity-in-blindfolded-solving/ParityInBlindfoldedSolving";

//// article images

import rubiksCubeBlindfoldedImage from "./assets/real-solved-cube.jpg";
import reactStateManagementImage from "./assets/react-logo.png";
import terminalCustomCommandsImage from "./assets/code-icon.png";
// currently using default image for TestingReactHooks
import parityInBlindfoldedSolvingImage from "./assets/virtual-parity-cube.png";

//// list of articles

export const articles = [
  {
    id: 0,
    title:
      "Understanding how someone else might be able to solve a Rubik's Cube blindfolded",
    shortName: "rubiks-cube-blindfolded",
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
    id: 1,
    title: "State Management in React",
    shortName: "react-state-management",
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
    id: 2,
    title: "Terminal Custom Commands",
    shortName: "terminal-custom-commands",
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
    id: 3,
    title: "Testing React Hooks - Actions, Effects, & Mocking",
    shortName: "testing-react-hooks",
    startDate: new Date("2022-04-23"),
    publishDate: new Date("2022-05-27"),
    // editDate: new Date(""),
    // image: ,
    tags: ["Programming", "React", "Testing"],
    preview:
      "The basics of testing in React, and solutions to various problems I encountered while trying to test my own custom hooks.",
    content: <TestingReactHooks />,
  },
  {
    id: 4,
    title: "How to Deal with Parity in Blindfolded Solving",
    shortName: "parity-in-blindfolded-solving",
    startDate: new Date("2023-01-27"),
    publishDate: new Date("2026-01-19"),
    // editDate: new Date(""),
    image: parityInBlindfoldedSolvingImage,
    tags: ["Rubik's Cubes"],
    preview:
      "This is the second in a series of articles about solving Rubik's Cubes blindfolded. Besides the first article, there are no prerequisites — you don't need to know how to solve a Rubik's Cube, or anything about them really.",
    content: <ParityInBlindfoldedSolving />,
  },
  /*
  {
    id: ,
    title: "",
    shortName: "",
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
