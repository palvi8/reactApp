import React, { useEffect, useState } from "react";
import Resturant from "./Resturant";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data  = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
       const json = await data.json();
       const newData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       setResList(newData);
       setFilteredResList(newData);

    }
    const getTopRatedResturants = () => {
        let getTopRatedResturantList = resList.filter((res) =>  res.info.avgRating > 4.2);
        setFilteredResList(getTopRatedResturantList);
    }

    const getSearchedResturants = () => {
        const filteredResturants = resList.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLocaleLowerCase()));
        setFilteredResList(filteredResturants);
    }

    return resList.length === 0 ? <Shimmer/> :(
      <div className="body-container">
        <div className="filter-container">
            <div className="search-container">
                <input className="search-input" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
                <button className="search-btn" onClick={getSearchedResturants}>Seach</button>
            </div>
            <button className="filter-btn" onClick={() => getTopRatedResturants()}>Top Rated Resturants</button>
        </div>
        <div className="resturant-container">
            {filteredResList.map((resturant) => <Resturant key={resturant.id} resData={resturant.info} />
            )}
          
        </div>
      </div>
    );
  };

export default Body;  