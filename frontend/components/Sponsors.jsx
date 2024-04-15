import { useEffect } from "react";
import SponsorData from "../data/data";
import "../styles/sponsor.css";
import { GoArrowRight } from "react-icons/go";
import Footer from "./Footer";

const Sponsors = () => {
  console.log(SponsorData);

  // useEffect(() => {
  //     gsap.fromTo(".card",{
  //         scale:0,
  //         opacity:0
  //     },{
  //         scale:1,
  //         opacity:1,
  //         duration:1,
  //         stagger:0.5,
  //         scrollTrigger:{
  //           trigger:".cardWrapper",
  //           // markers:true,
  //           toggleActions:"restart none none none"}
  //       })
  // },[])

  return (
    <>
      <h1>Sponsors</h1>
      <div
        className="cardWrapper"
        style={
          window.innerHeight > window.innerWidth
            ? {
                flexDirection: "column",
                flexWrap: "nowrap",
              }
            : null
        }
      >
        {SponsorData.map((Sponsor) => {
          return (
            <div
              className="card"
              key={Sponsor.id}
              style={
                window.innerHeight > window.innerWidth
                  ? { width: "90%", alignSelf: "center" }
                  : null
              }
            >
              <div className="imgDiv">
                <img
                  src={Sponsor.img}
                  style={{
                    height: "53vh",
                    width: "100%",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                ></img>
                <p>{Sponsor.name}</p>
              </div>
              <div className="glassDiv">
                <div
                  style={
                    window.innerHeight > window.innerWidth
                      ? { height: "16vh", width: "16vh" }
                      : null
                  }
                >
                  <GoArrowRight
                    id="arrow"
                    style={{
                      color: "black",
                      width: "45%",
                      height: "45%",
                      marginTop: "25%",
                    }}
                  />
                </div>
                {/* <img src={img} style={{height:"35vh",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}></img> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sponsors;
