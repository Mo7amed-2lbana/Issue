import React, { useContext, useEffect } from "react";
import { HandleActiveContext } from "./../../Context/HandleActive";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./relating.css";

export default function Relating() {
  const { handleActive } = useContext(HandleActiveContext);

  useEffect(() => {
    handleActive("relating-depart");
    handleActive("imgs");
  }, []);
  return (
    <>
      <div className="container">
        <div className="relating-depart">
          <h2 className="text-center head mt-4 mb-3">
            Relating to what departent
          </h2>
          <div className="list relating flex-grow-1 mx-auto flex-wrap d-flex align-items-center overflow-hidden">
            <div className=" item flex-grow-1 text-center px-3 mb-3 mb-md-0 d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize ">Administrative</span>
            </div>
            <div className=" item flex-grow-1 px-3 mb-3 mb-md-0 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Finance</span>
            </div>
            <div className=" item flex-grow-1 px-3 mb-3 mb-md-0 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Accounting</span>
            </div>
            <div className=" item flex-grow-1 px-3 mb-3 mb-md-0 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Sales</span>
            </div>
            <div className=" item flex-grow-1 px-3 mb-3 mb-md-0 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Marketing</span>
            </div>
            <div className=" item flex-grow-1 px-3 mb-3 mb-md-0 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Logistic</span>
            </div>
            <div className=" item flex-grow-1 px-3 mb-3 mb-md-0 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Human Resources</span>
            </div>
            <div className=" item flex-grow-1 px-3 mb-3 mb-md-0 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Supplier</span>
            </div>
            <div className=" item flex-grow-1 px-3 border-start border-2 border-dark d-flex align-items-center justify-content-center ">
              <span className=" text-capitalize">Security</span>
            </div>
          </div>
        </div>

        <div className="relating-whiching">
          <h2 className="text-center head mt-4 mb-3">Relating to which</h2>
          <div className=" bg-white imgs d-flex overflow-hidden">
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/3K 2.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/DJ 2.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/Deye 3.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/Exide 3.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/FELICITY 5.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/Growwat 3.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/INKEL 3.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/Lumi 5.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/MUST 4.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/ORBIT 3.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/RAMBO 2.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/ROCKET 5.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/SUPERPOWER 2.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/Vector.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
            <div className=" item d-flex flex-grow-1 justify-content-center align-items-center">
              <img
                src={require("../../imgs/TUFFBULL 3.png")}
                alt="img"
                className="py-2 px-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
