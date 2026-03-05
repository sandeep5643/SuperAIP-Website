import React from "react"; 
import  "../css/Herosection.module.css";
function Herosection() {
  return ( 
        <section className="hero_text"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Background Video */}
      <video
        src="/videos/super_aip_video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -2,
          backgroundImage: "url(/home_bnr_bg_Edited.png)",
          backgroundSize: "cover",
          backgroundPosition: "50% center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: -1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1 ,    zIndex: 1}}>
          <h1 style={{ fontSize: "90px",
    lineHeight: "90px",
    color: "#132976", 
    marginBottom: "20px",fontFamily: "Segoe UI", 
    fontWeight: "lighter"}}>
          Applied Artificial Intelligence through data and AI
          </h1>
          <p style={{    fontSize: "22px",
    color: "#000",
    fontFamily: "Segoe UI"}}>
            Modernize systems, automate operations and activate data 2X faster through our AI-driven platform.
          </p>
          <div className="btn_div d-flex justify-content-left align-items-center mt-4">
            <div className="bnr_btn_home">
              <button
            style={{
              padding: "10px 20px",
    background: "#19369D",
    color: "#fff",
    borderRadius: "8px",
    maxWidth: "max-content",
    border: "none",
    cursor: "pointer"
            }}
          >
            Get Started
          </button>
            </div>
          </div>
          
        </div>

        {/* Right Blank Side */}
        <div style={{ flex: 1 }} />
      </div>
    </section>
    
  
  );
}

export default Herosection;