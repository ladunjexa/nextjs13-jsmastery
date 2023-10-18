"use client";

import React from "react";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={2000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          src={`/assets/images/testimonial-${i + 1}.webp`}
          width={484}
          height={484}
          alt="testimonial"
        />
      ))}
    </Carousel>
  );
};

export default Testimonials;
