import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;



    return (
        <div className="border-0">
        
            <h1 className="bold">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <p>{avgRating}</p>

            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price / 100 || item?.card?.info?.defaultprice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;


