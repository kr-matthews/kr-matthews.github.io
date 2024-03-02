import { Fragment } from "react";
import Link from "../common/Link";
import { NarrowContent } from "../common/Page";
import Tabs from "../common/Tabs";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const tabData = [
  { name: "Bike Route Map", content: <BikeRouteMap /> },
  { name: "Streets & Facts", content: <StreetsAndFacts /> },
  { name: "GeoGuessr", content: <GeoGuessr /> },
];

export default function Vancouver() {
  return (
    <NarrowContent>
      <h1>Vancouver</h1>
      <p style={{ marginBottom: "2em" }}>I live in Vancouver, BC, Canada.</p>

      <Tabs data={tabData} />
    </NarrowContent>
  );
}

function BikeRouteMap() {
  return (
    <Fragment>
      <p>
        One of my <Link to="/projects">projects</Link>,{" "}
        <Link isExternal href="https://kr-matthews.github.io/bike-route-map/">
          Bike Route Map
        </Link>{" "}
        maps out bike routes/infrastructure in Vancouver and nearby regions. I
        attach videos to the routes, filmed from a camera on my helmet.
      </p>
      <p>
        I made this because official city resources are often ambiguous or
        imprecise -- for example, you can't zoom in sufficiently on complicated
        areas, or distinguish between roads and paths. When combined with the
        often poor (or completely lacking) signage on routes, it can be very
        hard to navigate. Google maps street view can help, but it's
        surprisingly often not clear where you're meant to be (the road? the
        sidewalk?).
      </p>
    </Fragment>
  );
}

function StreetsAndFacts() {
  return (
    <Fragment>
      <p>
        There are many odd/interesting facts about streets, parks, etc. in{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Metro_Vancouver_Regional_District"
          isExternal
        >
          Metro Vancouver
        </Link>
        . I've highlight many of them in the map below. Vancouver has also been
        expanding and improving bike infrastructure over the past few decades,
        which I've highlighted too. I'll be adding to this map as I find more
        things.
      </p>
      <figure style={{ marginBottom: "1em" }}>
        <iframe
          title="vancouverMap"
          src="https://www.google.com/maps/d/u/0/embed?mid=1VjjBQZ-70CWIjFpoo8BHS_bLgm3xpQQ3"
          width="750"
          height="550"
        />
        <figcaption style={{ fontSize: ".8em" }}>
          Click on icons for pictures and information, or open the left panel to
          filter by category.
        </figcaption>
      </figure>
      Here are some links with more information:
      <UnorderedList>
        <ListItem>
          a{" "}
          <Link
            href="https://geographic.org/streetview/canada/bc/vancouver.html"
            isExternal
          >
            list
          </Link>{" "}
          of all Vancouver streets
        </ListItem>
        <ListItem>
          an{" "}
          <Link
            href="https://newsinteractives.cbc.ca/longform/streets"
            isExternal
          >
            article
          </Link>{" "}
          from the CBC examining the origins of all Vancouver street names
        </ListItem>
      </UnorderedList>
    </Fragment>
  );
}

function GeoGuessr() {
  return (
    <Fragment>
      <p>
        <Link
          href="https://www.geoguessr.com/maps/6180d71598cffd00011e1e91"
          isExternal
        >
          GeoGuessr
        </Link>{" "}
        is an online game which drops you somewhere in google maps street view,
        and you need to figure out where it is on the map. The world map is the
        most popular, but you can restrict the range to regions of the world --
        I prefer to play{" "}
        <Link
          href="https://www.geoguessr.com/maps/6180d71598cffd00011e1e91"
          isExternal
        >
          just Vancouver
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.geoguessr.com/maps/652343aecd435d7e5b5f55e3"
          isExternal
        >
          Vancouver, Burnaby, & Richmond
        </Link>
        . Sometimes larger subsets of Metro Vancouver. I usually do 10s NMPZ (10
        seconds per location, with no moving, panning, or zooming -- just a
        fixed image).
      </p>
    </Fragment>
  );
}
