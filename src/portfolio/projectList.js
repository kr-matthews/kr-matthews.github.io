import memoToolImage from './../images/memo-tool-image.png'
import memoToolsImage from './../images/memo-tools-image.png'
import threeStyleCorners from './../images/3-style-corners-image.png'
import cornerTwist from './../images/corner-twist-image.png'
import bfSystem from './../images/bf-system.png'
import ultimatePuzzle from './../images/the-ultimate-puzzle-image.png'
import hearts from './../images/card-suits-image.svg'
import weakSwap from './../images/weak-swap-image.png'
import websiteLogo from './../images/logo.svg'

/* Link currently not used anywehre */
export const projects = [
  {
    title: "BLD Memo Tool",
    id: 201501,
    url: "https://csclub.uwaterloo.ca/~krmatthe/BLD-Memo-Tool.cgi",
    image: memoToolImage,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket", "TEST", "TEST2"],
    year: 2015,
    description: "Produces or checks memorization sequence for blindfolded solving of a scrambled Rubik's cube, given custom user settings."
  },
  {
    title: "BLD Memo Tools",
    id: 201502,
    url: "https://csclub.uwaterloo.ca/~krmatthe/BLD-Memo-Tools.cgi",
    image: memoToolsImage,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2015,
    description: "Major expansion of prior project to include more puzzle sizes, visual display of cube state, new training tool, and much more."
  },
  {
    title: "Weak Swap (Method)",
    id: 201801,
    url: "https://github.com/kr-matthews/weak-swap",
    image: weakSwap,
    tags: ["Puzzle Method", "Rubik's Cubes"],
    languages: [],
    year: 2018,
    description: "An optimization for dealing with cycle breaks in blindfolded solving of Rubik's cubes, applicable when both memorizing and solving edges first. Joint work with Graham Siggins."
  },
  {
    title: "\"The Ultimate Puzzle\" Solver",
    id: 201901,
    url: "https://github.com/kr-matthews/the-ultimate-puzzle-solver",
    image: ultimatePuzzle,
    tags: ["Puzzle Solver"],
    languages: ["Racket"],
    year: 2019,
    description: "A simple back-tracking program to find all solutions to a jigsaw-like puzzle. Can allow or disallow flipping pieces over from their natural face-up orientation."
  },
  {
    title: "Hearts",
    id: 201902,
    url: "https://github.com/kr-matthews/hearts-java-v2",
    image: hearts,
    tags: ["Game", "Card Game"],
    languages: ["Java"],
    year: 2019,
    description: "The card game Hearts, with all standard rules, for 1 up to 52 human and/or computer players. One computer player programmed. Text-based interface, only setup for 1 human player and any number of computer players."
  },
  {
    title: "Blindfolded Cubing System",
    id: 201903,
    url: "https://docs.google.com/spreadsheets/d/1Ml7Jl5Yeb9HeE14xO7j1Nc99sw08oiBjLbi_nYJk9rU/edit?usp=sharing",
    image: bfSystem,
    tags: ["Puzzle System", "Rubik's Cubes"],
    languages: [],
    year: 2019,
    description: "My personal system, both memorization and execution, for solving various sizes of Rubik's cubes blindfolded. Also extended for memory sports, including memorization of numbers and decks of cards."
  },
  {
    title: "3-Style Corner Alg Generator",
    id: 201904,
    url: "https://csclub.uwaterloo.ca/~krmatthe/3-style-corners.cgi",
    image: threeStyleCorners,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2019,
    description: "Given 3 cyclicly-permuted corners of a Rubik's cube, finds (intuitive) commutators which solve the case and sorts them by estimated speed (based on move-count, finger-friendlyness)."
  },
  {
    title: "Corner Twist Alg Generator",
    id: 202001,
    url: "https://csclub.uwaterloo.ca/~krmatthe/corner-twist.cgi",
    image: cornerTwist,
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["Racket"],
    year: 2020,
    description: "Given 2 or 3 twisted corners of a Rubik's cube, finds pairs of (intuitive) commutators which solve the case and sorts them by estimated speed (based on move-count, finger-friendlyness)."
  },
  {
    title: "Personal Website",
    id: 202101,
    url: "https://github.com/kr-matthews/kr-matthews.github.io",
    image: websiteLogo,
    tags: ["Web App", "Website", "Portfolio", "Blog"],
    languages: ["React"],
    year: 2021,
    description: "Custom-built website using React and CSS, including project gallery, blog, and more."
  }
  /*
    title: "",
    id: 202199,
    url: "",
    image: "",
    title: "",
    category: [],
    languages: [],
    year: 2021,
    description: ""
  */
]
