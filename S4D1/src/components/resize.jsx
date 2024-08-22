import { useState } from "react"
import useDisplayResize from "../customHooks/useDisplayResize"

export const Resize = ()=>{

   let {pageHeight , pageWidth} = useDisplayResize()
    // window.innerHeight
    return(
        <>

         <h2>page height is {pageHeight}</h2>
         <h2>page width is {pageWidth}</h2>
        </>
    )
}