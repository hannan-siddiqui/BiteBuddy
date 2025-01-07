import { CDN_URL } from "../utils/constant";
import { IoStarSharp } from "react-icons/io5";

const Restaurantcard = (props) =>{

    const {resdata} = props;

    const {name,cloudinaryImageId,cuisines,avgRating, sla,costForTwo } = resdata?.info;


    return (
        <div className="transition-all duration-500 hover:scale-[0.9] w-[250px] h-[300px] overflow-hidden  p-2 border rounded-lg">
            <img className="w-[250px] h-[150px] rounded-lg" src= {CDN_URL+cloudinaryImageId}>
            </img>

            <h3 className="font-bold pt-2 text-2xl "> {name}</h3>
            <h4 className="mt-2 font-medium text-xl flex justify-start items-center">
                 <span className="text-xl bg-green-600 font-thin text-white p-1 rounded-full mr-2"><IoStarSharp/></span> {avgRating} ▪️ 
                 <span className=" font-bold ">{sla.deliveryTime} mins</span>
            </h4>
            <h4 className="mt-1 text-xl  text-neutral-600">{cuisines.join(", ")}</h4>
            
            
        </div>
    )
};

// promted Card
 export const Promoted = (Restaurantcard)=>{

    return (props) => {
        return (

            <div>
                <label className="absolute bg-black text-white p-2 rounded-2xl" >veg only </label>
                <Restaurantcard {...props}/>
            </div>
    
        )
    }

}


export default Restaurantcard;
