import { useState } from 'react';
import { articles } from './articleList.js'
import ArticlePreview from './ArticlePreview.js';
import CategoryFilterButtons, { filterCat } from './../category-filters.js'

function Blog(props) {

  /* constants */
  /* useStates are not initialized, which is ok because
    'all' applies if 'true' is not present (and 'true' isn't in empty) */
  const allTags =
    [...new Set(articles.slice().map((art) => art.tags).flat())].sort();
  const [selectedTags, setSelectedTags] = useState({});

  return (
    <div className="page narrow-page">
      <h1>Blog</h1>
      <p>
        Posts I've written.
      </p>

      { /* buttons for each Language (plus 'all') */ }
      <CategoryFilterButtons
        filterTitle={"Tags"}
        allCats={allTags}
        selectedCats={selectedTags}
        setSelectedCats={setSelectedTags}
      >
      </CategoryFilterButtons>

      <section className='gallery blog-gallery'>
        {articles
          .sort((a, b) => b.publishDate - a.publishDate)
          .filter(filterCat('tags', selectedTags))
          .map((article) => {
            return (
              <ArticlePreview key={article.link} {...article}></ArticlePreview>
            )
          })
        }
      </section>
    </div>
  );
}

export default Blog;
