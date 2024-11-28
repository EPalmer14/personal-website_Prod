import "../../styling/Panels/PanelSeven.css";
import Banner from "../../assets/Banner.jpeg";

function PanelSeven() {
  return (
    <div className="panel-seven-content">
      <div className="content-row-seven">
        <div className="col-left-seven">
          <img
            src={Banner}
            className="BannerPic"
            alt="One of my High School banners"
          />
          <p className="subtitle-seven">
            Standing in front of one of my track banners at the high school.
          </p>
        </div>
        <div className="col-right-seven">
          <p className="info-text-seven">
            In June 2019 I graduated from Vergennes Union High School. I had
            committed to play Varsity soccer at Clark University back in
            Janurary. I won three state championships in track, won Lake
            Division player of the year in soccer, and got selected for the Twin
            State soccer game the following summer. I also graduated 4th overall
            in my class, and made high honors every semester throughout High
            School. The following August I headed off to Clark University with
            no declared major.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelSeven;
