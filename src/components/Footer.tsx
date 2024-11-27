import "../styling/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <p style={{ marginTop: "20px" }}>
          &copy; {new Date().getFullYear()} Ezekiel Palmer personal website. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
