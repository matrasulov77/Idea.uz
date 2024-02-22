import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaPercent,
  FaRegUser,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import logo from "../Assets/svg_pic/Logo.svg";

const S_Header = () => {
  return (
    <div>
      <div className="max-w-[1536px] mx-auto my-0">
        <section className="flex justify-between items-center h-16">
          <div className="flex justify-center items-center gap-4">
            <FaTelegramPlane />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div>
            <img src={logo} alt="" className="w-16 sm:w-24" />
          </div>
          <div className="flex gap-4">
            <div className={"flex justify-center items-center flex-col"}>
              <CiLocationOn />
              <p className="hidden sm:flex">Наши локации</p>
            </div>
            <div className={"flex justify-center items-center flex-col"}>
              <FaPercent />
              <p className="hidden sm:flex">Акции и скидки</p>
            </div>
            <div className={"flex justify-center items-center flex-col"}>
              <FaRegUser />
              <p className="hidden sm:flex">Войти</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default S_Header;
