import "../../styling/Panels/PanelElevenSmallScreen.css";
import GradPic from "../../assets/Graduation.jpeg";

function PanelElevenSmallScreen() {
  return (
    <div className="panel-eleven-content-ss">
      <div className="content-row-eleven-ss row">
        <p className="info-text-eleven-ss col-12">
          In my senior year of college I finished up the remaining required
          courses for my Bachelors degree. I received a Bachelor's of Art in
          Computer Science and earned Magna Cum Laude honors. This required me
          to take some very enjoyable computer science courses that challenged
          me to be creative with my solutions to problems. I was also named the
          captain of the Varsity soccer team and became a Teacher Assistant that
          year.
        </p>
        <div className="col-left-eleven-ss col-6">
          <p className="info-text-eleven-ss">
            In June, after graduation, I began working at Wachusett Mountain in
            their IT office as a software developer and IT help specialist. I
            was also taking summer courses while preparing for my last year of
            school to acquire a Master's Degree.
          </p>
        </div>
        <div className="col-right-eleven-ss col-5">
          <img
            src={GradPic}
            className="GraduationPic"
            alt="Picture of me and my family from graduation"
          />
          <p className="subtitle">Clark University graduation day 2023</p>
        </div>
      </div>
    </div>
  );
}

export default PanelElevenSmallScreen;
