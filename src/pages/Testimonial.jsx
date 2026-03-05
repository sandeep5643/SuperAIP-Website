import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "../css/Testimonial.module.css";
function Testimonial() {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Head of Finance, Multimodal Logistics Inc India",
      role: "Multimodal Logistics Inc India- Manufacturing &amp; Logistics Firm",
      image: "https://www.superaip.com/img/airtel.jpg",
      message:
        "Partnering with Super AI Polaris enabled us to localize and scale AI solutions rapidly across education and municipal clients in Oman and Bahrain. Their agile development, secure deployment, and multilingual chatbot frameworks helped us deliver exceptional value to our stakeholders",
    },
    {
      id: 1,
      name: "Head of Finance, Multimodal Logistics Inc India",
      role: "Multimodal Logistics Inc India- Manufacturing &amp; Logistics Firm",
      image: "https://www.superaip.com/img/airtel.jpg",
      message:
        "Partnering with Super AI Polaris enabled us to localize and scale AI solutions rapidly across education and municipal clients in Oman and Bahrain. Their agile development, secure deployment, and multilingual chatbot frameworks helped us deliver exceptional value to our stakeholders",
    },
   {
      id: 1,
      name: "Head of Finance, Multimodal Logistics Inc India",
      role: "Multimodal Logistics Inc India- Manufacturing &amp; Logistics Firm",
      image: "https://www.superaip.com/img/airtel.jpg",
      message:
        "Partnering with Super AI Polaris enabled us to localize and scale AI solutions rapidly across education and municipal clients in Oman and Bahrain. Their agile development, secure deployment, and multilingual chatbot frameworks helped us deliver exceptional value to our stakeholders",
    },
  ];

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 11000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className={`bg-white py-20 px-6 overflow-hidden ${styles.testimonial_section}`}>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Organizations That Believe In Us
        </h2>
        <p className={`text-gray-500 text-lg ${styles.testimonial_section_1}`}>
          Strategic alliances that accelerate innovation, ensure scalability, and power enterprise-grade AI delivery.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-4 styles.slick-slide ">
              <div className="bg-gray-900 p-8 rounded-2xl text-center flex flex-col justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold" style={styles["slick-slide h3"]}>
                  {item.name}
                </h3>
                <span className="text-indigo-400 text-sm block mb-3">
                  {item.role}
                </span>
                <p className="text-gray-300 text-sm">
                  "{item.message}"
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
       
         <button
          onClick={() => sliderRef.current?.slickPrev()}
          className={`btnss ${styles.btnss} absolute top-absolute top-1/2 -left-6 -translate-y-1/2 
                     w-12 h-12 rounded-full 
                     bg-white text-black text-2xl 
                     flex items-center justify-center
                     hover:opacity-80 transition`
        }>
          ›
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className={`btnss ${styles.btnss} absolute top-1/2 -right-6 -translate-y-1/2 
                     w-12 h-12 rounded-full 
                     bg-white text-black text-2xl 
                     flex items-center justify-center
                     hover:opacity-80 transition`
        }>
          ›
        </button>
      </div>
       <br /><br/> <br /><br/>
    </section>
  );
}

export default Testimonial;