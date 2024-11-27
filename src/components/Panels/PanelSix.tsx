import "../../styling/Panels/PanelSix.css";

function PanelSix() {
  return (
    <div className="panel-six-content">
      <div className="content-row-six">
        <div className="col-left-six">
          <img
            src="src/assets/42ndSt.jpg"
            className="MusicalPic"
            alt="Performing '42nd Street' Musical at Vergennes Union High School."
          />
          <p className="subtitle">
            I played the lead role of Julian Marsh in our school's rendition of
            42nd Street.
          </p>
        </div>
        <div className="col-right-six">
          <p className="info-text-one">
            I was also an active participant in various other extracurricular
            activities. I took part in our Fall school musical every year, was a
            member of the National Honor Society, and competed on the school
            Math Team. Outside of High School athletics, I also played soccer
            for Addison United Soccer Club.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelSix;
