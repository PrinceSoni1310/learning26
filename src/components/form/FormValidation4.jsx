import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation4 = () => {

  const {register,handleSubmit, formState:{errors}} = useForm({mode:"all"})


  const validationSchema = {
    nameValidation : {
      required : {
        value : true,
        message : "name is required*"
      }
    },
    contactValidation : {
      required : {
        value : true,
        message : "contact is required*"
      },
      pattern : {
        value : /^[6-9]{1}[0-9]{9}$/, //regex
        message : "invalid number*"
      }
    },
    promoCodeValidation : {
      required : {
        value : true,
        message : "promo-code is required*"
      },
      validate :(params)=> {
        // console.log("params",params);
        return params == 2026 || "invalid promo-code*"
        
      }
    },
    hobbiesValidation  :{
     required : 
    {
      value : true,
      message : "hoobies are required*"
    },
    validate :(params) => {
      // console.log(params);
      return params?.length>=2 || "min 2 hobbies are required*"
      
    }
  }

  }

  const submitHandler = (data) => {
    console.log(data);
    
  }

  return (
    <div style={{textAlign : 'center'}}>
        <h1>From Validation 4</h1>
        {/* pattern and validation */}

        <form onSubmit={handleSubmit(submitHandler)}>

          <label><b>Name :</b> </label>
          <input type="text" placeholder='Enter your name' {...register("name" ,validationSchema.nameValidation)}/>
          {errors.name?.message}
          <br />
          <label><b>Contact :</b> </label>
          <input type="text" placeholder='Enter Contact' {...register ("contact" , validationSchema.contactValidation)} />
          {errors.contact?.message}
          <br />
          <label><b>Promo Code:</b> </label>
          <input type="text" placeholder='Enter promo code' {...register("promocode" , validationSchema.promoCodeValidation)} />
          {errors.promocode?.message}
          <br />
          <label><b>Hobbies = </b></label><br />
          Cricket <input type="checkbox"  {...register ("hobbies",validationSchema.hobbiesValidation)} value="cricket"/> <br />
          reading <input type="checkbox"  {...register ("hobbies",validationSchema.hobbiesValidation)} value="reading"/> <br />
          Travel <input type="checkbox"  {...register ("hobbies",validationSchema.hobbiesValidation)} value="travel"/> <br />
          {errors.hobbies?.message}

          <br />
         <input type="submit"/>
        </form>

    </div>
  )
}
