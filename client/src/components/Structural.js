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

function Structural() {
  
  return (
      <>
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
          <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
              <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
          </h2>
        <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='shadowBlack animate__animated animate__flipInX animate__slow'><b>STRUCTURAL DESIGN AND MATERIAL TEAM</b></h1></center>
        <center>
            <Table className='animate__animated animate__zoomIn animate__slow' style={{marginTop:'100px'}}>
            <tr>
                <center>
                <td className='table-management ' style={{width:'500px', borderBottom:'none'}}>
                    <center>
                        <h3 style={{textAlign:'justify'}}><b>STUDYING THE WIND ROTOR</b></h3>
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            3D CAD models of components, statyc and dynamic structural analysis
                        </p>
                        <br/>
                        <h3 style={{marginTop:'20px', textAlign:'justify'}}><b>ADDITIVE MANUFACTURING</b></h3> 
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Manufacturing objects starting from computerized 3D models
                        </p>
                        <br/>
                        <h3 style={{marginTop:'20px',textAlign:'justify'}}><b>CHOICE OF THE MATERIALS</b></h3>
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Metal alloys, composite and polymeric materials
                        </p>
                    </center>
                
                </td>
                </center>
                <td>
                    <center><Image style={{width:'600px'}} className='img-height'  src = {process.env.PUBLIC_URL + '/Imgs/structural1.png'} /></center>
                </td>
            </tr>
            </Table>
        </center>
        <center>
            <Table style={{marginTop:'120px'}}>
                <tr>
                    
                    <td className='table-management'>
                        <center><Image className = "revealDown text-center img-height" style={{width:'600px'}} src = {process.env.PUBLIC_URL + '/Imgs/structural2.png'}/></center> 
                    </td>
                    <center>
                    <td className='revealUp' style={{width:'500px', borderBottom:'none'}}>
                        <center>
                         <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            In this area of the team we design the structure of the wind turbine, starting from aerodinamic considerations made
                            by our CFD colleagues. In particular, we typically realize a 3D project using a CAD software (Solidworks), then we 
                            study the static behaviourof the structure by means of a FEM software (ANSYS), making also a first choiche in terms of
                            materials. After this preliminary design we draw a more detailed model, including geometric and dimensioning tolerancing
                            and we realize dynamic simulations in order to determine the natural frequencies of the prototype and estimate a frequency
                            response function. Finally, after this validation, we buy the components that we cannot produce by ourselves and we
                            assemble them to get the whole rotor. Moreover, our materials subsection has developed a procedure to realize the blades 
                            of the wind turbine with different layers: an aluminum bar, a stryfoam core and a carbon fiber covering, so that the
                            complete blade can be both resistant and lightweight.
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
export { Structural }