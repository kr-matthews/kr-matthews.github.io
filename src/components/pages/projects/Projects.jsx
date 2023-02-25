import { useMemo, useState } from "react";

import { WideContent } from "../../common/Page";
import ProjectPreview from "./ProjectPreview";
import CategoryFilterButtons from "../../common/CategoryFilterButtons";
import SearchTextBox from "../../common/SearchTextBox";
import Gallery from "../../common/Gallery";

import useCategoryFilter from "../../../hooks/useCategoryFilter";

import { projects } from "../../../data/projects";
import Link from "../../common/Link";

const sortedProjects = projects.sort(
  (a, b) => b.year - a.year || b.yearOrder - a.yearOrder
);
const allLanguages = [
  ...new Set(projects.flatMap(({ languages }) => languages)),
].sort();
const languageUsages = projects.map(({ languages }) => languages);
const allTags = [...new Set(projects.flatMap(({ tags }) => tags))].sort();
const tagUsages = projects.map(({ tags }) => tags);

export default function Projects() {
  // filtering mechanisms
  const {
    areSelected: languagesAreSelected,
    areAllOff: areAllLanguagesOff,
    counts: languageCounts,
    toggleOne: toggleLanguage,
    allToSame: allLanguagesToSame,
    areAnySelected: areAnyLanguagesSelected,
  } = useCategoryFilter(allLanguages, languageUsages);
  const {
    areSelected: tagsAreSelected,
    areAllOff: areAllTagsOff,
    counts: tagCounts,
    toggleOne: toggleTag,
    allToSame: allTagsToSame,
    areAnySelected: areAnyTagsSelected,
  } = useCategoryFilter(allTags, tagUsages);
  const [searchText, setSearchText] = useState("");

  const filteredProjects = useMemo(
    () =>
      sortedProjects
        .filter(({ languages }) => areAnyLanguagesSelected(languages))
        .filter(({ tags }) => areAnyTagsSelected(tags))
        // !!! improve filtering - use regexp
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchText.toLowerCase()) ||
            description.toLowerCase().includes(searchText.toLowerCase())
        ),
    [areAnyLanguagesSelected, areAnyTagsSelected, searchText]
  );

  return (
    <WideContent withAlwaysScroll>
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
        counts={languageCounts}
        toggleOne={toggleLanguage}
        isAllSelected={areAllLanguagesOff}
        toggleAll={allLanguagesToSame}
      />

      <CategoryFilterButtons
        title="Tags"
        categories={allTags}
        areSelected={tagsAreSelected}
        counts={tagCounts}
        toggleOne={toggleTag}
        isAllSelected={areAllTagsOff}
        toggleAll={allTagsToSame}
      />

      <SearchTextBox
        placeholder="Search titles and descriptions..."
        label="Search projects"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Gallery childW="390px">
        {filteredProjects.map((project) => (
          <ProjectPreview key={project.id} {...project} />
        ))}
      </Gallery>
    </WideContent>
  );
}
