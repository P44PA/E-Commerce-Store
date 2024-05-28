import React from "react";
import Slider from "react-slick";
import { reviews } from "../data/Data";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";


export const Review = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <BiChevronRight />,
    prevArrow: <BiChevronLeft />,
   };
  return (
    <div className="bg-image">
      <div className="bg-image-overlay"></div>
      <Slider {...settings}>
        {reviews.map((data, key) => (
          <div key={key} className="w-10/12 m-auto">
            <div className="flex justify-center text-center">
              <div className="">
                <h1 className="text-6xl uppercase text-white mb-4 font-semibold">
                  {data.title}
                </h1>
                <p className="text-white">{data.description}</p>

                <div className="flex justify-center items-center mt-5">
                  <div className="rounded-full w-24 h-24">
                    <img
                      className="rounded-full w-full h-full"
                      src={data.customer_img}
                      alt=""
                    />
                  </div>
                  <div className="text-start ml-4">
                    <h4 className="text-white font-bold">
                      {data.customer_name}
                    </h4>
                    <p className="text-white">{data.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
