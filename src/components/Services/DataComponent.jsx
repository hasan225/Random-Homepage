import React from "react";

const DataComponent = ({ img, heading, text }) => {
  return (
    <div className="shadow p-4 rounded-lg bg-white">
      <img className="w-16 mx-auto" src={img} alt="" />
      <h4 className="font-semibold text-xl text-gray-800 my-3">{heading}</h4>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default DataComponent;
