import { useState } from "react";
import LandscapeImage from "./Images/LandscapeImage";
import PortraitImage from "./Images/PortraitImage";
import ImageOverlay from "./Images/ImageOverlay";
import "../styling/Gallery.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
            src="src/assets/Gallery/Grease.JPG"
            alt="Grease the musical"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/Grease.JPG",
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
            src="src/assets/Gallery/TwinStateTrophy.JPG"
            alt="After Twin State Game"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/TwinStateTrophy.JPG",
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
            src="src/assets/Gallery/AUGang.jpg"
            alt="Addison United Teammates meetup after School soccer match"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/AUGang.jpg",
                "Addison United Teammates",
                "My high school club soccer team was made up of players from three different high school's in the area. " +
                  "During the school season, I went to watch the game between the two other schools and caught up with some club teammates and my coach afterwards."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/MinnesotaUSoccer.JPG"
            alt="At University of Minnesota stadium for an MLS game"
            style={{ objectPosition: "50% 70%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/MinnesotaUSoccer.JPG",
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
            src="src/assets/Gallery/HighSchoolGraduation.jpeg"
            alt="High School graduation with family"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/HighSchoolGraduation.jpeg",
                "High School Graduation.",
                "In June 2019, I graduated from high school. Of course, I stopped to take some pictures with my parents and younger brother."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/SoccerHazy.JPG"
            alt="Clark University nighttime soccer game 2019"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/SoccerHazy.JPG",
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
            src="src/assets/Gallery/ArtShow.jpeg"
            alt="Checking out one of my art pieces that made it into the Worcester College Art Show"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/ArtShow.jpeg",
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
            src="src/assets/Gallery/AwayVsWPI.JPG"
            alt="In action in an away game at WPI"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/AwayVsWPI.JPG",
                "Away game VS WPI",
                "Action shot from an away game against our inner city rivals, WPI. These games were always some of the most intense."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/BerlinWall.jpeg"
            alt="At the Berlin Wall"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/BerlinWall.jpeg",
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
            src="src/assets/Gallery/ClarkSoccerSenior Day.jpeg"
            alt="Clark Soccer senior day tailgate"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/ClarkSoccerSenior Day.jpeg",
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
            src="src/assets/Gallery/HikingCamelsHump.jpeg"
            alt="Hiking up Camels Hump"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/HikingCamelsHump.jpeg",
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
            src="src/assets/Gallery/Outside46.jpeg"
            alt="Outside apartment freshman year"
            style={{ objectPosition: "50% 70%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/Outside46.jpeg",
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
            src="src/assets/Gallery/VisitngGrandpa.jpg"
            alt="Visit with grandpa"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/VisitngGrandpa.jpg",
                "Visit with grandpa",
                "My dad, younger brother, and me visiting my grandfather at his nursing home."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/WakeSurf.jpeg"
            alt="Wake Surfing"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/WakeSurf.jpeg",
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
            src="src/assets/Gallery/PosingWithGnome.jpeg"
            alt="Skiing with the gnome"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/PosingWithGnome.jpeg",
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
            src="src/assets/Gallery/TopOfWachusett.jpeg"
            alt="On top of Wachusett Mountain"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/TopOfWachusett.jpeg",
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
            src="src/assets/Gallery/PromAvengers.JPG"
            alt="Senior Prom"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/PromAvengers.JPG",
                "Senior Prom",
                "Before my senior prom, my friends and I got creative with our pre-Prom pictures..."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/GolfWithFam.jpeg"
            alt="Golf pic with Matteo and Dad"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/GolfWithFam.jpeg",
                "Golf pic with Matteo and Dad",
                "A post-round picture with my older brother and dad after some golf."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/Coaching.jpeg"
            alt="Coaches"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/Coaching.jpeg",
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
            src="src/assets/Gallery/LakeDay.jpeg"
            alt="Coaches"
            style={{ objectPosition: "50% 30%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/LakeDay.jpeg",
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
            src="src/assets/Gallery/GraduationFriends2024.jpeg"
            alt="2024 Graduation"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/GraduationFriends2024.jpeg",
                "2024 Graduation",
                "In May 2024, my friends and I graduated from graduate school with our respective Masters/Bachelors degrees."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/OutsideBerlinOlympic.JPG"
            alt="Coaches"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/OutsideBerlinOlympic.JPG",
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
            src="src/assets/Gallery/CapeCod.jpeg"
            alt="Cape Cod"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/CapeCod.jpeg",
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
            src="src/assets/Gallery/FieldDays.jpeg"
            alt="Field Days"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/FieldDays.jpeg",
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
            src="src/assets/Gallery/VsWPI.JPG"
            alt="Freshman year vs WPI"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/VsWPI.JPG",
                "Freshman year vs WPI",
                "My freshman year, we played WPI at home. It was my first start for an in conference game."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/CoolingOffWithBode.JPG"
            alt="Cooling off with Bode"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/CoolingOffWithBode.JPG",
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
            src="src/assets/Gallery/ChurchSt.jpeg"
            alt="Church Street"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/ChurchSt.jpeg",
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
            src="src/assets/Gallery/BucketHats.JPG"
            alt="Bucket Hats"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/BucketHats.JPG",
                "Bucket Hats",
                "We decided to add team Bucket Hats to our player packages. Safe to say they were a hit."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/BerlinWatchParty.JPG"
            alt="Berlin Watch Party"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/BerlinWatchParty.JPG",
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
            src="src/assets/Gallery/CliffJumping.jpeg"
            alt="Cliff Jumping"
            style={{ objectPosition: "50% 25%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/CliffJumping.jpeg",
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
            src="src/assets/Gallery/Thanksgiving.jpeg"
            alt="Thanksgiving with Family"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/Thanksgiving.jpeg",
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
            src="src/assets/Gallery/DeepSeaFishing.jpeg"
            alt="Deepsea Fishing"
            style={{ objectPosition: "50% 20%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/DeepSeaFishing.jpeg",
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
            src="src/assets/Gallery/LuffyAndZoro.jpg"
            alt="Halloween"
            style={{ objectPosition: "50% 40%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/LuffyAndZoro.jpg",
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
            src="src/assets/Gallery/EmmasWeddingInside.jpeg"
            alt="Emma's Wedding Inside"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/EmmasWeddingInside.jpeg",
                "Emma's Wedding Inside",
                "In the summer of 2024, one of my longtime childhood friends, Emma, got married! Some other friends and I were there to celebrate."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/GradParty.JPG"
            alt="Grad Party"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/GradParty.JPG",
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
            src="src/assets/Gallery/LastDay46.jpeg"
            alt="Last Day at 46"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/LastDay46.jpeg",
                "Last Day at 46",
                "In the spring of 2024, after three years at our first apartment together, my friend Ethan and I took a final picture on the same steps we took " +
                  "our group photo on from freshman year. Then we said goodbye to the building for the last time."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/HighSchoolGraduationBanner.JPG"
            alt="Unveiling Track Banner"
            style={{ objectPosition: "50% 70%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/HighSchoolGraduationBanner.JPG",
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
            src="src/assets/Gallery/Surfing.jpeg"
            alt="Surfing"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/Surfing.jpeg",
                "Surfing",
                "Action shot from my day out surfing with my friend Steve."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/SpringFormal.jpeg"
            alt="Spring Formal"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/SpringFormal.jpeg",
                "Spring Formal",
                "Our soccer team hosted a spring soccer formal at our apartment."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/InsideBerlinOlympic.jpeg"
            alt="Inside the Berlin Olympic Stadium"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/InsideBerlinOlympic.jpeg",
                "Inside the Berlin Olympic Stadium",
                "My friend Connor and I inside the Berlin Olympic Stadium for the Poland vs Austria Euro's match."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/HighSchoolGraduationFriends.JPG"
            alt="High School Graduation with friends."
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/HighSchoolGraduationFriends.JPG",
                "High School Graduation with friends.",
                "Former Vergennes High School students came and supported myself and others at our own graduation."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/Golfing.JPG"
            alt="Golfing with Clark teammates"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/Golfing.JPG",
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
            src="src/assets/Gallery/VictoriaPillar.jpeg"
            alt="Victoria Pillar"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/VictoriaPillar.jpeg",
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
            src="src/assets/Gallery/BostonTrip.jpg"
            alt="Boston Trip"
            style={{ objectPosition: "50% 10%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/BostonTrip.jpg",
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
            src="src/assets/Gallery/KillingtonSki.JPG"
            alt="Killington Mountain Skiing"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/KillingtonSki.JPG",
                "Killington Mountain Skiing",
                "Sometimes myself or my friend Steve will whip out the GoPro while we are skiing. It makes for some cool shots."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/Wedding.jpeg"
            alt="Evan and Eliza's Wedding"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/Wedding.jpeg",
                "Evan and Eliza's Wedding",
                "In the summer of 2024, my cousin Evan got married. My whole family, including my brother's fiancé, were in attendance."
              )
            }
          />
          <LandscapeImage
            src="src/assets/Gallery/GraduationFam2024.jpeg"
            alt="Master's Graduation"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/GraduationFam2024.jpeg",
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
            src="src/assets/Gallery/CapeCodPlayground.jpg"
            alt="Cape Cod playground"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/CapeCodPlayground.jpg",
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
            src="src/assets/Gallery/ClarkMediaDay.JPG"
            alt="Clark soccer media day"
            style={{ objectPosition: "50% 35%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/ClarkMediaDay.JPG",
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
            src="src/assets/Gallery/GolfJayPeak.jpeg"
            alt="Golf at Jay Peak"
            style={{ objectPosition: "50% 35%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/GolfJayPeak.jpeg",
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
            src="src/assets/Gallery/BrosAndCousins.jpeg"
            alt="Harrison and Henry visiting"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/BrosAndCousins.jpeg",
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
            src="src/assets/Gallery/ClarkFooty.JPG"
            alt="Footy at Colby-Sawyer College"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/ClarkFooty.JPG",
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
            src="src/assets/Gallery/EmmasWeddingOutside.JPG"
            alt="Emma's Wedding Outside"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/EmmasWeddingOutside.JPG",
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
            src="src/assets/Gallery/USOpen.jpeg"
            alt="US Open"
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/USOpen.jpeg",
                "US Open",
                "In 2022, I was working at Worcester Country Club. The US Open golf tournament was being held at Brookline Country Club in Brookline, " +
                  "MA that summer. My boss was able to get myself and a coworker two tickets to the event."
              )
            }
          />
          <PortraitImage
            src="src/assets/Gallery/EurosFest.jpeg"
            alt="Euros Fest"
            style={{ objectPosition: "50% 50%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/EurosFest.jpeg",
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
            src="src/assets/Gallery/GolfWithFamAndSteve.jpeg"
            alt="Golf with Steve"
            style={{ objectPosition: "50% 20%" }}
            delay={0}
            onClick={() =>
              handleImageClick(
                "src/assets/Gallery/GolfWithFamAndSteve.jpeg",
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
