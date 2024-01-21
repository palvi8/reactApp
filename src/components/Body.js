import React, { useState } from "react";
import Resturant from "./Resturant";
import {restaurants} from "../utils/mockData";

const Body = () => {
    const [resList, setResList] = useState(restaurants);
    const getTopRatedResturants = () => {
        let getTopRatedResturantList = resList.filter((res) =>  res.info.avgRating > 4.2);
        setResList(getTopRatedResturantList);
    }
    return (
      <div className="body-container">
        <div className="filter-container">
            <button className="filter-btn" onClick={() => getTopRatedResturants()}>Top Rated Resturants</button>
        </div>
        <div className="resturant-container">
            {resList.map((resturant) => <Resturant key={resturant.id} resData={resturant.info} />
            )}
          
        </div>
      </div>
    );
  };

export default Body;  