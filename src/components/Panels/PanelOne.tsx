import "../../styling/Panels/PanelOne.css";

function PanelOne() {
  return (
    <div className="panel-one-content">
      <div className="content-row-one">
        <div className="col-left-one">
          <img
            src="src/assets/Baby.jpg"
            className="BabyPic"
            alt="Baby Picture"
          />
          <p className="subtitle">Even as a baby I was always tired!</p>
        </div>
        <div className="col-right-one">
          <p className="info-text-one">
            I was born September 7th, 2000 in Middlebury, VT. I grew up in the
            small town of Vergennes, VT, where I lived with my mom, dad, older
            brother Matteo, and younger brother Gideon. Vergennes is located in
            Addison County, not far from Lake Champlain. It is about a two hour
            drive to Montréal, four hours to Boston, and 5 hours to New York
            City.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelOne;
