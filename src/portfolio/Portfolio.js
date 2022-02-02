import { useState } from "react";
import { projects } from "./projectList.js";
import ProjectPreview from "./ProjectPreview.js";
import GalleryFilterButtons, { filterCat } from "./../CategoryFilterButtons.js";
import GallerySearchForm from "./../gallery-search.js";

function Portfolio(props) {
  /* constants */
  /* selected useStates are not initialized, which is ok because
    'all' applies if 'true' is not present (and 'true' isn't in empty) */
  const allTags = [
    ...new Set(
      projects
        .slice()
        .map((proj) => proj.tags)
        .flat()
    ),
  ].sort();
  const [selectedTags, setSelectedTags] = useState({});
  const allLangs = [
    ...new Set(
      projects
        .slice()
        .map((proj) => proj.languages)
        .flat()
    ),
  ].sort();
  const [selectedLangs, setSelectedLangs] = useState({});
  const [searchText, setSearchText] = useState("");

  return (
    <div className="page">
      <h1>Projects</h1>
      <p>
        Notable (personal) projects that I've created. Most, but not all, are
        programming projects. Many have public repositories on{" "}
        <a
          href="https://github.com/kr-matthews"
          target="_blank"
          rel="noopener noreferrer"
        >
          my GitHub
        </a>
        .
      </p>

      {/* buttons for each Language (plus 'all') */}
      <GalleryFilterButtons
        filterTitle={"Languages"}
        allCats={allLangs}
        selectedCats={selectedLangs}
        setSelectedCats={setSelectedLangs}
      ></GalleryFilterButtons>

      {/* buttons for each Tag (plus 'all') */}
      <GalleryFilterButtons
        filterTitle={"Tags"}
        allCats={allTags}
        selectedCats={selectedTags}
        setSelectedCats={setSelectedTags}
      ></GalleryFilterButtons>

      {/* form for searching titles and descriptions */}
      <GallerySearchForm
        placeholder="Search titles and descriptions..."
        label="Search projects"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <section className="gallery portfolio-gallery">
        {projects
          .sort((a, b) => b.id - a.id) /* reverse chron. order */
          .filter(filterCat("tags", selectedTags))
          .filter(filterCat("languages", selectedLangs))
          .filter((proj) => {
            return (
              proj.title.toLowerCase().includes(searchText.toLowerCase()) ||
              proj.description.toLowerCase().includes(searchText.toLowerCase())
            );
          })
          .map((project) => {
            /* display the panel in the gallery */
            return (
              <ProjectPreview key={project.id} {...project}></ProjectPreview>
            );
          })}
      </section>
    </div>
  );
}

export default Portfolio;
