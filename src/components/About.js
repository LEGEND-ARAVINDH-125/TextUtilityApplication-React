import React, { useState } from 'react'
import { 
     BrowserRouter as Router,
     Routes, // instead of switch,
     Route,
     Link
} from "react-router-dom";

export default function About() {
    const[myStyle, setMyStyle] = useState(
    {
        color:'white',
        backgroundColor:'black',
        border:'2px solid white',
        font:'papyrus'
    });
    const[btntext , setBtnText] = useState('Enable Dark Mode');
    const toggleStyle = ()=>{
        console.log('Dark mode was clicked' +'\n');
        if(myStyle.color == 'white'){
            setMyStyle({
                color :'black',
                backgroundColor: 'white',
                border:'1px solid black'
            })
            setBtnText('Enable Dark Mode')
        }
        else{
            setMyStyle({
                color :'white',
                backgroundColor: 'black',
                border:'1px solid black'

            })
            setBtnText('Enable Light Mode ');
        }
    }
  return (
    <div className = "container" style = {myStyle}> 
        <h1 className = "my-2">About Us</h1>
        <div className="accordion" id="accordionExample" style = {myStyle}>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {myStyle}>
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {myStyle}>
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {myStyle}>
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <div className = "container my-3">
                    <button type = "button" className = "btn btn-primary mx-2" onClick={toggleStyle}>{btntext}</button>
        
        </div>

    </div>
  )
}
