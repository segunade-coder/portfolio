import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { social } from "./navigations.jsx";
import { TypeAnimation } from "react-type-animation";
function App() {
  return (
    <div className="__container-wrapper">
      <NavBar />
      <section id="home" className="__home">
        <div className="content">
          <h3>Hello there!</h3>
          <h1>I&apos;m Adediran Jehoshaphat</h1>
          <h3>
            And I&apos;m a{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Designer",
              ]}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              repeat={Infinity}
            />{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            praesentium aspernatur doloribus sed magnam illum culpa eaque, ipsa
            suscipit optio!
          </p>
          <div className="social-media">
            {social.map((s, i) => (
              <a key={i}>{s.icon}</a>
            ))}
          </div>
          <a href="#" className="download-btn">
            Download CV
          </a>
        </div>
        <div className="img-cont"></div>
      </section>
    </div>
  );
}

export default App;
