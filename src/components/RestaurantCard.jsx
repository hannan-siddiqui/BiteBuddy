import { CDN_URL } from "../utils/constant";

const Restaurantcard = (props) =>{



    const {resdata} = props;
    const{name,cloudinaryImageId,cuisines,avgRating, sla,costForTwo } = resdata?.info;



    return (
        <div className=" bg-slate-200 hover:bg-slate-400 w-[250px]  m-4 p-4 border border-solid border-black rounded-lg">
            <img className="rounded-lg" src= {CDN_URL+cloudinaryImageId}>

            </img>
            <h3 className="font-bold py-3 text-xl"> {name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla.deliveryTime} min.</h4>
            <h4>{costForTwo}</h4>
            <h4> {avgRating} stars</h4>
            
        </div>
    )
};

// promted Card

 export const Promoted = (Restaurantcard)=>{


    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white p-2 rounded-2xl" >veg only </label>
                <Restaurantcard {...props}/>
            </div>
    
        )
    }


}


export default Restaurantcard;