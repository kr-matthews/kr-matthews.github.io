import { BrowserRouter, Route } from "react-router-dom";

/* Header and Footer */
import Header from "./header-footer/Header.js";
import Footer from "./header-footer/Footer.js";

/* Nav-bar components */
import Home from "./Home.js";
import Portfolio from "./portfolio/Portfolio.js";
import Blog from "./blog/Blog.js";
import Notes from "./Notes.js";
import Books from "./Books.js";
import About from "./About.js";

/* Prortfolio & Blog gallery and entries */
import { articles } from "./blog/articleList.js";
import Article from "./blog/Article.js";

/* CSS */
import "./css/index.css";
import "./css/header.css";
import "./css/gallery.css";
import "./css/portfolio-gallery.css";
import "./css/blog-gallery.css";
import "./css/article.css";
import "./css/gallery-filter-and-search.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/" component={Home} />
      {/* should be one of these for each page listed in Header.js */}
      <Route exact path="/projects" component={Portfolio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/notes" component={Notes} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/about" component={About} />

      {/* recognize urls for each blog post */}
      {articles.map((article) => {
        const { link } = article;
        return (
          <Route
            key={link}
            exact
            path={"/blog/" + link}
            render={(props) => <Article {...article} {...props} />}
          />
        );
      })}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
