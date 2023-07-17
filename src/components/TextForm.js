import React,{useState} from 'react'

export default function TextForm(props) {
const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
}
const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
}
const handleOnChange=(event)=>{
    setText(event.target.value); 
    //event.target.value retrieves the value of that element(an input field)
}

const handleSpace=()=>{
  let newText= text.split(/[ ]+/);
  //split text to array at one or more spaces and then join the array using join with one space
  setText(newText.join(" "));
}

const handleClearClick=()=>{
  setText("");
}

const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}


const [text,setText]=useState("");
  return (
    <>
    <div className='container' style={{color:props.mode===`dark`?`white`:`black`}}>
    <h1>{props.heading}</h1>
      <div className="mb-3"> 
      <textarea id="myBox" rows="8" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`black`}}></textarea>
      {/* double curly braces- javascript and inside it an object */}
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove ExtraSpace</button>
    </div>
    <div className="container my-3"  style={{color:props.mode===`dark`?`white`:`black`}}>
        <h1>Text summary</h1>
        <p>Words={text.split(" ").length} Characters={text.length}</p>
        <p>Time to read={0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
