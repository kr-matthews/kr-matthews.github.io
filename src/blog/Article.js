

function Article({title, startDate, publishDate, editDate, image, tags, content}) {
  return (
    <article className="page narrow-page">
      <div className="top">
        <h1>{title}</h1>
        {image && <img src={image} alt={title}/>}
        <div className="date">
          {"Published: " + publishDate.toISOString().split('T')[0]}
        </div>
        {editDate &&
          <div className="date">
            {"Last Updated: " + editDate.toISOString().split('T')[0]}
          </div>}
        </div>
      {content()}
    </article>
  );
}

export default Article;
