import {Table, Image,} from 'react-bootstrap';
import '../App.css';
import FeatherIcon from 'feather-icons-react';
import Carousel from 'react-bootstrap/Carousel';
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
      <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
      <h2 style={{position:'fixed', marginTop:'-60px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
        <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
      </h2>
    
      <Carousel className="animate__animated animate__zoomIn animate__slower" style={{marginTop:'20px'}}>
        <Carousel.Item>
          <div className="gallery-cell">  
            <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team3.png'}/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gallery-cell">
            <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team2.png'}/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gallery-cell">
            <Image className = "text-center w-100 mt-5 team-height" src = {process.env.PUBLIC_URL + '/Imgs/team4.png'}/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gallery-cell">
            <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team5.png'}/>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gallery-cell">
            <Image className = "text-center w-100 team-height mt-5" src = {process.env.PUBLIC_URL + '/Imgs/team1.png'}/>
          </div>
        </Carousel.Item>
      </Carousel>



        <center>
          <Table className='table-team table' style={{marginTop:'0px'}}>
              <tr className='text-center'>
                <td className='table-cell revealLeft' >
                    <FeatherIcon className='mt-3 iconColor' icon="list" size="100"/>
                    <p className='mt-4'><b><Link to = "./management" className="menu-text">Management and comunication</Link></b></p>
                </td>
              
              
                <td className='table-cell w-25 revealUp' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="tool" size="100"/>
                    <p className='mt-4'><b><Link to = "./structural" className="menu-text">Structural Design & Materials</Link></b></p>
                </td>
              
              
                <td className='table-cell w-25 revealDown' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="layers" size="100"/>
                    <p className='mt-4'><b><Link to = "./dataanalysis" className="menu-text">Data Analysis & Optimization</Link></b></p>
                </td>
              
              </tr>
              <tr className='text-center'>
              
                <td className='table-cell w-25 revealLeft' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="wind" size="100"/>
                    <p className='mt-4'><b><Link to = "./aerodynamic" className="menu-text">Aerodynamic</Link></b></p>
                </td>
              
              
                <td className='table-cell w-25 revealUp' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="layers" size="100"/>
                    <p className='mt-4'><b><Link to = "./it" className="menu-text">Information Technology Area</Link></b></p>
                </td>
                <td className='table-cell w-25 revealDown' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="zap" size="100"/>  
                    <p><b><Link to = "./electronics" className="menu-text">Electrical and electronics</Link></b></p>
                </td>
              </tr>
              <tr className='text-center'>
                <td className='table-cell w-25 revealLeft' onClick={()=> {}}>
                    <FeatherIcon className='mt-3 iconColor' icon="instagram" size="100"/>
                    <p className='mt-4'><b><Link to = "./social" className="menu-text">Design and social media</Link></b></p>
                </td>
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