import React from "react"

export const CallbackChild = React.memo(({handleClick , num})=>{
    console.log("re-rendered child")
    return(
        <>
        <h2>{num**2}</h2>
        <button onClick={handleClick}>Child updates</button>
        </>
    )
})

// function  => stored by reference

// og copy => photocopy => og - photocopy => function => useCallback
//  => react will skip this match
