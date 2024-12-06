import React, {useState} from 'react'


export default function TextForm(props) {
  
    const handleUpClick = () =>{
      //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); //Using Js ---.to.UpperCase() func
        setText(newText)
        props.showAlert("Converted to Upper case", "success");
    }
    const handleLoClick = () =>{
        
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to Lower case", "success");
    }
    const handleclearClick = () =>{
        
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
  }
    const handleOnChange = (event) =>{
       // console.log("On Change");
        setText(event.target.value) //SetText func helps to update the value
        
    }

    const handleCopy = () =>{
    
       var text = document.getElementById("myBox");
       text.select();
       text.setSelectionRange(0, 9999);
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to Clipboard", "success");

    }

    const handleExtraSpaces = () =>{
        
      let newText = text.split(/[ ]+/); // one ore more than one spaces  will remove and become array
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed", "success");
     }
      //we should write below line code before using setText func
    const [text, setText] = useState('');  //we will use this func repeatibly so,keep it in mind
   /* text = "newtext";  // wrong way to change the state 
    setText =  "newtext"; //correct way to change the stateS
    */

    return (
        <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<h1 className='mb-4'> {props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
color:  props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick} >Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} >Remove Extra spaces</button>
 </div>    {/*(\s) means wide space including new line */}
 <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
     <h2>Your text summary</h2> {/*(filter uses)if tyo func ley element true return garyo vani array ma basxa natra basdaina */}       
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
     <h2>preview </h2>
     <p>{text.length>0?text: "Nothing to preview!"}</p>
 </div>
</>
    )
}
