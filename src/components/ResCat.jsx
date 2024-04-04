import { useState } from "react";
import ItemList from "./ItemList";
const ResCat = ({data})=>{

    // console.log(data);

    const [showitem , setshowitem] = useState(false);

    const HandleClick = ()=>{
        setshowitem(!showitem)
    }
    
    return (
        <div>

            <div  className="w-6/12 mx-auto my-4 bg-gray-300 shadow-lg p-4  rounded-lg" >
                <div className="flex justify-between hover:cursor-pointer " onClick={HandleClick} >
                    <span>title</span>
                    <span> down arrow</span>
                </div >
                
                <div className="flex justify-center">
                {showitem && <ItemList/>}
                </div>

            </div>

        </div>

        
        
    )
}

export default ResCat;
