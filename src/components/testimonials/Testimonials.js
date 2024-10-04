import React from "react";
import Container from "../Container";
import Title from "../../layout/Title";
const Testimonials = () => {
  return (
    <Container
      className="py-20 font-titleFont border border-transparent border-b-black"
      id="testimonials"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
    </Container>
  );
};

export default Testimonials;
