import { Link } from "react-router-dom";

function Cubing(props) {
  return (
    <div className="page narrow-page">
      <h1>Cubing</h1>
      <p>
        I know how to solve a Rubik's cube (blindfolded), and since 2010{" "}
        <a
          href="https://www.worldcubeassociation.org/persons/2010MATT02"
          target="_blank"
          rel="noopener noreferrer"
        >
          I've competed
        </a>{" "}
        in about 100 competitions across North America, many of which I helped
        organize and run as a volunteer. I've held a few Canadian records in the
        multiple-blindfolded event and the fewest moves event.
      </p>
      <p>
        If you're interested in attending a competition,{" "}
        <a
          href="https://www.worldcubeassociation.org/competitions"
          target="_blank"
          rel="noopener noreferrer"
        >
          find one near you
        </a>{" "}
        on the{" "}
        <a
          href="https://www.worldcubeassociation.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          World Cube Association
        </a>{" "}
        (WCA). The WCA is the governing body of Rubik's Cube competitions, and
        are a non-profit run purely by volunteers. Note that you don't need to
        be competitive/fast to attend; everyone is welcome.
      </p>
      <p>
        {" "}
        I have several <Link to="/projects">web apps</Link> based on cubes,
        primarily designed to help with learning and practising blindfolded
        solving -- and I intend to create more in the future.
      </p>
      <p>
        I've recently started helping the WCA's{" "}
        <a
          href="https://github.com/thewca"
          target="_blank"
          rel="noopener noreferrer"
        >
          software team
        </a>{" "}
        as a volunteer. If you can code, consider volunteering, as they always
        need more help. Or, if you don't know how to code, there are many other
        ways in which you could help, including organizing competitions. If
        you're interested in that, consider checking out{" "}
        <a
          href="https://krmatthews.notion.site/Competition-Template-c2e4edd77fe74cc0a6498c1e68069bda"
          target="_blank"
          rel="noopener noreferrer"
        >
          this template
        </a>{" "}
        I made for organizing competitions here in Vancouver, BC.
      </p>
    </div>
  );
}

export default Cubing;
