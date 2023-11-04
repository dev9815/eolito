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
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
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
                <div class="item" onClick={() => {}}><Link to="./project" className='menu-text'><span>Project</span></Link></div>
                <div class="item " onClick={() => {}}><Link to="./team" className='menu-text'><span>Team</span></Link></div>
                <div class="item" onClick={() => {}}><Link to="./gallery" className='menu-text'><span>Gallery</span></Link></div>
                <div class="item" onClick={() => {}}><Link to="./roadmap" className='menu-text'><span>RoadMap</span></Link></div>
                <div class="item" onClick={() => {}}><Link to="./contact" className='menu-text'><span>Contact</span></Link></div>
                <div class="label"><FeatherIcon className='mt-3' icon="menu" size="30"/></div>
            </div>
        </>
    
        
    )
}