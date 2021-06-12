import {projects} from './projectList.js'
import ProjectPreview from './ProjectPreview.js';

function Portfolio(props) {
  return (
    <div className="page">
      <h1>Projects</h1>
      <p>
        Coding projects I've done, as well as some puzzle-solving
        methods and frameworks.
      </p>
      <section className='gallery portfolio-gallery'>
        {projects.slice().reverse().map((project) => {
          return <ProjectPreview key={project.id} {...project}></ProjectPreview>;
        })}
      </section>
    </div>
  );
}

export default Portfolio;
