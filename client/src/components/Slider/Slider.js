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
                <Link to ="/project"><div class="item"><span>Project</span></div></Link>
                <Link to ="/team"><div class="item"><span>Team</span></div></Link>
                <Link to ="/gallery"><div class="item"><span>Gallery</span></div></Link>
                <Link to ="/roadmap"><div class="item"><span>RoadMap</span></div></Link>
                <Link to ="/contact"><div class="item"><span>Contact</span></div></Link>
            </div>
        </>
    
        
    )
}