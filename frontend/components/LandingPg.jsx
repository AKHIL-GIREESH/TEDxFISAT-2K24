import { useEffect, useRef } from "react";
import Scroll from "../data/assets/ScrollDown2.gif";
import LogoVideo from "../data/assets/LogoVideo1.mp4";
import MapGif from "../data/assets/Location1.gif";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import DC from "./DisappearingContainers";
import "../styles/landingpg.css";
import About from "./About";
import Video from "./video";
import Speakers from "./SpeakersMain";
import Ticket from "./Ticket";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
gsap.registerPlugin(ScrollTrigger);

const LandingPg = () => {
  useEffect(() => {
    gsap.to(".bottom-layer", {
      padding: "15vw 0vw",
      //  paddingTop:"50vh",
      marginLeft: "0px",
      width: "100vw",
      duration: 0.3,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,

      scrollTrigger: {
        trigger: ".bottom-layer",
        start: "top 60%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
        toggleActions: "reverse none none reverse",
      },
    });

    gsap.fromTo(
      ".Navbarbg",
      {
        y: -400,
      },
      {
        y: 0,
        duration: 1,
        delay: 2,
      }
    );
  }, []);
  //const cursorblobRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".Navbarbg",
  //     {
  //       y: -400,
  //       opacity: 0.8,
  //     },
  //     {
  //       y: 0,
  //       duration: 1,
  //       delay: 3,
  //       opacity: 1,
  //       // backgroundColor:"black",
  //       scrollTrigger: {
  //         trigger: "#disapperaingContainer",
  //         // start:"80% 50%",
  //         // end:"bottom -100%",
  //         // scrub:true,
  //         // markers:true,
  //         toggleActions: "restart none none none",
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     "#zoom",
  //     {
  //       opacity: 0.8,
  //       scale: 0,
  //     },
  //     {
  //       opacity: 1,
  //       scale: 9,
  //       // backgroundColor:"black",
  //       scrollTrigger: {
  //         trigger: "#zoom",
  //         start: "80% 50%",
  //         end: "bottom -100%",
  //         scrub: true,
  //         // markers:true,
  //         toggleActions: "restart none none none",
  //       },
  //     }
  //   );

  //   gsap.to(".bottom-layer", {
  //     padding: "15vw 0vw",
  //     //  paddingTop:"50vh",
  //     marginLeft: "0px",
  //     width: "100vw",
  //     duration: 0.3,
  //     borderTopLeftRadius: 0,
  //     borderTopRightRadius: 0,

  //     scrollTrigger: {
  //       trigger: ".bottom-layer",
  //       start: "top 60%",
  //       end: "top 0%",
  //       scrub: 1,
  //       // markers: true,
  //       toggleActions: "reverse none none reverse",
  //     },
  //   });

  // const tlLP = gsap.timeline();

  // tlLP.fromTo('.titleContainer3',{
  //   y:"-200%"
  // },{
  //   y:'-300%',
  //   delay:2.2,
  //   duration:1
  // })

  // tlLP.fromTo('#X',{
  //   backgroundColor:"red",
  //   color:"black"
  // },{
  //   backgroundColor:"rgba(255, 0, 0,0)",
  //   color:"red",
  //   duration:0.2
  // })

  // tlLP.fromTo('.titleContainer2',{
  //   y:"-100%",
  //   x:'-75%',
  // },{
  //   x:0,
  //   duration:1
  // })

  // gsap.fromTo('.TED',{
  //   opacity:0,
  //   scale:0
  // },{
  //   scale:1,
  //   delay:3.6,
  //   duration:0.7,
  //   opacity:1,
  //   stagger:{
  //     amount:0.3,
  //     from:'end'
  //   },
  // })
  // }, []);

  // useEffect(() => {
  //   if (window.innerHeight < window.innerWidth) {
  //     const tlLP = gsap.timeline();
  //     tlLP.fromTo(
  //       "#titleWrapper",
  //       {
  //         y: "-100%",
  //       },
  //       {
  //         y: "-200%",
  //         duration: 1,
  //         delay: 2.2,
  //       }
  //     );

  //     tlLP.to("#title", {
  //       backgroundColor: "black",
  //       color: "red",
  //       duration: 0.2,
  //     });

  //     tlLP.fromTo(
  //       "#title",
  //       {
  //         x: "-76%",
  //       },
  //       {
  //         x: 0,
  //         duration: 1,
  //       }
  //     );

  //     gsap.fromTo(
  //       ".TEDD",
  //       {
  //         opacity: 0,
  //         scale: 0,
  //       },
  //       {
  //         scale: 1,
  //         delay: 3.4,
  //         duration: 0.7,
  //         opacity: 1,
  //         stagger: {
  //           amount: 0.3,
  //           from: "end",
  //         },
  //       }
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   const cursorBlob = cursorblobRef.current;

  //   const handleMouseMove = (e) => {
  //     const x = e.clientX - cursorBlob.clientWidth / 2;
  //     const y = e.clientY - cursorBlob.clientHeight / 2;

  //     gsap.to(cursorBlob, {
  //       duration: 0.8,
  //       left: x,
  //       top: y,
  //     });
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  //X popping up and then the whole thing pops up from left n moves to the right

  return (
    <>
      {/* <div id='cursorblob' style={{position:"fixed",backgroundColor:"rgba(255, 0,0, 1)",boxShadow:"0 0 10px black",width:"100px",height:"100px",zIndex:5,top:50,left:50,borderRadius:"50%"}} ref={cursorblobRef}></div> */}
      {/* <DC /> */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: -1,
          overflow: "hidden",
          position: "sticky",
          top: 0,
        }}
      >
        <div
          style={{
            height: window.innerHeight < window.innerWidth ? "15vh" : "10vh",
            width: "100vw",
            backgroundColor: "black",
          }}
        ></div>
        <div
          style={{
            height: window.innerHeight < window.innerWidth ? "70vh" : "80vh",
            width: "100vw",
            display: "flex",
            flexDirection:
              window.innerHeight < window.innerWidth ? "row" : "column",
          }}
        >
          <div
            style={
              window.innerHeight < window.innerWidth
                ? {
                    height: "70%",
                    width: "45%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                : {
                    height: "30%",
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }
            }
          >
            <p style={{ fontSize: "3.5rem", fontWeight: "800", margin: 0 }}>
              <span style={{ color: "red" }}>TEDx</span>FISAT
            </p>
            {/* {window.innerHeight < window.innerWidth ? (
              <div
                style={
                  window.innerHeight < window.innerWidth
                    ? {
                        display: "flex",
                        fontSize: "6rem",
                        margin: 0,
                        padding: 0,
                      }
                    : {
                        display: "flex",
                        fontSize: "3rem",
                        margin: 0,
                        padding: 0,
                      }
                }
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "12vw",
                    maxWidth: "20vw",
                    overflow: "hidden",
                  }}
                >
                  <div
                    id="title"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "800",
                      backgroundColor: "red",
                      color: "black",
                      minWidth: "100%",
                      minHeight: "100%",
                      transform: "translateX(-76%)",
                    }}
                  >
                    <div className="TEDD">T</div>
                    <div className="TEDD">E</div>
                    <div className="TEDD">D</div>
                    <div>x</div>
                  </div>
                  <div
                    id="titleWrapper"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      backgroundColor: "black",
                    }}
                  ></div>
                </div>
                <div>FISAT</div>
              </div>
            ) : (
              <p style={{ fontSize: "3.5rem", fontWeight: "800", margin: 0 }}>
                <span style={{ color: "red" }}>TEDx</span>FISAT
              </p>
            )} */}
            <p
              style={
                window.innerHeight < window.innerWidth
                  ? {
                      fontSize: "2rem",
                      margin: 0,
                      padding: 0,
                      fontWeight: "500",
                    }
                  : {
                      fontSize: "1.4rem",
                      margin: 0,
                      padding: 0,
                      fontWeight: "500",
                    }
              }
            >
              16th APRIL 2024
            </p>
            <div
              style={{
                display: "flex",
                width: window.innerHeight < window.innerWidth ? "100%" : "70%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={MapGif} style={{ height: "40px" }} />
              <p
                style={
                  window.innerHeight < window.innerWidth
                    ? {
                        fontSize: "1.12rem",
                        margin: 0,
                        padding: 0,
                        fontWeight: "500",
                      }
                    : {
                        fontSize: "1rem",
                        margin: 0,
                        padding: 0,
                        fontWeight: "500",
                      }
                }
              >
                FISAT,Angamaly
              </p>
            </div>
          </div>
          <div
            style={
              window.innerHeight < window.innerWidth
                ? { height: "115%", width: "55%", overflow: "hidden" }
                : { height: "60vh", width: "100%", overflow: "hidden" }
            }
          >
            <video
              src={LogoVideo}
              alt="Logo"
              style={{ width: "100%", height: "100%", transform: "scale(1.8)" }}
              autoPlay
              muted
              loop
            />
          </div>
        </div>
        <div
          style={
            window.innerHeight < window.innerWidth
              ? {
                  height: "15vh",
                  width: "45vw",
                  textAlign: "center",
                  transform: "translateY(-15vh)",
                  zIndex: 3,
                }
              : {
                  height: "15vh",
                  width: "100vw",
                  textAlign: "center",
                  zIndex: 3,
                }
          }
        >
          <Link
            to="/Register"
            style={{
              color: "white",
              textDecoration: "none",
              backgroundColor: "rgb(110, 110, 110)",
              zIndex: 3,
              padding: "2%",
              borderRadius: "5px",
              fontWeight: "600",
              fontSize: "1rem",
            }}
          >
            REGISTERATIONS CLOSED
          </Link>
          {/* <button onClick={() => console.log("clicked")}>B</button> */}
        </div>
        {/* <div
          id="zoom"
          style={{
            clipPath: "circle(10% at 50% 50%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 20px white",
          }}
        ></div> */}
      </div>
      <Video />
      <About />
      <br />
      <Speakers />
      <Ticket />
      {/* <Footer /> */}
      {/* <div style={{padding:0,margin:0,height:"100vh",color:"black"}}>
        <h1>Page 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> */}
    </>
  );
};

export default LandingPg;
