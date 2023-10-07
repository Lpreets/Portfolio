import { BrowserRouter } from "react-router-dom";
import {
  About,
  AboutMobile,
  Contact,
  // Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  WorksMobile,
  StarsCanvas,
  Footer,
  TechMobile,
} from "./components";

const App = () => {
  const isMobile = window.innerWidth <= 860;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {isMobile ? < AboutMobile /> : <About />}
        {/* <Experience /> */}
        {isMobile ? <TechMobile /> : <Tech />}
        {isMobile ? <WorksMobile /> : <Works />}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
