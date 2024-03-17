import Restaurantcard from "./RestaurantCard";
// import {resdata} from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    

    const [reslist, setreslist] = useState([]);
    const[filteresres, setfilteredres] = useState([]);
    const[searchtext, setsearchtext] = useState("");
    
    useEffect(()=>{
        fetchdata()
    }, [])

    const  fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setreslist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

// conditionaling rendering ..........


    return reslist.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">

            <div className="search">
                <input type="text" className="searchbox" value={searchtext}
                onChange={(e)=>{
                    setsearchtext(e.target.value);
                }}
                
                />
                <button
                onClick = { () => {
                    const filteredres = reslist.filter((res)=>
                        res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    );

                    setfilteredres(filteredres);

                }}

                >Search</button>
            </div>
            
            <button className="filterbtn"

                onClick={ ()=>{
                    const topres = reslist.filter(
                        (res)=>res.info.avgRating>4
                    )
                    setfilteredres(topres); 
                }
                }

            >
                Top-Rated Res
            </button>
            
            </div>

            <div className="rescon">

                {
                    filteresres.map((res) =>(<Restaurantcard 
                    key ={res?.info?.id}    
                    resdata = {res}/>))
                }
                

            </div>

        </div>
    )
}

export default Body;
