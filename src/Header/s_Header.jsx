import React from "react";
import { FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import logo from '../Assets/svg_pic/Logo.svg'

const S_Header = () => {
  return <div>
    <div className="max-w-[1536px] mx-auto my-0">
        <section className="flex justify-between items-center">
            <div className="flex justify-center items-center">
            <FaTelegramPlane />
            <FaInstagram />
            <FaYoutube />
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
              <div>
              <CiLocationOn />
              <p>
              Наши локации
              </p>
              </div>
              <div>
              <CiLocationOn />
              <p>
              Наши локации
              </p>
              </div>
              <div>
              <CiLocationOn />
              <p>
              Наши локации
              </p>
              </div>
            </div>
        </section>
    </div>
  </div>;
};

export default S_Header;
