import './Slider.css'
import video from "./video/eolito.mp4";
import ReactPlayer from "react-player";
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

function revealUp() {
    var reveals = document.querySelectorAll(".revealUp");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", revealUp);
  

export default function Slider() {
    return (
        <>
        <div className='content-bg'>
                <ReactPlayer
                        className='back-video'
                        url={video}
                        playing={true}
                        muted={true}
                        loop={true}
                        style={{marginTop:'-47px'}}
                    />
                    <br/>
                    <center>
                        <div className='mt-5 weare goodFont revealUp'>
                                <h4>We are a team of students from Polythecnic of Turin engaged in the design and construction of modular wind turbines.
                                    Our goal is to allow the production of electricity autonomously to meet the individual daily needs 
                                </h4>
                        </div>
                    <br/>
                        <br/>
                        <br/>
                        <br/>
                    </center>  
                
            </div>


            <div class="menu-home">
                <div class="spacer"></div>
                <div style={{visibility: "hidden"}} class="item" onClick={() => {window.location.href="./news"}}><span>News</span></div>
                <div class="item"><span><Link to ="/project">Project</Link></span></div>
                <div class="item"><span><Link to ="/team">Team</Link></span></div>
                <div class="item"><span><Link to ="/gallery">Gallery</Link></span></div>
                <div class="item"><span><Link to ="/roadmap">RoadMap</Link></span></div>
                <div class="item"><span><Link to ="/contact">Contact</Link></span></div>
            </div>
        </>
    
        
    )
}