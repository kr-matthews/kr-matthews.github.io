import { Link } from "react-router-dom";

function Cubing(props) {
  return (
    <div className="page narrow-page">
      <h1>Cubing</h1>

      <h2>Rubik's Cubes and the World Cube Association</h2>
      <p>
        I know how to solve a Rubik's Cube (blindfolded), and since 2010{" "}
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
        If you're interested in organizing a competition, I have a{" "}
        <a
          href="https://krmatthews.notion.site/Competition-Template-c2e4edd77fe74cc0a6498c1e68069bda"
          target="_blank"
          rel="noopener noreferrer"
        >
          template
        </a>{" "}
        I made for organizers here in BC, Canada. I would, however, recommend
        attending at least a few competitions before organizing one, and
        thoroughly reading through the template to make sure the expectations
        and workload are clear.
      </p>

      <h2>Software and Tools</h2>
      <p>
        {" "}
        I have several <Link to="/projects">web apps</Link> based on cubes,
        primarily designed to help with learning and practising blindfolded
        solving -- and I intend to create more in the future. If you've recently
        learned to solve a cube blindfolded, or struggle with mistakes while
        practising, you'll find them helpful.
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
        need more help. The website is run mainly with Ruby on Rails and React.
      </p>

      <h2>Personal System</h2>
      <p>
        I have{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1Ml7Jl5Yeb9HeE14xO7j1Nc99sw08oiBjLbi_nYJk9rU/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          a spreadsheet
        </a>{" "}
        which lists the images I use for memorizing cubes and the move sequences
        (also known as algorithms in the community) which I use to solve each
        pair of pieces. (I also use the images for memory sports, including
        memorizing numbers and playing cards.) There are many online resources
        for these in general, including{" "}
        <a
          href="https://bestsiteever.ru/tables/"
          target="_blank"
          rel="noopener noreferrer"
        >
          this list of algorithm lists
        </a>{" "}
        and{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1Fi4xgUz5b23UXMlHq7Tt5C8Ak8-U3XdbeQ9Anw68BQc/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          this collection of letter pair images
        </a>
        .
      </p>
      <p>
        My system is relatively unique in the blindfolded solving community in
        that it is based on phonemes and pronunciation rather than letters and
        spelling. Memory sports athletes usually use phonemes, as far as I
        understand, though I came up with the idea independently. It took
        literally years of experimenting to get it to where it is today.
      </p>

      <h2>Method Development: Weak Swap</h2>
      <p>
        Together with{" "}
        <a
          href="https://www.worldcubeassociation.org/persons/2016SIGG01"
          target="_blank"
          rel="noopener noreferrer"
        >
          Graham Siggins
        </a>{" "}
        I developed a slight optimization for blindfolded solving called Weak
        Swap. Graham pointed out a special case to me one day where he was able
        to reduce his algorithm count by one. I played around and realized that
        it could be generalized to apply to a large portion of scrambles, and
        together we nailed down what turned out to be a relatively simple method
        to incorporate it into every solve when applicable. Graham has a{" "}
        <a
          href="https://www.youtube.com/watch?v=MyeQkcsAzUE&ab_channel=GrahamSiggins"
          target="_blank"
          rel="noopener noreferrer"
        >
          sequence of videos
        </a>{" "}
        on the topic, and the calculations I did can be found on{" "}
        <a
          href="https://github.com/kr-matthews/weak-swap"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . I intend to eventually write a blog post about it.
      </p>
    </div>
  );
}

export default Cubing;
