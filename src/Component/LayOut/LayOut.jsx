import React from "react";
import Header from "./../Header/Header";
import Relating from "../Relating/Relating";
import OurImgs from "./../OurImgs/OurImgs";
import Uploading from "../Uploading/Uploading";
import { Outlet } from "react-router-dom";

export default function LayOut() {
  return (
    <>
      <Header />
      <Relating />
      <OurImgs />
      <Outlet></Outlet>
      <Uploading />
    </>
  );
}
