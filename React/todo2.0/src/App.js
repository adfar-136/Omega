import { useState } from "react";
import "./App.css";
import MainSection from "./MainSection";
import SideNav from "./SideNav";

function App() {
  const [active, setActive] = useState("INBOX")
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <SideNav change = {setActive}/>
        </div>
        <div className="col-md-10">
          <MainSection active ={active}/>
        </div>
      </div>
    </div>
  );
}

export default App;
