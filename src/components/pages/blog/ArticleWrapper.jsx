import React from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";
import { articles } from "../../../data/blog";

function getArticle(shortName) {
  return articles.find((article) => article.shortName === shortName);
}

export default function ArticleWrapper() {
  const params = useParams();
  const shortName = params.articleShortName ?? "";
  const article = getArticle(shortName);

  // !! not found UI
  if (!article) {
    return "article not found";
  }

  return <Article {...article} />;
}
