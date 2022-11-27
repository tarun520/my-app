import React, {useState} from 'react'

export default function Area(props){
    const [text,setText]=useState("Enter your text here")
    const HandleonClick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const HandleonFlick = ()=>{
        let newtext=text.toLowerCase();
        console.log("pressed converttolowercase")
        setText(newtext)
    }
    const Handleonchange = (event)=>{
        console.log("typing")
        setText(event.target.value)
    }
    const Handleoncopy = (event)=>{
        var text=document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const Handleonspaces  = (event)=>{
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "))
    }
    const Handleonclear  = (event)=>{
        setText("")
    }
    
    
    return(
        <div>
        <div class="mb-3">
        <h2>{props.heading}</h2>
        <textarea class="form-control my-3" id="mybox" onChange={Handleonchange} value={text} rows="8"></textarea>
        <button class="btn btn-primary mx-1" onClick={HandleonClick}>Convert to Uppercase</button>
        <button class="btn btn-primary mx-1" onClick={HandleonFlick}>Convert to Lowercase</button>
        <button class="btn btn-primary mx-1" onClick={Handleoncopy}>Copy Text</button>
        <button class="btn btn-primary mx-1" onClick={Handleonspaces}>Clear extra spaces</button>
        <button class="btn btn-primary mx-1" onClick={Handleonclear}>Clear</button>
        </div>
        
        <p>{text.length}characters</p>
        <h2>Summary</h2>
        <p>{text}</p>
        </div>
    )
}