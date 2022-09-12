import React, {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
const SignupForm = () => {

    //yup la mot thu vien di kem voi formik
    //yup dung de validator form
    const formik = useFormik({
        //initialValues la nhung gia tri trong form
        initialValues: {
            //day la gia tri cua formik khac voi gia tri state o tren
            name: "",
            email: "",
            password: "",
            confirmedPassword: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("RequiredName").min(4, "Must be 4 characters or more"),
            email: Yup.string().required("RequiredEmail").matches(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, "Please enter a valid email address"),
            password: Yup.string()
            .required("RequiredPassword")
            .matches(
              /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
              "Password must be 7-19 characters and contain at least one letter, one number and a special character"
            ),
            confirmedPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password"), null], "Password must match"),
            
            phone: Yup.string()
            .required("Required")
            .matches(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            "Must be a valid phone number"
            ),

        }),
        onSubmit: async (values, actions) => {
            console.log(values)
            await new Promise((resolve) => setTimeout(resolve, 1000))
            actions.resetForm()
        }
    })

    return (
        <section>
            <form className='infoform' onSubmit={formik.handleSubmit}>
                <label>Your name</label>
                <input 
                    type="text"
                    id='name'
                    name='name'
                    placeholder='Enter your name'
                    value={formik.values.name}
                    // onChange={(e) =>setName(e.target.value) }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.name && (
                    <p className="errorMsg"> {formik.errors.name} </p>
                 )}

                <label>Your Email</label>
                <input 
                    type="email"
                    id='email'
                    name='email'
                    placeholder='Enter your Email' 
                    // onChange={(e) => setEmail(e.target.value)}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.email && (
                    <p className="errorMsg"> {formik.errors.email} </p>
                )}

                <label>Password</label>
                <input 
                    type="password"
                    id='password'
                    name='password'
                    placeholder='Enter your Password'
                    // onChange={(e) => setPassword(e.target.value)} 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.password && (
                    <p className="errorMsg"> {formik.errors.password} </p>
                )}

                <label>Confirm Password</label>
                <input 
                    //id va name phai trung voi value cua formik
                    type="password"
                    id='confirmedPassword'
                    name='confirmedPassword'
                    placeholder='Confirm your password' 
                    // onChange={(e)  => setConfirmedPassword(e.target.value)}
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.confirmedPassword && (
                    <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
                )}

                <label>Phone Number</label>
                <input 
                    type="text"
                    id='phone'
                    name='phone'
                    placeholder='Enter your phone number'
                    // onChange={(e) => setPhone(e.target.value)}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                 {formik.errors.phone && (
                    <p className="errorMsg"> {formik.errors.phone} </p>
                 )}
                <button disabled={formik.isSubmitting} type='submit'>Continue</button>
            </form>
        </section>
    )
}

export default SignupForm