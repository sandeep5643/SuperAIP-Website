import { useState } from "react";
import styles from "../css/SecondSection.module.css";


function SecondSection() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Enabling organizational efficiencies",
      content: [
        "Automates model selection to reduce trial-and-error cycles",
        "Enables automatic logging and full experiment versioning for reproducibility",
        "Facilitates seamless collaboration with centralized sharing tools",
      ],
    },
    {
      id: 2,
      title: "Accelerating AI innovation",
      content: [
        "Streamlines AI experimentation and deployment",
        "Integrates multiple ML frameworks in one platform",
        "Improves productivity for data scientists and engineers",
      ],
    },
    {
      id: 3,
      title: "Driving business growth",
      content: [
        "Helps enterprises extract insights from data faster",
        "Reduces operational inefficiencies",
        "Enables AI-driven decision making",
      ],
    },
  ];

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div> 

 <br/><br/><br/><br/>
      <section className={styles.secondSection1} background="#f5f5f5" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container" >

         
          <div className="row mb-5">
            <div className="col-lg-8 col-12">
              <h2
                style={{
                  color: "rgb(19, 41, 118)",
                  marginBottom: "20px",
                  fontSize: "45px",
                  fontWeight: "lighter",
                }}
              >
                Powering possibilities, delivering value.
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                From fragmented workflows to collaboration gaps, enterprises
                struggle to achieve their business outcomes with AI/ML. We offer
                scalable AI solutions across 3 core dimensions of an enterprise.
              </p>
            </div>
          </div>

          <div className="row">

            {/* Left Content */}
            <div className="col-lg-8 col-12">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "24px",
                  padding: "60px 40px",
                  boxShadow: "rgb(197, 205, 231) 0px 0px 4px 0px",
                }}
              >
                <h4>{activeContent.title}</h4>

                {activeContent.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>

            {/* Right Tabs */}
            <div className="col-lg-4 col-12">
              <div  className={styles.TABBTNS}>
                   {tabs.map((tab) => (
                <h6
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    fontSize: "22px",
                    marginBottom: "20px",
                    cursor: "pointer",
                    color: activeTab === tab.id ? "#fff" : "#000",
                    fontWeight: activeTab === tab.id ? "600" : "400",
                    borderRadius: "24px",
                    background:
                      activeTab === tab.id ? "rgb(25,54,157)" : "#e5e5e5",
                    padding: "25px 21px",
                    transition: "0.3s ease",
                  }}
                >
                  {tab.id}. {tab.title}
                </h6>
              ))}
              </div>
           
            </div>

          </div>
        </div>
      </section>

     
    </div>
  );
}

export default SecondSection;