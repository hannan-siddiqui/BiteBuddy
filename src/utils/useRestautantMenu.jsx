import { useEffect, useState } from "react";

const useRestautantMenu = (resId)=>{

    const [resinfo, setresinfo] = useState(null);
    
    useEffect(()=>{
        fetchmenu();
    }, []);

    const fetchmenu = async ()=>{
        const data = await fetch(        

        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId="+resId);

        const json = await data.json();

        setresinfo(json?.data);
        

    }


    return resinfo;
}

export default useRestautantMenu;