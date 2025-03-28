import React from "react";
import carousel from "../data/carousel.json";
import "../styles/carousel.css";
import Slider from "react-slick";

const SecScroller = () => {
  const spinImg = carousel.secondCaraousel || [];
  console.log(spinImg)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,  // एक साथ 3 इमेज दिखाने के लिए
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="w-full overflow-x-hidden my-10 custom-carousel">
      <Slider {...settings}>
        {spinImg.length > 0 &&
          spinImg.map((slide, index) => (
            <div key={index} className="w-full flex justify-center gap-1">
              {slide.urls?.map((imgUrl, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgUrl}
                  alt={`Slide ${index} - Image ${imgIndex}`}
                  className="w-[150px] h-[150px] object-cover"
                />
              ))}
            </div>
          ))}
      </Slider>
      <h4 className="m-[70px_0_10px_30px] w-full text-[28px] uppercase text-[#3d4152] font-semibold">Grand Global Brands</h4>
    </section>
  );
};

export default SecScroller;
