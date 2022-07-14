import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
//import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  //const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  //useEffect(() => {
    //if (cookies.jwt) {
      //navigate("/");
    //}
  //}, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", name: "", password: ""});
  
  const generateError = (err) =>
    toast.error(err, {
      position: "bottom-right",
   });
  const handleSubmit = async (e) => {
    console.log(values)
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
       },
       {
         withCredentials: true,
       });
      
        
      if (data) {
        if (data.errors) {
          const { name, email, password } = data.errors;
          if (email) generateError(email);
          else if (name) generateError(name)
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
      <h2>Register an Account</h2>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name"
          onChange={(e)=> 
          setValues({ ...values, [e.target.name]: e.target.value})
          }
          />
           </div>
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
          Already have an account ?<Link to="/login"> Login</Link>
       </span>
     </form>
      <ToastContainer />
    </div>
  );
}

