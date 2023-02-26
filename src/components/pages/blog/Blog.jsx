import { useMemo, useState } from "react";

import { NarrowContent } from "../../common/Page";
import ArticlePreview from "./ArticlePreview";
import GalleryCategoryFilter from "../../common/GalleryCategoryFilter";
import GalleryTextFilter from "../../common/GalleryTextFilter";
import Gallery from "../../common/Gallery";

import useCategoryFilter from "../../../hooks/useCategoryFilter";

import { articles } from "../../../data/blog";
import { useMediaQuery } from "@chakra-ui/react";

const sortedArticles = articles.sort((a, b) => b.publishDate - a.publishDate);
const allTags = [...new Set(articles.flatMap(({ tags }) => tags))].sort();
const tagUsages = articles.map(({ tags }) => tags);

export default function Blog() {
  // filtering mechanisms
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

  const filteredArticles = useMemo(
    () =>
      sortedArticles
        .filter(({ tags }) => areAnyTagsSelected(tags))
        .filter(({ title }) =>
          // !! also search descriptions
          title.toLowerCase().includes(searchText.toLowerCase())
        ),
    [areAnyTagsSelected, searchText]
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
        placeholder="Search titles..."
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
