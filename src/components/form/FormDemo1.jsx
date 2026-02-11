import React,{useState} from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [isSubmitted, setisSubmitted] = useState(false)

    const submitHandler = (data) =>{
        console.log(data);
        setuserData(data);
        setisSubmitted(true);
        
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Form-Demo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
            <label><strong>Name :</strong> </label>
            <input type='text' placeholder='Enter name' {...register("name")} ></input><br />
            <label><strong>age :</strong> </label>
            <input type="text" placeholder='enter age' {...register("age")} /><br/>
            <label><strong>Gender :</strong> </label><br />
            Male : <input type='radio' value="male" {...register("gender")}></input><br />
            female : <input type='radio' value="female" {...register("gender")}></input><br />
            <label><strong>Hobbies :</strong> </label>
            Cricket <input type="checkbox" value="cricket" {...register("hobbies")} />
            Travellig <input type="checkbox" value="travelling" {...register("hobbies")} />
            Reading <input type="checkbox" value="reading " {...register("hobbies")} />
            <br />
            <input type="submit" />
            </div> 
        </form>
        {
            isSubmitted == true && 
            <div>
                <h1>Output :</h1>
                <h1><strong>Name:</strong> {userData.name}</h1>
                <h1><strong>Age : </strong> {userData.age}</h1>
                <h1><strong>Gender:</strong> {userData.gender}</h1>
                <h1><strong>Hobbies:</strong> {userData.hobbies.join(",")}</h1>
            </div>
        }
    </div>
  )
}
