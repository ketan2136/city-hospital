import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, useFormik } from 'formik';


function Auth1(props) {


    const [authtype, setauthtype] = useState('login');

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

    const formik = useFormik({
        initialValues: authval,
        enableReinitialize: true,
        validationSchema: authschema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur} />
                            <div className="validate" />
                            <span className='errors'>{errors.name && touched.name ? errors.name : ''}</span>

                        </div>

                }

                <div className="col-md-7 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur} />
                    <div className="validate" />
                    <span className='errors'>{errors.email && touched.email ? errors.email : ''}</span>

                </div>

                {
                    authtype === 'forgot' ? null :
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <input type="password" className="form-control" name="phone" id="phone" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur} />
                            <div className="validate" />
                            <span className='errors'>{errors.phone && touched.phone ? errors.phone : ''}</span>


                        </div>

                }



                {
                    authtype === 'login' ? <div id='login' className="text-center"><button type="submit">Login</button></div>
                        :
                        authtype === 'signup' ?
                            <div id='login' className="text-center"><button type="submit">Sign up</button></div>
                            :
                            <div id='login' className="text-center"><button type="submit">submit</button></div>

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