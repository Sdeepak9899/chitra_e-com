import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
   <>
    
    <h1 className="max-w-[1399px]  mx-auto mt-6 text-3xl font-normal">New Arrivals</h1>
    <Slider {...settings} className="max-w-[1399px]  mx-auto mt-6">
      <div>
        <div
          className=" 
        "
        >
          <img
            src="1.png"
            alt="l"
            className="w-[300px]
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>

      <div>
        <div
          className=" 
      "
        >
          <img
            src="1.png"
            alt="l"
            className="w-[300px]
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>

      <div>
        <div
          className=" 
       "
        >
          <img
            src="1.png"
            alt="l"
            className="w-[300px]
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>

     
      <div>
        <div
          className=" 
       "
        >
          <img
            src="1.png"
            alt="l"
            className="w-[300px]
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>

      <div>
        <div
          className="
      "
        >
          <img
            src="1.png"
            alt="l"
            className="w-[300px]
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>

      <div>
        <div
          className="
       "
        >
          <img
            src="1.png"
            alt="l"
            className="w-[300px]
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>

      <div>
        <div
          className="
       "
        >
          <img
            src="1.png"
            alt="l"
            className="w-[300px]
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>

      <div>
        <div
          className="
       "
        >
          <img
            src="1.png"
            alt="l"
            className="w-full
      h-[300px] "
          />
          <p className="text-center   ">
            Unisex DEMONSLAYER Round Neck Half...
          </p>
          <p className="text-center	  ">₹499</p>
        </div>
      </div>
    </Slider>
   </>
  );
}
