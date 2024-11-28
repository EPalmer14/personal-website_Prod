import "../../styling/Panels/PanelTwelve.css";
import MadRiver from "../../assets/MadRiver.jpeg";

function PanelTwelve() {
  return (
    <div className="panel-twelve-content">
      <div className="content-row-twelve">
        <div className="col-left-twelve">
          <img
            src={MadRiver}
            className="MadRiverPic"
            alt="Picture from Mad River Glen"
          />
          <p className="subtitle">
            My friend Steve and I did a ski trip to Mad River Glen in Vermont!
          </p>
        </div>
        <div className="col-right-twelve">
          <p className="info-text-twelve">
            Last May I finished my time at Clark University, as I completed my
            graduate year of study and received a Master's of Science in
            Information Technology. I once again received Magna Cum Laude honors
            and continued to work with Wachusett Mountain full time throughout
            the year. I was able to do plenty of skiing and even brought plenty
            of friends to the mountain along with me. During my grad year, after
            four years with the Varisty Soccer team, I decided to join the club
            soccer team, which was less of a commitment than the varsity team,
            to free up time for me to work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelTwelve;
