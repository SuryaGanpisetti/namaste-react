import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/constants";
import AppShimmer from "./AppShimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuList from "../../utils/utilsAssignment/useRestaurantMenuList";

const RestaurantMenuListCompnent = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenuList(resID);

  if (resInfo === null) return <AppShimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="bg-amber-950 text-white px-4 py-2 m-4 rounded-lg">
      <h1 className="font-bold text-4xl mb-3">{name}</h1>
      <p className="mb-3 font-semibold">
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <h2 className="font-bold text-2xl mb-3">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"RS. "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuListCompnent;
