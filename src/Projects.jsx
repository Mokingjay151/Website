import { Link } from 'react-router-dom';

function Projects({ title, description, image, buttonText, slug }) {
  return (
    <article className="project-card">
      {image && <img src={image} alt={title} className="project-card__image" />}

      <div className="project-card__content">
        <h2>{title}</h2>
        <p>{description}</p>

        {buttonText && (
          <Link to={`/projects/${slug}`} className="project-card__button">
            {buttonText}
          </Link>
        )}
      </div>
    </article>
  );
}

export default Projects