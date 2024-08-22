import { useState } from "react"
import "../styles/counter.css"
import { useMemo } from "react"

function RunMyLoop(num){
    console.log("function is running")
    let sum = 0 
    for(let i = 0 ; i<num ; i++){
         sum+=i
    }
    // very long time
    return sum
   // searching , sorting , filtering and sorting
}

export const TestMemo = ()=>{

    let [theme , setTheme] = useState(false)
    let [count , setCount] = useState(100)

    // let NumsAdded = RunMyLoop(count)
    // console.log(NumsAdded)

    let memoizedAdd = useMemo(()=>{
         return  RunMyLoop(count)
    } , [count ])

    // useEffect is only there for side-effects

    return(
       <div className={theme ? "darkmode" : "lightmode"}>
         
            <div>
               <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
            </div>

            <div>
                {/* <button onClick={()=>setCount(count-1)}>Dec</button> */}
                <input value={count}/>
                <button onClick={()=>setCount(count+1)}>Inc</button>
            </div>

            <div>
                <h2>sum of count is : {memoizedAdd}</h2>
            </div>

         </div>
             
    )
}

// button => setCount , funct(num)
// 101