import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css'
import NavData from "../data/NavData.json";
const data = NavData.carousel.carousel || [];
// console.log(data)




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

  

  return (
    <section className="w-full overflow-x-hidden h-[600px] mt-10 custom-carousel">
      <Slider {...settings}>
        {data.map((img, index) => (
          <div key={index}>
            <img src={img.image} alt={`Slide ${index}`}/>
          </div>
        ))}
      </Slider>
      <h4 className=" m-[50px_0_10px_30px] pl-20  text-[28px] uppercase text-[#3d4152] font-semibold">Medal Worthy Brands To Bag</h4>
    </section>
  );
};

export default Carousel;
