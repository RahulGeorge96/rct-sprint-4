import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from '../components/counter'
import { ParentGreet } from '../components/parentGreet'
import { TestMemo } from '../components/usememo'
import { Callback } from '../components/callback'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
       {/* <Counter/> */}

     {/* <ParentGreet/> */}
     {/* <TestMemo/> */}
     <Callback/>

    </>
  )
}

export default App
