import { useRef, useState } from "react";
import "./App.css";
import engine from "./assets/engine.mp4";
import wallace from "./assets/wallace.gif";
import nicemusic from "./assets/magichardcoreeee.m4a";

/*
* Movie name: Snowpiercer (2013) 
* Song name: Magic Way.
*/

function App() {
  const [name, setName] = useState("not_secret1337");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef: any = useRef(null);
  const dotRef: any = useRef(null);
  const progressRef: any = useRef(null);
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

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const updateProgress = () => {
    const progress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    progressRef.current.style.width = `${progress}%`;
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
            <div className="audiospurfr">
              <div onClick={togglePlay}>
                <i
                  className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}
                />
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" ref={progressRef} />
                <div className="progress-dot" ref={dotRef} />
              </div>
              <audio
                ref={audioRef}
                onTimeUpdate={updateProgress}
                src={nicemusic}
              />
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
