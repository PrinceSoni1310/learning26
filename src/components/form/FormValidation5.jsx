import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation5 = () => {

    const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})

    const validationSchema = {
        nameValidation : {
          required : {
              value : true,
            message : " name is required*"
          }
        },
        dobValidation : {
          required : {
              value : true,
            message : "DOB is required*"
            },
            validate : (value) => {
                const selectedYear = new Date(value).getFullYear();

                if (selectedYear <2006 ){
                    return true ;
                }else{
                    return "age must be grater than 18"
                }
            }
        },
        addressValidator : {
            required: {
                value : true ,
                message : "address is required*"
            },
            minLength : {
                value : 6 ,
            message : "min 6 char required*"
            },
            maxLength : {
                value : 25 ,
                message : "maximum 25 char allowed*"
            }
        },
        contactValidation : {
            required : {
                value : true ,
                message : "Contact no is required*"
            },
            pattern : {
                value : /^[6-9]{1}[0-9]{9}$/,
                message : "invalid number"
            }
        },
        incomeValidator : {
            required : {
                value : true,
                message : "Family income is required*"
            },
            min : {
                value : 100000,
                message : "min income should be 1,00,000 "
            },
            max : {
                value : 1000000,
                message : "income should be less than 10,00,000"
            }
        }

    }

    const submitHandler = (data) => {
        console.log(data);
    }

  return (
    <div style={{textAlign :'center'}}>
        <h1>Exam Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}> 
            <label><b>Name : </b></label>
            <input type="text" placeholder='Enter candidate name' {...register("name" , validationSchema.nameValidation)} />
            {errors.name?.message}
            <br />
            <label><b>DOB : </b></label>
            <input type="date" {...register("dob" , validationSchema.dobValidation)} />
            {errors.dob?.message}
            <br />
            <label><b>Adress :</b> </label>
            <input type="text" placeholder='Enter address' {...register("address" , validationSchema.addressValidator)} />
            {errors.address?.message}
            <br />
            <label><b>Contact no. : </b></label>
            <input type="tel" placeholder='Enter Contact no.' {...register("contactno",validationSchema.contactValidation)} />
            {errors.contactno?.message}
            <br />
            <label><b>Family income :</b></label>
            <input type="number" placeholder='Enter family income ' {...register("income",validationSchema.incomeValidator)} />
            {errors.income?.message}
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}
