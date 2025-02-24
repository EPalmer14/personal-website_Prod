// src/components/Home.js
import "../styling/Home.css";
import Button from "../components/Button";
import Homepage from "../assets/Homepage.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Home() {
  const [screenSize, setScreenSize] = useState<"small" | "medium" | "large">(
    "large"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScreenSize("small");
      } else if (width <= 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <div className="homepage">
      <div className="intro-section row">
        <div className="col-lg-7 col-md-7 col-sm-12 intro-text">
          <br />
          <br />
          <br />

          <div className="row">
            <div className="col-lg-12 offset-lg-2 col-md-12 col-sm-12">
              <motion.h1
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
                className="name-h1"
              >
                <strong>Hi, welcome to my website! This is a test!</strong>
              </motion.h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12 offset-lg-2 col-md-12 col-sm-12">
              <motion.h4
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  duration: 1.5,
                  delay: 2,
                }}
                className="name-h4"
              >
                My name is Zeke!
              </motion.h4>
            </div>
          </div>
        </div>
        <div className="profile-container justify-content-center col-md-5 col-sm-12 col-lg-5">
          <motion.img
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1.5,
            }}
            src={Homepage}
            alt="Homepage pic"
            className="profile-pic"
            width="auto"
          />
        </div>
      </div>
      <br />
      <div className="secondary-text-container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12">
            <motion.p
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 1.5,
                delay: 4,
              }}
              className="secondary-text"
            >
              I am a 24 year old software engineer from Vergennes, VT. To learn
              more about me, click the button!
              {screenSize === "small" || screenSize === "medium" ? (
                <>
                  <br />
                  <br />
                  <Button
                    color="dark"
                    to="/about"
                    style={{
                      fontFamily: "Satisfy",
                      fontSize: "20px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    About Me
                  </Button>
                </>
              ) : (
                <Button
                  color="dark"
                  to="/about"
                  style={{
                    fontFamily: "Satisfy",
                    fontSize: "20px",
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  About Me
                </Button>
              )}
            </motion.p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
