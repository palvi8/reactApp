import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
    const [restDetails, setResDetails] = useState(null);

    const {id} = useParams();
    console.log("id==", id)

    useEffect(() => {
        getResturantMenu()
    },[id])

    const getResturantMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ id +"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setResDetails(json?.data);
    } 

    if(restDetails === null) return <Shimmer/>;
    console.log("cards2==",  restDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    const {name, cuisines, areaName} = restDetails?.cards[0]?.card?.card?.info;
    const {itemCards} = restDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
    <div className="menu">
          <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => <li>{item?.card?.info?.name} {" Rs-"} {item?.card?.info?.price}</li>)}
        </ul>       
    </div>
    )   
}

export default ResturantMenu;