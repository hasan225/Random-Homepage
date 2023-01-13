import React from "react";
import bg from "../../assets/img/img5.jpg";
import img1 from "../../assets/img/img.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import { Link } from "react-router-dom";
import ImgComponent from "./ImgComponent";

const Hero = () => {
  return (
    <div
      className="hero Section h-screen  w-full text-center relative -z-10"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.511),rgba(0, 0, 30, 0.5)) ,url(${bg})no-repeat center center/cover`,
      }}
    >
      <div className="intro pt-28">
        <h2 className="text-5xl md:text-4xl font-bold text-white">
          Travel Enjoy and live a
        </h2>
        <h2 className="text-5xl md:text-4xl font-bold text-white">
          new and full free life
        </h2>
        <div className="mt-8 ">
          <Link className="bg-emerald-600 rounded text-white py-2 px-6" to="/">
            Explore more
          </Link>
        </div>
      </div>

      <div className="pictures flex justify-center gap-8 mt-12 relative z-10">
        <ImgComponent  cls="heroImg transform -rotate-12" img={img1}/>
        <ImgComponent  cls="heroImg" img={img2}/>
        <ImgComponent  cls="heroImg transform rotate-12" img={img3}/>
       
      </div>
    </div>
  );
};

export default Hero;
