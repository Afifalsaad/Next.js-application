"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import image2 from "../../../public/Green and White Modern Nature Landscape Presentation.png";
import image3 from "../../../public/Green Organic Exploring the Animal Kingdom Presentation.png";
import image4 from "../../../public/Nature YouTube Banner in White Minimalist Photo Style.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div>
      <div className="space-x-5 bg-primary">
        {/* <div>
          <button className="btn btn-primary text-neutral-content">
            Button Primary
          </button>
          <button className="btn btn-secondary">Button Secondary</button>
          <button className="btn btn-accent text-neutral-content">
            Button Accent
          </button>
          <button className="btn btn-neutral">Button neutral</button>
          <button className="btn btn-neutral-accent text-neutral-content">
            Button Neutral Content
          </button>
          <button className="btn btn-success">Button Success</button>
          <button className="btn btn-error">Button Error</button>
          <button className="btn btn-base-100 text-neutral-content">
            Button Base 100
          </button>
        </div> */}

        <div className="slider-container w-full mx-auto">
          <Slider {...settings}>
            <div className="w-full px-1">
              <div className="w-full h-65 md:h-125">
                <Image
                  className="w-full h-full rounded-md"
                  src={image2}
                  alt="image"></Image>
              </div>
            </div>
            <div className="w-full px-1">
              <div className="w-full h-65 md:h-125">
                <Image
                  className="w-full h-full rounded-md"
                  src={image3}
                  alt="image"></Image>
              </div>
            </div>
            <div className="w-full px-1">
              <div className="w-full h-65 md:h-125">
                <Image
                  className="w-full h-full rounded-md"
                  src={image4}
                  alt="image"></Image>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
