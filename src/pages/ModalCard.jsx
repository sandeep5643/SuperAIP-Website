import React, { useState, useEffect } from "react";
import styles from "../css/Partnerships.module.css";

const products = [
  {
    name: "Product 1", 
    image: "https://backend.coreops.ai/wp-content/uploads/2025/05/entrp_innovation.png",
  },
  {
    name: "Product 2", 
  image: "https://backend.coreops.ai/wp-content/uploads/2025/05/entrp_innovation.png",
  },
  {
    name: "Product 3", 
    image: "https://backend.coreops.ai/wp-content/uploads/2025/05/entrp_innovation.png",
  },
  {
    name: "Product 41", 
   image: "https://backend.coreops.ai/wp-content/uploads/2025/05/entrp_innovation.png",
  },
];

const PopupModal = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = activeModal !== null ? "hidden" : "auto";
  }, [activeModal]);

  return (
    <div>
         <section className={styles.partnersection}>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-sm-12 col-md-12'>
                  <div className="cccccc"> 
                    <div className='partnertext_section'>
                        <h2>Powering the future of enterprise transformation</h2>
                        <p>Strategic alliances that accelerate innovation, ensure scalability, and power enterprise-grade AI delivery.</p>
                    </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl cursor-pointer"  style={{ background: "#fff", borderRadius: "50%", boxShadow: "20px 20px 50px 0 #C5CDE7", padding: "36px", height: "240px", width: "240px",  margin: "0 auto 40px", cursor: "pointer", transition: "all .5s ease-out",  transform: "translate(0)", opacity: 1,  position: "relative", top: "40px"  }}
              onClick={() => openModal(index)} >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover" style={{ width: "60px", height: "60px"}} />
                {/* <img src={product.image} alt={product.name} width="60" height="60" /> */}
          
              <div className="p-4">
                {/* <h3 className="text-xl font-semibold mb-2">{product.name}</h3> */}
               <h3 className="product-title" style={{fontSize:"20px"}}>{product.name}</h3>
                <button
                  className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  onClick={(e) => { e.stopPropagation(); openModal(index); }} >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
                </div>
            </div>
          </div>
        </section> 
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4"> 

        {/* Cards Grid */}
       

        {/* Modal */}
        {activeModal !== null && (
          <div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative transform transition-all duration-300 scale-100 opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={closeModal}
              >
                ×
              </button>
              <img
                src={products[activeModal].image}
                alt={products[activeModal].name}
                className="w-full h-56 object-cover rounded mb-4"  style={{
  width: "60px",
  height: "60px"
}}
              />
              <h3 className="text-2xl font-bold mb-2">
                {products[activeModal].name}
              </h3>
              <p className="text-gray-600">
                {products[activeModal].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section> 
    </div>
   
  );
};

export default PopupModal;