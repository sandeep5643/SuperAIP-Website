import React from "react";
import "../css/FlipCard.css";

const products = [
  {
    name: "AgentCORE",
    descrption: "AgentCORE is designed to transform how enterprises automate their workflows by building, training, and deploying intelligent AI agents.",
    frontImage: "https://backend.coreops.ai/wp-content/uploads/2025/06/AGENTCORE-gif.gif",
    backTitle: "Product 1 Details",
    backDescription: "High-quality product perfect for daily use."
  },
  {
    name: "AgentCORE",
    descrption: "AgentCORE is designed to transform how enterprises automate their workflows by building, training, and deploying intelligent AI agents.",
    frontImage: "https://backend.coreops.ai/wp-content/uploads/2025/06/CORESIGHT-gif.gif",
    backTitle: "Product 2 Details",
    backDescription: "Premium features with excellent performance."
  },
  {
    name: "AgentCORE",
    descrption: "AgentCORE is designed to transform how enterprises automate their workflows by building, training, and deploying intelligent AI agents.",
    frontImage: "https://backend.coreops.ai/wp-content/uploads/2025/06/DATACORE-gif.gif",
    backTitle: "Product 3 Details",
    backDescription: "A must-have product loved by our customers."
  }
];

const FlipCard = () => {
  return (
   <div>
  <section className="flipcard">
    <div className="container">
       {/* /* <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="partnertext_section">
                <h2>Organizations That Believe In Us</h2>
                <p>Strategic alliances that accelerate innovation, ensure scalability, and power enterprise-grade AI delivery.</p>
                </div>
                </div>*/ }
           
      <div className="row justify-content-left">
        {products.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front">
                  <img src={product.frontImage} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.descrption}</p>
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  <h3>{product.backTitle}</h3>
                  <p>{product.backDescription}</p>
                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  <br /><br/> <br /><br/> <br /><br/> <br /><br/>
</div>
   
  );
};

export default FlipCard;