import "./App.css";
import profileImg from "./astronaut.png";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

// Step 1: Header/Navigation
function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          Talha Daud
        </a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

// Step 2: Hero Section
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I am</p>
          <h1 className="name">Talha Daud</h1>
          <h2 className="title">Frontend Developer</h2>
          <p className="tagline">
            I build clean, responsive, and user-friendly web applications with
            React.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Talha Daud" />
        </div>
      </div>
    </section>
  );
}

// Step 3: About Section
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImg} alt="Talha Daud" />
          </div>
          <div className="about-text">
            <p>
              Hi! I'm <span className="highlight">Talha Daud</span>, a
              passionate Frontend Developer based in Pakistan. I specialize in
              building modern, responsive web applications using React and
              JavaScript.
            </p>
            <p>
              I love turning complex problems into simple, beautiful, and
              intuitive designs. When I'm not coding, you'll find me learning
              new technologies and exploring the latest trends in web
              development.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Talha Daud</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Pakistan</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">talha@example.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value available">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
