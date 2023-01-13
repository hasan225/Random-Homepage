import React from "react";
import img4 from "../../assets/img/img4.jpg"
import img5 from "../../assets/img/img5.jpg"


const Reach = () => {
  return (
    <section className="Section flex-diverge gap-10 lg:grid lg:grid-cols-1 lg:gap-0">
      <div className="left  basis-2/4 lg:text-center">
        <h2 className="text-3xl font-semibold">
          Make your Holiday to Memorable
        </h2>
        <p className="text-gray-700 my-5 lg:w-3/4 lg:mx-auto">
          Watch this free online course to learn how to create an outstanding
          service experienceWatch this free online course to learn how to create
          an outstanding service experience
        </p>
        <div className="flex gap-2 lg:flex-middle">
          <div className="shadow-lg p-2 rounded-lg">
            <h4 className="text-2xl text-emerald-600">400+</h4>
            <p className="text-gray-700">Holiday Package</p>
          </div>
          <div className="shadow-lg p-2 rounded-lg">
            <h4 className="text-2xl text-emerald-600">700+</h4>
            <p className="text-gray-700">Luxury Hotel</p>
          </div>
          <div className="shadow-lg p-2 rounded-lg">
            <h4 className="text-2xl text-emerald-600">160k+</h4>
            <p className="text-gray-700">Holiday Package</p>
          </div>
        </div>
      </div>
      <div className="right flex gap-4 basis-2/4 justify-end">
        <img className="heroImg w-5/12 h-80 transform -rotate-12"  src={img5} alt="" />
        <img className="heroImg w-6/12 h-96" src={img4} alt="" />
      </div>
    </section>
  );
};

export default Reach;
