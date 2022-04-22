import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/dev-akaash/ScrollableContactList" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Scrollable Contacts List</h3>
            <p>
              A simple working model of the contact list where you can scroll on the side of the screen to jump to the specific alphabet and it's corresponding contacts.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Ionic</li>
              <li>Angular & TS</li>
              <li>SCSS</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/dev-akaash/Ramayan" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              {/* <a href="https://github-search-blond.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Valmiki Ramayan</h3>
              <p>
                A stand alone app where user can read the ramayan without the need of internet connection. They can also share and favourite their choice of slok and its meaning.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ionic</li>
                <li>Angular & TS</li>
                <li>SCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://apps.apple.com/in/app/innerpsych/id1612204398" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Apple Play Store" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Inner Psych - Canberra</h3>
              <p>
                A meditation and mental health app.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>SCSS</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://play.google.com/store/apps/details?id=com.anm.warranty" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Google App Store" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Warranty Management</h3>
              <p>
                A warranty management app for vendors to scan and keep records of the products that they sell or replace (in warranty).
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ionic</li>
                <li>Angular & TS</li>
                <li>SCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://play.google.com/store/apps/details?id=app.neo.school" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Google App Store" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Neo Convent School - App</h3>
              <p>
                A single app for teachers and students to keep attandance record, manage test scores, submitting and assessing assignments etc.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ionic</li>
                <li>Veu</li>
                <li>SCSS</li>
                <li>Capacitor</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/dev-akaash/RestaurantClone" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              {/* <a href="https://joaotuliojt.github.io/dv-musica-library-page/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Food Delivery</h3>
              <p>
                A simple working template for a restaurant where you can order food. Playing with observables to avoid using API calls.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Ionic</li>
                <li>Angular & TS</li>
                <li>SCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}