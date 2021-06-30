import { useState } from 'react';
import { projects } from './projectList.js'
import ProjectPreview from './ProjectPreview.js';
import CategoryFilterButtons, { filterCat } from './../category-filters.js'

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
  const [searchText, setSearchText] = useState('');

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

      { /* form for searching titles and descriptions */ }
      <form onSubmit={(e) => e.preventDefault()}>
      <input
      type="search"
      placeholder="Search titles and descriptions..."
      aria-label="Search projects"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      />
      </form>

      <section className='gallery portfolio-gallery'>
        {projects
          .sort((a, b) => b.id - a.id) /* reverse chron. order */
          .filter(filterCat('tags', selectedTags))
          .filter(filterCat('languages', selectedLangs))
          .filter((proj) => {
            return (
              proj.title.toLowerCase().includes(searchText.toLowerCase()) ||
              proj.description.toLowerCase().includes(searchText.toLowerCase())
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
