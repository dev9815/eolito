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

function Electronics() {
  
  return (
      <>
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
          <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
              <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
          </h2>
        <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='shadowBlack animate__animated animate__flipInX animate__slow'><b>ELECTRICAL AND ELECTRONICS TEAM</b></h1></center>
        <center>
            <Table className='animate__animated animate__zoomIn animate__slow' style={{marginTop:'80px'}}>
            <tr>
                <center>
                <td className='table-management' style={{width:'500px', borderBottom:'none'}}>
                    <center>
                        <h3 style={{marginTop:'30px', textAlign:'left'}}><b>CONVERTING ENERGY STRUCTION DEVELOPMENT</b></h3>
                        <p style={{marginTop:'10px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Design, construction and testing of the structure for converting the mechanical energy of the wind rotor in 
                            electrical energy. 
                        </p>
                        <br/>
                        <h3 style={{ textAlign:'justify'}}><b>POWER MANAGMENT</b></h3> 
                        <p style={{marginTop:'10px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>   
                            Converted power control. 
                        </p>
                        <br/>
                        <h3 style={{textAlign:'left'}}><b>OPTIMIZING EFFICIENCY OF THE SYSTEM</b></h3>
                        <p style={{marginTop:'10px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Designing elements to optimize performance and efficiency.
                        </p>
                    </center>
                
                </td>
                </center>
                <td>
                    <center><Image style={{width:'600px'}} className='img-height' src = {process.env.PUBLIC_URL + '/Imgs/electronics1.png'} /></center>
                </td>
            </tr>
            </Table>
        </center>
        <center>
            <Table style={{marginTop:'120px'}}>
                <tr>
                    
                    <td className='table-management'>
                        <center><Image className = "revealDown text-center img-height" style={{width:'600px'}} src = {process.env.PUBLIC_URL + '/Imgs/electronics2.png'}/></center> 
                    </td>
                    <center>
                    <td className='revealUp' style={{width:'500px', borderBottom:'none'}}>
                        <center>
                            <p style={{marginTop:'60px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}> 
                                The electrical and electronic section work on lots of different projects, including lots of branches of engineering. The 
                                electrical group is the section that takes care of energy conversion from mechanical to electrical. For the conversion 
                                system, it is necessary to dimension the electrical generator, so we decide if is more convenient to buy it or to by 
                                ourselves. This decision is one of the matters on the cost of the Micro Turbines. The electrical section, also, is 
                                responsible for the battery pack system, so we convert the Alternate Current to Direct Current by an AC/DC converter 
                                designed, realized and tasted by ourselves, in collaboration with the electronic group. 
                            </p>
                            
                        </center>
                    </td>
                    </center>
                </tr>
            </Table>
            <p className='p-5' style={{marginTop:'60px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}> 
                Before realizing the Converter we needed to simulate all the systems, and we use the Plecs simulator, Matlab 
                (used to test the electrical and thermal stress of the component) and also the program to design the converter. 
                The goal of the Electronics section is to make printed circuit boards capable of acquiring, processing and 
                conditioning signals of interest, some of which are transmitted through appropriate interfaces and remotely for 
                monitoring, data analysis and constant control. To make the prototype after designing the circuit, it will be 
                necessary to simulate it using software, choose and order the appropriate components, and then validate it on 
                breadboard or hand-made pcb, performing functional tests with the available instrumentation. All activities are 
                in close collaboration with the electrical, facilities and data analysis sections.
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
export { Electronics }