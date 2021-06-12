/*
import {Link} from 'react-router-dom';
*/

function Project({title, link, url, image, category, languages, year, description}) {
  return (
        <a href={ url || "projects/" + link } className="item">
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
