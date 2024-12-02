import { useState } from "react";
import LandscapeImage from "./Images/LandscapeImage";
import PortraitImage from "./Images/PortraitImage";
import ImageOverlay from "./Images/ImageOverlay";
import "../styling/Gallery.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import GreaseMusical from "../assets/Gallery/Grease.jpg";
import TwinState from "../assets/Gallery/TwinStateTrophy.jpg";
import ArtShow from "../assets/Gallery/ArtShow.jpeg";
import AUGang from "../assets/Gallery/AUGang.jpg";
import AwayWPI from "../assets/AwayVsWPI.jpg";
import BerlinWall from "../assets/Gallery/BerlinWall.jpeg";
import BerlinWatch from "../assets/BerlinWatchParty.jpg";
import Boston from "../assets/Gallery/BostonTrip.jpg";
import BrosAndCousins from "../assets/Gallery/BrosAndCousins.jpeg";
import BucketHats from "../assets/BucketHats.jpg";
import CapeCod from "../assets/Gallery/CapeCod.jpeg";
import CapePlayground from "../assets/Gallery/CapeCodPlayground.jpg";
import ChurchSt from "../assets/Gallery/ChurchSt.jpeg";
import ClarkFooty from "../assets/ClarkFooty.jpg";
import ClarkMedia from "../assets/ClarkMediaDay.jpg";
import ClarkSeniorDay from "../assets/Gallery/ClarkSoccerSenior Day.jpeg";
import CliffJumping from "../assets/Gallery/CliffJumping.jpeg";
import Coaching from "../assets/Gallery/Coaching.jpeg";
import CoolingOff from "../assets/CoolingOffWithBode.jpg";
import DeepSea from "../assets/Gallery/DeepSeaFishing.jpeg";
import EmmaWeddingInside from "../assets/Gallery/EmmasWeddingInside.jpeg";
import EmmaWeddingOutside from "../assets/EmmasWeddingOutside.jpg";
import EurosFest from "../assets/Gallery/EurosFest.jpeg";
import FieldDays from "../assets/Gallery/FieldDays.jpeg";
import Golfing from "../assets/Golfing.jpg";
import GolfJayPeak from "../assets/Gallery/GolfJayPeak.jpeg";
import GolfFam from "../assets/Gallery/GolfWithFam.jpeg";
import GolfSteve from "../assets/Gallery/GolfWithFamAndSteve.jpeg";
import GradParty from "../assets/GradParty.jpg";
import GraduationFam from "../assets/Gallery/GraduationFam2024.jpeg";
import GraduationFriends from "../assets/Gallery/GraduationFriends2024.jpeg";
import HighSchoolGrad from "../assets/Gallery/HighSchoolGraduation.jpeg";
import HighSchoolGradBanner from "../assets/HighSchoolGraduationBanner.jpg";
import HighSchoolGradFriends from "../assets/HighSchoolGraduationFriends.jpg";
import Hiking from "../assets/Gallery/HikingCamelsHump.jpeg";
import InsideOlympic from "../assets/Gallery/InsideBerlinOlympic.jpeg";
import Killington from "../assets/Gallery/KillingtonSki.jpg";
import LakeDay from "../assets/Gallery/LakeDay.jpeg";
import LastDay46 from "../assets/Gallery/LastDay46.jpeg";
import LuffyAndZoro from "../assets/Gallery/LuffyAndZoro.jpg";
import Minnesota from "../assets/Gallery/MinnesotaUSoccer.jpg";
import Outside46 from "../assets/Gallery/Outside46.jpeg";
import OutsideBerlinOlympic from "../assets/Gallery/OutsideBerlinOlympic.jpg";
import PosingWithGnome from "../assets/Gallery/PosingWithGnome.jpeg";
import PromSeniorYear from "../assets/Gallery/PromSeniorYear.jpg";
import SoccerHazy from "../assets/Gallery/SoccerHazy.jpg";
import SpringFormal from "../assets/Gallery/SpringFormal.jpeg";
import Surfing from "../assets/Gallery/Surfing.jpeg";
import Thanksgiving from "../assets/Gallery/Thanksgiving.jpeg";
import TopOfWachusett from "../assets/Gallery/TopOfWachusett.jpeg";
import USOpen from "../assets/Gallery/USOpen.jpeg";
import VictoriaPillar from "../assets/Gallery/VictoriaPillar.jpeg";
import VisitingGrandpa from "../assets/Gallery/VisitngGrandpa.jpg";
import VsWPI from "../assets/Gallery/VsWPI.jpg";
import WakeSurf from "../assets/Gallery/WakeSurf.jpeg";
import Wedding from "../assets/Gallery/Wedding.jpeg";

function Gallery() {
  const [screenSize, setScreenSize] = useState<"small" | "medium" | "large">(
    "large"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setScreenSize("small");
      } else if (width <= 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const [overlayData, setOverlayData] = useState<{
    src: string;
    alt: string;
    description: string;
    textStyle?: React.CSSProperties;
  } | null>(null);

  const handleImageClick = (
    src: string,
    alt: string,
    description: string,
    textStyle?: React.CSSProperties
  ) => {
    setOverlayData({ src, alt, description, textStyle });
  };

  const handleCloseOverlay = () => {
    setOverlayData(null);
  };

  // Helper function to get dynamic width based on screen size
  const getWidth = (defaultWidth: {
    small: string;
    medium: string;
    large: string;
  }) => {
    switch (screenSize) {
      case "small":
        return defaultWidth.small;
      case "medium":
        return defaultWidth.medium;
      case "large":
      default:
        return defaultWidth.large;
    }
  };

  return (
    <div className="page-container-gallery">
      <section id="gallery" className="gallery">
        <br />
        <br />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          style={{ textAlign: "center" }}
        >
          <strong>Welcome to my photo gallery!</strong>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ textAlign: "center" }}
        >
          Click on a photo for more information about the moment.
        </motion.p>
        <br />
        <div className="gallery-grid">
          <LandscapeImage
            src={GreaseMusical}
            alt="Grease the musical"
            delay={0}
            onClick={() =>
              handleImageClick(
                GreaseMusical,
                "Grease the musical",
                "In High School, during my sophomore year, we performed the musical Grease. " +
                  "I played the role of Kenickie, and this photo was from the number 'Greased Lightning'.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "70%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={TwinState}
            alt="After Twin State Game"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                TwinState,
                "Twin State Soccer Game",
                "Following my senior year of High School, I was selected to represent Vermont in the annual Twin State Soccer game between Vermont and New Hampshire. " +
                  "This match pits the best players from the two states against each other the summer following the players' senior year. We won 2-0.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "75%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={AUGang}
            alt="Addison United Teammates meetup after School soccer match"
            delay={0}
            onClick={() =>
              handleImageClick(
                AUGang,
                "Addison United Teammates",
                "My high school club soccer team was made up of players from three different high school's in the area. " +
                  "During the school season, I went to watch the game between the two other schools and caught up with some club teammates and my coach afterwards."
              )
            }
          />
          <PortraitImage
            src={Minnesota}
            alt="At University of Minnesota stadium for an MLS game"
            style={{ objectPosition: "50% 70%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                Minnesota,
                "University of Minnesota",
                "While visiting my older brother out in Minnesota, we attended an MLS game between the New England Revolution and Minnesota United FC. " +
                  "The game took place at the University of Minnesota's Huntington Bank Stadium.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={HighSchoolGrad}
            alt="High School graduation with family"
            delay={0}
            onClick={() =>
              handleImageClick(
                HighSchoolGrad,
                "High School Graduation.",
                "In June 2019, I graduated from high school. Of course, I stopped to take some pictures with my parents and younger brother."
              )
            }
          />
          <LandscapeImage
            src={SoccerHazy}
            alt="Clark University nighttime soccer game 2019"
            delay={0}
            onClick={() =>
              handleImageClick(
                SoccerHazy,
                "VS MIT",
                "During my freshman year of college, we played MIT at home under the lights on a foggy Wednesday night. It made for some cool photos.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "70%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={ArtShow}
            alt="Checking out one of my art pieces that made it into the Worcester College Art Show"
            delay={0}
            onClick={() =>
              handleImageClick(
                ArtShow,
                "Art Show",
                "Aside from majoring in Computer Science, I also did a Studio Art minor. " +
                  "During my senior year I took a drawing class and decided to enter one of my pieces into a Worcester college art show, and it ended up getting selected for the show.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={AwayWPI}
            alt="In action in an away game at WPI"
            delay={0}
            onClick={() =>
              handleImageClick(
                AwayWPI,
                "Away game VS WPI",
                "Action shot from an away game against our inner city rivals, WPI. These games were always some of the most intense."
              )
            }
          />
          <LandscapeImage
            src={BerlinWall}
            alt="At the Berlin Wall"
            delay={0}
            onClick={() =>
              handleImageClick(
                BerlinWall,
                "Visiting the Berlin Wall",
                "In June 2024, I traveled to Berlin, Germany with some friends to attend a Euro's tournament game. " +
                  "We did plenty of site seeing around the historic city while we were there, including visiting various sections of the Berlin Wall shown here.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "70%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={ClarkSeniorDay}
            alt="Clark Soccer senior day tailgate"
            delay={0}
            onClick={() =>
              handleImageClick(
                ClarkSeniorDay,
                "Clark Soccer Senior Day",
                "We always had a tailgate for friends and family after home soccer games. " +
                  "This one was our senior day and my fellow senior players and I are cutting the cake to celebrate out commitment to the team.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "80%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={Hiking}
            alt="Hiking up Camels Hump"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                Hiking,
                "Hiking Camels Hump",
                "My mom is an avid hiker, and one summer I tagged along with her to hike Camels Hump, one of the four 4000+ feet tall mountains in Vermont.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={Outside46}
            alt="Outside apartment freshman year"
            style={{ objectPosition: "50% 70%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                Outside46,
                "Outside apartment freshman year",
                "My friends and I sat outside one of the apartment buildings just off Clark University campus during our freshman year. " +
                  "At the time, upperclassman teammates of ours lived there. Four out of the five of us in this photo ended up living at that apartment at some point down the line.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "70%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={VisitingGrandpa}
            alt="Visit with grandpa"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                VisitingGrandpa,
                "Visit with grandpa",
                "My dad, younger brother, and me visiting my grandfather at his nursing home."
              )
            }
          />
          <PortraitImage
            src={WakeSurf}
            alt="Wake Surfing"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                WakeSurf,
                "Wake Surfing",
                "In the summer of 2024, I went out on Lake Champlain with a couple of friends and tried my hand at wake surfing for the first time.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={PosingWithGnome}
            alt="Skiing with the gnome"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                PosingWithGnome,
                "Skiing with the gnome",
                "While skiing Mad River Glen with my younger brother, we came across a gnome in the trees on the side of a less traveled trail. " +
                  "I decided it would be fun to sit with it and get a picture.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={TopOfWachusett}
            alt="On top of Wachusett Mountain"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                TopOfWachusett,
                "On top of Wachusett Mountain",
                "My buddies and I hiked to the top of Mount Wachusett during our sophomore year of college. " +
                  "This was during the pandemic, so we were always looking for ways to get out of our rooms and get some fresh air.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={PromSeniorYear}
            alt="Senior Prom"
            delay={0}
            onClick={() =>
              handleImageClick(
                PromSeniorYear,
                "Senior Prom",
                "Before my senior prom, my friends and I got creative with our pre-Prom pictures..."
              )
            }
          />
          <LandscapeImage
            src={GolfFam}
            alt="Golf pic with Matteo and Dad"
            delay={0}
            onClick={() =>
              handleImageClick(
                GolfFam,
                "Golf pic with Matteo and Dad",
                "A post-round picture with my older brother and dad after some golf."
              )
            }
          />
          <PortraitImage
            src={Coaching}
            alt="Coaches"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                Coaching,
                "Coaches",
                "In the fall of 2024, I helped coach my former high school's varsity soccer team. " +
                  "An old teammate and friend of mine was coaching one of our school's rival teams. We caught up after the game when our teams faced off.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={LakeDay}
            alt="Coaches"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                LakeDay,
                "Lake Day",
                "My friend Declan and I enjoying a summer day at a friends lake house in early September, 2023.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={GraduationFriends}
            alt="2024 Graduation"
            delay={0}
            onClick={() =>
              handleImageClick(
                GraduationFriends,
                "2024 Graduation",
                "In May 2024, my friends and I graduated from graduate school with our respective Masters/Bachelors degrees."
              )
            }
          />
          <PortraitImage
            src={OutsideBerlinOlympic}
            alt="Coaches"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                OutsideBerlinOlympic,
                "Outside Berlin Olympic Stadium",
                "While in Germany, we went to a Euro's match between Poland and Austria at the Berlin Olympic Stadium.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={CapeCod}
            alt="Cape Cod"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                CapeCod,
                "Cape Cod",
                "My family and I try to spend a week together every year on a summer vacation. One of our favorite spots to go is Cape Cod.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={FieldDays}
            alt="Field Days"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                FieldDays,
                "Field Days",
                "Every summer, the fair visits Addison County VT with 'Field Days'. The summer 2024 edition was a wet one.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={VsWPI}
            alt="Freshman year vs WPI"
            delay={0}
            onClick={() =>
              handleImageClick(
                VsWPI,
                "Freshman year vs WPI",
                "My freshman year, we played WPI at home. It was my first start for an in conference game."
              )
            }
          />
          <LandscapeImage
            src={CoolingOff}
            alt="Cooling off with Bode"
            delay={0}
            onClick={() =>
              handleImageClick(
                CoolingOff,
                "Cooling off with Bode",
                "On a hot summer day, my dog Bode and I decided to cool off using the garden hose. As a labrador, he always loved the water.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={ChurchSt}
            alt="Church Street"
            delay={0}
            onClick={() =>
              handleImageClick(
                ChurchSt,
                "Church Street",
                "Some of my college friends came up to Vermont to visit me in the fall of 2024. We spent a night out in Burlington exploring Church Street.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={BucketHats}
            alt="Bucket Hats"
            delay={0}
            onClick={() =>
              handleImageClick(
                BucketHats,
                "Bucket Hats",
                "We decided to add team Bucket Hats to our player packages. Safe to say they were a hit."
              )
            }
          />
          <PortraitImage
            src={BerlinWatch}
            alt="Berlin Watch Party"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                BerlinWatch,
                "Berlin Watch Party",
                "While in Berlin, my friends and I went to a watch party for Germany's match vs Switzerland in the Tiergarten just behind the famous Brandenburg Gate.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={CliffJumping}
            alt="Cliff Jumping"
            style={{ objectPosition: "50% 25%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                CliffJumping,
                "Cliff Jumping",
                "Vermont has lots of great swimming holes and cliff jumping spots during the summer. This is one of my favorite spots hidden away in the woods. " +
                  "This is at Belden Falls, just north of Middlebury.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={Thanksgiving}
            alt="Thanksgiving with Family"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                Thanksgiving,
                "Thanksgiving with Family",
                "During Thanksgiving, my family tends to gather together. This is with my aunt, uncle and cousin.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={DeepSea}
            alt="Deepsea Fishing"
            style={{ objectPosition: "50% 20%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                DeepSea,
                "Deepsea Fishing",
                "While on the Cape, my family and I went fishing off the coast of Provincetown where we caught striped bass and bluefish.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={LuffyAndZoro}
            alt="Halloween"
            style={{ objectPosition: "50% 40%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                LuffyAndZoro,
                "Halloween",
                "My friend Caleb and I dressed up as the characters Luffy and Zoro from the famous anime 'One Piece' for Halloween sophomore year.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={EmmaWeddingInside}
            alt="Emma's Wedding Inside"
            delay={0}
            onClick={() =>
              handleImageClick(
                EmmaWeddingInside,
                "Emma's Wedding Inside",
                "In the summer of 2024, one of my longtime childhood friends, Emma, got married! Some other friends and I were there to celebrate."
              )
            }
          />
          <LandscapeImage
            src={GradParty}
            alt="Grad Party"
            delay={0}
            onClick={() =>
              handleImageClick(
                GradParty,
                "Grad Party",
                "After graduating from undergrad college in 2023, some of my best friends and I had a grad party to celebrate all of our accomplishments.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={LastDay46}
            alt="Last Day at 46"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                LastDay46,
                "Last Day at 46",
                "In the spring of 2024, after three years at our first apartment together, my friend Ethan and I took a final picture on the same steps we took " +
                  "our group photo on from freshman year. Then we said goodbye to the building for the last time."
              )
            }
          />
          <PortraitImage
            src={HighSchoolGradBanner}
            alt="Unveiling Track Banner"
            style={{ objectPosition: "50% 70%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                HighSchoolGradBanner,
                "Unveiling Track Banner",
                "At graduation, my teammates and I unveiled one of our two 4x400 meter state championship banners we earned during that school year.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={Surfing}
            alt="Surfing"
            delay={0}
            onClick={() =>
              handleImageClick(
                Surfing,
                "Surfing",
                "Action shot from my day out surfing with my friend Steve."
              )
            }
          />
          <LandscapeImage
            src={SpringFormal}
            alt="Spring Formal"
            delay={0}
            onClick={() =>
              handleImageClick(
                SpringFormal,
                "Spring Formal",
                "Our soccer team hosted a spring soccer formal at our apartment."
              )
            }
          />
          <LandscapeImage
            src={InsideOlympic}
            alt="Inside the Berlin Olympic Stadium"
            delay={0}
            onClick={() =>
              handleImageClick(
                InsideOlympic,
                "Inside the Berlin Olympic Stadium",
                "My friend Connor and I inside the Berlin Olympic Stadium for the Poland vs Austria Euro's match."
              )
            }
          />
          <LandscapeImage
            src={HighSchoolGradFriends}
            alt="High School Graduation with friends."
            delay={0}
            onClick={() =>
              handleImageClick(
                HighSchoolGradFriends,
                "High School Graduation with friends.",
                "Former Vergennes High School students came and supported myself and others at our own graduation."
              )
            }
          />
          <PortraitImage
            src={Golfing}
            alt="Golfing with Clark teammates"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                Golfing,
                "Golfing with Clark teammates",
                "During the soccer season, we would normally get one day off a week. Sometimes, a few of us would go golfing at a course nearby.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={VictoriaPillar}
            alt="Victoria Pillar"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                VictoriaPillar,
                "Victoria Pillar",
                "Further into the park where we attended the watch party for the Germany vs Switzerland match, " +
                  "is the Victory Column with a statue of the Roman Goddess Victoria at the top.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={Boston}
            alt="Boston Trip"
            style={{ objectPosition: "50% 10%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                Boston,
                "Boston Trip",
                "One of the benefits of being in the school band is that we got to go on band trips during the school year. " +
                  "One year we went to Boston. This is at Quincy Market.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "70%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={Killington}
            alt="Killington Mountain Skiing"
            delay={0}
            onClick={() =>
              handleImageClick(
                Killington,
                "Killington Mountain Skiing",
                "Sometimes myself or my friend Steve will whip out the GoPro while we are skiing. It makes for some cool shots."
              )
            }
          />
          <LandscapeImage
            src={Wedding}
            alt="Evan and Eliza's Wedding"
            delay={0}
            onClick={() =>
              handleImageClick(
                Wedding,
                "Evan and Eliza's Wedding",
                "In the summer of 2024, my cousin Evan got married. My whole family, including my brother's fiancé, were in attendance."
              )
            }
          />
          <LandscapeImage
            src={GraduationFam}
            alt="Master's Graduation"
            delay={0}
            onClick={() =>
              handleImageClick(
                GraduationFam,
                "Master's Graduation",
                "This was the second graduation in a years time that forced my parents to drive down to Worcester. " +
                  "Does this technically count as my last day of school?",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={CapePlayground}
            alt="Cape Cod playground"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                CapePlayground,
                "Cape Cod playground",
                "It doesn't matter how old you get, playgrounds are always fun, especially on Cape Cod.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "70%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={ClarkMedia}
            alt="Clark soccer media day"
            style={{ objectPosition: "50% 35%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                ClarkMedia,
                "Clark soccer media day",
                "Clark Mens Soccer media day during my junior year.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={GolfJayPeak}
            alt="Golf at Jay Peak"
            style={{ objectPosition: "50% 35%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                GolfJayPeak,
                "Golf at Jay Peak",
                "While at my cousin's wedding, my dad and I had the opportunity to play the beautiful Jay Peak Golf Course.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={BrosAndCousins}
            alt="Harrison and Henry visiting"
            delay={0}
            onClick={() =>
              handleImageClick(
                BrosAndCousins,
                "Harrison and Henry visiting",
                "In 2022, my cousins and their parents flew over from California to visit us in Vermont.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={ClarkFooty}
            alt="Footy at Colby-Sawyer College"
            delay={0}
            onClick={() =>
              handleImageClick(
                ClarkFooty,
                "Footy at Colby-Sawyer College",
                "We traveled all around the northeast for soccer games. This pic is from an away game at Colby-Sawyer College in New Hampshire.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={EmmaWeddingOutside}
            alt="Emma's Wedding Outside"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                EmmaWeddingOutside,
                "Emma's Wedding Outside",
                "Another shot from my friend Emma's wedding as we are walking into the venue.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <LandscapeImage
            src={USOpen}
            alt="US Open"
            delay={0}
            onClick={() =>
              handleImageClick(
                USOpen,
                "US Open",
                "In 2022, I was working at Worcester Country Club. The US Open golf tournament was being held at Brookline Country Club in Brookline, " +
                  "MA that summer. My boss was able to get myself and a coworker two tickets to the event."
              )
            }
          />
          <PortraitImage
            src={EurosFest}
            alt="Euros Fest"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                EurosFest,
                "Euros Fest",
                "Berlin was going all out for the Euro's, including a massive fan fest zone. We went and watched a game at the fan fest.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
          <PortraitImage
            src={GolfSteve}
            alt="Golf with Steve"
            style={{ objectPosition: "50% 20%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                GolfSteve,
                "Golf with Steve",
                "My dad, younger brother, and I played a round of golf with my friend Steve when he came up to Vermont to visit. " +
                  "This was at Basin Harbor Golf Club, where I had worked for 3 years when I was younger.",
                {
                  width: getWidth({
                    small: "90%",
                    medium: "90%",
                    large: "60%",
                  }),
                }
              )
            }
          />
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
      {overlayData && (
        <ImageOverlay
          src={overlayData.src}
          alt={overlayData.alt}
          description={overlayData.description}
          onClose={handleCloseOverlay}
          textStyle={overlayData.textStyle}
        />
      )}
    </div>
  );
}

export default Gallery;
