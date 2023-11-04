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

function Aerodynamic() {
  
  return (
      <>
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
          <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
              <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
          </h2>
        <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='shadowBlack animate__animated animate__flipInX animate__slow'><b>AERODYNAMICS TEAM</b></h1></center>
        <center>
            <Table className='animate__animated animate__zoomIn animate__slow' style={{marginTop:'100px'}}>
            <tr>
                <center>
                <td className='table-management' style={{width:'500px', borderBottom:'none'}}>
                    <center>
                        <h3 style={{textAlign: 'left', marginTop:'40px'}}><b>AERODYNAMIC AREA</b></h3>
                        <p style={{marginTop:'40px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>                        
                            The objective will be to design and develop an alternative solution of the conventional NACA 0024 airfoil currently mounted on the rotor,
                            introducing a vortex cell in a particular position on the back or belly of the profile, in order to exploit the turbulence generated at the
                            inside the vortex cell to delay the onset of the aerodynamic stall phenomenon.
                        </p>
                    </center>
                
                </td>
                </center>
                <td>
                    <center><Image style={{width:'600px'}} className='img-height'  src = {process.env.PUBLIC_URL + '/Imgs/aerodynamics1.png'} /></center>
                </td>
            </tr>
            </Table>
        </center>
        <center>
            <Table style={{marginTop:'100px'}}>
                <tr>
                    
                    <td className='table-management'>
                        <center><Image className = "revealLeft text-center img-height" style={{width:'600px'}} src = {process.env.PUBLIC_URL + '/Imgs/aerodynamics2.png'}/></center> 
                    </td>
                    <center>
                    <td className='revealUp' style={{width:'500px', borderBottom:'none'}}>
                        <h3 style={{ textAlign: 'left', marginTop:'90px'}}><b>SUPPORT AREA</b></h3><br/>
                        <p style={{ textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            The selected airfoils must be able to support the study and design of the experimental airfoil equipped with vortex 
                            cell through the analysis of existing rotator configurations. As well as supporting experimentation through the 
                            introduction of innovative solutions in the field of wind energy production.
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
                        <center><Image className = "revealDown text-center img-height" style={{width:'600px'}} src = {process.env.PUBLIC_URL + '/Imgs/aerodynamics3.png'}/></center> 
                    </td>
                    <center>
                    <td className='revealUp' style={{width:'500px', borderBottom:'none'}}>
                        <center>
                            <h3 style={{textAlign: 'left', marginTop:'40px'}}><b>Aerodynamic EOLITO Team Section AERODYNAMIC AREA </b></h3>
                            <p style={{marginTop:'40px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                                The objective will be to design and develop an alternative solution of the conventional NACA 0024 airfoil currently
                                mounted on the rotor, introducing a vortex cell in a particular position on the back or belly of the profile, in 
                                order to exploit the turbulence generated at the inside the vortex cell to delay the onset of the aerodynamic stall 
                                phenomenon. SUPPORT AREA The selected airfoils must be able to support the study and design of the experimental 
                                airfoil equipped with vortex cell through the analysis of existing rotator configurations. As well as supporting 
                                experimentation through the introduction of innovative solutions in the field of wind energy production.
                            </p>
                            
                        </center>
                    </td>
                    </center>
                </tr>
            </Table>
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
export { Aerodynamic }