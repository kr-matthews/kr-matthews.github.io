import {Link} from 'react-router-dom';
import notepad from './../images/notepad.png'

function ArticlePreview({link, title, startDate, publishDate, editDate, image, tags, content}) {
  return (
    <Link to={"blog/" + link} className="item">
      <div className="image-container">
        <img src={image || notepad} alt={title}/>
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <div className="specs">{publishDate.toISOString().split('T')[0]}</div>
        <div className="preview">{content()}</div>
      </div>
    </Link>
  );
}

export default ArticlePreview;