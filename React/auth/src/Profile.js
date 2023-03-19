import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export default function Profile(props) {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loginuser =()=>{
    navigate("/login")
  }
  return (
    <div>
      {props.name ? (
        <div>
          <h1>Hello {props.name}</h1>
          <button onClick={handleSignout}>Logout</button>
        </div>
      ) : (
        <button onClick={loginuser}>Login Please</button>
      )}
    </div>
  );
}
