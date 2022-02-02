import { useState } from "react";
import { articles } from "./articleList.js";
import ArticlePreview from "./ArticlePreview.js";
import GalleryFilterButtons, { filterCat } from "./../CategoryFilterButtons.js";
import GallerySearchForm from "./../gallery-search.js";

function Blog(props) {
  /* constants */
  /* selected useStates are not initialized, which is ok because
    'all' applies if 'true' is not present (and 'true' isn't in empty) */
  const allTags = [
    ...new Set(
      articles
        .slice()
        .map((art) => art.tags)
        .flat()
    ),
  ].sort();
  const [selectedTags, setSelectedTags] = useState({});
  const [searchText, setSearchText] = useState("");

  return (
    <div className="page narrow-page">
      <h1>Blog</h1>
      <p>Articles that I've written.</p>

      {/* buttons for each Language (plus 'all') */}
      <GalleryFilterButtons
        filterTitle={"Tags"}
        allCats={allTags}
        selectedCats={selectedTags}
        setSelectedCats={setSelectedTags}
      ></GalleryFilterButtons>

      {/* form for searching titles (but not contents) */}
      <GallerySearchForm
        placeholder="Search titles..."
        label="Search articles"
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <section className="gallery blog-gallery">
        {articles
          .sort((a, b) => b.publishDate - a.publishDate)
          .filter(filterCat("tags", selectedTags))
          .filter((art) => {
            return art.title.toLowerCase().includes(searchText.toLowerCase());
          })
          .map((article) => {
            return (
              <ArticlePreview key={article.link} {...article}></ArticlePreview>
            );
          })}
      </section>
    </div>
  );
}

export default Blog;
