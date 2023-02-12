import "../../../css/article.css";

export default function Article({
  title = "Article Title",
  startDate,
  publishDate,
  editDate,
  image,
  tags = [],
  content = "Sorry, no content found.",
}) {
  return (
    <article className="page narrow-page">
      <div className="top">
        <h1>{title}</h1>
        {image && <img src={image} alt={title} />}
        <div className="date">
          {`Published: ${
            publishDate ? publishDate.toISOString().split("T")[0] : "Unknown"
          }`}
        </div>
        {editDate && (
          <div className="date">
            {`Last Updated: ${editDate.toISOString().split("T")[0]}`}
          </div>
        )}
      </div>
      {content}
    </article>
  );
}
