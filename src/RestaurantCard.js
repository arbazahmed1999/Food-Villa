import { IMG_CDN_URL } from "./Contant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
}) => {
  return (
    <div className="card w-[250px] p-4 m-4 rounded-lg break-words">
      <img
        className="w-[100%] h-[150px] object-cover rounded-lg"
        alt="img"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="name font-bold py-4 text-lg text-gray-700 truncate">
        {name}
      </h3>
      <span className="details flex mb-3 text-center font-bold">
        <h5
          className="rating text-white rounded px-1"
          style={
            avgRating >= 4
              ? { background: "#48c479" }
              : { background: "#db7c38" }
          }
        >
          <i className="fa-regular fa-star"></i>
          {avgRating}
        </h5>
        <h5 className="text-gray-600 ml-1">. {sla.slaString}</h5>
      </span>
      <h3 className="cuisin text-sm mb-3 text-[#686b78]">
        {cuisines.join(",")}
      </h3>
    </div>
  );
};

export default RestaurantCard;
