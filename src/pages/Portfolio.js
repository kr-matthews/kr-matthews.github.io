import { useState } from "react";

import ProjectPreview from "../portfolio/ProjectPreview.js";
import CategoryFilterButtons from "../components/CategoryFilterButtons.js";
import SearchTextBox from "../components/SearchTextBox.js";

import useCategoryFilter from "../hooks/useCategoryFilter.js";

import { projects } from "../portfolio/projectList.js";

export default function Portfolio(props) {
  const allTags = [...new Set(projects.map((proj) => proj.tags).flat())].sort();
  const tags = useCategoryFilter(allTags);

  const allLanguages = [
    ...new Set(projects.map((proj) => proj.languages).flat()),
  ].sort();
  const languages = useCategoryFilter(allLanguages);

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

      <CategoryFilterButtons
        title={"Languages"}
        categories={allLanguages}
        areSelected={languages.areSelected}
        clickACategoryHandler={languages.toggleOne}
        isAllSelected={languages.areAllOff}
        clickAllHandler={languages.allToSame}
      />

      <CategoryFilterButtons
        title={"Tags"}
        categories={allTags}
        areSelected={tags.areSelected}
        clickACategoryHandler={tags.toggleOne}
        isAllSelected={tags.areAllOff}
        clickAllHandler={tags.allToSame}
      />

      {/* form for searching titles and descriptions */}
      <SearchTextBox
        placeholder="Search titles and descriptions..."
        label="Search projects"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <section className="gallery portfolio-gallery">
        {projects
          .filter((project) => tags.areAnySelected(project.tags))
          .filter((project) => languages.areAnySelected(project.languages))
          .filter((proj) => {
            return (
              proj.title.toLowerCase().includes(searchText.toLowerCase()) ||
              proj.description.toLowerCase().includes(searchText.toLowerCase())
            );
          })
          .sort((a, b) => b.id - a.id) /* reverse chron. order */
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
