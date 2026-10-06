
import profileImg from './assets/profile.jpg';

function Header() {
  return (
    <header className="site-header">
      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Software developer • ML enthusiast</span>
          <h1>Andy Mok</h1>
          <p>
            Building polished digital experiences and machine learning projects with a focus on
            thoughtful design and real-world impact.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">View projects</a>
            <a href="#contact" className="secondary-button">Contact me</a>
          </div>
        </div>

        <div className="profile-card">
          <img src={profileImg} alt="Andy Mok portrait" />
        </div>
      </div>
    </header>
  );
}

export default Header