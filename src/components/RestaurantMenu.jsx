import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import ResCat from "./ResCat";
import { CDN_URL, MENU_API, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../utils/constant";

const RestaurantMenu = () => {
  const { resId } = useParams(); 

  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  console.log(menuItems)

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu bg-white shadow-md rounded-lg max-w-4xl mx-auto my-8">
    <div className="restaurant-summary flex items-center p-6 border-b border-gray-200">
      <img
        className="restaurant-img w-32 h-32 rounded-lg object-cover mr-6"
        src={CDN_URL + restaurant?.cloudinaryImageId}
        alt={restaurant?.name}
      />
      <div className="restaurant-summary-details flex-1">
        <h2 className="restaurant-title text-2xl font-bold mb-2">{restaurant?.name}</h2>
        <p className="restaurant-tags text-gray-600">{restaurant?.cuisines?.join(", ")}</p>
        <div className="restaurant-details flex items-center mt-4">
          <div
            className={`restaurant-rating px-2 py-1 rounded-md text-sm font-semibold ${
              restaurant?.avgRating < 4
                ? "bg-red-500 text-white"
                : restaurant?.avgRating === "--"
                ? "bg-white text-black border border-gray-300"
                : "bg-green-500 text-white"
            }`}
          >
            <i className="fa-solid fa-star mr-1"></i>
            <span>{restaurant?.avgRating}</span>
          </div>
          <div className="restaurant-rating-slash mx-2 text-gray-400">|</div>
          <div className="time text-gray-600">{restaurant?.sla?.slaString}</div>
          <div className="restaurant-rating-slash mx-2 text-gray-400">|</div>
          <div className="time text-gray-600">{restaurant?.costForTwoMessage}</div>
        </div>
      </div>
    </div>
  
    <div className="restaurant-menu-content p-6">
      <div className="menu-items-container">
        <div className="menu-title-wrap flex justify-between items-center mb-4">
          <h3 className="menu-title text-lg font-bold">Recommended</h3>
          <p className="menu-count text-gray-500">{menuItems.length} ITEMS</p>
        </div>
        <div className="menu-items-list grid grid-cols-1 gap-4">
          {menuItems.map((item) => (
            <div className="menu-item flex items-center justify-between p-4 border rounded-lg shadow-sm" key={item?.id}>
              <div className="menu-item-details">
                <h3 className="item-title text-md font-semibold">{item?.name}</h3>
                <p className="item-cost text-sm text-gray-600">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : ""}
                </p>
                <p className="item-desc text-sm text-gray-500">{item?.description}</p>
              </div>
              <div className="menu-img-wrapper flex flex-col items-end">
                {item?.imageId && (
                  <img
                    className="menu-item-img w-20 h-20 rounded-md object-cover mb-2"
                    src={CDN_URL + item?.imageId}
                    alt={item?.name}
                  />
                )}
                <button className="add-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default RestaurantMenu;