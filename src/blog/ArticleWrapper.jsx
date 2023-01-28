import React from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";
import { articles } from "./articleList";

function getArticle(id) {
  // todo: replace `link` property with `id` property
  return articles.find((article) => article.link === id);
}

export default function ArticleWrapper() {
  const params = useParams();
  const articleId = params.articleId ?? "";
  // todo: get it via a 'fake' query
  const article = getArticle(articleId);

  return <Article {...article} />;
}
