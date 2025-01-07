import Restaurantcard, { Promoted } from "./RestaurantCard";
// import {resdata} from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import online from "../utils/online";

const Body = () => {
  const [reslist, setreslist] = useState([]);
  const [filteredsres, setfilteredres] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  const Promote = Promoted(Restaurantcard);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    for (let i = 0; i < json?.data?.cards.length; i++) {
      const element = json?.data?.cards[i];
      if (element.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        setreslist(
          element.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setfilteredres(
          element.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        break;
      }
    }
  };

  console.log(reslist);

  // conditionaling rendering ..........
  const onlineStatus = online();

  if (onlineStatus === false) return <h1> Offline </h1>;

  if (filteredsres.length == 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="flex  items-center">
        <div className="m-4 p-4 ">
          <input
            type="text"
            className="searchbox border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="bg-red-400 mx-3 px-4  rounded-xl "
            onClick={() => {
              const filteredres = reslist.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );

              setfilteredres(filteredres);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="bg-red-400  px-4  rounded-xl  "
            onClick={() => {
              const topres = reslist.filter((res) => res.info.avgRating > 4);
              setfilteredres(topres);
            }}
          >
            Top-Rated Res
          </button>
        </div>
      </div>

      <div className="flex flex-wrap bg-neutral-700">
        {filteredsres?.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
            {res?.info?.veg ? (
              <Promote resdata={res} />
            ) : (
              <Restaurantcard resdata={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
