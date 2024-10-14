// Signup.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Signup = () => {
    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        mobile: Yup.string()
            .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required'),
    });

    // Formik setup
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(values) => {
            console.log('Form data', values);
            try {
                const res= await axios.post(`http://localhost:5000/api/user/createUser`,{
                    name:values?.name,
                    email:values?.email,
                    mobile:values?.mobile,
                    password:values?.password,
                    confirmPassword:values?.password,
                    role:"admin"
                });
                console.log(res);
                
            } catch (error) {
                
            }
            // You can also call an API here to handle signup
        },
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-700">Signup</h2>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-blue-500`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="mt-1 text-red-500 text-sm">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-blue-500`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="mt-1 text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobile}
                            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                                formik.touched.mobile && formik.errors.mobile ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-blue-500`}
                        />
                        {formik.touched.mobile && formik.errors.mobile ? (
                            <div className="mt-1 text-red-500 text-sm">{formik.errors.mobile}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                                formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                            } focus:ring-blue-500`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="mt-1 text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
