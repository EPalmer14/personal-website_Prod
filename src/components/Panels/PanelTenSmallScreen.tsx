import "../../styling/Panels/PanelTenSmallScreen.css";

function PanelTenSmallScreen() {
  return (
    <div className="panel-ten-content-ss stack-panel">
      <div className="text-container-ten-ss">
        <p className="info-text-ten-ss">
          By my Junior year I was a fully declared and committed Computer
          Science major with a minor in Studio Art. I had also moved into my
          first apartment with two close friends. Soccer was back into full
          swing as well, and our team joined the Team Impact organization of
          which I was one of our teams lead ambassador's for.
        </p>
      </div>
      <div className="img-container-ten-ss">
        <img src="src/assets/SurfsUp.jpeg" className="SurfsUp" alt="Surfing" />
      </div>
      <p className="subtitle">
        Trying out surfing for the first time at Hampton Beach in New Hampshire
      </p>
    </div>
  );
}

export default PanelTenSmallScreen;
