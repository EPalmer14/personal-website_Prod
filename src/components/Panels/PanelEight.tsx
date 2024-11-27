import "../../styling/Panels/PanelEight.css";
import { useRef, useEffect } from "react";

function PanelEight() {
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handlePlayVideo = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (videoRef2.current) {
        if (entry.isIntersecting) {
          videoRef2.current.play();
        } else {
          videoRef2.current.pause();
          videoRef2.current.currentTime = 0; // Restart video when it leaves the viewport
        }
      }
    };

    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.5,
    });
    if (videoRef2.current) observer.observe(videoRef2.current);

    return () => {
      if (videoRef2.current) observer.unobserve(videoRef2.current);
    };
  }, []);

  return (
    <div className="panel-eight-content stack-panel">
      <div className="text-container-eight">
        <p className="info-text-one">
          I started college in August 2019. That first semester I took an Intro
          to Computer Science course which would lead me to find my future major
          and career. I also played my first soccer games at the collegiate
          level. Sadly, due to the COVID-19 outbreak, I was unable to finish my
          freshman year in-person, as we all got sent home in April and were
          forced to finish the semester online.
        </p>
      </div>
      <div className="video-container-eight">
        <video
          className="ClarkGoal"
          ref={videoRef2}
          width="auto"
          height="auto"
          muted
          loop
        >
          <source src="src/assets/Clark1stGoal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="subtitle-four">My first goal for Clark University.</p>
    </div>
  );
}

export default PanelEight;
