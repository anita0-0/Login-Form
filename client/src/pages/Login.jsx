import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["jwt"]); // ← define cookies
  const [values, setValues] = useState({ email: "", password: "" });

  const generateError = (err) =>
    toast.error(err, { position: "bottom-right" });

  

      
  const handleSubmit = async (event) => {
    event.preventDefault();
try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { 
            withCredentials: true 
        }
      );
      console.log(data);
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.error(ex);
      toast.error("Something went wrong! Please try again.");    }
  };

  
  return (
    <div className=" container">
      <h2>Login Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}
