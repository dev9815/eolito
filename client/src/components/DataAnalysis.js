import {Table, Image,} from 'react-bootstrap';
import '../App.css';
import FeatherIcon from 'feather-icons-react';
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

function DataAnalysis() {
  
  return (
      <>
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
          <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
              <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
          </h2>
        <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='shadowBlack animate__animated animate__flipInX animate__slow'><b>DATA ANALYSIS AND OPTIMIZATION</b></h1></center>
        <center>
            <Table className='animate__animated animate__zoomIn animate__slow' style={{marginTop:'100px'}}>
            <tr>
                <center>
                <td className='table-management ' style={{width:'500px', borderBottom:'none'}}>
                    <center>
                        <h3 style={{ marginTop:'40px', textAlign:'justify'}}><b>FLUID DYNAMICS MODELS</b></h3>
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>                        
                            Writing and improvement of algorithms and iterative methods for finding solutions to nonlinear equations. 
                        </p>
                        <br/><br/>
                        <h3 style={{textAlign:'justify'}}><b>CFD</b></h3> 
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Interface Matlab with CFD software. Manipulation and visualization of batch charts of data leaking from CFD 
                            simulations. Post processing
                        </p>
                    </center>
                
                </td>
                </center>
                <td>
                    <center><Image style={{width:'600px'}} className='img-height' src = {process.env.PUBLIC_URL + '/Imgs/dataanalysis1.png'} /></center>
                </td>
            </tr>
            </Table>
        </center>
        <center>
            <Table style={{marginTop:'100px'}}>
                <tr>
                    
                    <td className='table-management'>
                        <center><Image className = "revealLeft text-center img-height" style={{width:'600px'}} src = {process.env.PUBLIC_URL + '/Imgs/dataanalysis2.png'}/></center> 
                    </td>
                    <center>
                    <td className='revealUp' style={{width:'500px', borderBottom:'none'}}>
                        <h3 style={{ marginTop:'60px', textAlign:'justify'}}><b>EXPERIMENTATION</b></h3>
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Integral design of an acquisition code for data from experimental procedures and wind tunnel characterizations.
                            Creation of a graphic interface that allows to sort numerical data, perform calculations and view curves. Manage, 
                            generate, import and export airfoil geometries. Post processing.
                        </p>
                        <br/>
                        <h3 style={{textAlign:'justify'}}><b>STRUCTURES</b></h3> 
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Generate, import and export geometries in Matlab so that they are compatible with those of the software used for design
                            and structural analysis. Post processing and visualization of the results of FEM simulations.
                        </p>
                    </td>
                    </center>
                </tr>
            </Table>
        </center>
        <center>
            <Table style={{marginTop:'100px'}}>
                <tr>
                    
                    <td className='table-management'>
                        <center><Image className = "revealDown text-center img-height" style={{width:'600px'}} src = {process.env.PUBLIC_URL + '/Imgs/dataanalysis3.png'}/></center> 
                    </td>
                    <center>
                    <td className='revealUp' style={{width:'500px', borderBottom:'none'}}>
                        <center>
                          <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            The goals of the Data Analysis section are to enable a preliminary study of the Micro Vertical Axis Wind Turbine and
                            to help the other sections of the team with pre-and post-processing of the data. The projects we are working on are as
                            follows: <br/><br/>
                            <ol>
                              <li>
                                The creation of a Matlab app that allows us to quickly compute rotor performance by going through profile 
                                creation, the generation of aerodynamics polar via xFoil and finally doing a performance analysis through the Double 
                                Multiple Stream Tube Model (DMSTM);
                              </li>
                            </ol>
                            </p>
                            
                        </center>
                    </td>
                    </center>
                </tr>
            </Table>
            <p className='p-5' style={{marginTop:'60px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}> 
                <ol start="2">
                  <li>
                    The optimization of the geometry and the external conditions to find the rotor's
                    optimum point;
                  </li>
                  <br/>
                  <li>
                    Coding a Lattice Boltzmann methods (LBM) code that would ensure the creation of the aerodynamic polar 
                    of the rotor quickly and accurately by also taking advantage of GPU acceleration in our workstation; 
                  </li>
                  <br/>
                  <li>
                    The creation of an application that would be able to perform energy and financial analysis based on the position of the wind rotor by 
                    exploiting wind maps;
                  </li>
                  <br/>
                  <li>
                    The creation of a Matlab App that can acquire data from the wind tunnel of Politecnico di Torino and immediately post-process the data.
                  </li>
                  </ol>
              </p>
        </center>
        <br/>
        <br/>
        <br/>
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
export { DataAnalysis }