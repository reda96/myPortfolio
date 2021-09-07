import "./App.css";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
function App() {
  const myAboutMe = useRef(null);
  const myServices = useRef(null);
  const myExperience = useRef(null);
  const myPortfolio = useRef(null);

  const executeScroll = (myRef) => {
    console.log(myRef);
    switch (myRef) {
      case "Skills":
        return myServices.current.scrollIntoView();

      case "Experience":
        return myExperience.current.scrollIntoView();

      case "Portfolio":
        return myPortfolio.current.scrollIntoView();

      case "About":
        return myAboutMe.current.scrollIntoView();

      default:
        break;
    }
  };

  return (
    <>
      <div className="tsparticles-canvas-el">
        <Particles
          className="particles-canvas"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00",
                },
              },
            },
          }}
        />
      </div>
      <Navbar scroll={(myRef) => executeScroll(myRef)} />
      <Header />
      <AboutMe myRef={myAboutMe} />
      <Services myRef={myServices} />
      <Experience myRef={myExperience} />
      <Portfolio myRef={myPortfolio} />
    </>
  );
}

export default App;
