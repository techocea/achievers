import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Universities } from "../../data";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="overflow-hidden">
      <Slider {...settings}>
        {Universities.map((university) => (
          <div
            key={university.id}
            className="mx-20 flex justify-center items-center"
          >
            <img
              src={university.imageUrl}
              alt={university.name}
              className="object-contain w-52 h-52"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
