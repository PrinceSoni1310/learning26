import axios from 'axios'
import React from 'react'

export const ApiDemo6 = () => {

    const userObj = {
        name : 'Ram' ,
        age : 26 ,
        email : 'ram@gmail.com',
        password : "AIML",
        isActive : true
    }

    const addUser = async () => {

       try{
         const response = await axios.post(`https://node5.onrender.com/user/user/`,userObj)
        console.log(response);
        console.log(response.data);
       }catch(err){
        console.log(err);
        alert('error while adding user')
       }
        
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Api Demo 6</h1>
        <button onClick={()=>{addUser()}}>Click</button>
    </div>
  )
}
