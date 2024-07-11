import React from "react"
import ReactDOM from "react-dom"


const page=(
    <div className="main-div">
    <div className="main-frame">
        <img src="photo.jpg" className="frame-photo"/>
        <h6 className="main-name"> Sindhuja </h6>
        <h6 className="main-desig"> Software Developer </h6>
        <a className="main-web" href="http://localhost:3000/"> Sindhuja@website </a>
        <a href="mailto:someone@example.com" title="Send Email">
            <div className="main-email"> 
               <img src="Mail.png" /> Email 
            </div>
        </a>
               
        <p className="main-para">
            <h5> About </h5>
            <p> I am a full stack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
            <h5> Interests </h5>
            <p> Foodie. Fitness enthusiast. Active learner. Internet fanatic. Travel geek. Art lover . Chai fanatic. </p>
        </p>
        <footer className="main-footer">
            <a  href="https://www.linkedin.com/sindhuja-arulmani-3ba62569"> <img className="footer-social" src="linkedin.png" /> </a>
            <a  href="https://github.com/singit12"> <img className="footer-social" src="github.png" /> </a>
        </footer>
    </div>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))