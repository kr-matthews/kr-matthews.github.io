import { Fragment } from "react";
import Link from "../common/Link";
import { NarrowContent } from "../common/Page";
import Tabs from "../common/Tabs";

const tabData = [
  { name: "Education & Work", content: <EducationAndWork /> },
  { name: "Projects & Hobbies", content: <ProjectsAndHobbies /> },
  { name: "Contact", content: <Contact /> },
];

export default function About() {
  return (
    <NarrowContent>
      <h1>About</h1>

      <p style={{ marginBottom: "2em" }}>
        I'm Kevin Matthews, a mathematician by training and a self-taught
        programmer. Generally, I'm interested in most kinds of problem solving
        related to mathematics and programming. Among other things, I like
        systems design -- how software applications are structured, how cities
        function, how organizations setup their workflows, and such.
      </p>

      <Tabs data={tabData} />
    </NarrowContent>
  );
}

function EducationAndWork() {
  return (
    <Fragment>
      <p>
        I have a Bachelor of Mathematics from the{" "}
        <Link href="https://uwaterloo.ca/math/" isExternal>
          University of Waterloo
        </Link>
        , where I studied Pure Math, Applied Math, Combinatorics & Optimization,
        and Computational Math. I also have a Master of Arts from the{" "}
        <Link href="https://ww3.math.ucla.edu/" isExternal>
          University of California, Los Angeles
        </Link>
        , where I studied Mathematical Logic.
      </p>
      <p>
        In 2022 I joined{" "}
        <Link href="https://ensemble.com/" isExternal>
          Ensemble Systems
        </Link>{" "}
        as a Software Developer. Currently I'm working on an Android project,
        and before that I was leading the front-end development of a React web
        project .
      </p>
      <p>
        Before that, I worked as a Software Engineer in Android development at{" "}
        <Link href="https://rivian.com/" isExternal>
          Rivian
        </Link>
        , an electric vehicle company. My main focus was on setup/pairing flows
        for devices via Bluetooth low energy, but I also assisted other teams as
        needed, and was part of several app-wide initiatives to improve
        reusability and consistency.
      </p>
      <p>
        Beyond that, I have some experience working in financial
        management/planning, and was a teaching assistant (or instructional
        support assistant) for various computer science and math courses at UW
        and UCLA.
      </p>
    </Fragment>
  );
}

function ProjectsAndHobbies() {
  return (
    <Fragment>
      <p>
        Since 2021, I've been consistently working on numerous personal{" "}
        <Link to="/projects">projects</Link> to improve my skills while learning
        new languages and techniques. Most are simple games, but there are also
        some more useful things, such as an integration with the Strava API, a
        bike route map of Metro Vancouver, and a reusable footer component for
        use across my various projects. I also have ideas for other types of
        projects in the future.
      </p>
      <p>
        I've been solving <Link to="/cubing">Rubik's Cubes</Link> for over a
        decade, and have helped organize and run numerous competitions as a
        volunteer, achieving a few Canadian records along the way. Most of my
        pre-2021 programming <Link to="/projects">projects</Link> were
        cube-based tools, designed to help with learning how to solve the cube
        blindfolded and to help practice what you know. I'm also on the World
        Cube Association's{" "}
        <Link href="https://github.com/thewca" isExternal>
          software team
        </Link>{" "}
        as a volunteer, where my main focuses include assisting on transitioning
        our website's front-end from Rails to React, and building out a new
        separate registration system.
      </p>
      <p>
        I also like playing <Link to="/vancouver">GeoGuessr</Link> restricted to
        Vancouver (or subsets of Metro Vancouver) with 10s NMPZ (no moving,
        panning, or zooming).
      </p>
      <p>
        Other hobbies include reading, cycling, running, soccer, table tennis,
        tetris attack (this isn't tetris), and more.
      </p>
    </Fragment>
  );
}

function Contact() {
  return (
    <Fragment>
      <p>
        I'm currently in <Link to="/vancouver">Vancouver</Link>, BC, Canada. I
        can be contacted at my email, which is 'kvn' then 'r' followed by my
        last name, at Google's mail platform.
      </p>
    </Fragment>
  );
}
