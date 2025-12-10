import profileImg from "../assets/profile1.jpeg";
// import profileImg from "../assets/profile1.png";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-section">
      {/* LEFT SIDE */}
      <div className="home-left">
        <h1 className="home-title">
          Hi, I'm <span className="red-name">Arjun Singh</span>
        </h1>

        <p className="home-text">
          I am a passionate <strong>Ruby on Rails</strong> & <strong>React.js Developer</strong> with over 2+ years of experience in building modern, scalable, and high-quality web applications. I love creating clean and efficient code, learning new technologies, and transforming ideas into interactive digital experiences.
        </p>

        <p className="home-text">
          My expertise includes developing full-stack web applications, implementing responsive UI designs, and optimizing application performance to deliver the best user experience.
        </p>

        <div className="home-buttons">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arjun1901214@gmail.com&su=Job%20Opportunity&body=Hi%20Arjun,%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20you%20for%20my%20project."
             target="_blank"
             rel="noopener noreferrer">
            <button className="primary-btn">Hire Me</button>
          </a>

          <a href="/arjun_resume.pdf" download="Arjun_Singh_Resume.pdf">
            <button className="outline-btn">Download CV</button>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="home-right">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
}