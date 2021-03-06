import { useState } from "react";

import ArticlePreview from "../blog/ArticlePreview.js";
import CategoryFilterButtons from "../components/CategoryFilterButtons.js";
import SearchTextBox from "../components/SearchTextBox.js";

import useCategoryFilter from "../hooks/useCategoryFilter.js";

import { articles } from "../blog/articleList.js";

export default function Blog(props) {
  const allTags = [...new Set(articles.map((art) => art.tags).flat())].sort();
  const tags = useCategoryFilter(allTags);

  const [searchText, setSearchText] = useState("");

  return (
    <div className="page narrow-page">
      <h1>Blog</h1>
      <p>Articles that I've written.</p>

      {/* buttons for each Language (plus 'all') */}
      <CategoryFilterButtons
        title={"Tags"}
        categories={allTags}
        areSelected={tags.areSelected}
        clickACategoryHandler={tags.toggleOne}
        isAllSelected={tags.areAllOff}
        clickAllHandler={tags.allToSame}
      />

      {/* form for searching titles (but not contents) */}
      <SearchTextBox
        placeholder="Search titles..."
        label="Search articles"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <section className="gallery blog-gallery">
        {articles
          .filter((article) => tags.areAnySelected(article.tags))
          .filter((art) => {
            return art.title.toLowerCase().includes(searchText.toLowerCase());
            // !!! also search desciptions
          })
          .sort((a, b) => b.publishDate - a.publishDate)
          .map((article) => {
            return (
              <ArticlePreview key={article.link} {...article}></ArticlePreview>
            );
          })}
      </section>
    </div>
  );
}
