import './App.css'
import { Routes, Route, Link } from 'react-router-dom';

import Header from './Header.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import ViewProject from './ViewProject.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import cifar10Img from './assets/cifar10.png'
import nbaImg from './assets/nba.png'
import mastermindImg from './assets/mastermind.jpg'

const projects = [
  {
    id: 'cifar10-animal-classification',
    title: 'CIFAR10 Animal Classification',
    description: 'A project to classify animals in the CIFAR10 dataset using machine learning.',
    longDescription:
      'This project trains a convolutional neural network to recognize animal classes from the CIFAR10 dataset. It focuses on preprocessing, model tuning, and evaluating accuracy, precision, and recall across multiple categories.',
    image: cifar10Img,
    highlights: ['Python-based model training', 'Image preprocessing pipeline', 'Performance evaluation metrics'],
  },
  {
    id: 'nba-championship-predictor',
    title: 'NBA Championship Predictor',
    description: 'A project that uses logistic regression to predict NBA game outcomes and simulate the playoffs and championship.',
    longDescription:
      'This predictor uses historical game data and statistical features to estimate the probability of winning individual matchups. The project then simulates playoff brackets and estimates the most likely champion.',
    image: nbaImg,
    highlights: ['Logistic regression modeling', 'Playoff simulation', 'Probability-based predictions'],
  },
  {
    id: 'mastermind-game',
    title: 'Mastermind Game',
    description: 'A virtual version of the classic board game Mastermind, where players try to guess a secret code.',
    longDescription:
      'The game recreates the logic puzzle experience with a secret code, feedback clues, and a turn-based guessing flow. It emphasizes clear UI design, game state handling, and replayability.',
    image: mastermindImg,
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

      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <nav className="app-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:projectId" element={<ViewProject projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App
