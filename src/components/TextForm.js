import React ,{useState}  from 'react'

const toCamelCase = (str)=> {
  return str.trim().toLowerCase().split(/[\s_\-]+/).filter(w=>w.length>0)
    .map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
};

const toSentenceCase = (str) => {
  if (typeof str !== 'string') return '';
  const trimmed = str.trim();
  if (trimmed.length === 0) return '';
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

const toTitleCase = (str) => {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function TextForm(props) {
    const [text,setText] = useState('Enter Text Here');
    const handleUpClick =  () => {
        console.log("uppercase was clicked" +'\n'+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.handleAlert(" Converted to Upper Case","success");
    }
    
    const handleLowClick =  () => {
        console.log("lowercase was clicked" +'\n'+ text);
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.handleAlert(" Converted to Lower Case","success");
    }
    const handleCamelCase=()=>{
        console.log("Camelcase was clicked" +  '\n'+toCamelCase(text));
        const newText3 = toCamelCase(text);
        console.log(newText3);
        setText(newText3);
        props.handleAlert(" Converted to Camel Case","success");
    }
    
    const handleSentenceCase= ()=>{
        console.log('Sentence case was clicked'+'\n'+text);
        const newText4 = toSentenceCase(text);
        console.log(newText4);
        setText(newText4);
        props.handleAlert(" Converted to Sentence Case","success");
    }
    const handleTitleCase =()=>{
        console.log('Title Case'+ '\n'+ text);
        const newtext5 = toTitleCase(text);
        setText(newtext5); 
        props.handleAlert(" Converted to Title Case","success");
    }
    const handleCopy = ()=>{
        console.log('Text Copied');
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.handleAlert(" Copied to clipboard","success");
    }
    const handleExtraSpaces= ()=>{
        console.log('Extra spaces removed');
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.handleAlert(" Removed Extra Spaces","success");
    }
    const handleOnChange =  (event) => {
        console.log("onChange was selected");
        setText(event.target.value);
        
    }
    const handleClear = () =>{
        console.log("clear text option was clicked"+ '\n' + text);
        setText('');
        props.handleAlert(" Text cleared","success");
    }
    
    //setText("new text");
    return (
        <>
        <div className = "container" style = {{color:props.mode==='light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea
                className="form-control"
                onChange = {handleOnChange}
                style = {{backgroundColor:props.mode==='light'?'white':'#9CA3AF',color:props.mode==='light'?'black':'white'}}
                value = {text}
                id="myBox"
                rows="8"
            ></textarea>
            </div>
            <div className="container" >
            <button className="btn btn-primary mx-2" onClick = {handleUpClick} style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick = {handleLowClick}style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Convert to lower case</button>
            <button className="btn btn-primary mx-2" onClick = {handleCamelCase}style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Convert to CamelCase</button>
            <button className="btn btn-primary mx-2" onClick = {handleSentenceCase}style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Convert to Sentence Case</button>
            <button className="btn btn-primary mx-2" onClick = {handleTitleCase}style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Convert to TitleCase</button>
            <button className="btn btn-primary" onClick={handleCopy}style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Copy Text</button><br></br>
            <br></br>
            <button className="btn btn-primary" onClick = {handleExtraSpaces}style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2 " onClick = {handleClear}style = {{backgroundColor:props.mode ==='dark'?'green':'blue'}}>Clear Text</button>
            </div>


        </div><br></br>
        <div className="container" style = {{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p> {text.length>0?text.split(" ").length:0} words {text.length} chars</p>
            <p>{text.split(" ").length* 0.008} minutes taken to read all the {text.split(" ").length} words.. </p>

            <h2>Preview</h2>
            <p>
                {text.length>0?text:"Enter the text"}
            </p>
        </div>
        </>
  )
}
