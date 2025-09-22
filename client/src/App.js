import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Signup from "./pages/Signup"; // make sure this path is correct
import Login from "./pages/Login";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";

 export default function App() {
  return (
    <CookiesProvider>
      <Router>
        <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/" element={<Home />} />

        </Routes>
      </Router>
    </CookiesProvider>
    
  );
}

