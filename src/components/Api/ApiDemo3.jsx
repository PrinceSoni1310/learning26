import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

    const [api , setApi]  = useState([])

    const getApi = async() => {

        const response = await axios.get("https://dummyjson.com/comments")
        console.log(response);
        console.log(response.data);
        console.log(response.data.comments);
        setApi(response.data.comments)
        

    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>ApiDemo3</h1>
        <button onClick={getApi}>GET</button>
        {/* {
            api.map((a)=> {
               return <li>{a.body}</li>
            })
        } */}

    <table className='table table-dark' border = "2">
        <thead>
            <tr>
                <th rowSpan="2">id</th>
                <th rowSpan="2">body</th>
                <th rowSpan="2">Post Id</th>
                <th rowSpan="2">Likes</th>
                <th colSpan="3" className='text-center'>user
                       
                </th>
                    </tr>
                     <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>full name</th>
                    </tr>
        </thead>
        <tbody>
            {
                api.map((e)=> {
                    return(
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.body}</td>
                            <td>{e.postId}</td>
                            <td>{e.likes}</td>
                            <td>{e.user.id}</td>
                            <td>{e.user.username}</td>
                            <td>{e.user.fullName}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>

    </div>
  )
}
