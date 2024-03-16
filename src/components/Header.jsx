import { LOGO_URL } from "../utils/constant";
const Header = ()=>{
    return (
        <div className="Header">
            <div className="logocon">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact</li>
                    <li>cart</li>

                </ul>
            </div>
        </div>
    )
}

export default Header;