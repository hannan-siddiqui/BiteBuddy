import { useEffect, useState } from "react";

const online = () => {

    const [onlineStatus, setonlineStatus] = useState(true)

    useEffect(()=>{

        window.addEventListener("ofline", ()=>{
            setonlineStatus(false)
        });

        window.addEventListener("online", ()=>{
            setonlineStatus(true)
        });


    }, [])

  return onlineStatus;
};

export  default online;