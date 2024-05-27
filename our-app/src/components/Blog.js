import React from "react";
import Slider from "react-slick";
import { Heading } from "../common/Heading";
import { blogs } from "../data/Data";
import {Link } from 'react-router-dom'

export const Blog = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div>
      <Heading
          heading={"Fashion-Frontier Collections"}
          subheading={"Latest From Our Blog"}
          description={"The Newest Products In Our Store "}
        />
      </div>
      <div className="w-10/12 m-auto">
        <Slider {...settings}>
          {blogs.map((val, key) => (
            <div className="features flex gap-8 mt-8" key={key}>
              <div className="overflow-hidden relative m-2 border">
                <div className="image-container relative">
                  <img
                    src={val.img}
                    alt="womenmenaccessories"
                    className="w-full"
                  />

                  <div className="tag absolute top-0 right-0 z-10">
                    <p className="bg-red-600 w-12 text-center grid place-items-center text-white p-2 uppercase">
                      {val.tag}
                    </p>
                  </div>
                </div>
                <div className="product-details text-center mt-4 mb-4">
                  <p className="mb-2">{val.short_description}</p>
                  <Link to={'/shop'}>
                  <button>{val.title} Now</button> <br></br>
                  </Link>
                  {/* <p className="mb-2">{val.title}</p> */}
                  {/* <p className="text-red-600 text-xl">{val.read_more}</p> */}
                  <a href="https://fashionjackson.com/" className="text-red-600 text-xl" target="blank">{val.read_more}</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
