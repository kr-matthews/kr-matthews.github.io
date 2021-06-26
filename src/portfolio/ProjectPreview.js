/*
import {Link} from 'react-router-dom';
*/

function Project({title, url, image, tags, languages, year, description}) {
  return (
        <a href={url} className="item" target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <img src={image} alt={title}/>
          </div>
          <div className="info-container">
            <h2>{title}</h2>
            <div className="specs">
              {languages.length ? year + " | " + languages.join(", ") : year}
            </div>
            {tags.length && <div className="specs">{tags.join(", ")}</div>}
            <div className="description">{description}</div>
          </div>
        </a>
  );
}

export default Project;
