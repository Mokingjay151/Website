import Header from './Header.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import Food from './Food.jsx'
import Projects from './Projects.jsx'
import ViewProject from './ViewProject.jsx'
import Contact from './Contact.jsx'

const projects = [
  {
    id: 'cifar10-animal-classification',
    title: 'CIFAR10 Animal Classification',
    description: 'A project to classify animals in the CIFAR10 dataset using machine learning.',
    longDescription:
      'This project trains a convolutional neural network to recognize animal classes from the CIFAR10 dataset. It focuses on preprocessing, model tuning, and evaluating accuracy, precision, and recall across multiple categories.',
    image: heroImg,
    highlights: ['Python-based model training', 'Image preprocessing pipeline', 'Performance evaluation metrics'],
  },
  {
    id: 'nba-championship-predictor',
    title: 'NBA Championship Predictor',
    description: 'A project that uses logistic regression to predict NBA game outcomes and simulate the playoffs and championship.',
    longDescription:
      'This predictor uses historical game data and statistical features to estimate the probability of winning individual matchups. The project then simulates playoff brackets and estimates the most likely champion.',
    image: heroImg,
    highlights: ['Logistic regression modeling', 'Playoff simulation', 'Probability-based predictions'],
  },
  {
    id: 'mastermind-game',
    title: 'Mastermind Game',
    description: 'A virtual version of the classic board game Mastermind, where players try to guess a secret code.',
    longDescription:
      'The game recreates the logic puzzle experience with a secret code, feedback clues, and a turn-based guessing flow. It emphasizes clear UI design, game state handling, and replayability.',
    image: heroImg,
    highlights: ['Interactive game loop', 'Hint and feedback system', 'Responsive gameplay UI'],
  },
];

function Home() {

  return (
      <div className="home">
        <Header />
        <About />
        <div className="projects-grid" id="projects">
          {projects.map((project) => (
            <Projects
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              buttonText="View Project"
              slug={project.id}
            />
          ))}
        </div>

        <Food></Food>
        <Contact></Contact>
        <Footer></Footer>
      </div>
  );
}

export default Home