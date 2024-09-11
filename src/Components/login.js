import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
      };

    const goDahsboard = () =>{
      navigate('/dashboard')
    }

    return(
        <>
        <div>
        <img
          src="https://examatlas.com/assets/images/logo.png"
          alt="Example Image"
          className="pl-6 w-48 h-20 ml-24 mt-6"
        />

        <div className="lg:ml-96 md:ml-64 sm:ml-56 ml-20">
           <h1 className="text-4xl mt-14 font-bold">Welcome back</h1>
           <p className="mt-3 text-lg">Login to manage account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4 ">
            <label htmlFor="email" className="block text-sm lg:ml-96 md:ml-64 sm:ml-56 ml-28  mt-10 font-medium text-gray-700 ">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block lg:w-[800px] md:w-[500px] sm:w-[300px] w-200px lg:ml-96 md:ml-64 sm:ml-56 ml-28 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-6 mt-7 ">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 lg:ml-96 md:ml-64 sm:ml-56 ml-28">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block lg:w-[800px] md:w-[500px] sm:w-[300px] w-200px lg:ml-96 md:ml-64 sm:ml-56 ml-28 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <div >
            <button
              type="submit"
              className="lg:w-[800px] md:w-[500px] sm:w-[300px] w-[220px] lg:ml-96 md:ml-64 sm:ml-56 ml-28 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 mb-24"
              onClick={goDahsboard}
            >
              Login
            </button>
          </div>
        </form>
        <Footer/>

        </div>
        </>
    )
}
export default Login;


