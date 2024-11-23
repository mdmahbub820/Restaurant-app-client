import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefService from "../ChefService/ChefService";
import CallToAction from "../CallToAction/CallToAction";
import Featured from "../Featured/Featured";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallToAction></CallToAction>
      <Featured></Featured>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
