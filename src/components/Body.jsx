import Restaurantcard from "./RestaurantCard";
import {resdata} from "../utils/mockdata";

const Body = ()=>{


    return (
        <div className="body">
            <div className="search">search</div>

            <div className="rescon">

                {
                    resdata.map((restaurant) =>(<Restaurantcard 
                    key ={restaurant?.info?.id}    
                    resdata = {restaurant}/>))
                }
                

            </div>

        </div>
    )
}

export default Body;