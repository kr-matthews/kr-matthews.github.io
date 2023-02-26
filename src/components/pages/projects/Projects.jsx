import { useMemo, useState } from "react";

import { WideContent } from "../../common/Page";
import ProjectPreview from "./ProjectPreview";
import GalleryCategoryFilter from "../../common/GalleryCategoryFilter";
import GalleryTextFilter from "../../common/GalleryTextFilter";
import Gallery from "../../common/Gallery";

import useCategoryFilter from "../../../hooks/useCategoryFilter";

import { projects } from "../../../data/projects";

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
    sortedCategories: sortedLanguages,
    areSelected: languagesAreSelected,
    areAllOff: areAllLanguagesOff,
    counts: languageCounts,
    toggleOne: toggleLanguage,
    allToSame: allLanguagesToSame,
    areAnySelected: areAnyLanguagesSelected,
  } = useCategoryFilter(allLanguages, languageUsages);
  const {
    sortedCategories: sortedTags,
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

      <GalleryCategoryFilter
        title="Languages"
        categories={sortedLanguages}
        areSelected={languagesAreSelected}
        counts={languageCounts}
        totalItems={languageUsages.length}
        toggleOne={toggleLanguage}
        isAllSelected={areAllLanguagesOff}
        toggleAll={allLanguagesToSame}
      />

      <GalleryCategoryFilter
        title="Tags"
        categories={sortedTags}
        areSelected={tagsAreSelected}
        counts={tagCounts}
        totalItems={tagUsages.length}
        toggleOne={toggleTag}
        isAllSelected={areAllTagsOff}
        toggleAll={allTagsToSame}
      />

      <GalleryTextFilter
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
