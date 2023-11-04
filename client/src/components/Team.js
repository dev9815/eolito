import {Table, Image,} from 'react-bootstrap';
import '../App.css';
import FeatherIcon from 'feather-icons-react';
import { useState, useRef, useEffect } from 'react';
import { BorderBottom } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function revealDown() {
    var reveals = document.querySelectorAll(".revealDown");
  
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
  
  window.addEventListener("scroll", revealDown);
function revealRight() {
    var reveals = document.querySelectorAll(".revealRight");
  
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
  
  window.addEventListener("scroll", revealRight);
  
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
  
  function revealLeft() {
    var reveals = document.querySelectorAll(".revealLeft");
  
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
  
  window.addEventListener("scroll", revealLeft);

function Team() {
  return (
      <>
      <div className='content-bg'>
      <h2 style={{position:'fixed', marginTop:'-60px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
        <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
      </h2>
        <div className="gallery js-flickity animate__animated animate__zoomIn animate__slower" style={{marginTop:'20px'}} data-flickity-options='{ "wrapAround": true }'>
          <div className="gallery-cell">  
            <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team3.png'}/>
          </div>
      
          <div className="gallery-cell">
            <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team2.png'}/>
          </div>
      
          <div className="gallery-cell">
              <Image className = "text-center w-100 mt-5 team-height" src = {process.env.PUBLIC_URL + '/Imgs/team4.png'}/>
          </div>
      
          <div className="gallery-cell">
              <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team5.png'}/>
          </div>

          <div className="gallery-cell">
              <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team1.png'}/>
          </div>
        </div>
        <center><h1 style={{fontSize: '80px', marginTop:'80px'}}className = 'shadowBlack goodFont animate__animated animate__zoomIn'>Team OrGanization</h1></center>

        <center>
          <Table className='table-team table' style={{marginTop:'0px'}}>
              <tr className='text-center'>
              <Link to = "./management" className="menu-text">
                <td className='table-cell revealLeft' onClick={()=> {}} >
                    <FeatherIcon className='mt-3 iconColor' icon="list" size="100"/>
                    <p className='mt-4'><b>Management and comunication</b></p>
                </td>
              </Link>
              <Link to = "./structural" className="menu-text">
                <td className='table-cell w-25 revealUp' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="tool" size="100"/>
                    <p className='mt-4'><b>Structural Design & Materials</b></p>
                </td>
              </Link>  
              <Link to = "./dataanalysis" className="menu-text">
                <td className='table-cell w-25 revealDown' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="layers" size="100"/>
                    <p className='mt-4'><b>Data Analysis & Optimization</b></p>
                </td>
              </Link>
              </tr>
              <tr className='text-center'>
              <Link to = "./aerodinamic" className="menu-text">
                <td className='table-cell w-25 revealLeft' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="wind" size="100"/>
                    <p className='mt-4'><b>Aerodynamic</b></p>
                </td>
              </Link>
              <Link to = "./it" className="menu-text">
                <td className='table-cell w-25 revealUp' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="layers" size="100"/>
                    <p className='mt-4'><b>Information Technology Area</b></p>
                </td>
              </Link>
              <Link to = "./electronics" className="menu-text">
                <td className='table-cell w-25 revealDown' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="zap" size="100"/>  
                    <p><b>Electrical and electronics</b></p>
                </td>
              </Link>
              </tr>
              <tr className='text-center'>
              <Link to = "./social" className="menu-text">
                <td className='table-cell w-25 revealLeft' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="instagram" size="100"/>
                    <p className='mt-4'><b>Design and social media</b></p>
                </td>
              </Link>
                </tr>
          </Table>
        </center>
        </div>

        <div class="menu">
          <div class="spacer"></div>
          <div class="item" onClick={() => {}}><Link to="./project" className='menu-text'><span>Project</span></Link></div>
          <div class="item " onClick={() => {}}><Link to="./team" className='menu-text'><span>Team</span></Link></div>
          <div class="item" onClick={() => {}}><Link to="./gallery" className='menu-text'><span>Gallery</span></Link></div>
          <div class="item" onClick={() => {}}><Link to="./roadmap" className='menu-text'><span>RoadMap</span></Link></div>
          <div class="item" onClick={() => {}}><Link to="./contact" className='menu-text'><span>Contact</span></Link></div>
          <div class="label"><FeatherIcon className='mt-3' icon="menu" size="30"/></div>
        </div>
      </>
  );
}
export { Team }