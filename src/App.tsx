import { useState } from "react";
import "./App.css";
import engine from "./assets/engine.mp4";
import wallace from "./assets/wallace.gif";

function App() {
  const [name, setName] = useState("not_secret1337");
  const [isAnimating, setIsAnimating] = useState(false);
  const speed = 250;

  const handleMouseEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setName("secret pommes");
      setIsAnimating(false);
    }, speed);
  };

  const handleMouseLeave = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setName("not_secret1337");
      setIsAnimating(false);
    }, speed);
  };

  return (
    <>
      <video className="bg-video" autoPlay muted loop>
        <source src={engine} type="video/mp4" />
      </video>
      <center>
        <div className="ContainerThing">
          <div className="Profile">
            <h1
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`name ${isAnimating ? "hide" : ""}`}
            >
              {name}
            </h1>
            <div className="pfp-container">
              <i
                className="fab fa-discord icon discord"
                onClick={() =>
                  window.open("https://discord.gg/eclipsemp", "_blank")
                }
              />
              <img src={wallace} alt="pfp" className="pfp" />
              <i
                className="fab fa-github icon github"
                onClick={() =>
                  window.open("https://github.com/secret-pommes", "_blank")
                }
              />
            </div>
            <p className="desc">
              I do Backend most, and i enjoy TypeScript.
              <br />I also work on{" "}
              <a href="https://discord.gg/eclipsemp" className="eclipsewtf">
                Eclipse
              </a>{" "}
              a private server for Season 3.
            </p>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
