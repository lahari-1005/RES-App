import RestroCard from "./RestroCard.js";
import { useState,useEffect } from "react";
import RestroList from "../Utils/mockData.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [ListOfRestaurants, setListOfRestarants] = useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");
    
    useEffect(() => {
        fetchData();
    }, []);
   
   const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4458926&lng=78.58656859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);  
        const restaurantsLis= json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log(restaurantsLis);
        setListOfRestarants(restaurantsLis);
        setFilteredRestaurant(restaurantsLis);

    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) 
        return(
      <h1>
        Looks like you are offline! Please check your internet connection
        </h1>
        );
    
    return (
        <div className="Body">
            <div className="filter">
            <div className="m-2 p-2">
             <input type="Text"className="m-2 p2"
             value={searchText}
             onChange={(e) =>{
             setSearchText(e.target.value);
             }}
             />
             <button onClick={()=>{
             const filteredRestaurant=ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
             setFilteredRestaurant(filteredRestaurant);
             }}>Search</button>
             </div>
                <button
                 className="filter-btn"
                onClick={() => {
                    const filteredList = ListOfRestaurants.filter(
                    (res) => res.info.avgRating>4);
                    setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants
                    </button>
            </div>

            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}>
                    <RestroCard  resData={restaurant}/> </Link>
                ))}
            </div>
        </div>
       );
};
export default Body;