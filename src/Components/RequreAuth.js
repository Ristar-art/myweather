import { Navigate } from "react-router-dom"

import { useLocation } from "react-router-dom"
import { useAuth } from "./auth"

export const RequreAuth =({children})=>{

     const location = useLocation()
     const auth = useAuth

     if (!auth.authenticated){
        return<Navigate to ='/login' state={{path: location.pathname}}/> 
     }
    return(
         children
    )
}