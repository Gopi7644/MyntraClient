import React from "react";
import "../styles/carousel.css";
import Slider from "react-slick";
import NavData from "../data/NavData.json";
const SecScroller = () => {
  const xyz = NavData.carousel.images || [];
  const abc = NavData.carousel.hero[0].imageOne
  // console.log(NavData.carousel.hero[0].imageOne)
  // console.log(abc)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  // एक साथ 3 इमेज दिखाने के लिए
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="w-[1230px] mx-auto overflow-x-hidden  custom-carousel">

      <div className="w-full flex justify-center items-center mb-5">
        <img src={abc} alt="myntra photo" />
      </div>   

      <Slider {...settings}>
        {xyz.length > 0 &&
          xyz.map((slide, index) => (
            <div key={index} className="w-full   flex justify-center items-center">
              <img
                  src={slide.image_url}
                  alt={`image`}
                  className="w-[308px] h-[405px] object-cover rounded-lg"
                />
            </div>
          ))}
      </Slider>








      {/* <Slider {...settings}>
        {spinImg.length > 0 &&
          spinImg.map((slide, index) => (
            <div key={index} className="w-full   flex justify-center items-center">
              {slide.urls?.map((imgUrl, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgUrl}
                  alt={`Slide ${index} - Image ${imgIndex}`}
                  className="w-[308px] h-[405px] object-cover rounded-lg"
                />
              ))}
            </div>
          ))}
      </Slider> */}
      <h4 className="m-[20px_0_10px_30px] w-full text-[28px] uppercase text-[#3d4152] font-semibold">Grand Global Brands</h4>
    </section>
  );
};

export default SecScroller;
