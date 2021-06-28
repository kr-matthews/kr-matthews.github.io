import { useState, useEffect } from 'react';
import { projects } from './projectList.js'
import ProjectPreview from './ProjectPreview.js';

function Portfolio(props) {
  /* constants */
  const allTags =
    [...new Set(projects.slice().map((project) => project.tags).flat())].sort();
  const [areSelected, setAreSelected] = useState({});

  /* initialize */
  useEffect(() => reset(), [])

  /* functions */
  const reset = () => {
    const selected = {};
    allTags.map((tag) => selected[tag] = false);
    setAreSelected(selected);
  }
  const toggle = (tag) => {
    setAreSelected({...areSelected, [tag] : !areSelected[tag]});
  }

  return (
    <div className="page">
      <h1>Projects</h1>
      <p>
        Coding projects I've done, as well as some puzzle-solving
        methods and frameworks.
      </p>
      <div>
        Tags:
        { /* all button, which resets the filters */ }
        <button
          type="reset"
          className={"cat-button all-cats" +
                    (Object.values(areSelected).includes(true) ? "" : " active")}
          onClick={reset}
        >
          All
        </button>
        {allTags.map((tag) => {
          /* a button for each tag, which toggles that tag */
          /* has className active if it's selected */
          return (
            <button
              type="button"
              className={"cat-button" + (areSelected[tag] ? " active" : "")}
              key={tag}
              onClick={() => toggle(tag)}
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
              !Object.values(areSelected).includes(true) ||
              project.tags.filter((tag) => areSelected[tag]).length > 0
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
