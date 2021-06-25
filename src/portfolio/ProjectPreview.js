/*
import {Link} from 'react-router-dom';
*/

function Project({title, url, image, category, languages, year, description}) {
  return (
        <a href={url} className="item" target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <img src={image} alt={title}/>
          </div>
          <div className="info-container">
            <h2>{title}</h2>
            <div className="specs">{languages ? year + " | " + languages : year}</div>
            <div className="description">{description}</div>
          </div>
        </a>
  );
}

export default Project;
