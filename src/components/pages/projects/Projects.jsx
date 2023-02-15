import { useMemo, useState } from "react";

import { WideContent } from "../../common/Page";
import ProjectPreview from "./ProjectPreview";
import CategoryFilterButtons from "../../common/CategoryFilterButtons";
import SearchTextBox from "../../common/SearchTextBox";
import Gallery, { GalleryItem } from "../../common/Gallery";

import useCategoryFilter from "../../../hooks/useCategoryFilter";

import { projects } from "../../../data/projects";
import Link from "../../common/Link";

const sortedProjects = projects.sort((a, b) => b.id - a.id);
const allLanguages = [
  ...new Set(projects.flatMap(({ languages }) => languages)),
].sort();
const allTags = [...new Set(projects.flatMap(({ tags }) => tags))].sort();

export default function Projects() {
  // filtering mechanisms
  const {
    areSelected: languagesAreSelected,
    areAllOff: areAllLanguagesOff,
    toggleOne: toggleLanguage,
    allToSame: allLanguagesToSame,
    areAnySelected: areAnyLanguagesSelected,
  } = useCategoryFilter(allLanguages);
  const {
    areSelected: tagsAreSelected,
    areAllOff: areAllTagsOff,
    toggleOne: toggleTag,
    allToSame: allTagsToSame,
    areAnySelected: areAnyTagsSelected,
  } = useCategoryFilter(allTags);
  const [searchText, setSearchText] = useState("");

  const filteredProjects = useMemo(
    () =>
      sortedProjects
        .filter(({ languages }) => areAnyLanguagesSelected(languages))
        .filter(({ tags }) => areAnyTagsSelected(tags))
        // !! improve filtering - use regexp
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchText.toLowerCase()) ||
            description.toLowerCase().includes(searchText.toLowerCase())
        ),
    [areAnyLanguagesSelected, areAnyTagsSelected, searchText]
  );

  return (
    <WideContent>
      <h1>Projects</h1>
      <p>
        Notable projects that I've created. Most, but not all, are programming
        projects. Many have public repositories on{" "}
        <Link href="https://github.com/kr-matthews" isExternal>
          my GitHub
        </Link>
        .
      </p>

      <CategoryFilterButtons
        title="Languages"
        categories={allLanguages}
        areSelected={languagesAreSelected}
        clickACategoryHandler={toggleLanguage}
        isAllSelected={areAllLanguagesOff}
        clickAllHandler={allLanguagesToSame}
      />

      <CategoryFilterButtons
        title="Tags"
        categories={allTags}
        areSelected={tagsAreSelected}
        clickACategoryHandler={toggleTag}
        isAllSelected={areAllTagsOff}
        clickAllHandler={allTagsToSame}
      />

      <SearchTextBox
        placeholder="Search titles and descriptions..."
        label="Search projects"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Gallery childW="400px">
        {filteredProjects.map((project) => (
          <ProjectPreview key={project.id} {...project} />
        ))}
      </Gallery>
    </WideContent>
  );
}
