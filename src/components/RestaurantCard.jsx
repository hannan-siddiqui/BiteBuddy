import { CDN_URL } from "../utils/constant";

const Restaurantcard = (props) =>{



    const {resdata} = props;
    const{name,cloudinaryImageId,cuisines,avgRating, sla,costForTwo } = resdata?.info;

    return (
        <div className="rescard">
            <img className="reslogo" src= {CDN_URL+cloudinaryImageId}>

            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla.deliveryTime} min.</h4>
            <h4>{costForTwo}</h4>
            <h4> {avgRating} stars</h4>
            
        </div>
    )
}

export default Restaurantcard;