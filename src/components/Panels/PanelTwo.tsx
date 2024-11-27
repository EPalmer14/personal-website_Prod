import "../../styling/Panels/PanelTwo.css";

function PanelTwo() {
  return (
    <div className="panel-two-content">
      <div className="content-row-two">
        <div className="col-left-two">
          <p className="info-text-two">
            I am the middle child of three. Matteo is about 4 years older than
            me, while Gideon is about 4 years younger than me. We have many
            similar interests, and when the three of us are together, we tend to
            be the most rambunctious group around.
          </p>
        </div>
        <div className="col-right-two">
          <img
            src="src/assets/Brothers.jpg"
            className="BrothersPic"
            alt="Picture of me and my brothers"
          />
          <p className="subtitle">My brothers and I.</p>
        </div>
      </div>
    </div>
  );
}

export default PanelTwo;
