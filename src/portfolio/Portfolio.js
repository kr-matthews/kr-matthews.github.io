import { useState, useEffect } from 'react';
import { projects } from './projectList.js'
import ProjectPreview from './ProjectPreview.js';

function Portfolio(props) {
  /* constants */
  const allTags =
    [...new Set(projects.slice().map((proj) => proj.tags).flat())].sort();
  const [selectedTags, setSelectedTags] = useState({});
  const allLangs =
    [...new Set(projects.slice().map((proj) => proj.languages).flat())].sort();
  const [selectedLangs, setSelectedLangs] = useState({});

  /* initialize */
  useEffect(() => {
    reset(allTags, setSelectedTags);
    reset(allLangs, setSelectedLangs);
  }, [])

  /* functions */
  const reset = (allCats, setSelectedCats) => {
    const selectedCats = {};
    allCats.map((cat) => selectedCats[cat] = false);
    setSelectedCats(selectedCats);
  }
  const toggle = (selectedCats, setSelectedCats, cat) => {
    setSelectedCats({...selectedCats, [cat] : !selectedCats[cat]});
  }

  return (
    <div className="page">
      <h1>Projects</h1>
      <p>
        Coding projects I've done, as well as some puzzle-solving
        methods and frameworks.
      </p>

      <div>
        Languages:
        { /* all button, which resets the filters */ }
        <button
          type="reset"
          className={"cat-button all-cats" +
                    (Object.values(selectedLangs).includes(true) ? "" : " active")}
          onClick={() => reset(allLangs, setSelectedLangs)}
        >
          All
        </button>
        {allLangs.map((lang) => {
          /* a button for each lang, which toggles that lang */
          /* has className active if it's selected */
          return (
            <button
              type="button"
              className={"cat-button" + (selectedLangs[lang] ? " active" : "")}
              key={lang}
              onClick={() => toggle(selectedLangs, setSelectedLangs, lang)}
            >
              {lang}
            </button>
          )})
        }
      </div>

      <div>
        Tags:
        { /* all button, which resets the filters */ }
        <button
          type="reset"
          className={"cat-button all-cats" +
                    (Object.values(selectedTags).includes(true) ? "" : " active")}
          onClick={() => reset(allTags, setSelectedTags)}
        >
          All
        </button>
        {allTags.map((tag) => {
          /* a button for each tag, which toggles that tag */
          /* has className active if it's selected */
          return (
            <button
              type="button"
              className={"cat-button" + (selectedTags[tag] ? " active" : "")}
              key={tag}
              onClick={() => toggle(selectedTags, setSelectedTags, tag)}
            >
              {tag}
            </button>
          )})
        }
      </div>

      <section className='gallery portfolio-gallery'>
        {projects
          .slice() /* make a copy */
          .sort((a, b) => b.id - a.id) /* reverse chron. order */
          .filter((project) => { /* select only those with filtered tag */
            return (
              !Object.values(selectedTags).includes(true) ||
              project.tags.filter((tag) => selectedTags[tag]).length > 0
            )
          })
          .filter((project) => { /* select only those with filtered lang */
            return (
              !Object.values(selectedLangs).includes(true) ||
              project.languages.filter((lang) => selectedLangs[lang]).length > 0
            )
          })
          .map((project) => { /* display the panel in the gallery */
            return (
              <ProjectPreview
                key={project.id}
                {...project}>
              </ProjectPreview>
            )
          })
        }
      </section>
    </div>
  );
}

export default Portfolio;
