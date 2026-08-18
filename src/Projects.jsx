
import { Link } from 'react-router-dom';

function Projects({ title, description, image, buttonText, slug }) {
    const styles = {
        card: {
            width: '100%',
            height: '105%',
            position: 'relative',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            overflow: 'hidden',
            fontFamily: 'Arial, sans-serif',
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
        },
        image: {
            width: '100%',
            height: '180px',
            objectFit: 'cover',
        },
        content: {
            padding: '16px',
        },
        title: {
            fontSize: '1.5rem',
            margin: '0 0 8px 0',
            color: '#333',
        },
        description: {
            fontSize: '1rem',
            color: '#666',
            lineHeight: '1.5',
            margin: '0 0 16px 0',
        },
        button: {
            backgroundColor: '#0070f3',
            position: 'absolute',
            bottom: '5px',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            width: '100%',
            transition: 'background-color 0.2s',
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center',
            boxSizing: 'border-box',
        },
    };

    return (
        <div className="projects" style={styles.card}>
            {image && <img src={image} alt={title} style={styles.image} />}
            <div style={styles.content}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.description}>{description}</p>
            </div>
            {buttonText && (
                <Link to={`/projects/${slug}`} style={styles.button}>
                    {buttonText}
                </Link>
            )}
        </div>
    );
}

export default Projects