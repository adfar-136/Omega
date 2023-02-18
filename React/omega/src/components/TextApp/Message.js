import React, { useState } from "react";

export default function Message() {
    const [text,setText] = useState("")
    const onchangee =(event)=>{
        console.log(event.target.value)
        setText(event.target.value)
    }
    console.log(text)
  return (
    <div className="container my-3">
        <h1>Text area box</h1>
      <div className="mb-3">
        
        <textarea
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9" onChange={(event)=>{onchangee(event)}}
        ></textarea>
      </div>
      <div>
      <button type="button" className="btn btn-primary">UpperCase</button>
      <button type="button" className="btn btn-success">LowerCase</button>
      <button type="button" className="btn btn-danger">Clear</button>
      <button type="button" className="btn btn-warning">Copy</button>
      </div>
    </div>
  );
}
