import { Link } from "react-router-dom";
import notepad from "../../../assets/notepad.png";

export default function ArticlePreview({
  link = "",
  title = "Article",
  // startDate,
  publishDate,
  // editDate,
  image = notepad,
  // tags = [],
  preview = "Click to read.",
}) {
  return (
    <Link to={link} className="item">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <div className="specs">
          {publishDate
            ? publishDate.toISOString().split("T")[0]
            : "Unknown Date"}
        </div>
        <div className="preview">{preview}</div>
      </div>
    </Link>
  );
}
