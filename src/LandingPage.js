import "./App.css";
import emily from "./images/image-emily.jpg";
import thomas from "./images/image-thomas.jpg";
import jennie from "./images/image-jennie.jpg";

function LandingPage() {
  return (
    <div className="wrapper">
      <div className="orange">
        <header className="navbar">
          <div className="sunnyside">sunnyside</div>
          <div className="links">
            <div className="about">About</div>
            <div className="services">Services</div>
            <div className="projects">Projects</div>
            <div className="contact">CONTACT</div>
          </div>
        </header>
      </div>
      <div className="eggSection">
        <div className="eggLeft">
          <div className="eggLeftWrapper">
            <div className="eggLeftHeader header">Transform your brand</div>
            <div className="eggLeftSubheader subheader">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </div>
            <div className="eggLeftLearnMore learnMore">LEARN MORE</div>
          </div>
        </div>
        <div className="egg"></div>
      </div>
      <div className="glassSection">
        <div className="glass"></div>
        <div className="glassRight">
          <div className="glassRightWrapper">
            <div className="glassRightHeader header">
              Stand out to the right audience
            </div>
            <div className="glassRightSubheader subheader">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </div>
            <div className="glassRightLearnMore learnMore">LEARN MORE</div>
          </div>
        </div>
      </div>
      <div className="fruitSection">
        <div className="cherry">
          <div className="cherryWrapper">
            <div className="cherryWrapperHeading header">Graphic Design</div>
            <div className="cherryWrapperSubheading subheader">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </div>
          </div>
        </div>
        <div className="stemOrange">
          <div className="stemOrangeWrapper">
            <div className="stemOrangeWrapperHeading header">Photography</div>
            <div className="stemOrangeWrapperSubheading subheader">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </div>
          </div>
        </div>
      </div>
      <div className="testimonialSection">
        <div className="testimonialWrapper">
          <div className="testHeader">Client Testimonials</div>
          <div className="testimonials">
            <img className="emily testImage" src={emily} alt="emily" />
            <div className="emilyText testText">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </div>
            <div className="emilyTitle">
              <div className="name">Emily R.</div>
              <div className="job">Marketing director</div>
            </div>
            <img className="thomas testImage" src={thomas} alt="thomas" />
            <div className="thomasText testText">
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </div>
            <div className="thomasTitle">
              <div className="name">Thomas S.</div>
              <div className="job">Chief Operating Officer</div>
            </div>
            <img className="jennie testImage" src={jennie} alt="jennie" />
            <div className="jennieText testText">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </div>
            <div className="jennieTitle">
              <div className="name">Jennie F.</div>
              <div className="job">Marketing director</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
