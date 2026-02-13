import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormValidation3 = () => {

    const {register, handleSubmit , formState : {errors}} = useForm()

    const validationSchema = {

        nameValidation : {
            required : {
                value : true,
                Message : "name is required*"
            }
        },

    }

    const submitHandler = (data) => {
        console.log(data);   
    }
  return (
    <div style={{textAlign : 'center'}}>
        <h1>Candidate details</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <label><b>Name : </b></label>
            <input type="text" placeholder='Enter candidate name' {...register("name" , validationSchema.nameValidation)}/>
            {errors.name?.message}
            <br />
            <label></label>
            <input type="submit" />
        </form>
    </div>
  )
}
