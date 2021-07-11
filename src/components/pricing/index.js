import React from "react";
import { Zoom } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic quia fugiat nulla beatae necessitatibus provident animi consectetur porro voluptate voluptas et cum dolores, aut omnis soluta! Cum, et nulla.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic quia fugiat nulla beatae necessitatibus provident animi consectetur porro voluptate voluptas et cum dolores, aut omnis soluta! Cum, et nulla.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic quia fugiat nulla beatae necessitatibus provident animi consectetur porro voluptate voluptas et cum dolores, aut omnis soluta! Cum, et nulla.",
    ],
    link: ["https://naver.com", "https://google.com", "https://daum.net"],
    delay: [500, 0, 300],
  };

  const showBoxes = () =>
    priceState.prices.map((box, index) => (
      <Zoom
        key={index}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className="pricing_description">
            {priceState.description[index]}
          </div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              size="small"
              style={{ color: "black" }}
              link={priceState.link[index]}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
