import "../../styling/Panels/PanelNineSmallScreen.css";
import Button from "../Button";
import CovidSoccer from "../../assets/ClarkSoccerCovid.jpg";

function PanelNineSmallScreen() {
  return (
    <div className="panel-nine-content-ss">
      <div className="content-row-nine-ss">
        <div className="col-left-nine-ss">
          <p className="info-text-nine-ss">
            My sophomore year of college was a little different because it ran
            from 2020-2021 (the height of the pandemic). All of our classes were
            online, yet some of us were on campus. Social distancing was
            practiced at all times and masks were mandatory everywhere except
            your room. We were tested for COVID-19 every three days. We also did
            not have a full soccer season. Our team had to practice in small
            "pods" and we had to play while wearing masks. There were no games.
          </p>
          <br />
          <p className="info-text-nine-ss">
            To view more pictures and video's from my life, head over to the
            gallery! <br />
            <Button
              color="dark"
              to="/gallery"
              style={{
                fontFamily: "Satisfy",
                fontSize: "14px",
                marginTop: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              To Gallery
            </Button>
          </p>
        </div>
        <div className="col-right-nine-ss">
          <img
            src={CovidSoccer}
            className="ClarkSoccerCovid"
            alt="Covid Clark Soccer practice"
          />
          <p className="subtitle">
            A picture from one of our soccer practices during the pandemic
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelNineSmallScreen;
