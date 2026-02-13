import React from "react";
import { useForm } from "react-hook-form";

export const FormValidation2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationSchema = {
    userNameValidator: {
      required: {
        value: true,
        message: "userName is required*",
      },
      minLength: {
        value: 2,
        message: "minimum 2 char username is required*",
      },
      maxLength: {
        value: 20,
        message: "maximum 20 char username is allowed",
      },
    },

    emailValidator: {
      required: {
        value: true,
        message: "Email is required *",
      },
    //   minLength: {
    //     value: 8,
    //     message: "minimum 8 char username is required*",
    //   },
    //   maxLength: {
    //     value: 20,
    //     message: "maximum 20 char username is allowed",
    //   },
    },
    passwordValidator : {
        required : {
            value : true ,
            message : "password is required*"
        },
        minLength : {
            value : 6 ,
            message : "min 6 letter is required*"
        },
        maxLength : {
            value : 15 , 
            message : "max 15 letter is allowed*"
        }
    },
    phoneNumberValidator : {
        required : {
            value : true,
            message : "password is required*"
         },
         minLength : {
            value : 10,
            message : "number is should have 10 exact numbers"
        }
    }
  };

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>sign-up Form</h1>
      <br />
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>
          <b>UserName :</b>{" "}
        </label>
        <input
          type="text"
          placeholder="Enter userName"
          {...register("username", validationSchema.userNameValidator)}
        />
        {/* <p style={{color:"red"}}>{errors.username?.message}</p> */}
        {errors.username?.message}
        <br />
        <label>
          <b>Email : </b>
        </label>
        <input
          type="Email"
          placeholder="Enter Email"
          {...register("email", validationSchema.emailValidator)}
        />
        {errors.email?.message}
        <br />
        <label><b>Password :</b></label>
        <input type="password" placeholder="Enter password"  {...register("password" , validationSchema.passwordValidator)}/>
        {errors.password?.message}
        <br />
        <label> <b>Phone number : </b></label>
        <input type="tel" placeholder="Enter phone number" {...register("phone" , validationSchema.passwordValidator)} />
        {errors.phone?.message}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
