import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './FAQ.css';


const FAQ = () => (
    <div className="container">
        <div className="Header">
            <h1> Questions? </h1>
        

            <h3> What made you leave NJ?</h3>
            <h4>
                Have you been to NJ?
            </h4>

            <h3> Where are you looking to work?</h3>
            <h4>
                As much as I love Richmond, VA, I am looking to relocate to Charlotte, NC. 
            </h4>

            <h3> What is your ideal work environment?</h3>
            <h4>
                I am looking for an open work environment that encourages collaboration. I am relatively new to the tech field and know that I would be able to not only work better on a team but also learn more as well. 
            </h4>

            <h3> Any favorite technologies</h3>
            <h4>
                My favorites would have to be HTML, CSS, Javascript, and React because of how much exposure I have to them. However, I really want to find a position where I will have a chance to work more with backend technologies like MySQL or MongoDB.
            </h4>

            <h3> What other skills do you have besides coding?</h3>
            <h4>
                While I worked in HR, I learned about employee development, how to create and conduct trainings, and how to maintain lines of communication with various department leaders. I pride myself in my ability to learn quickly as well and to adapt   
            </h4>            

            <h3> Why the puppies?</h3>
            <h4>
                Why not?
            </h4>
        </div>
    </div>
    
    )

export default FAQ;