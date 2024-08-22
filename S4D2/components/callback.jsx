import { useState } from "react"
import { CallbackChild } from "./callbackchild"
import { useCallback } from "react"

export const Callback = ()=>{

    let [count , setCount ] = useState(0)
    let [random , setRandom] = useState(0)

    // & , * , % , $
    let arr = ['&' , '*' , '%' , '$' , '@' , '#']

    const handleClick = useCallback(()=>{
        console.log("clicked")
        setCount(count+1)
    } , [count])

    return(
        <div>
            <h2>Count is : {count}</h2>
            <button onClick={handleClick}>Inc</button>
            <button onClick={()=>setRandom(Math.floor(Math.random()*6))}>Random : {arr[random]}</button>
            <hr/>
            <CallbackChild handleClick={handleClick} num={count}/>
        </div>
    )
}


// useMemo => memoizes ? values (function calls => return value)

// React.memo => memoizes ? Component (up until the relations are based on functions
// , it functions start getting stored as reference and
// reference tend to change , hence triggering re-renders , to prevent it we can
// use React.memo with useCallback)

// useCallback => memoizes ? functions