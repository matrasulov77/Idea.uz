import React from "react";
import { Link } from "react-router-dom";
// import { styles } from "../Util/Style";
import { IoIosCall } from "react-icons/io";
import flag_ru from "../Assets/svg_pic/flag-ru.svg";
const F_Header = () => {
  return (
    <div className="w-full  font-roboto bg-[#282F3C]">
      <div className={`max-w-[1536px] mx-auto my-0`}>
        <section className={`hidden gap-8 text-white h-9 items-center sm:flex`}>
          <Link to={"/about"}>О нас</Link>
          <Link to={"/installment"}>Рассрочка</Link>
          <Link to={"/vakansi"}>Вакансии</Link>
          <div className={`flex items-center justify-center gap-1`}>
            <IoIosCall className={`text-[#DD1470]`} />
            <p className="text-white">71 230 77 99</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <img src={flag_ru} alt="flagRU" />
            <select className="border-none bg-transparent">
              <option value="ru">Русский</option>
            </select>
          </div>
        </section>
      </div>
    </div>
  );
};

export default F_Header;
