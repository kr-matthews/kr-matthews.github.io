//// project images & icons

import bldMemoToolImage from "./assets/bld-memo-tool.png";
import bldMemoToolsImage from "./assets/bld-memo-tools.png";
import threeStyleCornerAlgGeneratorImage from "./assets/three-style-corners-alg-generator.png";
import cornerTwistAlgGeneratorImage from "./assets/corner-twist-alg-generator.png";
import blindfoldedSystemImage from "./assets/blindfolded-system.png";
import theUltimatePuzzleSolverImage from "./assets/the-ultimate-puzzle-pieces.png";
import heartsImage from "./assets/hearts-console.png";
import weakSwapImage from "./assets/weak-swap.png";
import personalWebsiteImage from "./assets/website.png";
import ticTacToeImage from "./assets/tic-tac-toe.png";
import minesweeperImage from "./assets/minesweeper.png";
import connectFourImage from "./assets/connect-four.png";
import cribbageImage from "./assets/cribbage.png";
import stageGroupsImage from "./assets/stage-groups.png";
import activitiesOnThisDayImage from "./assets/activities-on-this-day.png";
import footerImage from "./assets/footer-example.png";

import personalWebsiteIcon from "../../assets/logo.svg";
import puzzleIcon from "./assets/puzzle-piece.svg";
import heartsIcon from "./assets/heart-card.svg";
import ticTacToeIcon from "./assets/tic-tac-toe-icon.png";
import minesweeperIcon from "./assets/minesweeper-icon.png";
import connectFourIcon from "./assets/connect-four-icon.png";
import cribbageIcon from "./assets/cribbage-icon.jpeg";
import activitiesOnThisDayIcon from "./assets/calendar-activity.svg";

//// project list

export const projects = [
  {
    id: 0,
    title: "BLD Memo Tool",
    image: bldMemoToolImage,
    type: "Personal",
    url: "https://csclub.uwaterloo.ca/~krmatthe/BLD-Memo-Tool.cgi",
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2015,
    description:
      "Produces or checks memorization sequence for blindfolded solving of a scrambled Rubik's cube, given custom user settings.",
  },
  {
    id: 1,
    title: "BLD Memo Tools",
    image: bldMemoToolsImage,
    type: "Personal",
    url: "https://csclub.uwaterloo.ca/~krmatthe/BLD-Memo-Tools.cgi",
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2015,
    description:
      "Major expansion of prior project to include more puzzle sizes, visual display of cube state, new training tool, and much more.",
  },
  {
    id: 2,
    title: "Weak Swap (Method)",
    image: weakSwapImage,
    type: "Personal",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/weak-swap",
    tags: ["Method", "Rubik's Cubes"],
    languages: [],
    year: 2018,
    description:
      "An optimization for dealing with cycle breaks in blindfolded solving of Rubik's cubes, applicable when both memorizing and solving edges first. Joint work with Graham Siggins.",
  },
  {
    id: 3,
    title: '"The Ultimate Puzzle" Solver',
    image: theUltimatePuzzleSolverImage,
    type: "Personal",
    icon: puzzleIcon,
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/the-ultimate-puzzle-solver",
    tags: ["Puzzle", "Puzzle Solver"],
    languages: ["Racket"],
    year: 2019,
    description:
      "A simple back-tracking program to find all solutions to a jigsaw-like puzzle. Can allow or disallow flipping pieces over from their natural face-up orientation.",
  },
  {
    id: 4,
    title: "Hearts",
    image: heartsImage,
    type: "Personal",
    icon: heartsIcon,
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/hearts-java-v2",
    tags: ["Game", "Cards"],
    languages: ["Java"],
    year: 2019,
    description:
      "The card game Hearts, with all standard rules, for 1 up to 52 human and/or computer players. One computer player programmed. Text-based interface, only setup for 1 human player and any number of computer players.",
  },
  {
    id: 5,
    title: "Blindfolded Cubing System",
    image: blindfoldedSystemImage,
    type: "Personal",
    // icon: , // todo: a blindfold?
    url: "https://docs.google.com/spreadsheets/d/1Ml7Jl5Yeb9HeE14xO7j1Nc99sw08oiBjLbi_nYJk9rU/edit?usp=sharing",
    tags: ["System", "Rubik's Cubes"],
    languages: [],
    year: 2019,
    description:
      "My personal system, both memorization and execution, for solving various sizes of Rubik's cubes blindfolded. Also extended for memory sports, including memorization of numbers and decks of cards.",
  },
  {
    id: 6,
    title: "3-Style Corner Alg Generator",
    image: threeStyleCornerAlgGeneratorImage,
    type: "Personal",
    url: "https://csclub.uwaterloo.ca/~krmatthe/3-style-corners.cgi",
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2019,
    description:
      "Given 3 cyclicly-permuted corners of a Rubik's cube, finds (intuitive) commutators which solve the case and sorts them by estimated speed (based on move-count, finger-friendliness).",
  },
  {
    id: 7,
    title: "Corner Twist Alg Generator",
    image: cornerTwistAlgGeneratorImage,
    type: "Personal",
    url: "https://csclub.uwaterloo.ca/~krmatthe/corner-twist.cgi",
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2020,
    description:
      "Given 2 or 3 twisted corners of a Rubik's cube, finds pairs of (intuitive) commutators which solve the case and sorts them by estimated speed (based on move-count, finger-friendliness).",
  },
  {
    id: 8,
    title: "Personal Website",
    image: personalWebsiteImage,
    type: "Personal",
    icon: personalWebsiteIcon,
    url: "https://kr-matthews.github.io/",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/kr-matthews.github.io",
    tags: ["Web App", "Website"],
    languages: ["React"],
    year: 2021,
    description:
      "Custom-built website using React and CSS, including project gallery, blog, and more.",
  },
  {
    id: 9,
    title: "Tic Tac Toe",
    image: ticTacToeImage,
    type: "Personal",
    icon: ticTacToeIcon,
    url: "https://kr-matthews.github.io/tic-tac-toe",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/tic-tac-toe",
    tags: ["Web App", "Game"],
    languages: ["React"],
    year: 2021,
    description:
      "There are two players playing against each other on a common interface (screen). Each player can be human-controlled or one of several built-in computer players (of varying difficulty).",
  },
  {
    id: 10,
    title: "Minesweeper",
    image: minesweeperImage,
    type: "Personal",
    icon: minesweeperIcon,
    url: "https://kr-matthews.github.io/minesweeper",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/minesweeper",
    tags: ["Web App", "Game"],
    languages: ["React"],
    year: 2021,
    description:
      "The standard minesweeper game for one human player. Select from standard difficulties, or specify custom parameters. Times and tracks high-scores.",
  },
  {
    id: 11,
    title: "Connect 4",
    image: connectFourImage,
    type: "Personal",
    icon: connectFourIcon,
    url: "https://kr-matthews.github.io/connect-4",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/connect-4",
    tags: ["Web App", "Game"],
    languages: ["React"],
    year: 2021,
    description:
      "Play against the computer or a friend locally, or play remotely in a virtual room (via PubNub). Includes custom name and colour, and optional sound effects.",
  },
  {
    id: 12,
    title: "Cribbage",
    image: cribbageImage,
    type: "Personal",
    icon: cribbageIcon,
    url: "https://kr-matthews.github.io/cribbage",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/cribbage",
    tags: ["Web App", "Game", "Cards"],
    languages: ["React"],
    year: 2022,
    description:
      "A game of Cribbage for 2 or 3 players, with remote play. Includes score board, match log, sounds effects, automatic scoring, computer players, and more.",
  },
  {
    id: 13,
    title: "Competition Groups Display",
    image: stageGroupsImage,
    type: "Volunteer",
    url: "https://kr-matthews.github.io/stage-groups",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/stage-groups",
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["React"],
    year: 2022,
    description:
      "A quick and simple web app to project in the main room at the North American Championships 2022 Rubik's Cube competition.",
  },
  {
    id: 14,
    title: "Activities On-This-Day",
    image: activitiesOnThisDayImage,
    type: "Personal",
    icon: activitiesOnThisDayIcon,
    url: "https://activities-on-this-day.netlify.app/",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/activities-on-this-day",
    tags: ["Web App", "Strava", "API"],
    languages: ["React"],
    year: 2022,
    description:
      "An app to display all your Strava activities from this day in history, using Netlify 'serverless functions' and the Strava API.",
  },
  {
    id: 15,
    title: "Heavy Footer with Links",
    image: footerImage,
    type: "Personal",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/footer-dependency",
    tags: ["Dependency"],
    languages: ["React"],
    year: 2023,
    description:
      "Essentially an unpublished npm package with a custom footer component (plus links) to reuse across all my web apps.",
  },
  {
    id: 16,
    title: "Website Refactor",
    image: "", // !!
    type: "Personal",
    icon: personalWebsiteIcon,
    url: "https://kr-matthews.github.io/",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/kr-matthews.github.io",
    tags: ["Web App", "Website"],
    languages: ["React"],
    year: 2023,
    description:
      "Update to React 18 and React Router 6. Add Chakra UI and replace all styling. Improve project structure and best practices, including separation of concerns and reusability.",
  },
  /*
  {
    id: ,
    title: "",
    image: "",
    type: "",
    icon: "",
    url: "https://kr-matthews.github.io/...",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/...",
    tags: [],
    languages: [],
    year: 2023,
    description: "",
  }
  */
];

// !!! figure out ids and sorting
