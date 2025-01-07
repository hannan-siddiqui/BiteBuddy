import Restaurantcard, { Promoted } from "./RestaurantCard";
// import {resdata} from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import online from "../utils/online";
import { FaSearch } from "react-icons/fa";

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
      <div className="mt-4 flex justify-center items-center">
        <div className="flex  items-center  gap-x-2">

          <input
            type="text"
            className="border-[2px] hover:border-white border-stone-600 ml-20 placeholder:text-xl placeholder:text-neutral-400 text-2xl font-semibold  text-neutral-700 w-[400px] 
            p-2 rounded-xl h-[40px]"
            placeholder="Search for restaurants and food"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />

          <button
            className=" "
            onClick={() => {
              const filteredres = reslist.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );

              setfilteredres(filteredres);
            }}
          >
            <span className="rounded-xl -ml-[56px] flex justify-center rounded-l-0 items-center text-2xl  w-[48px] h-[37px]  p-2 "><span className="font-extrabold text-3xl"><FaSearch/></span> </span>
          </button>

        </div>

        <div>
          <button
            className="bg-stone-600 hover:bg-stone-800 text-neutral-200 text-2xl font-bold w-[200px] h-[40px] rounded-xl  "
            onClick={() => {
              const topres = reslist.filter((res) => res.info.avgRating > 4);
              setfilteredres(topres);
            }}
          >
            Top-Rated Res
          </button>
        </div>
      </div>

      <div className="  bg-stone-300">
        <div className="py-16 gap-y-10 gap-x-4 flex flex-wrap justify-center items-center">
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
    </div>
  );
};

export default Body;
