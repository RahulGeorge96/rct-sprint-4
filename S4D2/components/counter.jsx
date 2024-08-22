import { useState } from "react"
// import styles from "../styles/counter.module.css"
import "../styles/counter.css"
import { useEffect } from "react"
import { useMemo } from "react"

export const Counter = ()=>{

    let [count , setCount] = useState(0)
    let [theme , setTheme] = useState(false)

    let data = [1,2,3,4,5,6,7,8,9,11,17,9,2,19] // assume that it's of 1000 length

    let sortData = useMemo(()=>data.sort((a,b)=>a-b) , [data]) // only side effects should be placed in useEffect

    // console.log(sortData)
    useEffect(()=>{
        console.log("component rendered")
    }) // this useEffect will console on each re-render


    return(
        <div className={theme ? "darkmode" : "lightmode"}>

            <div>
               <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
            </div>

            <div>
                <button onClick={()=>setCount(count-1)}>Dec</button>
                <input value={count}/>
                <button onClick={()=>setCount(count+1)}>Inc</button>
            </div>

            <div>
             
                {
                   
                    sortData.map((ele)=>{
                        console.log(ele)
                        return(
                            <h2>{ele}</h2>
                        )
                    })
                }
            </div>

        </div>


    )
}

// style.classname