import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scroller from '../data/carousel.json'
const data = Scroller.carousel


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg",
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/27/afa81273-a7f4-4c51-a475-077cc28698de1743082571924-9ed98a16-ac59-44f0-9fde-47ea00e9c08e1742994215755-Fwd-Haulidays-Fest-Desktop-Banner.jpg"
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {data.map((img, index) => (
          <div key={index} className="px-2">
            <img src={img} alt={`Slide ${index}`} className="w-full rounded-xl shadow-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
