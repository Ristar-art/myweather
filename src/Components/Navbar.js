import React from "react";
import {Link} from "react-router-dom"
import { useAuth } from "./auth";




export const Navbar =({user}) =>{

//this are links on the Navbaer to other pages
//access to the ristricted data by unaouthorised person will lead to being sent to the login page
 const auth = useAuth
    
return(

    <nav style={{justifyContent:"space-between", display:"flex", height:"5vh",width:"100vw",backgroundColor:"blue", alignItems:"center"}}>
        <Link style={{  color: "white"}} to = '/'>Home </Link>
        <Link style={{  color: "white"}} to = '/about'>About</Link>       
        <Link style={{  color: "white"}} to = '/weather'>Weatrer</Link> 
        <Link style={{  color: "white"}} to = '/registration'>Registration Page</Link>
          {
            !auth.authenticated &&( <Link style={{  color: "white"}} to= 'login'>Login</Link>
            )
          }
         

    </nav>
   
)

}