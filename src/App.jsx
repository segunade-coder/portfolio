import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { social } from "./navigations.jsx";
import { TypeAnimation } from "react-type-animation";
import img from "./assets/demo.jpg";
import img_1 from "./assets/chris-panas-IdNOTjPeHrE-unsplash.jpg";
import img_2 from "./assets/raghav-verma-KusC_XP46Ds-unsplash.jpg";
import img_3 from "./assets/mk-s-0ESjL-Nw22Y-unsplash.jpg";
import img_4 from "./assets/tezos-rN1y-_EV8kE-unsplash.jpg";
import img_5 from "./assets/windows-JW-T2BH5k5E-unsplash.jpg";
import img_6 from "./assets/pawel-czerwinski-uJBkaPZISIU-unsplash.jpg";

import {
  RiArrowDownLine,
  RiCodeLine,
  RiLoginCircleLine,
  RiPaintLine,
  RiSearch2Line,
} from "react-icons/ri";
// import { useEffect } from "react";
function App() {
  setTimeout(() => {
    let containers = document.querySelectorAll(".portfolio-box");
    // let random = Math.floor(Math.random() * containers.length);
    setInterval(() => {
      let random = Math.floor(Math.random() * containers.length);
      containers[random].style.order = random;
    }, 10000);
    // console.log(random);
  }, 5000);
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

          <div className="scroll-down">
            scroll down{" "}
            <a href="#about">
              <RiArrowDownLine fill="white" size={18} />
            </a>
          </div>
        </div>
        <div className="img-cont">
          <img src={img} alt="demo" />
        </div>
      </section>

      <section id="about" className="__about">
        <div className="about-image">
          <img src={img} alt="demo" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>I&apos;m Tee, and i&apos;d love to work on your next project</h3>
          <p>
            I love working with others to create beautiful designs solutions. I
            have designed everything from brand illustration to complete mobile
            and web apps. i&apos;m also handy with camera!
          </p>
          <a href="#" className="btn">
            Free Consultation
          </a>
        </div>
      </section>

      <section className="__services" id="services">
        <h2 className="heading">
          Our <span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <RiCodeLine size={"7rem"} fill="#0ef" />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              nobis eum ipsa. Eum harum dolor nam laboriosam ab libero aliquam.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <RiPaintLine size={"7rem"} fill="#0ef" />
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              nobis eum ipsa. Eum harum dolor nam laboriosam ab libero aliquam.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <RiSearch2Line size={"7rem"} fill="#0ef" />
            <h3>Data Algorithmn</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              nobis eum ipsa. Eum harum dolor nam laboriosam ab libero aliquam.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="__portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            {/* <img src={img_1} alt="" /> */}
            <div className="hidden-layers">
              <RiLoginCircleLine size={30} fill="#0ef" />

              <h3>Landing page</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                eius?
              </p>
              <a href="#" className="visit">
                visit
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <div className="box-2-box">
              <div className="box-2-box-1">
                {/* <img src={img_3} alt="" /> */}
                <div className="hidden-layers">
                  <RiLoginCircleLine size={20} fill="#0ef" />

                  <h3>Portfolio</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro, eius?
                  </p>
                  <a href="#home" className="visit">
                    visit
                  </a>
                </div>
              </div>
              <div className="box-2-box-1">
                {/* <img src={img_4} alt="" /> */}
                <div className="hidden-layers">
                  <RiLoginCircleLine size={20} fill="#0ef" />

                  <h3>Social App</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro, eius?
                  </p>
                  <a href="#" className="visit">
                    visit
                  </a>
                </div>
              </div>
            </div>
            <div className="box-2-box">
              {/* <img src={img_2} alt="" /> */}
              <div className="hidden-layers">
                <RiLoginCircleLine size={20} fill="#0ef" />

                <h3>Adobe Illustration</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro, eius?
                </p>
                <a href="#" className="visit">
                  visit
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio-box">
            <div className="box-3-box">
              {/* <img src={img_5} alt="" /> */}
              <div className="hidden-layers">
                <RiLoginCircleLine size={20} fill="#0ef" />

                <h3>Mobile Web3</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro, eius?
                </p>
                <a href="#" className="visit">
                  visit
                </a>
              </div>
            </div>
            <div className="box-3-box">
              {/* <img src={img_6} alt="" /> */}
              <div className="hidden-layers">
                <RiLoginCircleLine size={20} fill="#0ef" />

                <h3>E Commerce Site</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro, eius?
                </p>
                <a href="#" className="visit">
                  visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
