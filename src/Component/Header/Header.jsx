import React, { useContext, useEffect } from "react";
import "./header.css";
import { HandleActiveContext } from './../../Context/HandleActive';
export default function Header() {

    const {handleActive} = useContext(HandleActiveContext);
    useEffect(()=>{
          handleActive('header-parent');
    },[]);


  return (
    <>
      <header className="header-parent">
        <h1 className=" issue text-center text-uppercase mb-4">issue</h1>
        <div style={{  width: "240px"}} className="list row mx-auto align-items-center overflow-hidden">
          <div className="col-6 item border-end border-2 border-dark d-flex align-items-center justify-content-center ">
            <span className=" text-capitalize text-center">urgent</span>
          </div>
          <div className="col-6 item d-flex align-items-center justify-content-center">
            <span className=" text-capitalize text-center">typical</span>
          </div>
        </div>
      </header>
    </>
  );
}
