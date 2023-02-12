import Link from "../common/Link";

export default function Vancouver() {
  return (
    <div className="page narrow-page">
      <h1>Vancouver</h1>
      <p>
        I live in Vancouver, BC, Canada. There are many odd/interesting facts
        about streets, parks, etc. in{" "}
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
      <h3>Custom Map</h3>
      <p>
        Click on icons for pictures and information, or open the left panel to
        filter by category.
      </p>
      <iframe
        title="vancouverMap"
        src="https://www.google.com/maps/d/u/0/embed?mid=1VjjBQZ-70CWIjFpoo8BHS_bLgm3xpQQ3"
        width="750"
        height="550"
      ></iframe>
      <h3>Street Name Resources</h3>
      Here are some links with more information:
      <ul>
        <li>
          a{" "}
          <Link
            href="https://geographic.org/streetview/canada/bc/vancouver.html"
            isExternal
          >
            list
          </Link>{" "}
          of all Vancouver streets
        </li>
        <li>
          an{" "}
          <Link
            href="https://newsinteractives.cbc.ca/longform/streets"
            isExternal
          >
            article
          </Link>{" "}
          from the CBC examining the origins of all Vancouver street names
        </li>
      </ul>
    </div>
  );
}
