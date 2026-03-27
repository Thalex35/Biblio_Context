import {createContext} from "react";

export const UserContext = createContext({
    name :"Marie Joseph",
    borrowedCount : 2,
    plan: "premium"   
})