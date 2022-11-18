import React from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const FormRegister = () => {
    const customInitial = { 
        name : '',
        last_name : '',
        email: '',
        password: '',
        confirm: ''
    }

    const SchemaRegister = Yup.object().shape(
        {
            name: Yup.string().required('Name is required'),
            last_name: Yup.string().required('Last name is required'),
            email: Yup.string().email().required('Mail is required'),
            password: Yup.string().min(6, 'Password too short').max(14, 'Pass to large').required('Password is required'),
            confirm: Yup.string().when('password', {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    "password must match!!"
                )
            }).required("you must confirm the password!!")
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
                        <label>Name</label>
                        <Field type='text' name='name'/>
                        {
                            errors.name && touched.name && (
                                <ErrorMessage name='name' component='div'/>
                            )
                        }
                        <label>Last name</label>
                        <Field type='text' name='last_name'/>
                        {
                            errors.last_name && touched.last_name && (
                                <ErrorMessage name='last_name' component='div'/>
                            )
                        }
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
                        <label>Confirm password</label>
                        <Field type='password' name='confirm'/>
                        {
                            errors.confirm && touched.confirm && (
                                <ErrorMessage name='confirm' component='div'/>
                            )
                        }

                        <button type='submit'>Add</button>
                        {isSubmitting ? (<p>sending your data</p>): null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormRegister;
