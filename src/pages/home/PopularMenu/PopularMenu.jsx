import React, { useEffect, useState } from "react";
import MenuItems from "../../shared/MenuItems/MenuItems";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-20">
      <SectionTitle
        heading={"From Our Menu"}
        subheading={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="w-40 mx-auto mt-12">
        <button className="btn btn-outline border-0 border-b-4 uppercase">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
