import { useMemo, useState } from "react";

import { NarrowContent } from "../../common/Page";
import ArticlePreview from "./ArticlePreview";
import GalleryCategoryFilter from "../../common/GalleryCategoryFilter";
import GalleryTextFilter from "../../common/GalleryTextFilter";
import Gallery from "../../common/Gallery";

import useCategoryFilter from "../../../hooks/useCategoryFilter";

import { articles } from "../../../data/blog";
import { useMediaQuery } from "@chakra-ui/react";

const sortedArticles = [...articles].sort(
  (a, b) => b.publishDate - a.publishDate
);
const allYears = [
  ...new Set(
    sortedArticles.flatMap(({ publishDate }) => publishDate.getFullYear())
  ),
].sort();
const yearUsages = sortedArticles.map(({ publishDate }) => [
  publishDate.getFullYear(),
]);
const allTags = [...new Set(sortedArticles.flatMap(({ tags }) => tags))].sort();
const tagUsages = sortedArticles.map(({ tags }) => tags);

export default function Blog() {
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
    orderedCategories: orderedTags,
    orderedCounts: tagCounts,
    areSelected: tagsAreSelected,
    areAllOff: areAllTagsOff,
    toggleOne: toggleTag,
    allToSame: allTagsToSame,
    areAnySelected: areAnyTagsSelected,
  } = useCategoryFilter(allTags, tagUsages, true);
  const [searchText, setSearchText] = useState("");

  const filteredArticles = useMemo(
    () =>
      sortedArticles
        .filter(({ publishDate }) =>
          areAnyYearsSelected([publishDate.getFullYear()])
        )
        .filter(({ tags }) => areAnyTagsSelected(tags))
        .filter(
          ({ title, preview }) =>
            title.toLowerCase().includes(searchText.toLowerCase()) ||
            preview.toLowerCase().includes(searchText.toLowerCase())
        ),
    [areAnyYearsSelected, areAnyTagsSelected, searchText]
  );

  const [isNarrow, isNarrower, isNarrowest] = useMediaQuery([
    "(max-width: 1040px)",
    "(max-width: 940px)",
    "(max-width: 840px)",
  ]);
  const childW = isNarrowest
    ? "600px"
    : isNarrower
    ? "700px"
    : isNarrow
    ? "800px"
    : "900px";

  return (
    <NarrowContent withAlwaysScroll>
      <h1>Blog</h1>

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
        label="Search articles"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Gallery childW={childW}>
        {filteredArticles.map((article) => (
          <ArticlePreview key={article.id} {...article} />
        ))}
      </Gallery>
    </NarrowContent>
  );
}
