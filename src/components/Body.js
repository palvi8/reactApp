import React, { useEffect, useState } from "react";
import Resturant from "./Resturant";
import Shimmer from "./Shimmer";
import {restaurants} from "../utils/mockData";

const Body = () => {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
       const json = await data.json();
       const newData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       setResList(newData);

    }
    const getTopRatedResturants = () => {
        let getTopRatedResturantList = resList.filter((res) =>  res.info.avgRating > 4.2);
        setResList(getTopRatedResturantList);
    }
    if(resList.length === 0){
        return <Shimmer/>
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