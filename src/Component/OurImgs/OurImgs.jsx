import React, { useEffect } from "react";
import { useContext } from "react";
import { HandleActiveContext } from "./../../Context/HandleActive";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourimgs.css";

export default function OurImgs() {
  const { handleActive } = useContext(HandleActiveContext);

  // react-slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 10,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  useEffect(() => {
    handleActive("images");
  }, []);

  return (
    <>
      <div className=" container mt-5">
        <div className="our-imgs px-5 mb-4">
          <h2 className="text-center mt-4 mb-3">Direct it to whome ?</h2>
          <div className="images">
            <Slider {...settings}>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/e4868681b6e2cc4ce83c3b9a5d010b6c 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/32557e39544c71ad493eded3df77e593 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/dbbf0537097fe6db32729f0ae16b7e1e 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/instagram-profile-pictures-87zu6awgibysq1ub 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/0a53c3bbe2f56a1ddac34ea04a26be98 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/e4868681b6e2cc4ce83c3b9a5d010b6c 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/32557e39544c71ad493eded3df77e593 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/dbbf0537097fe6db32729f0ae16b7e1e 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/instagram-profile-pictures-87zu6awgibysq1ub 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/0a53c3bbe2f56a1ddac34ea04a26be98 1.png")}
                  alt="img"
                />
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/e4868681b6e2cc4ce83c3b9a5d010b6c 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/32557e39544c71ad493eded3df77e593 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/dbbf0537097fe6db32729f0ae16b7e1e 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/instagram-profile-pictures-87zu6awgibysq1ub 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/0a53c3bbe2f56a1ddac34ea04a26be98 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/e4868681b6e2cc4ce83c3b9a5d010b6c 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/32557e39544c71ad493eded3df77e593 2.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/dbbf0537097fe6db32729f0ae16b7e1e 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/instagram-profile-pictures-87zu6awgibysq1ub 1.png")}
                  alt="img"
                />
              </div>

              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src={require("../../imgs/0a53c3bbe2f56a1ddac34ea04a26be98 1.png")}
                  alt="img"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
