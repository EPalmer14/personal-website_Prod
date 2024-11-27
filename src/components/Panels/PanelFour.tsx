import "../../styling/Panels/PanelFour.css";
import { useRef, useEffect } from "react";

function PanelFour() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handlePlayVideo = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (videoRef.current) {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
          videoRef.current.currentTime = 0; // Restart video when it leaves the viewport
        }
      }
    };

    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.5,
    });
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <div className="panel-four-content stack-panel">
      <div className="video-container">
        <video
          className="GoalVid"
          ref={videoRef}
          width="auto"
          height="auto"
          muted
          loop
        >
          <source src="src/assets/Goal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="subtitle-four">
        Goal I scored for Vergennes Union High School.
      </p>
      <div className="text-container">
        <p className="info-text-one">
          Since I was little, I have always been an athlete. I love playing
          sports. In High School I played Soccer, Basketball, and ran Track. I
          also enjoy Skiing, Golf, Distance Running, Weight Lifting, and
          Football.
        </p>
      </div>
    </div>
  );
}

export default PanelFour;
