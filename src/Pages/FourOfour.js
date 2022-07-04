import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Nav&Footer/Navbar";

const FourOfour = () => {
  return (
    <div style={{ height: "80vh" }}>
      <Navbar />
      <div style={{ paddingTop: "200px", width: "100%", textAlign: "center" }}>
        <h1>PAGE NOT FOUND</h1>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default FourOfour;
