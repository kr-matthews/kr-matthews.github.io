import React from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";
import { articles } from "../../../data/blog";
import { NarrowContent } from "../../common/Page";
import ArticleNotFound from "./ArticleNotFound";

function getArticleByShortName(shortName) {
  return articles.find((article) => article.shortName === shortName);
}

export default function ArticleWrapper() {
  const params = useParams();
  const shortName = params.articleShortName ?? "";
  const article = getArticleByShortName(shortName);

  return (
    <NarrowContent>
      {article ? <Article {...article} /> : <ArticleNotFound />}
    </NarrowContent>
  );
}
