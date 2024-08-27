import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Contant";

export const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  });

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();

    const restMenu1 =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const restMenu2 =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.categories?.[0]?.itemCards;
    const restMenu3 =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories?.[0]?.itemCards;
    const restMenu4 =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    const restMenu5 =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const finalMenu =
      restMenu1 || restMenu2 || restMenu3 || restMenu4 || restMenu5;

    const mobileMenu1 =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const mobileMenu2 =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.categories?.[0]?.itemCards;
    const mobileMenu3 =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories?.[0]?.itemCards;
    const mobileMenu4 =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    const mobileMenu5 =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    const mobileMenu =
      mobileMenu1 || mobileMenu2 || mobileMenu3 || mobileMenu4 || mobileMenu5;

    setRestaurant(finalMenu || mobileMenu);
  }

  return restaurant;
};

export const useRestaurantDetails = (resId) => {
  const [restDetails, setResDetails] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  });

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();

    const restauDetails2 = json?.data?.cards?.[0]?.card?.card?.info;
    const restauDetails1 = json?.data?.cards?.[2]?.card?.card?.info;
    const restauDetails = restauDetails1 || restauDetails2;
    setResDetails(restauDetails);
  }

  return restDetails;
};
