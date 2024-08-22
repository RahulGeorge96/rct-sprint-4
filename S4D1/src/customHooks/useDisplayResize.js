import { useEffect , useState } from "react"

function useDisplayResize(){
    let [pageHeight , setPageHeight] = useState(window.innerHeight)
    let [pageWidth , setPageWidth] = useState(window.innerWidth)

    useEffect(()=>{

        window.addEventListener('resize' , ()=>{
            setPageHeight(window.innerHeight)
            setPageWidth(window.innerWidth)
        })

    } , [])
     
    return {
        pageHeight , pageWidth
    }
}

export default useDisplayResize