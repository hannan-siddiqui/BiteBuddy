import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import online from "../utils/online";
const Header = ()=>{

    const [btnname , setbtnname] = useState("login");
    const on = online();

    return (
        <div className="Header">
            <div className="logocon">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li> status :{on?"online":"offline"} </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/about"> about us </Link></li>
                    <li><Link to="/contact"> contact </Link></li>
                    <li>cart</li>
                    <li><button className="btn"
                    onClick={()=>{
                        setbtnname(btnname=="login"?"logout":"login");
                        
                    }}
                    >{btnname}</button></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;