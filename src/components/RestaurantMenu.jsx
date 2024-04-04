import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestautantMenu from "../utils/useRestautantMenu";
import ResCat from "./ResCat";

const RestaurantMenu = () => {


    const {resId} = useParams();
    console.log(resId);

    // custom Hook to fetch deta

    const resinfo = useRestautantMenu(resId);




   
    // console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    //   (c)=>
    //   c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

    const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c)=>
      c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      console.log(categories);
    

    

    if(resinfo == null) return <Shimmer/>;

  return (
    <div className='menu'>
        
       
       {
        categories.map((c)=>
          <ResCat  data ={categories?.card?.card} />
        )
       }

        
    </div>
  )
}
export default RestaurantMenu;
