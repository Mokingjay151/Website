import { Link, useParams } from 'react-router-dom';

function ViewProject({ projects }) {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="project-detail">
        <Link to="/" className="project-detail__back">← Back to home</Link>
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/" className="project-detail__back">← Back to home</Link>

      {project.image && <img src={project.image} alt={project.title} className="project-detail__image" />}

      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.longDescription}</p>

        {project.highlights && project.highlights.length > 0 && (
          <>
            <h3>Highlights</h3>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewProject