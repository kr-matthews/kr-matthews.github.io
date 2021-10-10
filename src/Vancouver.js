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
        which I've additionally highlighted in the map below. I'll be adding to
        this map as I find more things.
      </p>
      <iframe
        title="vancouverMap"
        src="https://www.google.com/maps/d/u/0/embed?mid=1VjjBQZ-70CWIjFpoo8BHS_bLgm3xpQQ3"
        width="750"
        height="480"
      ></iframe>
    </div>
  );
}

export default Vancouver;
