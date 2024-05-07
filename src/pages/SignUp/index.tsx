import React, { Fragment, useState } from 'react';
import illustration from "../../assests/images/signup/Illustration.png";
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Register } from '../../redux/action/Register.tsx';
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            Email: '',
            Password: '',
            Confirm: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            Email: Yup.string().email('Invalid email').required('Email is required'),
            Password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters long')
                .matches(/[0-9]/, 'Password requires a number')
                .matches(/[a-z]/, 'Password requires a lowercase letter')
                .matches(/[A-Z]/, 'Password requires an uppercase letter')
                .matches(/[^\w]/, 'Password requires a symbol'),
            Confirm: Yup.string()
                .oneOf([Yup.ref('Password'), null], 'Passwords must match')
                .required('Confirm Password is required')
        }),
        onSubmit: (values, {resetForm}) => {
            dispatch(Register(JSON.stringify(values, null, 2), () => resetForm()));
            
        },
    });
    const registerError = useSelector(state => state.auth.error)
    const registerSuccess = useSelector(state => state.auth.success)


    return (
        <section className="signup-area overflow-hidden">
            {registerError && 
                <div style={{ position: "absolute", right: 0 }} className="alert alert-danger alert-dismissible fade show">
                    <strong>Error!</strong>Email already exists
                </div>}
            {
                registerSuccess &&
                <div className="alert alert-success alert-dismissible fade show">
                    <strong>Successfully!</strong> Please check your email to verify
                </div>
            }
            <div className="container">
                <div>
                    <h2 className="font-title--md" style={{ margin: "50px 0px 20px 0" }}>Sign Up</h2>
                </div>
                <div className="row align-items-center justify-content-md-center">

                    <div className="col-lg-6 order-2 order-lg-0">

                        <div className="signup-area-textwrapper">
                            <form
                                onSubmit={formik.handleSubmit}>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "50%", marginRight: "10px" }} className={`form-element ${formik.touched.firstName && formik.errors.firstName && 'error'}`}>
                                        <div className="form-alert">
                                            <label htmlFor="name">First Name</label>
                                            {formik.touched.firstName && formik.errors.firstName &&
                                                <span>{formik.errors.firstName}</span>
                                            }
                                        </div>
                                        <div className="form-alert-input">
                                            <input
                                                onChange={formik.handleChange}
                                                value={formik.values.firstName}
                                                type="text" placeholder="Arif" id="firstName" />
                                        </div>
                                    </div>
                                    <div style={{ width: "50%" }} className={`form-element ${formik.touched.lastName && formik.errors.lastName && 'error'}`}>
                                        <div className="form-alert">
                                            <label htmlFor="name">Last Name</label>
                                            {formik.touched.lastName && formik.errors.lastName &&
                                                <span>{formik.errors.lastName}</span>
                                            }
                                        </div>
                                        <div className="form-alert-input">
                                            <input
                                                onChange={formik.handleChange}
                                                value={formik.values.lastName}
                                                style={{ marginRight: "10px" }} type="text" placeholder="Ahmed" id="lastName" />


                                        </div>
                                    </div>
                                </div>
                                <div className={`form-element ${formik.touched.Email && formik.errors.Email && 'error'}`}>
                                    <div className="form-alert">
                                        <label htmlFor="email">Email</label>
                                        {formik.touched.Email && formik.errors.Email &&
                                            <span>{formik.errors.Email}</span>
                                        }
                                        {/* <span>*please enter a valid email</span> */}
                                    </div>
                                    <div className="form-alert-input">
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.Email}
                                            type="email" placeholder="abc@gmail.com" id="Email" />
                                        <div className="form-alert-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle">
                                                <circle cx={12} cy={12} r={10} />
                                                <line x1={12} y1={8} x2={12} y2={12} />
                                                <line x1={12} y1={16} x2="12.01" y2={16} />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={`form-element ${formik.touched.Password && formik.errors.Password && 'error'}`}>
                                    <div className="form-alert">
                                        <label htmlFor="password" style={{ textAlign: 'left' }}>password</label>
                                        {formik.touched.Password && formik.errors.Password &&
                                            <span>{formik.errors.Password}</span>
                                        }
                                    </div>
                                    <div className="form-alert-input">
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.Password}
                                            type={showPassword ? 'text' : 'password'} placeholder="Type here..." id="Password" />
                                        <div className="form-alert-icon" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword
                                                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                                :

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="feather feather-eye"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={`form-element ${formik.touched.Confirm && formik.errors.Confirm && 'error'}`}>
                                    <div className="form-alert">
                                        <label htmlFor="confirm-password" style={{ textAlign: 'left' }}>Confirm password</label>
                                        {formik.touched.Confirm && formik.errors.Confirm &&
                                            <span>{formik.errors.Confirm}</span>
                                        }
                                    </div>
                                    <div className="form-alert-input">
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.Confirm}
                                            type={showPasswordConfirm ? 'text' : 'password'} placeholder="Type here..." id="Confirm" />
                                        <div className="form-alert-icon" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                                            {showPasswordConfirm
                                                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                                :

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    className="feather feather-eye"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-element d-flex align-items-center terms">
                                    <p className="mt-2 mb-lg-4 mb-3">Already have account? <a href="/signin" className="text-black-50">Sign In</a></p>

                                </div>
                                <div className="form-element">
                                    <button type="submit" className="button button-lg button--primary w-100">Sign UP</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-0">
                        <div className="signup-area-image">
                            <img src={illustration}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SignUp;