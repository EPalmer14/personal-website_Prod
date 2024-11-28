import "../../styling/Panels/PanelThree.css";
import MeAndBode from "../../assets/MeAndBode.jpg";
function PanelThree() {
  return (
    <div className="panel-three-content">
      <div className="content-row-three">
        <div className="col-left-three">
          <img
            src={MeAndBode}
            className="BodePic"
            alt="Picture holding our dog Bode"
          />
          <p className="subtitle">
            Me holding Bode when he was only a couple of months old.
          </p>
        </div>
        <div className="col-right-three">
          <p className="info-text-three">
            During the summer of 2010, my family bought a yellow lab. We named
            him Bode, and he was only a few months old at the time! Bode was my
            best friend up until he passed away over the summer of 2023. He was
            my childhood dog, and I miss him dearly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelThree;
