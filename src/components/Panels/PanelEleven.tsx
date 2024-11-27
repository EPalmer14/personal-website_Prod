import "../../styling/Panels/PanelEleven.css";

function PanelEleven() {
  return (
    <div className="panel-eleven-content">
      <div className="content-row-eleven">
        <div className="col-left-eleven">
          <p className="info-text-eleven">
            In my senior year of college I finished up the remaining required
            courses for my Bachelors degree. I received a Bachelor's of Art in
            Computer Science and earned Magna Cum Laude honors. This required me
            to take some very enjoyable computer science courses that challenged
            me to be creative with my solutions to problems. I was also named
            the captain of the Varsity soccer team and became a Teacher
            Assistant that year. In June, after graduation, I began working at
            Wachusett Mountain in their IT office as a software developer and IT
            help specialist. I was also taking summer courses while preparing
            for my last year of school to acquire a Master's Degree.
          </p>
        </div>
        <div className="col-right-eleven">
          <img
            src="src/assets/Graduation.jpeg"
            className="GraduationPic"
            alt="Picture of me and my family from graduation"
          />
          <p className="subtitle">Clark University graduation day 2023</p>
        </div>
      </div>
    </div>
  );
}

export default PanelEleven;
