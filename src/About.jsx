import doobooImg from './assets/dooboo.jpg';
import doobyImg from './assets/dooby.jpg';
import iveImg from './assets/ive.jpg';
import lesserafimImg from './assets/lesserafim.jpg';

function About() {
  return (
    <section className="about" id="about_me">
      <div className="section-heading">
        <span className="eyebrow">About</span>
        <h2>Developer with a creative spark</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            Hello my name is Andy! I’m 22 years old and a recent graduate from York University.
            This is my portfolio displaying some of the projects I have worked on. I am currently
            looking for a full-time position in the field of software development.
          </p>
          <p>
            I particularly enjoy working with machine learning models and developing web
            applications. I am always eager to learn new technologies and improve my skills.
          </p>
          <p>
            Some personal interests of mine include playing video games, watching movies
            (especially horror movies), working out, playing guitar, and watching basketball. I
            have a pet dog named Dooboo. She’s a white jindo and is very cute.
          </p>
          <p>
            I also really like k-pop music. My favourite groups are IVE and LE SSERAFIM, and I
            enjoy reading the Bible and learning more about God. I served on a campus ministry
            called Kingdom Come and love building community through fellowship and outreach.
          </p>
        </div>

        <div className="about-gallery">
          <div className="photo-card">
            <img src={doobooImg} alt="Dooboo the dog" />
          </div>
          <div className="photo-card">
            <img src={doobyImg} alt="Andy and Dooboo" />
          </div>
          <div className="photo-card">
            <img src={iveImg} alt="IVE group" />
          </div>
          <div className="photo-card">
            <img src={lesserafimImg} alt="LE SSERAFIM group" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About