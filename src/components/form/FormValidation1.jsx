import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation1 = () => {

    const {register, handleSubmit , formState:{errors}} = useForm()
    console.log("errors...",errors);
    
    const validationSchema = {
      adressValidator : {
        required : {
          value : true,
          message : "adress is required*"
        },
        minLength:{
          value: 5 ,
          message: "min 5 char is required*" 
        },
        maxLength : {
          value : 60,
          message : "max 60 char is required*"
        }
      }
    }

    const submitHandler =(data) =>{
        console.log(data)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>FormValidation</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label>Name :</label>
          <input type="text"  placeholder='Enter name' {...register("name",{required:{value:true,message:"Name is required"}})} />
          {errors.name&&errors.name.message}
          <br />
          <label>Age :</label>
          <input type="text" placeholder='Enter your age' {...register("age" , {required:{value:true,message:"Age is Required*"}})} />
          {errors.age?.message}
          <br />
          <label>Address :</label>
          <input type="text" placeholder='Enter adress' {...register("adress",validationSchema.adressValidator)} />
          {errors.adress?.message}
          <br />
          <input type="submit" />
        </form>
    </div>
  )
}
