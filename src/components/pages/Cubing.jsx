import { Fragment } from "react";
import Link from "../common/Link";
import { NarrowContent } from "../common/Page";
import Tabs from "../common/Tabs";
import { List, ListItem } from "@chakra-ui/react";

const tabData = [
  { name: "Competitions", content: <Competitions /> },
  { name: "Software", content: <Software /> },
  { name: "Reconstructions", content: <Reconstructions /> },
  { name: "Blindfolded", content: <Blindfolded /> },
  { name: "Weak Swap", content: <WeakSwap /> },
];

export default function Cubing() {
  return (
    <NarrowContent>
      <h1>Cubing</h1>
      <p style={{ marginBottom: "2em" }}>
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

      <Tabs data={tabData} />
    </NarrowContent>
  );
}

function Competitions() {
  return (
    <Fragment>
      <p>
        The{" "}
        <Link href="https://www.worldcubeassociation.org/" isExternal>
          World Cube Association
        </Link>{" "}
        (WCA) is the governing body of Rubik's Cube competitions.{" "}
        <Link href="https://www.speedcubingcanada.org/" isExternal>
          Speedcubing Canada
        </Link>{" "}
        (SCC) is Canada's regional organization which is recognized by the WCA.
        Both are not-for-profits run by volunteers.
      </p>
      <p>
        If you're interested in attending a competition, you can{" "}
        <Link
          href="https://www.worldcubeassociation.org/competitions"
          isExternal
        >
          find one near you
        </Link>{" "}
        on the WCA. Alternatively, if you're in Canada, sign up for SCC's{" "}
        <Link
          href="https://share.hsforms.com/1eWkfr6anSF-HKTZJVrElZQcrqzz"
          isExternal
        >
          mailing list
        </Link>{" "}
        to be notified of new competitions in your province. Note that you don't
        need to be competitive or fast to attend a competition; everyone is
        welcome.
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
    </Fragment>
  );
}

function Software() {
  return (
    <Fragment>
      <p>
        I've been a volunteer member of the World Cube Association's{" "}
        <Link href="https://github.com/thewca" isExternal>
          software team
        </Link>{" "}
        since 2021, where my focus is on transitioning the front-end of the
        website from Rails to React. If you can code, consider volunteering, as
        we always need more help. The website is run mainly with Ruby on Rails
        and React.
      </p>
      <p>
        I have several <Link to="/projects">web apps</Link> based on cubes,
        primarily designed to help with learning and practising blindfolded
        solving -- and I intend to create more in the future. If you've recently
        learned to solve a cube blindfolded, or struggle with mistakes while
        practising, then you'll find them helpful.
      </p>
      <p>
        There are plenty of other tools out there made by other people. I don't
        have a comprehensive list handy, but here are a few notable sites:
        <List>
          <ListItem>cubing js library</ListItem>
          <ListItem>alg.cubing</ListItem>
          <ListItem>csTimer</ListItem>
          <ListItem></ListItem>
        </List>
        {/* !!! add links and styling */}
      </p>
    </Fragment>
  );
}

function Reconstructions() {
  return (
    <Fragment>
      <p>
        Reconstructions of some of my notable solves can be found{" "}
        <Link
          href="https://docs.google.com/spreadsheets/d/1PJ1k_EXqv_mafcMDRbrD5OAyBHie2z5PH5OkHLs8BtE/edit#gid=1878622909"
          isExternal
        >
          here
        </Link>
        , including both regular and blindfolded solving for several different
        events. Note that you can apply existing filters to filter by event.
      </p>
      <p>
        Reconstructions of all my fewest moves attempts can be found here{" "}
        <Link
          href="https://csclub.uwaterloo.ca/~krmatthe/FMC/old-index"
          isExternal
        >
          here
        </Link>
        , but note that this is spreadsheet is a work-in-progress and not all my
        solves have been added yet. There are numerous pages of statistics.
      </p>
      <p>
        For more interesting reconstructions, of fast cubers, see{" "}
        <Link href="https://cubesolv.es" isExternal>
          cubesolv.es
        </Link>
        .
      </p>
      <p>
        To make your own reconstructions, use
        {/* !!! link to alg.cubing */}
      </p>
    </Fragment>
  );
}

// !!! review and update below content

function Blindfolded() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

function WeakSwap() {
  return (
    <p>
      Together with{" "}
      <Link
        href="https://www.worldcubeassociation.org/persons/2016SIGG01"
        isExternal
      >
        Graham Siggins
      </Link>{" "}
      I developed a slight optimization for blindfolded solving called Weak
      Swap. Graham pointed out a special case to me one day where he was able to
      reduce his algorithm count by one. I played around and realized that it
      could be generalized to apply to a large portion of scrambles, and
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
  );
}
