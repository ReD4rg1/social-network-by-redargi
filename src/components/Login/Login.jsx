import React from "react";
import styles from './Login.module.css';
import {Formik, Field, Form} from "formik";
import * as yup from 'yup';

const Login = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Login</h1>
                <LoginForm login={props.login}/>
            </div>
        </div>
    );
}

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}
            validationSchema={SignInSchema}
            onSubmit={ (values, { resetForm, setStatus, setSubmitting }) => {
                props.login({values, setStatus, resetForm, setSubmitting})
            }}
        >
            {({errors, touched, status}) => (
                <Form>
                    <div className={styles.formInput}>
                        <Field name={'email'} placeholder={"Email"}/>
                        {errors.email && touched.email
                            ? <div className={styles.error}>{errors.email}</div>
                            : null}
                        {status && status.messageEmail
                            ? <div className={styles.error}>{status.messageEmail}</div>
                            : null}
                    </div>
                    <div className={styles.formInput}>
                        <Field name={'password'} placeholder={"Password"} type={'password'}/>
                        {errors.password && touched.password
                            ? <div className={styles.error}>{errors.password}</div>
                            : null}
                        {status && status.messagePassword
                            ? <div className={styles.error}>{status.messagePassword}</div>
                            : null}
                    </div>
                    <div className={styles.formCheckbox}>
                        <Field name={'rememberMe'} type={"checkbox"}/> Remember me
                    </div>
                    <div className={styles.formButton}>
                        <button type="submit">Sign In</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const SignInSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

export default Login