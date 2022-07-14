import React from 'react';
import { useForm } from 'react-hook-form';

const Register = props => {
  const {register, handleSubmit, formState: {errors}, watch} = useForm();
  // choosing not to use React Bootstrap here in order to simplify implementation of react-hook-form

  return (
    <>
        <div className="p-3 mt-3 card">
            <h2>Register</h2>
            <form onSubmit={handleSubmit((data) => {
                console.log(data); // data will get tossed into the endpoint
            })}>
                <div className="container w-75">
                    <div className="row">
                        <div className="input-group">
                            <input aria-describedby="email_input_label" aria-label="Enter Email Here" className="p-3 form-control" {...register("email", { 
                                    required: { 
                                        value: true, 
                                        message: "* Email is required" },
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "* Invalid email address"
                                    }
                                })} 
                                placeholder="Email" type="email"></input>
                        </div>
                        <div className="pt-0 pb-1 my-0">
                            <p className="form-label">{errors.email?.message}</p>
                        </div>
                    </div>
                    <div className="row g-3 py-0 align-items-center">
                        <div className="input-group">
                            <input aria-describedby="password_input_label" aria-label="Enter Password Here" className="p-3 form-control"
                                {...register("password", { 
                                    required: "* Password is required", 
                                    minLength: {
                                        value: 8,
                                        message: "* Minimum password length is 8"
                                    }})} placeholder="Password" type="password">

                            </input>
                        </div>
                        <div className="pt-0 pb-1 my-0">
                                <span role="alert">{errors.password?.message}</span>
                        </div>
                    </div>
                </div>
                <div className="pb-3 row align-items-center">
                    <div className="justify-content-center text-center w-100">
                        <input className="btn btn-block btn-primary border border-end border-start py-3 w-50 fw-bold align-items-center register-submit-btn text-uppercase" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

// Register.propTypes = {};

export default Register;