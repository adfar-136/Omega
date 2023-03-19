import React from "react";
import { useState } from "react";
import MainSection from "./MainSection";
import SideNav from "./SideNav";

import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Todo(props) {
  const [active, setActive] = useState("INBOX")
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
  return (
    <div>
      {props.name ? (
        <div className="row">
        <div className="col-md-2">
          <SideNav change = {setActive}/>
        </div>
        <div className="col-md-10">
          <MainSection active ={active}/>
        </div>
        <button onClick={handleSignout}>Logout</button>
      </div>
      ) : "Please Login"}
      </div>
      
  );
}

export default Todo;
