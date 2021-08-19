function Home(props) {
  return (
    <div className="page narrow-page">
      <h1>Kevin's Website</h1>
      <p>
        This is a project I was working on, with the primary aim of becoming
        more familiar with websites, and in particular, React and CSS.
      </p>
      <p>Pick something to visit in the top navigation bar. If you want.</p>
      <p style={{ fontSize: "smaller" }}>
        Unique website visits: {/* <!-- hitwebcounter Code START --> */}
        <a
          href="https://www.hitwebcounter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=7856224&style=0007&nbdigits=5&type=ip&initCount=0"
            title="Free Counter"
            alt="web counter"
            border="0"
          />
        </a>
      </p>
    </div>
  );
}

export default Home;
