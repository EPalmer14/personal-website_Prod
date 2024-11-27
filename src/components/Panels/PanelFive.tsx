import "../../styling/Panels/PanelFive.css";

function PanelFive() {
  return (
    <div className="panel-five-content">
      <div className="content-row-five">
        <div className="col-left-five">
          <p className="info-text-two">
            In High School I was also a member of the school band, jazz band,
            and chorus. I played the trombone and the bass guitar. We would
            perform at concerts, at parades for marching band, and at the
            Burlington Jazz Fest with the jazz band.
          </p>
        </div>
        <div className="col-right-five">
          <img
            src="src/assets/BandKid.jpg"
            className="BandKidPic"
            alt="Marching Band Picture"
          />
          <p className="subtitle">
            My friend Wade and I at the Essex memorial day parade.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelFive;
