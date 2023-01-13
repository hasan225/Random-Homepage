import React from "react";
import DataComponent from "./DataComponent";


const Services = () => {
  return (
    <section className="Section text-center">
      <h2 className="heading">We offer Best Services</h2>
      <div className="grid grid-cols-4 text-center gap-16 xl:gap-8 lg:grid-cols-2 sm:grid-cols-1">
        <DataComponent
          img="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          heading="Calculate Weather"
          text="Watch this free online course to learn how to create an outstanding service experience"
        />
        <DataComponent
          img="https://img.icons8.com/color/2x/airplane-take-off.png"
          heading="Best Flights"
          text="Watch this free online course to learn how to create an outstanding service experience"
        />
        <DataComponent
          img="https://www.svgrepo.com/show/126864/microphone.svg"
          heading="Local Events"
          text="Watch this free online course to learn how to create an outstanding service experience"
        />

        <DataComponent
          img="https://www.svgrepo.com/show/281677/settings-gear.svg"
          heading="Customization"
          text="Watch this free online course to learn how to create an outstanding service experience"
        />
      </div>
    </section>
  );
};

export default Services;
