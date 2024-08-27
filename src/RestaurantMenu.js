import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Contant";
import { ShimmerMenu } from "./Shimmer";
import { useRestaurant, useRestaurantDetails } from "./utils/useRestaurant";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";
import "./index.css";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const {
    name,
    cloudinaryImageId,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
    sla,
  } = useRestaurantDetails(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!sla) return;

  return restaurant?.length === 0 ? (
    <ShimmerMenu />
  ) : (
    <div>
      <div className="menu flex justify-between p-10 border-b-[0.5px] border-gray-500">
        <div className="img flex gap-[30px] items-center">
          <img
            className="image w-[40%] h-[100%] object-cover rounded-lg"
            alt="img"
            src={IMG_CDN_URL + cloudinaryImageId}
          />
          <div className="menu-des pb-6 ">
            <h1 className="restaurant-name text-2xl font-bold cursor-pointer">
              {name}
            </h1>
            <div>
              <div className="flex mb-3 pt-5 text-center text-lg font-bold">
                <div
                  className="text-white rounded px-1"
                  style={
                    avgRating >= 4
                      ? { background: "#48c479" }
                      : { background: "#db7c38" }
                  }
                >
                  <i class="fa-regular fa-star"></i>
                  {avgRating}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rest-menu-contents pt-5">
          <p className="rest-city">{city.toUpperCase()}</p>
          <p>{areaName}</p>
          <p>{costForTwoMessage}</p>
          <p>At your doorstep in {sla.deliveryTime} mins</p>
        </div>
      </div>
      <div className="rest-menu-content flex justify-center">
        {restaurant ? (
          <div className="menu-items-container w-[800px] mt-8">
            <div className="menu-title-wrap p-5">
              <h3 className="menu-title font-bold text-lg text-gray-700">
                <i class="fa-solid fa-utensils"></i> Recommended Menu
              </h3>
              <p className="menu-count mt-2 text-base text-gray-400">
                {restaurant.length} ITEMS{" "}
              </p>
            </div>
            <div className="menu-items-list flex flex-col justify-center">
              {restaurant.map((item) => {
                return (
                  <div
                    className="menu-item flex justify-between p-5 border-b-[1px] border-gray-400"
                    key={item?.card?.info?.id}
                  >
                    <div className="menu-item-details flex flex-col self-start h-auto overflow-hidden">
                      <p>
                        {item?.card?.info?.itemAttribute?.vegClassifier ===
                        "VEG" ? (
                          <img
                            className="w-5"
                            alt="veg"
                            src={require("./assets/img/vegetarian-food-symbol.png")}
                          />
                        ) : (
                          <img
                            className="w-5"
                            alt="non-veg"
                            src={require("./assets/img/non-vegetarian-food-symbol.png")}
                          />
                        )}
                      </p>
                      <h3 className="item-title w-auto text-lg font-bold text-gray-700">
                        {item?.card?.info?.name}
                      </h3>
                      <p className="item-cost text-gray-600 mt-1">
                        Rs{""}
                        {item?.card?.info?.price / 100 ||
                          item?.card?.info?.defaultPrice / 100}
                        /-
                      </p>
                      <p className="item-des text-gray-400 mt-4 leading-5 -tracking-tight">
                        {item?.card?.info?.description}
                      </p>
                    </div>
                    <div className="menu-img-wrapper flex flex-col justify-center items-end w-[300px] h-auto">
                      <img
                        className="menu-item-img w-32 h-24 object-cover rounded-md"
                        src={IMG_CDN_URL + item?.card?.info?.imageId}
                        alt={item?.card?.info?.name}
                      />
                      <div className="flex mb-3 pt-5 text-center text-lg font-bold">
                        <div
                          className="ratings text-white rounded px-1"
                          style={
                            item?.card?.info?.ratings?.aggregatedRating
                              ?.rating >= 4
                              ? { background: "#48c479" }
                              : { background: "#db7c38" }
                          }
                        >
                          <i className="fa-regular fa-star"></i>
                          {item?.card?.info?.ratings?.aggregatedRating?.rating}
                        </div>
                      </div>
                      <button
                        className="add-btn border border-solid border-green-500 bg-gray-100 rounded-md mt-3 text-green-50z0 px-4 py-1 shadow-md"
                        onClick={() => addFoodItem(item?.card?.info)}
                      >
                        {" "}
                        Add +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RestaurantMenu;
