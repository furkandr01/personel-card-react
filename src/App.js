import linkedin from "./linedln.svg";
import email from "./email.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import github from "./github.svg";
import facebook from "./facebook.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img className="pp-photo" src="furkan.png" />
        <h className="name">Furkan Adar</h>
        <h className="title">Frontend Developer</h>
      </nav>
      <div className="button">
        <button onClick={() => window.location = 'mailto:frkndr01@gmail.com'} className="btn-email">
        <img className="icon" src={email} width="15px" />
        Email
      </button>
      <a href="https://www.linkedin.com/in/abdurrahman-furkan-adar-708b97235/"><button className="btn-linkedln"><img className="icon" src={linkedin} width="15px" />
        Linkedln
      </button></a>
      </div>
      <div className="main">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <footer className="footer">
      <a href="https://x.com/"><img className="footer-icon" src={twitter}/></a>
      <a href="https://www.facebook.com/"><img className="footer-icon" src={facebook}/></a>
      <a href="https://www.instagram.com/"><img className="footer-icon" src={instagram}/></a>
      <a href="https://github.com/furkandr01"><img className="footer-icon" src={github}/></a>
      </footer>
    </div>
  );
}

export default App;
