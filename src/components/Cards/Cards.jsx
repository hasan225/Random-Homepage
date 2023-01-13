import React from "react";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";

const Cards = () => {
  return <div className="discover Section pt-20">
    <h2 className="heading">Discover the best love</h2>
    <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
      <img className="rounded-lg h-96 object-cover" src={img4} alt="" />
      <img className="rounded-lg h-96 object-cover" src={img5} alt="" />
      <img className="rounded-lg h-96 object-cover" src={img6} alt="" />
    </div>
  </div>;
};

export default Cards;
