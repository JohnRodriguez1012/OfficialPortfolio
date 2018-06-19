import React from "react";
import './Projects.css';
import LWSN from "./Pics/LWSN.PNG"
import VS from "./Pics/VS.PNG"

const Projects = () => (
    <div className="container">
        <div className="Header">
            <h1> Projects </h1>
        

            <h3> 
                <a href="https://look-whos-smarter-now.herokuapp.com/" target="blank"> 
                    <img src={LWSN} alt="Look Who's Smarter Now Logo" id="bannerLogo"/>
                </a>
            </h3>
            <h4>
                <em>Look Who's Smarter Now</em> is a fun app where you are able to challenge a friend to a fun round of trivia based on various subjects. This was an app that myself and 3 other developers worked. When it comes to the tech used for the web app, we used HTML, CSS, CSS Animation Library, Google Fonts, Giphy API , Online Trivia API, Firebase API, JavaScript, JQuery, and AJAX calls. 
            </h4>

            <h3> 
                <a href="https://vacation-station.herokuapp.com/" target="blank"> 
                    <img src={VS} alt="Vacation Station Logo" id="bannerLogo"/>
                </a>
            </h3>
            <h4>
                <em>Vacation Station</em> was another web app that I worked with a group of developerson. The web app designed to host rental units, similar to Air B&B. Customers would be able to post units, to see the rates to rent a unit, attractions in the zipcode that they were looking to rent in, and the weather.For this app, we used HTML, CSS, Bootstrap, Amazon Web Services, MVC file structure, Google Calendar API, Open Weather Map API, JavaScript, and JQuery
            </h4>

            <h3> 
                <a href="https://bored-bonkers.herokuapp.com/" target="blank"> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Emojione_1F403.svg/2000px-Emojione_1F403.svg.png" alt="Bored Bonkers Logo"  id="bonkersLogo"/>
                </a>
            </h3>

            <h4>
                <em>Bored Bonkers</em> was web app that I worked on alone. The app was designed to try to cure boredom for some amount of time. I am actually still working on the app to include more games and time fillers. Future developments for the web app include more games, a user login, and a leaderboard area that allows people to talk taunt each other. I created the app with React.js, React-Bootstrap, MongoDB, Node.js, Express, React-Native, React-Redux, and the NPM package "An-Array-Of-English-Words". 
            </h4>
        </div>
    </div>
    
    )

export default Projects;