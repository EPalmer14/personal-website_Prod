import "../../styling/Panels/PanelNine.css";
import Button from "../Button";
import CovidPic from "../../assets/Covid.jpg";
import CovidSoccer from "../../assets/ClarkSoccerCovid.jpg";

function PanelNine() {
  return (
    <div className="panel-nine-content">
      <div className="content-row-nine">
        <div className="col-left-nine">
          <img
            src={CovidPic}
            className="CovidMasks"
            alt="Steve and me in Covid masks"
          />
          <p className="subtitle">My friend Steve and me in our COVID masks</p>
        </div>
        <div className="col-middle-nine">
          <p className="info-text-nine">
            My sophomore year of college was a little different because it ran
            from 2020-2021 (the height of the pandemic). All of our classes were
            online, yet some of us were on campus. Social distancing was
            practiced at all times and masks were mandatory everywhere except
            your room. We were tested for COVID-19 every three days. We also did
            not have a full soccer season. Our team had to practice in small
            "pods" and we had to play while wearing masks. There were no games.
          </p>
          <br />
          <p className="info-text-nine">
            To view more pictures and video's from my life, head over to the
            gallery! <br />
            <Button
              color="dark"
              to="/gallery"
              style={{
                fontFamily: "Satisfy",
                fontSize: "20px",
                marginTop: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              To Gallery
            </Button>
          </p>
        </div>
        <div className="col-right-nine">
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

export default PanelNine;
