import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';
import Buttan from '../Components/UL/Button/Button';
import Input from '../Components/UL/Input/Input';
// import CustimButtan from '../Components/UL/CustomButtan'


function Auth1({ btn }) {
    const [authtype, setauthtype] = useState('login');
    const navigate = useNavigate();

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

    const handlelogin = () => {
        localStorage.setItem("loginstatus", 'true');
        navigate('/')
    };
    const handlesignup = () => {

    }
    const handleforgot = () => {

    }

    const formik = useFormik({
        initialValues: authval,
        enableReinitialize: true,
        validationSchema: authschema,
        onSubmit: values => {
            if (authtype === 'login') {
                handlelogin();
            } else if (authtype === 'signup') {
                handlesignup();
            } else if (authtype === 'forgot') {
                handleforgot();
            }
        },
    });

    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik


    return (

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



            <form onSubmit={handleSubmit} className="row justify-content-center" >
                {
                    authtype === 'login' || authtype === 'forgot' ?

                        null :
                        <div className="col-md-7 form-group">
                            <Input type="text" name="name" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur}
                                erroetext={errors.name && touched.name ? errors.name : ''}
                            />
                            <div className="validate" />
                            {/* <span className='errors'>{errors.name && touched.name ? errors.name : ''}</span> */}

                        </div>

                }

                <div className="col-md-7 form-group mt-3 mt-md-0">
                    <Input type="email" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        erroetext={errors.email && touched.email ? errors.email : ''}
                    />
                    <div className="validate" />


                </div>

                {
                    authtype === 'forgot' ? null :
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <Input type="password" name="phone" id="phone" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange}
                                value={values.phone}
                                onBlur={handleBlur}
                                erroetext={errors.phone && touched.phone ? errors.phone : ''}
                            />
                            <div className="validate" />
                            {/* <span className='errors'>{errors.phone && touched.phone ? errors.phone : ''}</span> */}


                        </div>

                }



                {
                    authtype === 'login' ? <div id='login' className="text-center"><Buttan type="primary" btndisabled={true}>Login</Buttan> </div>
                        :
                        authtype === 'signup' ?
                            <div id='login' CustimButtan className="text-center"><Buttan type="secondary">Sigh up</Buttan></div>
                            :
                            <div id='login' className="text-center"><Buttan type="outline">Submit</Buttan></div>

                }
                {/* {
                    
                     authtype === 'signup' ? null :
                            <span className="login2"><a href='#'>forgot password ?</a></span>

                           
                } */}

            </form>

            {
                authtype === 'login' ?
                    <>
                        <span className="login2"><a href='#' onClick={() => setauthtype('forgot')}>forgot password ?</a></span>
                        <span className="login1">you have alredy account <a href="#" onClick={() => setauthtype('signup')}>signup</a></span>
                    </>


                    :
                    <span className="login1">creat new account <a href="#" onClick={() => setauthtype('login')}>login</a></span>
            }
        </div>
    );
}

export default Auth1;