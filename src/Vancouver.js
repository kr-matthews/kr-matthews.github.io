function Vancouver(props) {
  return (
    <div className="page narrow-page">
      <h1>Vancouver</h1>
      <p>
        I live in Vancouver, BC, Canada. There are many odd/interesting facts
        about streets, parks, etc. in{" "}
        <a
          href="https://en.wikipedia.org/wiki/Metro_Vancouver_Regional_District"
          target="_blank"
          rel="noopener noreferrer"
        >
          Metro Vancouver
        </a>
        . I've highlight many of them in the map below. Vancouver has also been
        expanding and improving bike infrastructure over the past few decades,
        which I've highlighted too. I'll be adding to this map as I find more
        things.
      </p>
      <h2>Custom Map</h2>
      <iframe
        title="vancouverMap"
        src="https://www.google.com/maps/d/u/0/embed?mid=1VjjBQZ-70CWIjFpoo8BHS_bLgm3xpQQ3"
        width="750"
        height="550"
      ></iframe>
      <h2>Street Name Resources</h2>
      Here are some links with more information:
      {/* // TODO: fix css for list/list items */}
      <ul>
        <li>
          a{" "}
          <a
            href="https://geographic.org/streetview/canada/bc/vancouver.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            list
          </a>{" "}
          of all Vancouver streets
        </li>
        <li>
          an{" "}
          <a
            href="https://newsinteractives.cbc.ca/longform/streets"
            target="_blank"
            rel="noopener noreferrer"
          >
            article
          </a>{" "}
          from the CBC examining the origins of all Vancouver street names
        </li>
      </ul>
    </div>
  );
}

export default Vancouver;
