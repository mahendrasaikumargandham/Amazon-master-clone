import React from "react";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home_images">
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt=""
        />
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />
        <img
          className="home_img"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="home_product_row">
        <Categories
          heading="Early Black Friday deals are here"
          img1="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_Kitchen_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
          name1="Kitchen"
          img2="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_ComputersAndAccessories_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
          name2="Computers & more"
          img3="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_HealthAndPersonalCare_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
          name3="Personal Care"
          img4="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/ShoulderPeriod/GW/QuadCard/DT/SP22_W2_HomeImprovement_GW_QuadCard_DT_1x._SY116_CB606308915_.jpg"
          name4="Home Improvement"
        />
        <Categories heading="Shop by Category" />
        <Categories heading="Gaming accessories" />
      </div>
    </div>
  );
}

export default Home;
