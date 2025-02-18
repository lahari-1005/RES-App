import { CDN_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
  } = resData?.info;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-72 transition-transform transform hover:scale-105 ">
      {/* Restaurant Image */}
      <img 
        className="w-full h-40 object-cover rounded-md"
        src={CDN_URL + cloudinaryImageId} 
        // alt={name} 
      />

      {/* Restaurant Details */}
      <div className="mt-3">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
        <p className="text-gray-700 font-medium">{costForTwo}</p>

        {/* Rating Badge */}
        <span className={`inline-block px-3 py-1 mt-2 rounded-full text-white font-semibold ${avgRating >= 4 ? 'bg-green-500' : 'bg-yellow-500'}`}>
          ⭐ {avgRating}
        </span>
      </div>
    </div>
  );
};
// const withPromotedLabel=()=>{
//   return(props) 
//     return(

//     )
//   }
// }

export default RestroCard;

