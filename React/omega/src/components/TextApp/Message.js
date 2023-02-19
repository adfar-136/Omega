import React, { useState } from "react";

export default function Message() {
    const [text,setText] = useState("")
    const onchangee =(event)=>{
        setText(event.target.value)
    }
    const onUpper =()=>{
      setText(text.toUpperCase())
    }
    const onLower=()=>{
      setText(text.toLowerCase())
    }
    const onClear =()=>{
      setText("")
    }
    const onCopy =()=>{
      var txt = document.getElementById("box")
      txt.select()
      navigator.clipboard.writeText(txt.value)
    }
  return (
    <div className="container my-3">
        <h1>Text area box</h1>
      <div className="mb-3">
        
        <textarea
          value={text}
          className="form-control"
          id="box"
          rows="9" onChange={(event)=>{onchangee(event)}}
        ></textarea>
      </div>
      <div>
      <button onClick={onUpper} type="button" className="btn btn-primary">UpperCase</button>
      <button onClick={onLower} type="button" className="btn btn-success">LowerCase</button>
      <button onClick={onClear} type="button" className="btn btn-danger">Clear</button>
      <button onClick={onCopy} type="button" className="btn btn-warning">Copy</button>
      </div>
      <div>
        <h1>Preview</h1>
        <h4>{text.split(" ").length} words and {text.length} letters</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
