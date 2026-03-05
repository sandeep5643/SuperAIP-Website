import React from 'react'
import styles from '../css/Testimonials.module.css' 
import '../css/style.css' 
import { Container, Carousel } from "react-bootstrap";
function Testimonials() {
   const testimonials = [
    {
      id: 1,
      name: "David Thompson",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      message:
        "Their attention to detail and commitment to quality truly impressed me. The entire process was smooth and professional.",
    },
    {
      id: 2,
      name: "Emily Carter",
      role: "Product Manager",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      message:
        "They delivered exactly what we needed, on time and beyond expectations. Communication was clear throughout the project.",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      message:
        "Reliable, innovative, and easy to work with. I highly recommend their services to anyone looking for top-tier results.",
    },
  ];
  return (
    <div>
        
    <section className="py-5 bg-black text-white">
      <Container>
        <h2 className="text-center mb-5 heading">Testimonials</h2>

        <Carousel indicators={false} interval={4800}>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="text-center px-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  width="100"
                  height="100"
                />
                <h5>{testimonial.name}</h5>
                <p className="text-muted">{testimonial.role}</p>
                <p className="lead">"{testimonial.message}"</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
    </div>
  )
}

export default Testimonials