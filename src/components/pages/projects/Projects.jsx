import { useMemo, useState } from "react";

import { WideContent } from "../../common/Page";
import ProjectPreview from "./ProjectPreview";
import GalleryCategoryFilter from "../../common/GalleryCategoryFilter";
import GalleryTextFilter from "../../common/GalleryTextFilter";
import Gallery from "../../common/Gallery";

import useCategoryFilter from "../../../hooks/useCategoryFilter";

import { projects } from "../../../data/projects";

const sortedProjects = [...projects].sort(
  (a, b) => b.year - a.year || b.yearOrder - a.yearOrder
);
const allYears = [
  ...new Set(sortedProjects.flatMap(({ year }) => year)),
].sort();
const yearUsages = sortedProjects.map(({ year }) => [year]);
const allLanguages = [
  ...new Set(sortedProjects.flatMap(({ languages }) => languages)),
].sort();
const languageUsages = sortedProjects.map(({ languages }) => languages);
const allTags = [...new Set(sortedProjects.flatMap(({ tags }) => tags))].sort();
const tagUsages = sortedProjects.map(({ tags }) => tags);

export default function Projects() {
  // filtering mechanisms
  const {
    orderedCategories: orderedYears,
    orderedCounts: yearCounts,
    areSelected: yearsAreSelected,
    areAllOff: areAllYearsOff,
    toggleOne: toggleYear,
    allToSame: allYearsToSame,
    areAnySelected: areAnyYearsSelected,
  } = useCategoryFilter(allYears, yearUsages, false);
  const {
    orderedCategories: orderedLanguages,
    orderedCounts: languageCounts,
    areSelected: languagesAreSelected,
    areAllOff: areAllLanguagesOff,
    toggleOne: toggleLanguage,
    allToSame: allLanguagesToSame,
    areAnySelected: areAnyLanguagesSelected,
  } = useCategoryFilter(allLanguages, languageUsages, true);
  const {
    orderedCategories: orderedTags,
    orderedCounts: tagCounts,
    areSelected: tagsAreSelected,
    areAllOff: areAllTagsOff,
    toggleOne: toggleTag,
    allToSame: allTagsToSame,
    areAnySelected: areAnyTagsSelected,
  } = useCategoryFilter(allTags, tagUsages, true);
  const [searchText, setSearchText] = useState("");

  const filteredProjects = useMemo(
    () =>
      sortedProjects
        .filter(({ year }) => areAnyYearsSelected([year]))
        .filter(({ languages }) => areAnyLanguagesSelected(languages))
        .filter(({ tags }) => areAnyTagsSelected(tags))
        // !!! improve filtering - use regexp
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchText.toLowerCase()) ||
            description.toLowerCase().includes(searchText.toLowerCase())
        ),
    [
      areAnyYearsSelected,
      areAnyLanguagesSelected,
      areAnyTagsSelected,
      searchText,
    ]
  );

  return (
    <WideContent withAlwaysScroll>
      <h1>Projects</h1>

      <GalleryCategoryFilter
        title="Years"
        categories={orderedYears}
        areSelected={yearsAreSelected}
        counts={yearCounts}
        totalItems={yearUsages.length}
        toggleOne={toggleYear}
        isAllSelected={areAllYearsOff}
        toggleAll={allYearsToSame}
      />

      <GalleryCategoryFilter
        title="Languages"
        categories={orderedLanguages}
        areSelected={languagesAreSelected}
        counts={languageCounts}
        totalItems={languageUsages.length}
        toggleOne={toggleLanguage}
        isAllSelected={areAllLanguagesOff}
        toggleAll={allLanguagesToSame}
      />

      <GalleryCategoryFilter
        title="Tags"
        categories={orderedTags}
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
