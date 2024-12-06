// src/components/About.js
import { useState, useEffect, useRef } from "react";
import ProgressBar from "../components/ProgressBar";
import PanelOne from "../components/Panels/PanelOne";
import PanelTwo from "../components/Panels/PanelTwo";
import PanelThree from "../components/Panels/PanelThree";
import PanelFour from "../components/Panels/PanelFour";
import PanelFive from "../components/Panels/PanelFive";
import PanelSix from "../components/Panels/PanelSix";
import PanelSeven from "../components/Panels/PanelSeven";
import PanelEight from "../components/Panels/PanelEight";
import PanelNine from "../components/Panels/PanelNine";
import PanelNineSmallScreen from "../components/Panels/PanelNineSmallScreen";
import PanelTen from "../components/Panels/PanelTen";
import PanelTenSmallScreen from "../components/Panels/PanelTenSmallScreen";
import PanelEleven from "../components/Panels/PanelEleven";
import PanelElevenSmallScreen from "../components/Panels/PanelElevenSmallScreen";
import PanelTwelve from "../components/Panels/PanelTwelve";
import PanelStart from "../components/Panels/PanelStart";
import PanelStartSmallScreen from "../components/Panels/PanelStartSmallScreen";
import PanelEnd from "../components/Panels/PanelEnd";
import PanelEndSmallScreen from "../components/Panels/PanelEndSmallScreen";
import "../styling/About.css";

function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePanelIndex, setActivePanelIndex] = useState(0);
  const panelsRef = useRef<HTMLDivElement[]>([]); // To track panel positions
  const [screenSize, setScreenSize] = useState<"small" | "large">("large");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 1260) {
        setScreenSize("small");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const handleScroll = () => {
    const container = document.querySelector(".horizontal-scroll-container");
    if (container) {
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const progress = (scrollLeft / maxScrollLeft) * 100;
      setScrollProgress(progress);

      // Calculate which panel should be active based on scroll position
      const panelWidth = container.clientWidth;
      const newIndex = Math.round(scrollLeft / panelWidth);
      setActivePanelIndex(newIndex);
    }
  };

  const handleWheelScroll = (e: WheelEvent) => {
    const container = document.querySelector(".horizontal-scroll-container");

    if (container) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        return;
      }

      e.preventDefault();
      container.scrollLeft += e.deltaY * 3;
    }
  };

  useEffect(() => {
    const container = document.querySelector(".horizontal-scroll-container");
    const wrappedHandleWheelScroll = (e: Event) =>
      handleWheelScroll(e as WheelEvent);
    container?.addEventListener("scroll", handleScroll);
    container?.addEventListener("wheel", wrappedHandleWheelScroll, {
      passive: false,
    });
    return () => {
      container?.removeEventListener("scroll", handleScroll);
      container?.removeEventListener("wheel", wrappedHandleWheelScroll);
    };
  }, []);

  useEffect(() => {
    if (screenSize === "small") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              entry.target.classList.remove("fade-out");
            } else {
              entry.target.classList.remove("fade-in");
              entry.target.classList.add("fade-out");
            }
          });
        },
        { threshold: 0.2 } // Trigger when 20% of the panel is visible
      );

      panelsRef.current.forEach((panel) => {
        if (panel) observer.observe(panel);
      });

      return () => observer.disconnect();
    }
  }, [screenSize]);

  return (
    <div className="page-container">
      {screenSize === "small" ? (
        <>
          <div className="vertical-scroll-container">
            {[
              <PanelStartSmallScreen />,
              <PanelOne />,
              <PanelTwo />,
              <PanelThree />,
              <PanelFour />,
              <PanelFive />,
              <PanelSix />,
              <PanelSeven />,
              <PanelEight />,
              <PanelNineSmallScreen />,
              <PanelTenSmallScreen />,
              <PanelElevenSmallScreen />,
              <PanelTwelve />,
              <PanelEndSmallScreen />,
            ].map((Panel, index) => (
              <div
                key={index}
                className="panel-vertical fade-out"
                ref={(el: HTMLDivElement) => (panelsRef.current[index] = el)}
              >
                {Panel}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="horizontal-scroll-container">
            {[
              <PanelStart />,
              <PanelOne />,
              <PanelTwo />,
              <PanelThree />,
              <PanelFour />,
              <PanelFive />,
              <PanelSix />,
              <PanelSeven />,
              <PanelEight />,
              <PanelNine />,
              <PanelTen />,
              <PanelEleven />,
              <PanelTwelve />,
              <PanelEnd />,
            ].map((Panel, index) => (
              <section
                key={index}
                className={`panel ${
                  index === activePanelIndex ? "fade-in" : "fade-out"
                }`}
                ref={(el: HTMLDivElement) => (panelsRef.current[index] = el)}
              >
                {Panel}
              </section>
            ))}
          </div>
          <ProgressBar progress={scrollProgress} />
        </>
      )}
    </div>
  );
}

export default About;
