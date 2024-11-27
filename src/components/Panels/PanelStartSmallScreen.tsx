import "../../styling/Panels/PanelStart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function PanelStartSmallScreen() {
  return (
    <div className="panel-content">
      <div className="content-row panel-start-content">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="title-text"
        >
          <strong>Welcome to my life story! (so far)</strong>
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Scroll to the down to learn more about me{" "}
          <FontAwesomeIcon icon={faArrowDown} />
        </motion.p>
      </div>
    </div>
  );
}

export default PanelStartSmallScreen;
