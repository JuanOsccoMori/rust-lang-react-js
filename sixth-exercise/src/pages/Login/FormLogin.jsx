import React from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const FormLogin = () => {
    const customInitial = { 
        email: '',
        password: '',
    }
    const SchemaRegister = Yup.object().shape(
        {
            email: Yup.string().email().required('Mail is required'),
            password: Yup.string().min(6, 'Password too short').max(14, 'Pass to large').required('Password is required'),
        }
    )
    return (
        <div>
            <Formik
                initialValues={customInitial}
                validationSchema={SchemaRegister}
                onSubmit={async(values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
                >
                {({values, touched, errors, isSubmitting, handleChange, handleBlur}) => (
                    <Form>
                        <label>Email</label>
                        <Field type='email' name='email'/>
                        {
                            errors.email && touched.email && (
                                <ErrorMessage name='email' component='div'/>
                            ) 
                        }
                        <label>Password</label>
                        <Field type='password' name='password'/>
                        {
                            errors.password && touched.password && (
                                <ErrorMessage component='div' name='password'/>
                            )
                        }

                        <button type='submit'>Login</button>
                        {isSubmitting ? (<p>entries your data</p>): null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormLogin;
