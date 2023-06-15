import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { social } from "./navigations.jsx";
import { TypeAnimation } from "react-type-animation";
import { Fade, Zoom } from "react-reveal";
import img from "./assets/demo.jpg";

import img_1 from "./assets/chris-panas-IdNOTjPeHrE-unsplash.jpg";
import img_2 from "./assets/raghav-verma-KusC_XP46Ds-unsplash.jpg";
import img_3 from "./assets/mk-s-0ESjL-Nw22Y-unsplash.jpg";
import img_4 from "./assets/tezos-rN1y-_EV8kE-unsplash.jpg";
import img_5 from "./assets/windows-JW-T2BH5k5E-unsplash.jpg";
import img_6 from "./assets/pawel-czerwinski-uJBkaPZISIU-unsplash.jpg";

import {
  RiArrowDownLine,
  RiArrowUpLine,
  RiCodeLine,
  RiLoginCircleLine,
  RiPaintLine,
  RiSearch2Line,
} from "react-icons/ri";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useEffect } from "react";
function App() {
  useEffect(() => {
    let menuIcon = document.querySelector("#menu-icon-open");
    let CloseIcon = document.querySelector("#menu-icon-close");
    let navbar = document.querySelector("nav");

    menuIcon.addEventListener("click", () => {
      // alert("hi");
      menuIcon.classList.add("close-menu");
      CloseIcon.classList.add("show-menu");
      navbar.classList.add("active");
    });
    CloseIcon.addEventListener("click", () => {
      // alert("hi");
      menuIcon.classList.remove("close-menu");
      CloseIcon.classList.remove("show-menu");
      navbar.classList.remove("active");
    });
    let secctions = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
      secctions.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector("header nav a[href*=" + id + "]")
              .classList.add("active");
            menuIcon.classList.remove("close-menu");
            CloseIcon.classList.remove("show-menu");
            navbar.classList.remove("active");
          });
        }
      });
    };

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    setTimeout(() => {
      let containers = document.querySelectorAll(".portfolio-box");
      // let random = Math.floor(Math.random() * containers.length);
      setInterval(() => {
        let random = Math.floor(Math.random() * containers.length);
        containers[random].style.order = random;
      }, 10000);
      // console.log(random);
    }, 5000);
  });

  return (
    <div className="__container-wrapper">
      <NavBar />
      <section id="home" className="__home">
        <Fade top>
          <div className="content">
            <h3>Hello there!</h3>
            <Fade left>
              <h1>I&apos;m Adediran Jehoshaphat</h1>
            </Fade>
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
              <Fade top>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                praesentium aspernatur doloribus sed magnam illum culpa eaque,
                ipsa suscipit optio!
              </Fade>
            </p>
            <div className="social-media">
              {social.map((s, i) => (
                <a key={i}>{s.icon}</a>
              ))}
            </div>
            <Fade left>
              <a href="#" className="download-btn">
                Download CV
              </a>
            </Fade>

            <div className="scroll-down">
              <Zoom top>
                scroll down{" "}
                <a href="#about">
                  <RiArrowDownLine fill="white" size={18} />
                </a>
              </Zoom>
            </div>
          </div>
        </Fade>
        <Zoom>
          <div className="img-cont">
            <img src={img} alt="demo" />
          </div>
        </Zoom>
      </section>

      <section id="about" className="__about">
        <div className="about-image">
          <Fade left>
            <img src={img} alt="demo" />
          </Fade>
        </div>
        <div className="about-content">
          <Fade top>
            <h2 className="heading">
              About <span>Me</span>
            </h2>
          </Fade>
          <Fade top>
            <h3>
              I&apos;m Tee, and i&apos;d love to work on your next project
            </h3>
            <p>
              I love working with others to create beautiful designs solutions.
              I have designed everything from brand illustration to complete
              mobile and web apps. i&apos;m also handy with camera! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vitae, amet.
            </p>
            <a href="#" className="btn">
              Free Consultation
            </a>
          </Fade>
        </div>
      </section>

      <section className="__services" id="services">
        <Fade top>
          <h2 className="heading">
            Our <span>Services</span>
          </h2>
        </Fade>

        <div className="services-container">
          <Fade right>
            <div className="services-box">
              <RiCodeLine size={"7rem"} fill="#0ef" />
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nobis eum ipsa. Eum harum dolor nam laboriosam ab libero
                aliquam.
              </p>
              <Fade bottom>
                <a href="#" className="btn">
                  Read More
                </a>
              </Fade>
            </div>
            <div className="services-box">
              <RiPaintLine size={"7rem"} fill="#0ef" />
              <h3>UI/UX Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nobis eum ipsa. Eum harum dolor nam laboriosam ab libero
                aliquam.
              </p>
              <Fade bottom>
                <a href="#" className="btn">
                  Read More
                </a>
              </Fade>
            </div>
            <div className="services-box">
              <RiSearch2Line size={"7rem"} fill="#0ef" />
              <h3>Data Algorithmn</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nobis eum ipsa. Eum harum dolor nam laboriosam ab libero
                aliquam.
              </p>
              <Fade bottom>
                <a href="#" className="btn">
                  Read More
                </a>
              </Fade>
            </div>
          </Fade>
        </div>
      </section>

      <section className="__portfolio" id="portfolio">
        <Fade top>
          <h2 className="heading">
            Latest <span>Project</span>
          </h2>
        </Fade>
        <Fade top>
          <div className="portfolio-container">
            <div className="portfolio-box">
              <LazyLoadImage src={img_1} alt="" />
              <div className="hidden-layers">
                <RiLoginCircleLine size={30} fill="#0ef" />

                <h3>Landing page</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Porro, eius?
                </p>
                <a href="#" className="visit">
                  visit
                </a>
              </div>
            </div>
            <div className="portfolio-box">
              <div className="box-2-box">
                <div className="box-2-box-1">
                  <img src={img_3} alt="" />
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
                  <LazyLoadImage src={img_4} alt="" />
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
                <LazyLoadImage src={img_2} alt="" />
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
                <LazyLoadImage src={img_5} alt="" />
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
                <LazyLoadImage src={img_6} alt="" />
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
        </Fade>
      </section>

      <section className="__contact" id="contact">
        <Fade top>
          <h2 className="heading">
            Contact <span>Me!</span>
          </h2>
        </Fade>
        <Fade left>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Mobile Number" />
              <input type="text" placeholder="Email subject" />
            </div>
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </form>
        </Fade>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Teetech | All Rights Reserved.</p>
        </div>
        <div className="footer-icon">
          <a href="#home">
            {" "}
            <RiArrowUpLine />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
