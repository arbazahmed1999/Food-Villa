import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helpers";
import useOnline from "./utils/useOnline";
import { FETCH_RESTAURENT_CARD } from "./Contant";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURENT_CARD);
    const json = await data.json();
    const Dhaba1 =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const Dhaba2 =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const Dhaba = Dhaba1 || Dhaba2;
    setAllRestaurants(Dhaba);
    setFilteredRestaurants(Dhaba);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="no-internet text-center p-[50px]">
        <img
          className="w-[210px] h-[170px]"
          src={require("./assets/img/cloud.png")}
          alt="No Internet Connection"
        />
        <h1 className="text-4xl font-semibold mb-5">No Internet Connection</h1>
        <p className="text-2xl mb-[100px]">
          Please check your network settings and try again.
        </p>
      </div>
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="nav-data filter flex flex-col sm:flex-row justify-around items-center relative">
        <div className="search-container p-4 m-4 relative">
          <input
            type="text"
            className="border border-solid outline-none rounded-3xl shadow-md relative w-full md:w-96 h-12 p-3"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="absolute bg-black hover:bg-gray-600 text-white rounded-full bottom-1 right-1 px-4 py-2 m-4"
            onClick={() => {
              const info = filterData(searchInput, allRestaurants);
              setFilteredRestaurants(info);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="search-top-rated flex p-4 m-4 relative">
          <button
            className="px-4 py-2 bg-black hover:bg-gray-600 text-white rounded-full sm:mt-0 md:mt-0"
            onClick={() => {
              const filteredList = filteredRestaurants.filter(
                (restraunt) => restraunt.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
