import {Link} from 'react-router-dom';

function About(props) {
  return (
    <div className="page narrow-page">
      <h1>About</h1>
      <p>
      I'm Kevin Matthews, a mathematician by training.
      Generally, I'm interested in most kinds of problem solving
      related to mathematics and programming.
      I like systems design --
      how software applications are structured,
      how cities function,
      how organizations setup their workflows,
      and such.
      </p>
      <p>
      I have a Bachelor of Mathematics from the University of Waterloo,
      where I studied Pure Math, Applied Math, Combinatorics & Optimization,
      and Computational Math.
      I also have a Master of Arts from the University of California, Los Angeles,
      where I studied Mathematical Logic.
      More recently, I've been working behind-the-scenes
      with financial planning/advising workflows and processes.
      </p>
      <p>
      I know how to solve a Rubik's cube (blindfolded),
      and have <a href="https://www.worldcubeassociation.org/persons/2010MATT02">
      competed</a> in about 100 competitions across North America,
      a few of which I helped organize.
      Most of my early programming <Link to="/projects">projects</Link> were
      cube-based tools, designed to help with learning and/or practising the cube.
      </p>
      <p>
      I'm currently in BC, Canada. I can be contacted at my email,
      which is 'kvn' then 'r' followed by my last name,
      at Google's mail platform.
      </p>
    </div>
  )
}

export default About;
