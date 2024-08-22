import { useInsertionEffect, useState } from "react"
import useInput from "../customHooks/useInput"
import useFetch from "../customHooks/useFetch"

export const Form = ()=>{

    let email = useInput("fds")
    let password = useInput("fds")
    let username = useInput("fsd")
    let url = `https://reqres.in/api/users?page=2`
    let urlTwo = `https://picsum.photos/v2/list`
    let urlThree = "https://jsonplaceholder.typicode.com/posts"
    let url4 = "https://crud-mk-i-default-rtdb.firebaseio.com/users.json"

    let {loading , data , error} = useFetch(url)
    let data2 = useFetch(urlTwo)
    let data3 = useFetch(urlThree)
    let data4 = useFetch(url4)
    

    const handleSubmit = (e)=>{
         e.preventDefault()
      
         let obj = { email : email.data ,
                     password :  password.data ,
                     username : username.data}
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input value={email.data}
                   onChange={email.onInputChange}
                    placeholder="email"/>
            <input value={password.data} onChange={password.onInputChange} placeholder="password"/>
            <input value={username.data} onChange={username.onInputChange} placeholder="username"/>
            <input type="submit" />
        </form>

        <div>

            {
                

            }

        </div>
        </>
    )
}

// why would we need custom hooks ? 

// - to prevent code repetation . 
// - separation of concerns => separates the logic so that debugging becomes easier.
// - improving readaility
 
// custom hook .js

// function => 


// Rules of creating a React Hook ? 

// - use keyword should be there , for react to identify it's a hook . 
// - hooks are supposed to be functions => return something 
// - hooks are not supposed to be created inside loops or conditional statements




// 1. once , when the component mounts
// 2. once , when the component reloads
// 3. always , when the component re-renders
// 4. whenever , the states in the dependency array updates