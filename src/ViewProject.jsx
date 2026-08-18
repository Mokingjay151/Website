
import { Link, useParams } from 'react-router-dom';

function ViewProject({ projects }) {
    const { projectId } = useParams();
    const project = projects.find((item) => item.id === projectId);

    const styles = {
        container: {
            maxWidth: '900px',
            margin: '40px auto',
            padding: '24px',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        },
        backLink: {
            display: 'inline-block',
            marginBottom: '20px',
            color: '#0070f3',
            textDecoration: 'none',
            fontWeight: '600',
        },
        image: {
            width: '100%',
            maxHeight: '320px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '20px',
        },
        title: {
            marginBottom: '12px',
        },
        description: {
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '16px',
        },
        body: {
            fontSize: '1rem',
            lineHeight: '1.7',
            marginBottom: '16px',
        },
    };

    if (!project) {
        return (
            <div style={styles.container}>
                <Link to="/" style={styles.backLink}>← Back to home</Link>
                <h2>Project not found</h2>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <Link to="/" style={styles.backLink}>← Back to home</Link>
            {project.image && <img src={project.image} alt={project.title} style={styles.image} />}
            <div>
                <h1 style={styles.title}>{project.title}</h1>
                <p style={styles.description}>{project.description}</p>
                <p style={styles.body}>{project.longDescription}</p>
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