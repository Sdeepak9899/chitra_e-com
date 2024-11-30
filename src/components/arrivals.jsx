import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const arrivalData = [
  {
    image:"https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name:"Unisex DEMONSLAYER Round Neck Half...",
    price:"₹499"
  },

  {
    image:"1.png",
    name:"Unisex DEMONSLAYER Round Neck Half...",
    price:"₹499"
  },
  {
    image:"https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name:"Unisex DEMONSLAYER Round Neck Half...",
    price:"₹499"
  },

  {
    image:"1.png",
    name:"Unisex DEMONSLAYER Round Neck Half...",
    price:"₹499"
  },
  {
    image:"https://static-master.blinkstore.in/img/dtg-ml-rnhs.90e9f1a6.png",
    name:"Unisex DEMONSLAYER Round Neck Half...",
    price:"₹499"
  },

  {
    image:"1.png",
    name:"Unisex DEMONSLAYER Round Neck Half...",
    price:"₹499"
  },
]


export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },

          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    

    <div className="flex mt-4 max-md:w-full justify-center items-center  max-lg:justify-center max-lg:items-center  max-md:justify-center max-sm:justify-center ">
      <div className="container">
        <h1 className=" text-3xl font-normal	">New Arrivals</h1>
         
         <div className="   ">
         <Slider {...settings}>

          {
            arrivalData.map((data,index)=>(
             
              <div className=" p-2" key={index}>
              <div>
              <Link to="#" className="">
                <img
                  src={data.image}
                  className=" " alt=""
                />

                <div className="">
                  <Link to="#">{data.name}</Link>
                  <p>{data.price}</p>
                </div>
              </Link>
              </div>
            </div>

        
            ))
       
          }
            </Slider>
         </div>
            
         
         
    </div>
    </div>
   
  );
}