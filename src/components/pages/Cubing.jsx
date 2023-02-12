import Link from "../common/Link";

export default function Cubing() {
  return (
    <div className="page narrow-page">
      <h1>Cubing</h1>
      <p>
        I know how to solve a Rubik's Cube (blindfolded), and since 2010{" "}
        <Link
          href="https://www.worldcubeassociation.org/persons/2010MATT02"
          isExternal
        >
          I've competed
        </Link>{" "}
        in over 100 competitions across North America, many of which I helped
        organize and run as a volunteer -- including the{" "}
        <Link href="https://nac2022.speedcubingcanada.org/en" isExternal>
          inaugural North American Championship
        </Link>{" "}
        in 2022 in Toronto with 500 competitors over 4 days. I've held a few
        Canadian records in the multiple-blindfolded event and the fewest moves
        event.
      </p>
      <p>
        I've been a volunteer member of the World Cube Association's{" "}
        <Link href="https://github.com/thewca" isExternal>
          software team
        </Link>{" "}
        for over a year now, where my focus is on transitioning the front-end of
        the website from Rails to React. If you can code, consider volunteering,
        as they always need more help. The website is run mainly with Ruby on
        Rails and React.
      </p>
      <p>
        Reconstructions of some of my notable solves can be found{" "}
        <Link
          href="https://docs.google.com/spreadsheets/d/1PJ1k_EXqv_mafcMDRbrD5OAyBHie2z5PH5OkHLs8BtE/edit#gid=1878622909"
          isExternal
        >
          here
        </Link>
        , including both regular and blindfolded solving for several different
        events. Note that you can apply existing filters to filter by event. For
        my fewest moves solves, see{" "}
        <Link
          href="https://csclub.uwaterloo.ca/~krmatthe/FMC/old-index"
          isExternal
        >
          here
        </Link>
        , but note that this is not currently up-to-date and I have plans for
        creating a more comprehensive spreadsheet in the future (which I may or
        may not ever finish).
      </p>

      <h3>Competitions, World Cube Association, and Speedcubing Canada</h3>

      <p>
        If you're interested in attending a competition,{" "}
        <Link
          href="https://www.worldcubeassociation.org/competitions"
          isExternal
        >
          find one near you
        </Link>{" "}
        on the{" "}
        <Link href="https://www.worldcubeassociation.org/" isExternal>
          World Cube Association
        </Link>{" "}
        (WCA) -- or, if you're in Canada, sign up for{" "}
        <Link href="https://www.speedcubingcanada.org/" isExternal>
          Speedcubing Canada
        </Link>
        's (SCC){" "}
        <Link
          href="https://share.hsforms.com/1eWkfr6anSF-HKTZJVrElZQcrqzz"
          isExternal
        >
          mailing list
        </Link>{" "}
        to be notified of new competitions. The WCA is the governing body of
        Rubik's Cube competitions and SCC is Canada's regional organization
        which is recognized by the WCA. Both are not-for-profits run purely by
        volunteers. Note that you don't need to be competitive/fast to attend a
        competition; everyone is welcome.
      </p>
      <p>
        If you're interested in organizing a competition, I have a{" "}
        <Link
          href="https://krmatthews.notion.site/Competition-Template-c2e4edd77fe74cc0a6498c1e68069bda"
          isExternal
        >
          template
        </Link>{" "}
        I made for organizers here in BC, Canada. I would, however, recommend
        attending at least a few competitions before organizing one, and
        thoroughly reading through the template to make sure the expectations
        and workload are clear.
      </p>

      <h3>Software and Tools</h3>

      <p>
        {" "}
        I have several <Link to="/projects">web apps</Link> based on cubes,
        primarily designed to help with learning and practising blindfolded
        solving -- and I intend to create more in the future. If you've recently
        learned to solve a cube blindfolded, or struggle with mistakes while
        practising, you'll find them helpful.
      </p>
      <p>
        There are plenty of other tools out there, made by other people. I don't
        have a comprehensive list handy, but you can search for them.
      </p>

      <h3>Personal Blindfolded-Solving System</h3>

      <p>
        I have{" "}
        <Link
          href="https://docs.google.com/spreadsheets/d/1Ml7Jl5Yeb9HeE14xO7j1Nc99sw08oiBjLbi_nYJk9rU/edit"
          isExternal
        >
          a spreadsheet
        </Link>{" "}
        which lists the images I use for memorizing cubes and the move sequences
        (also known as algorithms in the community) which I use to solve each
        pair of pieces. (I also use the images for memory sports, including
        memorizing numbers and playing cards.) There are many online resources
        for these in general, including{" "}
        <Link href="https://bestsiteever.ru/tables/" isExternal>
          this list of algorithm lists
        </Link>{" "}
        and{" "}
        <Link
          href="https://docs.google.com/spreadsheets/d/1Fi4xgUz5b23UXMlHq7Tt5C8Ak8-U3XdbeQ9Anw68BQc/edit#gid=0"
          isExternal
        >
          this collection of letter pair images
        </Link>
        .
      </p>
      <p>
        My system is relatively unique in the blindfolded solving community in
        that it is based on phonemes and pronunciation rather than letters and
        spelling. Memory sports athletes usually use phonemes, as far as I
        understand, though I came up with the idea independently. It took
        literally years of experimenting to get it to where it is today.
      </p>

      <h3>Method Development: Weak Swap</h3>

      <p>
        Together with{" "}
        <Link
          href="https://www.worldcubeassociation.org/persons/2016SIGG01"
          isExternal
        >
          Graham Siggins
        </Link>{" "}
        I developed a slight optimization for blindfolded solving called Weak
        Swap. Graham pointed out a special case to me one day where he was able
        to reduce his algorithm count by one. I played around and realized that
        it could be generalized to apply to a large portion of scrambles, and
        together we nailed down what turned out to be a relatively simple method
        to incorporate it into every solve when applicable. Graham has a{" "}
        <Link
          href="https://www.youtube.com/watch?v=MyeQkcsAzUE&ab_channel=GrahamSiggins"
          isExternal
        >
          sequence of videos
        </Link>{" "}
        on the topic, and the calculations I did can be found on{" "}
        <Link href="https://github.com/kr-matthews/weak-swap" isExternal>
          GitHub
        </Link>
        . I intend to eventually write a blog post about it.
      </p>
    </div>
  );
}
