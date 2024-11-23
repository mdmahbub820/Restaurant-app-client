import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-bg bg-blend-overlay bg-fixed pt-16 mb-16">
      <SectionTitle
        heading="Our Featured Items"
        subheading="Check it out"
      ></SectionTitle>

      <div className="md:flex justify-center items-center px-24 pt-6 pb-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="ml-6 text-white">
          <p>March 20, 2025</p>
          <h4 className="uppercase font-medium my-1">Where Can I Get Some</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            accusamus repellat facilis assumenda illo quidem quaerat praesentium
            perspiciatis consectetur? Est?
          </p>
          <button className="btn btn-outline mt-4 text-white border-0 border-b-4 uppercase">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
