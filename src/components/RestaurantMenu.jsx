import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestautantMenu from "../utils/useRestautantMenu";

const RestaurantMenu = () => {


    const {resId} = useParams();
    console.log(resId);

    // custom Hook to fetch deta

    const resinfo = useRestautantMenu(resId);


    // useEffect(()=>{
    //     fetchmenu();
    // }, []);

    // const fetchmenu = async ()=>{
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +resId+ "&catalog_qa=undefined&submitAction=ENTER");

    //     const json = await data.json();

    //     setresinfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card);
    //     // console.log(resinfo);
        


    // }
    // console.log("res info ---")
    // console.log(resinfo)
    // console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
    
    // console.log(resinfo);

    

    
    const {itemCards} = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);


    

    if(resinfo == null) return <Shimmer/>;

  return (
    <div className='menu'>
        
        <h2>menu.....</h2>

        <ul>
            
                
               {
                itemCards.map((item)=>{
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name}
                    </li>
                    
                })
                }
                
           
            
            <li>Biryani</li>
            <li>Biryani</li>
            <li>Biryani</li>
            <li>Biryani</li>

        </ul>
    </div>
  )
}
export default RestaurantMenu;
