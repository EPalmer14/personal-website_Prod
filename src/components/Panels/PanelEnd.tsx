import "../../styling/Panels/PanelEnd.css";
import Button from "../Button";

function PanelEnd() {
  return (
    <div className="panel-end-content">
      <div className="content-row-end">
        <div className="col-left-end">
          <img
            src="src/assets/Berlin.jpg"
            className="BerlinPic"
            alt="Picture holding our dog Bode"
          />
          <p className="subtitle-end">
            My friend Connor and I juggling a soccer ball together on a field in
            Berlin
          </p>
        </div>
        <div className="col-right-end">
          <p className="info-text-one">
            Although I am done with school, I have stayed plenty busy since
            graduation. I am still working for Wachusett Mountain, developing
            programs and web apps for the organization. Additionally, I have
            picked up a role as a Website Design Consultant with the Research
            Laboratory of Electronics at MIT. In June 2024, I traveled to
            Berlin, Germany for the Euro's soccer tournament. It was my first
            time traveling overseas. In the fall of 2024, I volunteered as an
            assistant coach with the Vergennes High School varsity boys soccer
            team, as well as picking up a head coaching job for an Addison
            United Soccer Club futsal team. On top of it all, I am still working
            on side projects of my own, including artwork, photography, and
            programming projects like this website! Check out the projects page
            to learn more about what I've done and what I am working on now!
            Additionally, if you would like to get into contact with me, head
            over to the contacts page for my socials and contact info.
            <br />
            <Button
              color="dark"
              to="/projects"
              style={{
                fontFamily: "Satisfy",
                fontSize: "20px",
                marginTop: "10px",
                marginLeft: "20px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              To Projects
            </Button>
            <Button
              color="dark"
              to="/contact"
              style={{
                fontFamily: "Satisfy",
                fontSize: "20px",
                marginTop: "10px",
                marginLeft: "50px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              To Contact
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PanelEnd;
