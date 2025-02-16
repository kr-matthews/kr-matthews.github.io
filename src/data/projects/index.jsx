//// project images

import noImageAvailable from "./assets/no-image-available.png";
import bldMemoToolImage from "./assets/bld-memo-tool.png";
import bldMemoToolsImage from "./assets/bld-memo-tools.png";
import weakSwapImage from "./assets/weak-swap.png";
import theUltimatePuzzleSolverImage from "./assets/the-ultimate-puzzle.png";
import heartsImage from "./assets/hearts-console.png";
import blindfoldedSystemImage from "./assets/blindfolded-system.png";
import threeStyleCornerAlgGeneratorImage from "./assets/three-style-corner-alg-generator.png";
import cornerTwistAlgGeneratorImage from "./assets/corner-twist-alg-generator.png";
import personalWebsiteImage from "./assets/website.png";
import personalWebsiteRefactoredImage from "./assets/website-refactor-2.png";
import ticTacToeImage from "./assets/tic-tac-toe.png";
import minesweeperImage from "./assets/minesweeper.png";
import connectFourImage from "./assets/connect-four.png";
import cribbageImage from "./assets/cribbage.png";
import competitionGroupsDisplayImage from "./assets/competition-groups-display.png";
import activitiesOnThisDayImage from "./assets/activities-on-this-day.png";
import heavyFooterWithLinksImage from "./assets/heavy-footer-with-links.png";
import incidentsLogImage from "./assets/incidents-log.png";
import rivianImage from "./assets/rivian-app.png";
import bikeRouteMapImage from "./assets/bike-route-map.png";
import wcaRegistrationImage from "./assets/wca-registration.png";
import spaceTimeTaggerImage from "./assets/space-time-tagger.jpg";

//// project icons

import puzzleIcon from "./assets/puzzle-piece-icon.svg";
import heartsIcon from "./assets/heart-card.svg";
import personalWebsiteIcon from "../../assets/logo.svg";
import ticTacToeIcon from "./assets/tic-tac-toe-icon.png";
import minesweeperIcon from "./assets/minesweeper-flag-icon.png";
import connectFourIcon from "./assets/connect-four-icon.png";
import cribbageIcon from "./assets/cribbage-pegs-icon.jpeg";
import activitiesOnThisDayIcon from "./assets/calendar-activity-icon.svg";
import incidentsLogIcon from "./assets/incidents-log-icon.png";
import bikeRouteMapIcon from "./assets/bike-route-map-icon.svg";
import wcaRegistrationIcon from "./assets/wca-registration-icon.svg";

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
    yearOrder: 0,
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
    yearOrder: 1,
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
    yearOrder: 0,
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
    yearOrder: 0,
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
    yearOrder: 1,
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
    yearOrder: 2,
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
    yearOrder: 3,
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
    yearOrder: 0,
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
    yearOrder: 0,
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
    yearOrder: 1,
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
    yearOrder: 2,
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
    yearOrder: 3,
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
    yearOrder: 1,
    description:
      "A game of Cribbage for 2 to 4 players, with remote play. Includes score board, match log, sounds effects, automatic scoring, computer players, and more.",
  },
  {
    id: 13,
    title: "Competition Groups Display",
    image: competitionGroupsDisplayImage,
    type: "Volunteer",
    url: "https://kr-matthews.github.io/stage-groups",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/stage-groups",
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["React"],
    year: 2022,
    yearOrder: 2,
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
    yearOrder: 4,
    description:
      "An app to display all your Strava activities from this day in history, using Netlify 'serverless functions' and the Strava API.",
  },
  {
    id: 15,
    title: "Heavy Footer with Links",
    image: heavyFooterWithLinksImage,
    type: "Personal",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/footer-dependency",
    tags: ["Dependency"],
    languages: ["React"],
    year: 2023,
    yearOrder: 0,
    description:
      "Essentially an unpublished npm package with a custom footer component (plus links) to reuse across all my web apps.",
  },
  {
    id: 16,
    title: "Personal Website Refactor",
    image: personalWebsiteRefactoredImage,
    type: "Personal",
    icon: personalWebsiteIcon,
    url: "https://kr-matthews.github.io/",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/kr-matthews.github.io",
    tags: ["Web App", "Website"],
    languages: ["React"],
    year: 2023,
    yearOrder: 2,
    description:
      "Update to React 18 and React Router 6. Add Chakra UI and replace all styling. Improve project structure and best practices, including separation of concerns and reusability.",
  },
  {
    id: 17,
    title: "WCA Incidents Log Transition",
    image: incidentsLogImage,
    type: "Volunteer",
    icon: incidentsLogIcon,
    url: "https://www.worldcubeassociation.org/incidents",
    codeHost: "GitHub",
    codeUrl: "https://github.com/thewca/worldcubeassociation.org/pull/6971",
    tags: ["Rubik's Cubes", "API"],
    languages: ["React", "Ruby"],
    year: 2022,
    yearOrder: 3,
    description:
      "As part of the WCA Software Team's initiative to transition the front-end of the WCA website from Rails to React. Involved working with Ruby controllers and models, and retrieving data from an API.",
  },
  {
    id: 18,
    title: "Rivian Android App",
    image: rivianImage,
    type: "Professional",
    // icon: "",
    url: "https://play.google.com/store/apps/details?id=com.rivian.android.consumer",
    // codeHost: "GitHub",
    // codeUrl: "https://github.com/kr-matthews/...",
    tags: ["Android"],
    languages: ["Kotlin"],
    year: 2022,
    yearOrder: 0,
    description:
      "As part of the connected products team, one of the Rivian teams responsible for maintaining and expanding the Android App (in parallel with the iOS app).",
  },
  {
    id: 19,
    title: "Config-Updating Website",
    image: noImageAvailable,
    type: "Professional",
    // icon: "",
    // url: "https://kr-matthews.github.io/...",
    // codeHost: "GitHub",
    // codeUrl: "https://github.com/kr-matthews/...",
    tags: ["Web App", "API", "Website"],
    languages: ["React"],
    year: 2023,
    yearOrder: 1,
    description:
      "Work project at Ensemble Systems for which I was the lead front-end developer. Working with GraphQL, TanStack react-query, Chakra UI, react-router, user authentication, and much more.",
  },
  {
    id: 20,
    title: "Bike Route Map",
    image: bikeRouteMapImage,
    type: "Personal",
    icon: bikeRouteMapIcon,
    url: "https://kr-matthews.github.io/bike-route-map",
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/bike-route-map",
    tags: ["Web App", "Cycling", "Maps"],
    languages: ["React"],
    year: 2023,
    yearOrder: 3,
    description:
      "An interactive map of bike routes in (Metro) Vancouver, with videos showcasing routes.",
  },
  {
    id: 21,
    title: "Data-Displaying App",
    image: noImageAvailable,
    type: "Professional",
    // icon: "",
    // url: "https://kr-matthews.github.io/...",
    // codeHost: "GitHub",
    // codeUrl: "https://github.com/kr-matthews/...",
    tags: ["Android", "API"],
    languages: ["Kotlin", "Compose"],
    year: 2024,
    yearOrder: 0,
    description:
      "Work project as part of Ensemble Systems. One of 4 android developers, working with product, design, iOS, etc. teams. Main focus on introducing Jetpack Compose to the existing codebase.",
  },
  {
    id: 22,
    title: "WCA Registration",
    image: wcaRegistrationImage,
    type: "Volunteer",
    icon: wcaRegistrationIcon,
    // !! will probably need updating
    url: "https://staging.worldcubeassociation.org/competitions/UBCBigBlind2023/#competition-schedule",
    codeHost: "GitHub",
    codeUrl:
      "https://github.com/thewca/wca-registration/pulls?q=is%3Apr+author%3Akr-matthews+",
    tags: ["Web App", "Rubik's Cubes"],
    languages: ["React"],
    year: 2024,
    yearOrder: 1,
    description:
      "Part of the WCA Software Team working on creating a new registration system, separate from the existing website monolith. Focusing on front-end bugs/features/refinements.",
  },
  {
    id: 23,
    title: "Space-Time Tagger",
    image: spaceTimeTaggerImage,
    type: "Personal",
    // icon: "", to add later
    // url: "https://kr-matthews.github.io/...", // n/a, unless added to app store later
    codeHost: "GitHub",
    codeUrl: "https://github.com/kr-matthews/space-time-tagger",
    tags: ["Android", "API"],
    languages: ["Kotlin", "Compose"],
    year: 2024,
    yearOrder: 2,
    description:
      "A simple Android app to store lists of time & location pairs, automatically populated on tap.",
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
    yearOrder: 9,
    description: "",
  }
  */
];
