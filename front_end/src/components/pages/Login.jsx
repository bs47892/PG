import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
//import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
   //const [cookies] = useCookies(["cookie-name"]);
   const navigate = useNavigate();
   //useEffect(() => {
     //if (cookies.jwt) {
       //navigate("/");
     //}
   //}, [cookies, navigate]);
 
   const [values, setValues] = useState({ email: "", password: "", });
   
   const generateError = (err) =>
     toast.error(err, {
       position: "bottom-right",
    });
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const { data } = await axios.post(
         "http://localhost:4000/login",
         {
           ...values,
        },
        {
          withCredentials: true,
        });
       
         
       if (data) {
         if (data.errors) {
           const { email, password } = data.errors;
           if (email) generateError(email);
           else if (password) generateError(password);
         } else {
          navigate("/LogedIn");
        }
       }
     } catch (err) {
       console.log(err);
     }
  };
  return (
    <div className="container">
      <h2>Login in to your Account</h2>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email"
          onChange={(e)=> 
          setValues({ ...values, [e.target.name]: e.target.value})
          }
          />
           </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name="password" 
           onChange={(e)=> 
            setValues({ ...values, [e.target.name]: e.target.value})
            }></input>
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account ?<Link to="/register"> Register</Link>
       </span>
     </form>
      <ToastContainer />
    </div>
  );
}

