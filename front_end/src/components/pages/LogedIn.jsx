import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function LogedIn() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
   const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
         {},
        {
           withCredentials: true }
        );
        if (!data.status) {
         removeCookie("jwt");
          navigate("/login");
        } else
         toast(`Hi ${data.user}`, {theme: "dark"});
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/register");
  };
  return (
    <>
      <div className="private">
        <h1>Welcome! </h1>
        <button onClick={logOut}>Log Out</button>
      </div>
      <ToastContainer />
    </>
  );
}
