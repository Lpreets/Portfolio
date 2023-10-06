import { BrowserRouter } from "react-router-dom";
import {
  About,
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
  const isMobile = window.innerWidth <= 500;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        {!isMobile && <Tech />}
        {isMobile && <TechMobile />}
        {!isMobile && <Works />}
        {isMobile && <WorksMobile />}
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {!isMobile && <StarsCanvas />}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
