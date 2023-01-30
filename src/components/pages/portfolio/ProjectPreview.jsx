export default function Project({
  title = "Project",
  url = "/",
  image,
  tags = [],
  languages = [],
  year = "Unknown",
  description = "Project description.",
}) {
  // todo: make common `Link` work here
  return (
    /* target to open in new tab, rel for safety */
    <a href={url} className="item" target="_blank" rel="noopener noreferrer">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <div className="specs">
          {year}
          {languages.length > 0 && ` | ${languages.join(", ")}`}
        </div>
        {tags.length > 0 && <div className="specs">{tags.join(", ")}</div>}
        <div className="description">{description}</div>
      </div>
    </a>
  );
}
