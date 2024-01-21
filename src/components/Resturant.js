import React from "react";
import { CDN_URL } from "../utils/constants";

const Resturant = (props) => {
    const { resData } = props;
    console.log("resData===", resData)
    return (
      <div className="resturant-card">
        <img
          className="food-img"
          alt="resturant-food"
          src={CDN_URL+resData.cloudinaryImageId}
        />
        <h3>{resData.name.substring(0,20)+ "..."}</h3>
        <p>{resData.cuisines.join(", ").substring(0,10)+ "..."}</p>
        <p>{resData.avgRating} stars</p>
        <p>
          {resData.costForTwo }
        </p>
        <p>{resData.sla.deliveryTime} mins</p>
      </div>
    );
};

export default Resturant;