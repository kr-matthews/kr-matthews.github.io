import { useMemo, useState } from "react";

import { NarrowContent } from "../../common/Page";
import ArticlePreview from "./ArticlePreview";
import CategoryFilterButtons from "../../common/CategoryFilterButtons";
import SearchTextBox from "../../common/SearchTextBox";
import Gallery from "../../common/Gallery";

import useCategoryFilter from "../../../hooks/useCategoryFilter";

import { articles } from "../../../data/blog";

const sortedArticles = articles.sort((a, b) => b.publishDate - a.publishDate);
const allTags = [...new Set(articles.flatMap(({ tags }) => tags))].sort();

export default function Blog() {
  // filtering mechanisms
  const {
    areSelected: tagsAreSelected,
    areAllOff: areAllTagsOff,
    toggleOne: toggleTag,
    allToSame: allTagsToSame,
    areAnySelected: areAnyTagsSelected,
  } = useCategoryFilter(allTags);
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

  return (
    <NarrowContent>
      <h1>Blog</h1>

      <CategoryFilterButtons
        title="Tags"
        categories={allTags}
        areSelected={tagsAreSelected}
        clickACategoryHandler={toggleTag}
        isAllSelected={areAllTagsOff}
        clickAllHandler={allTagsToSame}
      />

      <SearchTextBox
        placeholder="Search titles..."
        label="Search articles"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <Gallery childW="900px">
        {filteredArticles.map((article) => (
          <ArticlePreview key={article.link} {...article} />
        ))}
      </Gallery>
    </NarrowContent>
  );
}
