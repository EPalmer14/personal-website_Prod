import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../components/Button";
import "../styling/Projects.css";
import Piano from "../assets/Projects/PianoCover.png";
import Landscape from "../assets/Projects/Landscape2.png";
import Cascade from "../assets/Projects/Cascade.png";
import Northern from "../assets/Projects/NorthernShoreFinal.png";
import Website1 from "../assets/Projects/WebsiteScreenshot1.png";
import Website2 from "../assets/Projects/WebsiteScreenshot2.png";
import Wachusett1 from "../assets/Projects/Wachnet3_1.png";
import Wachusett2 from "../assets/Projects/Wachnet3_2.png";
import HuesLogo from "../assets/Projects/HUES Logo Refined Black.png";
import Single1 from "../assets/Projects/HuesAlbumCover.png";
import Single2 from "../assets/Projects/i wont forget this love.png";
import Single3 from "../assets/Projects/theseshoes4.jpg";
import Synesthesia from "../assets/Projects/SynesthesiaAlbumFinal.png";
import PuppetString from "../assets/Projects/PuppetStringDimensionCorrrected.png";
import Vergennes from "../assets/Projects/Vergennes.png";
import WachusettMountain from "../assets/Projects/WachusettMountain2.png";
import Burlington from "../assets/Projects/Burlington.png";

function Projects() {
  const projectOneRef = useRef(null);
  const projectTwoRef = useRef(null);
  const projectThreeRef = useRef(null);
  const projectFourRef = useRef(null);
  const projectFiveRef = useRef(null);
  const projectSixRef = useRef(null);

  const isInViewOne = useInView(projectOneRef, { once: true });
  const isInViewTwo = useInView(projectTwoRef, { once: true });
  const isInViewThree = useInView(projectThreeRef, { once: true });
  const isInViewFour = useInView(projectFourRef, { once: true });
  const isInViewFive = useInView(projectFiveRef, { once: true });
  const isInViewSix = useInView(projectSixRef, { once: true });

  return (
    <section id="projects" className="projects">
      <div ref={projectOneRef} className="project-one">
        <div className="row project-header">
          <div className="col offset-1">
            <motion.h1
              className="project-name"
              initial={{ opacity: 0 }}
              animate={isInViewOne ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              This Website
            </motion.h1>
          </div>
          <motion.div
            className="project-line"
            initial={{ width: 0 }}
            animate={isInViewOne ? { width: "80%" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <motion.p
              className="text-1-1"
              initial={{ opacity: 0 }}
              animate={isInViewOne ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              My most recent project is this website! Coded from scratch using
              Typescript and React.js, I started this project as a way to
              display some of my work and allow more people to get to know me.
              The intention is to display my capability with web design while
              also giving others a look into my more personal life. It was
              important for me to share my journey to where I currently am in my
              life, so that readers can get a sense of my experiences,
              interests, and values. I decided that adding the photo gallery
              would be a fun addition as well. While I have too many photos to
              choose from across various points in my life, I have chosen some
              of my more sentimental photos.
            </motion.p>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <motion.img
              className="img-1-1"
              src={Website1}
              initial={{ opacity: 0 }}
              animate={isInViewOne ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <motion.img
              className="img-1-1"
              src={Website2}
              initial={{ opacity: 0 }}
              animate={isInViewOne ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <motion.p
              className="text-1-2"
              initial={{ opacity: 0 }}
              animate={isInViewOne ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Developing this website has been a beneficial experience for me.
              While I have coded using React before, this project has allowed me
              to really play around with the construction and inclusion of
              components around the website. I was also able to get plenty of
              practice with front-end design, playing around with the CSS and
              styling of elements on the page. Using Framer Motion also helped
              me to animate portions of the website, such as fading elements in
              and out of view. I look forward to continuing to add to and
              improve this site as I experience and accomplish more things.
            </motion.p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div ref={projectTwoRef} className="project-two">
        <div className="row project-header">
          <div className="col-lg-3 offset-lg-8 col-md-5 offset-md-6 col-sm-5 offset-sm-6 col-7 offset-5">
            <motion.h1
              className="project-name"
              initial={{ opacity: 0 }}
              animate={isInViewTwo ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Wachusett Mountain
            </motion.h1>
          </div>
          <motion.div
            className="project-line-two"
            initial={{ width: 0 }}
            animate={isInViewTwo ? { width: "80%" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <motion.img
              className="img-2-1"
              src={Wachusett1}
              initial={{ opacity: 0 }}
              animate={isInViewTwo ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <motion.p
              className="text-2-1"
              initial={{ opacity: 0 }}
              animate={isInViewTwo ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              My time at Wachusett Mountain initially started as a summer
              internship. I was graduating from Clark University with my
              Bachelor's degree and was returning to the school for the
              Information Technology Graduate Program. One of the requirements
              of graduate school was an internship at some point during the
              program. While some people chose internships with big corporate
              companies, I did mine with Wachusett Mountain. That internship
              lasted me the summer and turned into a full-time job that I was
              able to work during my 5th year of school. I still work for the
              mountain today.
            </motion.p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <motion.p
              className="text-2-2"
              initial={{ opacity: 0 }}
              animate={isInViewTwo ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              I found that there were a lot of benefits to working at a smaller
              organization. I joined the IT department where I was both an IT
              support specialist and a software engineer. We develop and write a
              lot of code in-house, and the department is very small. This meant
              I was able to get a lot of experience in programming in a
              fast-paced environment focused on continuous improvement, and all
              while working on projects that had actual meaningful effects on
              the rest of the company. Employees at the mountain depended on me
              to write code and solve problems so that they could perform their
              own tasks as efficiently and effectively as possible. A lot of
              projects required me to retrieve, display, or manage data related
              to specific departments and coming in from various data collection
              points (such as online orders or our many POS systems) in a safe
              and efficient manner.
            </motion.p>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <motion.img
              className="img-2-2"
              src={Wachusett2}
              initial={{ opacity: 0 }}
              animate={isInViewTwo ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 offset-lg-1 col-md-12 col-sm-12">
            <motion.p
              className="text-2-3"
              initial={{ opacity: 0 }}
              animate={isInViewTwo ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              My biggest project, which has been a work in progress over the
              last year, has been to develop a brand new web application for
              employees at the mountain to use (displayed in the images).
              Developed on Microsoft's .NET framework, this web app incorporates
              many plugins, libraries, API's, manages data, handles
              authentication and authorization, and much more. It even comes
              with it's own company calendar which is linked to a shared Outlook
              calendar using an Azure app and the Microsoft Graph API. While I
              cannot display code here, for security purposes, I can share
              screenshots from the site.
            </motion.p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div ref={projectThreeRef} className="project-three">
        <div className="row project-header">
          <div className="col offset-1">
            <motion.h1
              className="project-name"
              initial={{ opacity: 0 }}
              animate={isInViewThree ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              HUES
            </motion.h1>
          </div>
          <motion.div
            className="project-line"
            initial={{ width: 0 }}
            animate={isInViewThree ? { width: "80%" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12 hues-logo">
            <motion.img
              className="img-3-1"
              src={HuesLogo}
              initial={{ opacity: 0 }}
              animate={isInViewThree ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <motion.p
              className="text-1-1"
              initial={{ opacity: 0 }}
              animate={isInViewThree ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              My older brother is one half of a funk duo called HUES. Him and
              his friend write bright and vibrant music with elements of funk,
              disco, pop, and more, blending genres into a unique sound of their
              own. With such a unique sound, they required some logo design and
              album designs to fit their vibe. My brother reached out to me to
              do some artwork for them, and after a few iterations of design, we
              settled on this logo for the band.
            </motion.p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 offset-lg-1 col-md-12 col-sm-12">
            <motion.p
              className="text-3-2"
              initial={{ opacity: 0 }}
              animate={isInViewThree ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Up to this point, HUES has released one full length album and some
              single's. I worked on the artwork for the single's "u got me
              thinking about u", "i won't forget this love", and "these shoes".
              I also did the cover art for their album "Synesthesia", where I
              tried to capture the essence of the bands colorful music while
              also reflecting the album title into the art. I also worked on the
              cover art for the band's single "Puppet String", which is also
              pictured.
            </motion.p>
            <Button
              initial={{ opacity: 0 }}
              animate={isInViewThree ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              color="dark"
              id="listen-hues"
              to="https://open.spotify.com/artist/7ux0u7dYB0JSQzW4T82p28?si=dN_h6bUtTQKHGwYLNn4YXA"
              style={{
                marginLeft: "20px",
                fontFamily: "Satisfy",
                fontSize: "20px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Listen to HUES
            </Button>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <motion.img
                  className="img-3-2"
                  src={Single1}
                  initial={{ opacity: 0 }}
                  animate={isInViewThree ? { opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                ></motion.img>
              </div>
              <div className="col-6" style={{ paddingLeft: 0 }}>
                <motion.img
                  className="img-3-2"
                  src={Single2}
                  initial={{ opacity: 0 }}
                  animate={isInViewThree ? { opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                ></motion.img>
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ paddingRight: 0 }}>
                <motion.img
                  className="img-3-2"
                  src={Single3}
                  initial={{ opacity: 0 }}
                  animate={isInViewThree ? { opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                ></motion.img>
              </div>
              <div className="col-6" style={{ paddingLeft: 0 }}>
                <motion.img
                  className="img-3-2"
                  src={Synesthesia}
                  initial={{ opacity: 0 }}
                  animate={isInViewThree ? { opacity: 1 } : {}}
                  transition={{ duration: 1 }}
                ></motion.img>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 col-md-12 col-sm-12">
            <motion.img
              className="img-3-3"
              src={PuppetString}
              initial={{ opacity: 0 }}
              animate={isInViewThree ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div ref={projectFourRef} className="project-two">
        <div className="row project-header">
          <div className="col-lg-3 offset-lg-8 col-md-5 offset-md-6 col-sm-5 offset-sm-6 col-7 offset-5">
            <motion.h1
              className="project-name"
              initial={{ opacity: 0 }}
              animate={isInViewFour ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Other Artwork
            </motion.h1>
          </div>
          <motion.div
            className="project-line-two"
            initial={{ width: 0 }}
            animate={isInViewFour ? { width: "80%" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <motion.p
              className="text-4-1"
              initial={{ opacity: 0 }}
              animate={isInViewFour ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Beyond my artwork with HUES, I have also worked on individual
              projects and cover art for some of my brothers solo projects.
            </motion.p>
            <Button
              initial={{ opacity: 0 }}
              animate={isInViewFour ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              color="dark"
              to="https://open.spotify.com/artist/4eOsxaC4lj75U7Qtcbxwn8?si=MtMw0hyLSNe516w0Gpyxcg"
              style={{
                marginLeft: "20px",
                fontFamily: "Satisfy",
                fontSize: "20px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Listen to Matteo
            </Button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-2 offset-lg-2 col-md-12 col-sm-12">
            <motion.img
              className="img-4-1"
              src={Piano}
              initial={{ opacity: 0 }}
              animate={isInViewFour ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <motion.img
              className="img-4-2"
              src={Landscape}
              initial={{ opacity: 0 }}
              animate={isInViewFour ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <motion.img
              className="img-4-3"
              src={Cascade}
              initial={{ opacity: 0 }}
              animate={isInViewFour ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <motion.img
              className="img-4-4"
              src={Northern}
              initial={{ opacity: 0 }}
              animate={isInViewFour ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div ref={projectFiveRef} className="project-three">
        <div className="row project-header">
          <div className="col offset-1">
            <motion.h1
              className="project-name"
              initial={{ opacity: 0 }}
              animate={isInViewFive ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              RedBubble Shop
            </motion.h1>
          </div>
          <motion.div
            className="project-line"
            initial={{ width: 0 }}
            animate={isInViewFive ? { width: "80%" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <motion.p
              className="text-1-1"
              initial={{ opacity: 0 }}
              animate={isInViewFive ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              In recent years I have also gotten into photography and photo
              editing. I realized that I had a plethora of interesting pictures
              that I wanted to share with others. One of my favorite things to
              photograph are landscapes and the natural world. Growing up in
              Vermont, a state known for it's natural beauty, I have gained a
              deep appreciation for landscapes and nature. I especially love
              scenes that carefully blend natural elements with subtle man-made
              elements, of which there is no shortage of in New England. These
              are just a few of the photos I have taken. You can check out more
              in my shop!
            </motion.p>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <motion.img
              className="img-5-1"
              src={Vergennes}
              initial={{ opacity: 0 }}
              animate={isInViewFive ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-3 offset-lg-1 col-md-12 col-sm-12">
            <br />
            <br />
            <motion.p
              className="text-3-2"
              initial={{ opacity: 0 }}
              animate={isInViewFive ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Check out my RedBubble shop and stay tuned for more work to be
              added in the future!
            </motion.p>
            <Button
              initial={{ opacity: 0 }}
              animate={isInViewFive ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              color="dark"
              to="https://ZPalmer14.redbubble.com"
              style={{
                marginLeft: "20px",
                fontFamily: "Satisfy",
                fontSize: "20px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              RedBubble Shop
            </Button>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <motion.img
              className="img-5-2"
              src={Burlington}
              initial={{ opacity: 0 }}
              animate={isInViewFive ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <motion.img
              className="img-5-3"
              src={WachusettMountain}
              initial={{ opacity: 0 }}
              animate={isInViewFive ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            ></motion.img>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div ref={projectSixRef} className="project-two">
        <div className="row project-header">
          <div className="col-lg-3 offset-lg-8 col-md-5 offset-md-6 col-sm-5 offset-sm-6 col-7 offset-5">
            <motion.h1
              className="project-name"
              initial={{ opacity: 0 }}
              animate={isInViewSix ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              YouTube Channel
            </motion.h1>
          </div>
          <motion.div
            className="project-line-two"
            initial={{ width: 0 }}
            animate={isInViewSix ? { width: "80%" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>
        <div className="row">
          <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-12 col-sm-12 mov-1-div">
            <motion.iframe
              className="mov-1"
              initial={{ opacity: 0 }}
              animate={isInViewSix ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              src="https://www.youtube.com/embed/0a6uTWZ4PD8?si=AT5g3BzWOPcXOPim&amp;start=16"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <motion.p
              className="text-2-1"
              initial={{ opacity: 0 }}
              animate={isInViewSix ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              As well as getting more into photography, I've also been trying to
              use my GoPro more. Every once and awhile when I am skiing I will
              break out the GoPro and try to catch some footage. In April 2024,
              Vermont got a huge snow storm. This was right as my friend Steve
              and I were about to ski Mad River Glen in Waitsfield, VT for a
              couple days. The timing of the snowstorm was perfect, and we got
              some great footage from one of the most iconic ski mountains on
              the East Coast. This is the resulting video which can be viewed on
              my YouTube channel.
            </motion.p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <motion.p
              className="text-6-2"
              initial={{ opacity: 0 }}
              animate={isInViewSix ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              Across this site you may find photos from my time in Berlin in
              June 2024. It was my first time in Europe, and as such, I made
              sure I captured plenty of photos and videos from the trip. I was
              traveling with three friends and spent a week in Germany. We
              attended a Euro's soccer match, went to the clubs, explored the
              historic city, and sampled lots of German cuisine. I captured
              small parts of the trip in video, and during our 8 hour overnight
              flight back home, while I couldn't sleep, I edited all together
              into a quick video to highlight the trip. This video is viewable
              on my YouTube channel.
            </motion.p>
            <Button
              initial={{ opacity: 0 }}
              animate={isInViewSix ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              color="dark"
              to="https://www.youtube.com/@ZekePalmer14"
              style={{
                marginLeft: "20px",
                fontFamily: "Satisfy",
                fontSize: "20px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              YouTube Channel
            </Button>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 mov-2-div">
            <motion.iframe
              className="mov-2"
              initial={{ opacity: 0 }}
              animate={isInViewSix ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              width="605"
              height="405"
              src="https://www.youtube.com/embed/OV6D-IQ71ss?si=NN288v1ifKFhPWnD&amp;start=7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></motion.iframe>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default Projects;
