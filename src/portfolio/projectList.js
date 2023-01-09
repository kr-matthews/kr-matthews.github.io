//// project images

import bldMemoToolImage from "./images/bld-memo-tool.png";
import bldMemoToolsImage from "./images/bld-memo-tools.png";
import threeStyleCornerAlgGeneratorImage from "./images/three-style-corners-alg-generator.png";
import cornerTwistAlgGeneratorImage from "./images/corner-twist-alg-generator.png";
import blindfoldedSystemImage from "./images/blindfolded-system.png";
import theUltimatePuzzleSolverImage from "./images/the-ultimate-puzzle-solver.png";
import heartsImage from "./images/hearts-cards.jpg";
import weakSwapImage from "./images/weak-swap.png";
import ticTacToeImage from "./images/tic-tac-toe.png";
import minesweeperImage from "./images/minesweeper.png";
import connectFourImage from "./images/connect-four.png";
import cribbageImage from "./images/cribbage.png";
import stageGroupsImage from "./images/stage-groups.png";
import activitiesOnThisDayImage from "./images/calendar-activity.svg";

// website logo used directly
import personalWebsiteImage from "./../images/logo.svg";

// import wip from "./images/wip.png";

//// list

// this will be sorted by id, so can be in any order
export const projects = [
  {
    title: "BLD Memo Tool",
    id: 201501,
    url: "https://csclub.uwaterloo.ca/~krmatthe/BLD-Memo-Tool.cgi",
    image: bldMemoToolImage,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2015,
    description:
      "Produces or checks memorization sequence for blindfolded solving of a scrambled Rubik's cube, given custom user settings.",
  },
  {
    title: "BLD Memo Tools",
    id: 201502,
    url: "https://csclub.uwaterloo.ca/~krmatthe/BLD-Memo-Tools.cgi",
    image: bldMemoToolsImage,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2015,
    description:
      "Major expansion of prior project to include more puzzle sizes, visual display of cube state, new training tool, and much more.",
  },
  {
    title: "Weak Swap (Method)",
    id: 201801,
    url: "https://github.com/kr-matthews/weak-swap",
    image: weakSwapImage,
    tags: ["Method", "Rubik's Cubes"],
    languages: [],
    year: 2018,
    description:
      "An optimization for dealing with cycle breaks in blindfolded solving of Rubik's cubes, applicable when both memorizing and solving edges first. Joint work with Graham Siggins.",
  },
  {
    title: '"The Ultimate Puzzle" Solver',
    id: 201901,
    url: "https://github.com/kr-matthews/the-ultimate-puzzle-solver",
    image: theUltimatePuzzleSolverImage, // consider replacing picture
    tags: ["Puzzle", "Puzzle Solver"],
    languages: ["Racket"],
    year: 2019,
    description:
      "A simple back-tracking program to find all solutions to a jigsaw-like puzzle. Can allow or disallow flipping pieces over from their natural face-up orientation.",
  },
  {
    title: "Hearts",
    id: 201902,
    url: "https://github.com/kr-matthews/hearts-java-v2",
    image: heartsImage,
    tags: ["Game", "Cards"],
    languages: ["Java"],
    year: 2019,
    description:
      "The card game Hearts, with all standard rules, for 1 up to 52 human and/or computer players. One computer player programmed. Text-based interface, only setup for 1 human player and any number of computer players.",
  },
  {
    title: "Blindfolded Cubing System",
    id: 201903,
    url: "https://docs.google.com/spreadsheets/d/1Ml7Jl5Yeb9HeE14xO7j1Nc99sw08oiBjLbi_nYJk9rU/edit?usp=sharing",
    image: blindfoldedSystemImage,
    tags: ["System", "Rubik's Cubes"],
    languages: [],
    year: 2019,
    description:
      "My personal system, both memorization and execution, for solving various sizes of Rubik's cubes blindfolded. Also extended for memory sports, including memorization of numbers and decks of cards.",
  },
  {
    title: "3-Style Corner Alg Generator",
    id: 201904,
    url: "https://csclub.uwaterloo.ca/~krmatthe/3-style-corners.cgi",
    image: threeStyleCornerAlgGeneratorImage,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2019,
    description:
      "Given 3 cyclicly-permuted corners of a Rubik's cube, finds (intuitive) commutators which solve the case and sorts them by estimated speed (based on move-count, finger-friendliness).",
  },
  {
    title: "Corner Twist Alg Generator",
    id: 202001,
    url: "https://csclub.uwaterloo.ca/~krmatthe/corner-twist.cgi",
    image: cornerTwistAlgGeneratorImage,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2020,
    description:
      "Given 2 or 3 twisted corners of a Rubik's cube, finds pairs of (intuitive) commutators which solve the case and sorts them by estimated speed (based on move-count, finger-friendliness).",
  },
  {
    title: "Personal Website",
    id: 202101,
    // use github repo since are already on the site
    url: "https://github.com/kr-matthews/kr-matthews.github.io",
    image: personalWebsiteImage,
    tags: ["Web App", "Website"],
    languages: ["React"],
    year: 2021,
    description:
      "Custom-built website using React and CSS, including project gallery, blog, and more.",
  },
  {
    title: "Tic Tac Toe",
    id: 202102,
    url: "https://kr-matthews.github.io/tic-tac-toe",
    image: ticTacToeImage,
    tags: ["Web App", "Game"],
    languages: ["React"],
    year: 2021,
    description:
      "There are two players playing against each other on a common interface (screen). Each player can be human-controlled or one of several built-in computer players (of varying difficulty).",
  },
  {
    title: "Minesweeper",
    id: 202103,
    url: "https://kr-matthews.github.io/minesweeper",
    image: minesweeperImage,
    tags: ["Web App", "Game"],
    languages: ["React"],
    year: 2021,
    description:
      "The standard minesweeper game for one human player. Select from standard difficulties, or specify custom parameters. Times and tracks high-scores.",
  },
  {
    title: "Connect 4",
    id: 202104,
    url: "https://kr-matthews.github.io/connect-4",
    image: connectFourImage,
    tags: ["Web App", "Game"],
    languages: ["React"],
    year: 2021,
    description:
      "Play against the computer or a friend locally, or play remotely in a virtual room (via PubNub). Includes custom name and colour, and optional sound effects.",
  },
  {
    title: "Cribbage",
    id: 202201,
    url: "https://kr-matthews.github.io/cribbage",
    image: cribbageImage,
    tags: ["Web App", "Game", "Cards"],
    languages: ["React"],
    year: 2022,
    description:
      "A game of Cribbage for 2 or 3 players, with remote play. Includes score board, match log, sounds effects, automatic scoring, computer players, and more.",
  },
  {
    title: "Competition Current Groups",
    id: 202202,
    url: "https://kr-matthews.github.io/stage-groups",
    image: stageGroupsImage,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["React"],
    year: 2022,
    description:
      "A quick and simple web app to project in the main room at the North American Championships 2022 Rubik's Cube competition.",
  },
  {
    title: "Activities On-This-Day",
    id: 202203,
    url: "https://activities-on-this-day.netlify.app/",
    image: activitiesOnThisDayImage,
    tags: ["Web App", "Strava", "API"],
    languages: ["React"],
    year: 2022,
    description:
      "An app to display all your Strava activities from this day in history, using Netlify 'serverless functions' and the Strava API.",
  },
  /*
  {
    title: "",
    id: 202,
    url: "",
    image: "",
    tags: [],
    languages: [],
    year: 2022,
    description: "",
  }
  */
];
