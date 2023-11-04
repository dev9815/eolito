import {Table, Image,} from 'react-bootstrap';
import '../App.css';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

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

function Project() {
  
  return (
      <>
      <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
        <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
      </h2>
      <div className="content-bg" onLoad={() => {window.scrollTo(0,0)}}>
        <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='shadowBlack animate__animated animate__flipInX animate__slow'><b>PROJECT</b></h1></center>
        <center>
          <Table className='' style ={{marginTop:'-30px'}}>
            <tr>
              <td className='p-5' style={{}}>
                <center>
                  <p className='p-5 animate__animated animate__fadeInLeft animate__slow' style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                  
                      <b>THE IDEA</b> <br/><br/>
                      The Eolito team arose as an “Alternative Didactic” project at Polytechnic of Turin, thanks to professor Gaetano Iuso and to 
                      aerodynamics department colleagues. The team deals with vertical axis wind rotor design and prototyping.
                      In particular the goal of the team is to embrace multidisciplinary contexts in order to generate clean energy by using a 
                      natural source: the wind.
                      Nowadays the environmental sustainability and pollution consequences have become increasingly crucial and it's important to
                      consider their side effects in daily life. Exactly for this reason, exploiting the natural resources not only is a way to 
                      take care of the planet's potential and of the nature itself but also to generate energy from alternative sources.
                  </p>
                </center>
              </td>
              <td className='p-5'>
                <center><Image className = "p-5 animate__animated animate__fadeInUp animate__slow" style={{width:'700px'}} src = {process.env.PUBLIC_URL + '/Imgs/project1.png'}/></center>
              </td>
            </tr>
          </Table>
        </center>
        <center>
          <Table style={{marginTop:'130px'}}>
            <tr>
              <td className='p-5'>
                  <center><Image className = "revealLeft" style={{width:'700px'}} src = {process.env.PUBLIC_URL + '/Imgs/project2.png'}/></center> 
              </td>
              
              <td className='p-5'>
                <center>
                    <p className='p-5 revealUp' style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                        <b>THE ROTOR</b> <br/><br/>
                        The wind rotor principle (a vertical or a horizontal one) is aerodynamics. If it works it spins otherwise no energy is earned.
                        The vertical wind rotor presents a lot of advantages:
                        <li>it always works independently from the wind direction: constancy</li>
                        <li>it works even with low speed wind</li>
                        <li>it is more resilient to turbulence due to high speed wind</li>
                    </p>
                </center>
              </td>
            </tr>
          </Table>
        </center>
        <center>
          <Table style={{marginTop:'100px'}} data-scroll-reveal="enter top move 50px, after 0.9s">
            <tr>
              <td className='p-5'>
                <center>
                  
                    <p className='p-5 revealLeft' style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                        <b>THE FUTURE</b> <br/><br/>
                        The realization of the completed rotor will allow us to be used for different types of users:
                        First of all it is useful for urban areas, such as small cities, large buildings as a service to users.
                        Subsequently we think of a use in rural areas, such as in mountain areas, in such a way as to exploit the geographical
                        position to generate clean energy.
                        With the optimization of the generator, the distribution for condominiums and private homes is evaluated, in which it is
                        possible, with the creation of a battery, the accumulation of energy.
                        All in all, the primary objective is maintained, that is to obtain clean energy thanks to the force of the wind, a resource 
                        that mother nature constantly offers us.
                        In the future it is hoped that it will be used especially in areas of the world in poverty, where natural resources can 
                        actually bring about significant changes in some societies.
                    </p>
                  
                </center>
              </td>
              <td className='p-5'>
                  <center><Image className = "p-5 revealUp" style={{width:'700px'}} src = {process.env.PUBLIC_URL + '/Imgs/project3.png'}/></center>
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
export { Project }