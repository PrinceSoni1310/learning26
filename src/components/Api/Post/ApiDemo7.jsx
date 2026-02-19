import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const ApiDemo7 = () => {

    const {register , handleSubmit , formState:{errors}} = useForm()

    const submitHandler = async(data) => {
        console.log(data); 
        try {
            const responce = await axios.post("https://node5.onrender.com/user/user/",data)
            console.log(responce)
        }catch(err) {
            console.log(err);
            alert('error while adding user')
        }
    }

    const validationSchema = {
        nameValidation : {
            required :{
                value :true,
                message : "name is required*"
            }
        },
        emailValidation : {
            required : {
                value : true,
                message : "Email is required*"
            },
            pattern : {
                value : "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$",
                message : "Invalid Email*"
            }
        },
        ageValidation : {
            required : {
                value : true,
                message : "Age is required*"
            },
            min : {
                value : 18,
                message : "min 18 year is required*"
            },
            max : {
                value : 60,
                message : "max 60 year is allowed*"
            }
        },
        passwordValidation : {
            required : {
                value : true,
                message : "password is required*"
            },
            pattern :{
                value : "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
                message : "invalid password*"
            }
        },
        isActiveValidation : {
            required : {
                value :true , 
                message : "choice is required*"
            }
        }
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>ApiDemo7</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <label><b>Name :</b></label>
            <input type="text" placeholder='Enter name' {...register("name", validationSchema.nameValidation)} />
            {errors.name?.message}
            <br />
            <label><b>Email :</b></label>
            <input type="email" placeholder='Enter your Email' {...register("email",validationSchema.emailValidation)} />
            {errors.email?.message}
            <br />
            <label><b>Age :</b></label>
            <input type="number" placeholder='Enter your age' {...register("age",validationSchema.ageValidation)} />
            {errors.age?.message}
            <br />
            <label><b>Password :</b></label>
            <input type="password" placeholder='Enter password'  {...register("password",validationSchema.passwordValidation)} />
            {errors.password?.message}
            <br />
            <label><b>isActive : </b></label>
            <input type="radio" value="yes"  {...register("isActive",validationSchema.isActiveValidation)}/><label>Yes</label>
            <input type='radio' value="no" {...register("isActive",validationSchema.isActiveValidation)}/><label>No</label>
            {errors.isActive?.message}
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}
