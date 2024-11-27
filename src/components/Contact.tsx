import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../styling/Contact.css";
import {
  faShoppingBag,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const links = {
    instagram: "https://www.instagram.com/zekepalmer14/",
    linkedin: "https://www.linkedin.com/in/zekepalmer/",
    github: "https://github.com/EPalmer14",
    youtube: "https://www.youtube.com/@ZekePalmer14",
    redbubble: "https://ZPalmer14.redbubble.com",
  };

  return (
    <section id="contact" className="contact">
      <br />
      <br />
      <div className="row text-row">
        <div className="col-lg-6 offset-lg-2 col-md-12 col-sm-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Me!
          </motion.h1>
          <motion.p
            style={{ fontSize: "1.2rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            For business inquiries and other questions, please email me at{" "}
            <strong>zekepalmer14@gmail.com</strong>
          </motion.p>
          <br />
          <motion.p
            style={{ fontSize: "1.2rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I can also be found on these platforms! Click on an icon to be taken
            to my page.
          </motion.p>
          <div className="social-links">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
            </a>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" color="black" />
            </a>
            <a
              href={links.redbubble}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faShoppingBag} size="2x" color="black" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <motion.img
            src="src/assets/Business_Photo.jpeg"
            alt="Headshot"
            className="Headshot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.img>
        </div>
      </div>
    </section>
  );
}

export default Contact;
