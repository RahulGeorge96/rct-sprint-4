import { useEffect, useState } from "react"
import axios from "axios"


function useFetch(URL){

    let [loading , setLoading] = useState(true)
    let [data , setData] = useState(null)
    let [error , setError] = useState(null)

    // load , data , error

    useEffect(()=>{  
       setLoading(true)
       setError(false)

       axios.get(URL)
       .then((res)=>{
          setData(res.data)
          setLoading(false)
       })
       .catch((err)=>{
          setError(true)
       })

    } , [URL])


    return{
        loading,
        data,
        error
    }

}

export default useFetch

// call this function just once
// call this function multiple times