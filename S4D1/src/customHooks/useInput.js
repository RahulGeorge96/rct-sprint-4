import { useState } from "react"

function useInput (init){

  let [data , setData] = useState(init)

  let handleUpdate = (e)=>{
    setData(e.target.value)
  }

    return {
        data , 
        onInputChange : handleUpdate
    }
}


export default useInput
// useState
// num , str , char , fun , 

// fetch => custom hook
// useFetch