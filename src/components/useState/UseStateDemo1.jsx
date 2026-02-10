import React, { useState } from 'react'
import { CardComponent } from '../props/CardComponent'

export const UseStateDemo1 = () => {

    const [count, setCount] = useState(0)
    // count ---> state variable
    // setCount ---> function to update the state variable
    // useState(0) ---> 0 is the initial value of the state variable

    const increseCount = ()=> {
        setCount(count + 1)
    }   

  return (
    <div style={{textAlign:'center'}}>

        <h1>UseState Demo 1</h1>

        <h1>Count= {count}</h1>
        <button onClick={increseCount}>Increase Count</button>
        <CardComponent title = "useState demo1" ></CardComponent>
    </div>
  )
}
