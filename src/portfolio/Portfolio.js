import { useState } from 'react';
import { projects } from './projectList.js'
import ProjectPreview from './ProjectPreview.js';

function Portfolio(props) {
  /* constants */
  const allTags =
    [...new Set(projects.slice().map((project) => project.tags).flat())].sort();
  const [areSelected, setAreSelected] = useState(allTags.map((tag) => false));

  /* functions */
  const reset = () => {
    setAreSelected(allTags.map((tag) => false));
  }
  const toggle = (ind) => {
    const arr = areSelected.slice();
    arr[ind] = !arr[ind];
    setAreSelected(arr);
  }

  return (
    <div className="page">
      <h1>Projects</h1>
      <p>
        Coding projects I've done, as well as some puzzle-solving
        methods and frameworks.
      </p>
      <p>
        Tags:
        <button
          type="reset"
          className={"tag-button all-tags" + (areSelected.includes(true) ? "" : " active")}
          onClick={reset}
        >
          All
        </button>
        {allTags.map((tag) => {
          const ind = allTags.indexOf(tag)
          return (
            <button
              type="button"
              className={"tag-button" + (areSelected[ind] ? " active" : "")}
              key={ind}
              onClick={() => toggle(ind)}
            >
              {tag}
            </button>
          )})}
      </p>
      <section className='gallery portfolio-gallery'>
        {projects.slice().reverse().filter((project) => {
          return !areSelected.includes(true) ||
            project.tags.filter((tag) => areSelected[allTags.indexOf(tag)]).length > 0
        }).map((project) => {
            return <ProjectPreview key={project.id} {...project}></ProjectPreview>;
        })}
      </section>
    </div>
  );
}

export default Portfolio;
