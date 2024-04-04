import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import online from "../utils/online";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=>{

    const [btnname , setbtnname] = useState("login");
    const on = online();

    const {loggedInUser} = useContext(UserContext);

    // subscribing to sgore using selecter
    const cartItems = useSelector((store)=>(store.cart.items));
    // console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-300 m-2 shadow-lg">
            <div className="logocon p-7">
                <img className="w-20 " src={LOGO_URL}></img>
            </div>
            <div className="flex items-centre">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> status :{on?"online":"offline"} </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/about"> about us </Link></li>
                    <li className="px-4"><Link to="/contact"> contact </Link></li>
                    <li className="px-4 font-bold text-lg"> <Link to="/cart">  cart-{cartItems.length} items</Link></li>
                    <li className="px-4"><button className="btn"
                    onClick={()=>{
                        setbtnname(btnname=="login"?"logout":"login");
                        
                    }}
                    >{btnname}</button></li>

                    <li className="px-4  font-bold"> {loggedInUser} </li>

                </ul>
            </div>
        </div>
    )
}

export default Header;