import React from "react";
import "./Categories.css";

function Categories({
  heading,
  img1,
  name1,
  img2,
  name2,
  img3,
  name3,
  img4,
  name4,
}) {
  return (
    <div className="categories">
      <div className="category">
        <h1>{heading}</h1>
        <div className="category_row">
          <div>
            <img className="category_image" src={img1} alt="" />
            <p>{name1}</p>
          </div>
          <div>
            <img className="category_image" src={img2} alt="" />
            <p>{name2}</p>
          </div>
        </div>
        <div className="category_row">
          <div>
            <img className="category_image" src={img3} alt="" />
            <p>{name3}</p>
          </div>
          <div>
            <img className="category_image" src={img4} alt="" />
            <p>{name4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
