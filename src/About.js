import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="page narrow-page">
      <h1>About</h1>
      <p>
        I'm Kevin Matthews, a mathematician by training and a self-taught
        programmer. Generally, I'm interested in most kinds of problem solving
        related to mathematics and programming. I like systems design -- how
        software applications are structured, how cities function, how
        organizations setup their workflows, and such.
      </p>
      <p>
        I have a Bachelor of Mathematics from the{" "}
        <a
          href="https://uwaterloo.ca/math/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Waterloo
        </a>
        , where I studied Pure Math, Applied Math, Combinatorics & Optimization,
        and Computational Math. I also have a Master of Arts from the{" "}
        <a
          href="https://ww3.math.ucla.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of California, Los Angeles
        </a>
        , where I studied Mathematical Logic.
      </p>
      <p>
        Since then, I've been working in Financial Technology with
        behind-the-scenes financial planning workflows and processes, while
        simultaneously working on numerous personal{" "}
        <Link to="/projects">projects</Link> to improve my skills while learning
        new languages and techniques.
      </p>
      <p>
        I've been solving <Link to="/cubing">Rubik's Cubes</Link> for over a
        decade, and have helped organize and run numerous competitions as a
        volunteer, achieving a few Canadian records along the way. Most of my
        early programming <Link to="/projects">projects</Link> were cube-based
        tools, designed to help with learning how to solve the cube blindfolded
        and to help practice what you know. I've also recently started helping
        the World Cube Association's{" "}
        <a
          href="https://github.com/thewca"
          target="_blank"
          rel="noopener noreferrer"
        >
          software team
        </a>{" "}
        as a volunteer.
      </p>
      <p>
        I'm currently in <Link to="/vancouver">Vancouver</Link>, BC, Canada. I
        can be contacted at my email, which is 'kvn' then 'r' followed by my
        last name, at Google's mail platform.
      </p>
    </div>
  );
}

export default About;
