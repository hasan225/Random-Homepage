import React from "react";
import { Link } from "react-router-dom";
import { FooterNav } from "../../Data";

import { FiGithub } from "react-icons/fi";
import { BsStackOverflow } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import img6 from "../../assets/img/img6.jpg";

const Footer = () => {
  return (
    <section className="Section py-32 relative bg-lime-300">
      <div className="Newslatter">
        <img className="heroImg w-40 absolute -top-32 -right-4 xl:-right-12 h-52 transform rotate-45 lg:hidden" src={img6} alt="" />
        <h2 className="text-4xl font-semibold text-center md:text-3xl">
          Subscribe to get information
        </h2>
        <form className="flex w-4/6 mx-auto gap-4 mt-10 h-12 lg:w-full">
          <input
            className="w-full h-full  rounded-lg px-4"
            type="text"
            placeholder="Your email"
          />
          <input className="SubmitBtn" type="submit" value="Subscribe" />
        </form>
      </div>
      <nav className="grid grid-cols-5 mt-16 place-items-center justify-between gap-6 lg:flex lg:flex-wrap lg:mt-24 lg:gap-9">
        <div className="logo">
          <Link className="logo text-3xl uppercase py-8 text-black font-semibold ">
            LOGO
          </Link>
          <p className="text-gray-700 mt-3 w-56">
            free online course to learn how to create an outstanding service
            experience
          </p>
        </div>
        {FooterNav.map((menu, i) => {
          return (
            <div className={menu.subject} key={i}>
              <h4 className="capitalize text-lg font-semibold text-gray-800 mb-5">
                {menu.subject}
              </h4>
              <div className="flex flex-col gap-3 text-gray-700">
                {menu.items.map((item, i) => {
                  console.log(item);
                  return (
                    <Link key={i} path={item.path}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div>
          <div className="social flex gap-8">
            <BsStackOverflow className="text-2xl" />
            <FiGithub className="text-2xl" />
            <CiLinkedin className="text-2xl" />
          </div>
          <h4 className="capitalize  font-semibold text-gray-800 my-4">
            Discover Our App
          </h4>
          <div className="flex gap-3">
            <p className="font-semibold text-gray-800 ">PlayStore</p>
            <p className="font-semibold text-gray-800 ">AppStore</p>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Footer;
