import Link from "../common/Link";
import { NarrowContent } from "../common/Page";

export default function About() {
  return (
    <NarrowContent>
      <h1>About</h1>

      <h3>Interests</h3>
      <p>
        I'm Kevin Matthews, a mathematician by training and a self-taught
        programmer. Generally, I'm interested in most kinds of problem solving
        related to mathematics and programming. Among other things, I like
        systems design -- how software applications are structured, how cities
        function, how organizations setup their workflows, and such.
      </p>

      <h3>Education and Work</h3>
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
        I recently joined{" "}
        <Link href="https://ensemble.com/" isExternal>
          Ensemble Systems
        </Link>{" "}
        as a Software Developer. Before that, I worked as a Software Engineer in
        Android development at{" "}
        <Link href="https://rivian.com/" isExternal>
          Rivian
        </Link>
        , an electric vehicle company, where I learnt a lot of new techniques
        and skills. My main focus was on setup/pairing flows for devices via
        Bluetooth low energy, but I also assisted other teams as needed, and was
        part of several app-wide initiatives to improve reusability and
        consistency.
      </p>

      <h3>Projects and Hobbies</h3>
      <p>
        For the past year or so, I've been consistently working on numerous
        personal <Link to="/projects">projects</Link> to improve my skills while
        learning new languages and techniques. Most are simple games, but I have
        ideas for other types of projects in the future.
      </p>
      <p>
        I've been solving <Link to="/cubing">Rubik's Cubes</Link> for over a
        decade, and have helped organize and run numerous competitions as a
        volunteer, achieving a few Canadian records along the way. Most of my
        early programming <Link to="/projects">projects</Link> were cube-based
        tools, designed to help with learning how to solve the cube blindfolded
        and to help practice what you know. I'm also on the World Cube
        Association's{" "}
        <Link href="https://github.com/thewca" isExternal>
          software team
        </Link>{" "}
        as a volunteer, where my main focus is assisting on transitioning our
        website's front-end from Rails to React.
      </p>
      <p>
        I also like playing{" "}
        <Link
          href="https://www.geoguessr.com/maps/6180d71598cffd00011e1e91"
          isExternal
        >
          GeoGuessr
        </Link>
        , restricted to Vancouver or subsets of Metro Vancouver with the 'no
        move' rule.
      </p>

      <h3>Contact</h3>
      <p>
        I'm currently in <Link to="/vancouver">Vancouver</Link>, BC, Canada. I
        can be contacted at my email, which is 'kvn' then 'r' followed by my
        last name, at Google's mail platform.
      </p>
    </NarrowContent>
  );
}
