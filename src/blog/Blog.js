import {articles} from './articleList.js'
import ArticlePreview from './ArticlePreview.js';

function Blog(props) {
  return (
    <div className="page narrow-page">
      <h1>Blog</h1>
      <p>
        Posts I've written.
      </p>

      <section className='gallery blog-gallery'>
        {articles
          .slice()
          .sort((a, b) => b.publishDate - a.publishDate)
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
