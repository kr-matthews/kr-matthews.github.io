import { useState } from 'react';
import { projects } from './projectList.js'
import ProjectPreview from './ProjectPreview.js';
import CategoryFilterButtons from './../category-filter-buttons.js'

function Portfolio(props) {
  /* constants */
  /* useStates are not initialized, which is ok because
    'all' applies if 'true' is not present (and 'true' isn't in empty) */
  const allTags =
    [...new Set(projects.slice().map((proj) => proj.tags).flat())].sort();
  const [selectedTags, setSelectedTags] = useState({});
  const allLangs =
    [...new Set(projects.slice().map((proj) => proj.languages).flat())].sort();
  const [selectedLangs, setSelectedLangs] = useState({});

  return (
    <div className="page">
      <h1>Projects</h1>
      <p>
        Coding projects I've done, as well as some puzzle-solving
        methods and frameworks.
      </p>

      { /* buttons for each Language (plus 'all') */ }
      <CategoryFilterButtons
        filterTitle={"Languages"}
        allCats={allLangs}
        selectedCats={selectedLangs}
        setSelectedCats={setSelectedLangs}
      >
      </CategoryFilterButtons>

      { /* buttons for each Tag (plus 'all') */ }
      <CategoryFilterButtons
        filterTitle={"Tags"}
        allCats={allTags}
        selectedCats={selectedTags}
        setSelectedCats={setSelectedTags}
      >
      </CategoryFilterButtons>

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
