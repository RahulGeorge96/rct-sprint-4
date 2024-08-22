import { useState } from "react"
import { Greet } from "./greet"

export const ParentGreet = ()=>{
    let [user , setUser] = useState("sam")
    let [age , setAge] = useState(1)
    // console.log("parent re-rendered")
  

    return(
        <div>
          <button onClick={()=>setAge(age+1)}>update Age</button>
          <h2>age of user , {age}</h2>
          <input 
                 placeholder="username update"
                 onChange={(e)=>setUser(e.target.value)} 
                 />  

         <Greet user={user} age={age}/>  
        </div>
    )
}

// re-renders
// parent => user , age

// child => user

// input button => button => print the input (!useRef)

// useMemo => memoize values , if a value change is mentioned in dependency
//            array then it runs else it won't
 
// React.memo => memoize an entire components and the dependency is
//               based on child props that are passed.