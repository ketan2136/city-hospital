import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';
import Buttan from '../Components/UL/Button/Button';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { forgotRequest, loginRequest, singupRequest } from '../redux/action/auth.action';
import { CircularProgress } from '@mui/material';

function Auth1({ btn }) {
    const [authtype, setauthtype] = useState('login');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    console.log(auth);

    let authobj = {};
    let authval = {};

    if (authtype === 'login') {
        authobj = {
            email: yup.string().required('please enter email').email('enter vlide email'),
            phone: yup.string().required('please enter password')
        }
        authval = {
            email: '',
            phone: '',
        }

    } else if (authtype === 'signup') {
        authobj = {
            name: yup.string().required('please enter name'),
            email: yup.string().required('please enter email').email('enter vlide email'),
            phone: yup.string().required('please enter password')
        }
        authval = {
            name: '',
            email: '',
            phone: ''
        }
    } else {
        authobj = {
            email: yup.string().required('please enter email').email('enter vlide email'),
        }
        authval = {
            email: ''
        }
    }

    let authschema = yup.object(authobj);

    const handlelogin = (values) => {
        dispatch(loginRequest({
            data: values,
            callBack: (route) => {
                navigate(route);
            }
        }))
        // localStorage.setItem("loginstatus", 'true');
        // navigate('/')
    };

    const handlesignup = (values) => {
        console.log("dddddddd", values);
        dispatch(singupRequest(values));
    }

    const handleforgot = (values) => {
        console.log(values);
        dispatch(forgotRequest(values));
    }

    const formik = useFormik({
        initialValues: authval,
        enableReinitialize: true,
        validationSchema: authschema,
        onSubmit: (values, action) => {
            if (authtype === 'login') {
                handlelogin(values);
            } else if (authtype === 'signup') {
                handlesignup(values);
            } else if (authtype === 'forgot') {
                handleforgot(values);
            }

            action.resetForm();
        },
    });


    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik


    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            authtype === 'login' ? <h2>Login</h2> :
                                authtype === 'signup' ? <h2>sign up</h2> : <h2>reset password</h2>
                        }
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>

                    {
                        auth.isLoading ? <CircularProgress color="secondary" className='circulAuth' /> :
                            <>

                                <form onSubmit={handleSubmit} className="row justify-content-center php-email-form" >
                                    {
                                        authtype === 'login' || authtype === 'forgot' ?

                                            null :
                                            <div className="col-md-7 form-group">
                                                <input type="text" name="name" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange}
                                                    value={values.name}
                                                    onBlur={handleBlur}
                                                    erroetext={errors.name && touched.name ? errors.name : ''}
                                                />
                                                <div className="validate" />
                                                {/* <span className='errors'>{errors.name && touched.name ? errors.name : ''}</span> */}

                                            </div>

                                    }

                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <input type="email" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange}
                                            value={values.email}
                                            onBlur={handleBlur}
                                            erroetext={errors.email && touched.email ? errors.email : ''}
                                        />
                                        <div className="validate" />


                                    </div>

                                    {
                                        authtype === 'forgot' ? null :
                                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                                <input type="password" name="phone" id="phone" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange}
                                                    value={values.phone}
                                                    onBlur={handleBlur}
                                                    erroetext={errors.phone && touched.phone ? errors.phone : ''}
                                                />
                                                <div className="validate" />
                                            </div>

                                    }



                                    {
                                        authtype === 'login' ? <div id='login' className="text-center"><Buttan type="primary" >Login</Buttan> </div>
                                            :
                                            authtype === 'signup' ?
                                                <div id='login' CustimButtan className="text-center"><Buttan type="secondary">Sigh up</Buttan></div>
                                                :
                                                <div id='login' className="text-center"><Buttan type="outline">Submit</Buttan></div>

                                    }
                                </form>

                                {
                                    authtype === 'login' ?
                                        <>
                                            <span className="login2"><a href='#'  onClick={() => setauthtype('forgot')}>forgot password ?</a></span>
                                            <span className="login1">you have alredy account <a href="#" className='authhh' onClick={() => setauthtype('signup')}>signup</a></span>
                                        </>
                                        :
                                        <span className="login1">creat new account <a href="#" className='authhh' onClick={() => setauthtype('login')}>login</a></span>
                                }

                            </>
                    }


                </div>
            </section>
        </div>
    );
}

export default Auth1;