import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import cssIcon from "../../assets/css-icon.svg";
import flutterIcon from "../../assets/flutter.svg";
import htmlIcon from "../../assets/html-icon.svg";
import ionicIcon from "../../assets/ionic.png";
import jsIcon from "../../assets/js-icon.svg";
import profileImage from "../../assets/profile_image.jpg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";


export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>I'm a programmer by profession. I'm passionate about technology and development. As a self-learner, I've been working as a mobile app developer for more than 5 years now. Creating hybrid mobile and web apps is what I do best.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>I develop websites and applications using HTML, CSS, and JavaScript/TypeScript. I am proficient in creating layouts either provided to me or referenced from various apps and websites. I continuously enhance my skills with each project I undertake.</p>
        </ScrollAnimation>
{/*         <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>I'm lazy but dedicated and work hard to pursue my dreams and achieve what I think is the best either its me or my projects.</p>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>My main skills are:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={ionicIcon} alt="Ionic" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={flutterIcon} alt="Flutter" />
          </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={vueIcon} alt="Vue" />
          </ScrollAnimation>
          </div>

        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Profile" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
