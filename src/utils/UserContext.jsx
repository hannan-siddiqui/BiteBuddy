import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Darth Vader", 
});

export default UserContext;