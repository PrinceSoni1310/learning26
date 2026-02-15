import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormValidation6 = () => {

    const {register,handleSubmit,formState: {errors},watch} = useForm({mode:"onChange"})

    const password = watch("password")
    console.log("watching...", password);
    

    const validationSchema = {
        passwordValidator : {
            required : {
                value : true ,
                message : "password is required*"
            }
        },
        confirmPasswordValidator : {
            required : {
                value : true ,
                message : "confirm password is required*"
            },
            validate : (params)=>{
                return params == password || "confirm password is not match"
            }
        }
    }

    const submitHandler = (data)=> {
        console.log(data);
        
    }

  return (
    <div style={{textAlign : 'center'}}>
        <h1>Form Validation 6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>

            <label><b>Password :</b></label>
            <input type="password" placeholder='Enter password' {...register("password" ,validationSchema.passwordValidator)} />
            {errors.password?.message}
            <br />
            <label> <b>ConfirmPassword :</b> </label>
            <input type="password" placeholder='Enter comfrm passs' {...register("confirmPassword",validationSchema.confirmPasswordValidator)} />
            {errors.confirmPassword?.message}
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}
