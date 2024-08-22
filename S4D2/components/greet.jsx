import React,{ useEffect } from "react"


export const Greet = React.memo(
    ({user , age} )=>{
 
        console.log("rendered child")
    
        return(
            <>
            <hr/>
            <h2>Hi ! , {user} , good morning . </h2>
            </>
            
        )
    
    }
)