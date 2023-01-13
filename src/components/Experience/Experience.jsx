import React from "react";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import { RiDoubleQuotesL } from 'react-icons/ri';

const Experience = () => {
  return (
    <section className="Section pb-56  ">
      <h2 className="text-3xl font-semibold text-center lg:py-10">
        Our Client Experience
      </h2>
      <div className="flex-diverge gap-10  lg:flex-col-reverse lg:gap-4">
        <div className="left flex gap-4 basis-5/12 justify-end lg:basis-full">
          <div className="w-4/12 flex flex-col">
            <img
              className="heroImg w-full h-52 transform -rotate-45"
              src={img5}
              alt=""
            />
            <img
              className="heroImg w-full h-52 transform mt-1"
              src={img6}
              alt=""
            />
          </div>
          <img
            className="heroImg w-6/12 h-96 -rotate-12 lg:rotate-0"
            src={img4}
            alt=""
          />
        </div>
        <div className="right  basis-7/12 lg:text-center bg-orange-200 p-8 rounded-lg lg:basis-full">
          <RiDoubleQuotesL className="text-3xl text-emerald-600"/>
          <p className="text-gray-700 my-5 lg:w-3/4 lg:mx-auto">
            Watch this free online course to learn how to create an outstanding
            service experienceWatch this free online course to learn how to
            create an outstanding service experience Watch this free online
            course to learn how to create an outstanding service experienceWatch
            this free online course to learn how to create an outstanding
            service experience
          </p>
          <div className="">
            <h5 className="capitalize  font-semibold text-gray-800 my-0">
              Sajib Ahmed
            </h5>
            <small className="text-gray-700">Graphic Designer</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
