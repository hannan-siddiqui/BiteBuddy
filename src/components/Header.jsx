import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = ()=>{

    const [btnname , setbtnname] = useState("login");

    return (
        <div className="Header">
            <div className="logocon">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li><Link to="/">Home</Link></li>
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