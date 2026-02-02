import React from 'react'

export default function ContentComponent() {
    var year = 2026
  var title = "learnig-MernStack "
  var isAvailable = true

  var Student = {
    name : "Prince",
    age : 21,
    location : "Deesa"
  }
  return (
    <div style={{backgroundColor : 'aqua' , border :"3px solid black" ,marginTop : "10px" ,marginBottom : "10px", padding : "10px" ,  width : "auto"}}>
              <h1>Hello React</h1>
      <h2>year : {year}</h2>
      <h2>Title : {title}</h2>
      <h2>isAvailable : {isAvailable==true ? "True" : "False"}</h2>
      <h3>Every tag has a closing tag</h3>
      <br></br>
      <h1>Name :{Student.name} , Age : {Student.age} , Location : {Student.location}</h1>
    </div>
  )
}