import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Universities } from "../utils/data";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden lg:px-52">
      <Slider {...settings}>
        {Universities.map((university) => (
          <div
            key={university.id}
            className="px-20 flex justify-center items-center"
          >
            <img
              src={university.imageUrl}
              alt={university.name}
              className="object-contain w-52 h-32"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
