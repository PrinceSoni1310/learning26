import React from 'react'

export const FunctionDemo1 = () => {

    const test = ()=> {
        alert("the function is calling...")
    }

    const test2 = (name)=> {
        alert("the function is calling..."+ name)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Function Demo 1</h1>
        <button onClick={test}>Click Me</button>
        <button onClick={()=>test2("React Js")}>Click Me 2</button>
    </div>
  )
}
