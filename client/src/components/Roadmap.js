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

function Roadmap() {
  
  return (
      <>
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
            <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
                <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
            </h2>
            <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='shadowBlack animate__animated animate__flipInX animate__slow'><b>ROADMAP</b></h1></center>
            <Table style={{marginTop:'120px'}} className='animate__animated animate__fadeInLeft animate__slow'>
                <tr>
                    <td className=' '>
                        <center><Image style={{width:"400px", borderRadius:'200px'}} src = {process.env.PUBLIC_URL + '/Imgs/roadmap1.png'}/></center> 
                    </td>
                    
                    <td className=''>
                        <p className='w-75' style={{marginTop:'-50px', marginLeft:"-50px", lineHeight:'30px', fontSize:'50px'}}> 
                            <b>MAY 2017</b>
                        </p>
                        
                        <p className='w-50' style={{marginTop:'0px', marginLeft:"-50px", lineHeight:'30px', fontSize:'20px'}}> 
                            <b>Wind engineering student team Eolito was created by a group of students</b>
                        </p>

                    </td>
                    
                </tr>
            </Table>
            <center>
            <Table style={{marginTop:'120px', marginLeft:"0px"}} className=' revealLeft'>
                <center>
                <tr style={{borderBottom:"0px solid transparent"}}>
                    <td>
                        <p className='w-75' style={{marginLeft:'200px', textAlign:"right", lineHeight:'30px', fontSize:'50px'}}> 
                            <b>FEBRUARY 2019</b>
                        </p>
                        <br></br>
                        <p className='w-50' style={{marginLeft:'410px', textAlign:"right", lineHeight:'30px', fontSize:'20px'}}> 
                            <b>
                                A&T<br/>
                                First partecipation at the A&T event
                            </b>
                        </p>

                    </td>
                    <td className='w-25'>
                        <center><Image style={{width:"400px", marginRight:"70px", borderRadius:'30px'}} src = {process.env.PUBLIC_URL + '/Imgs/roadmap2.png'}/></center> 
                    </td>
                    
                    
                </tr>
                </center>
            </Table>
            </center>
            <Table style={{marginTop:'120px'}} className='revealLeft'>
                <tr >
                    <td>
                        <Image style={{marginLeft:"80px", width:"400px", borderRadius:'30px'}} src = {process.env.PUBLIC_URL + '/Imgs/rotor1.png'}/>
                    </td>
                    
                    <td>
                        <p className='' style={{marginTop:'-50px', marginRight:"450px", lineHeight:'30px', fontSize:'50px'}}> 
                            <b>JANUARY 2020</b>
                        </p>
                        
                        <p className='' style={{marginTop:'0px', marginLeft:"0px", lineHeight:'30px', fontSize:'20px'}}> 
                            <b>
                                Rotor 1.0<br/>
                                Design and presentation of our first rotor
                            </b>
                        </p>

                    </td>
                    
                </tr>
            </Table>
            <center>
            <Table style={{marginTop:'120px', marginLeft:"0px"}} className=' revealLeft'>
                <center>
                <tr style={{borderBottom:"1px solid transparent"}}>
                    <td>
                        <p className='w-75' style={{marginLeft:'200px', textAlign:"right", lineHeight:'30px', fontSize:'50px'}}> 
                            <b>FEBRUARY 2020</b>
                        </p>
                        <br></br>
                        <p className='w-50' style={{marginLeft:'410px', textAlign:"right", lineHeight:'30px', fontSize:'20px'}}> 
                            <b>
                                A&T<br/>
                                Second partecipation at the A&T event
                            </b>
                        </p>

                    </td>
                    <td className='w-25'>
                        <center><Image style={{width:"400px", marginRight:"70px", borderRadius:'30px'}} src = {process.env.PUBLIC_URL + '/Imgs/roadmap2.png'}/></center> 
                    </td>
                    
                    
                </tr>
                </center>
            </Table>
            </center>
            <Table style={{marginTop:'120px'}} className='revealLeft'>
                <tr>
                    <td className=' '>
                        <center><Image style={{width:"400px", borderRadius:'30px'}} src = {process.env.PUBLIC_URL + '/Imgs/rotor4.png'}/></center> 
                    </td>
                    
                    <td className=''>
                        <p className='w-75' style={{marginTop:'-50px', marginLeft:"-50px", lineHeight:'30px', fontSize:'50px'}}> 
                            <b>OCTOBER 2022</b>
                        </p>
                        
                        <p className='w-50' style={{marginTop:'0px', marginLeft:"-50px", lineHeight:'30px', fontSize:'20px'}}> 
                            <b>
                                Rotor 2.0<br/>
                                Design and presentation of our second rotor
                            </b>
                        </p>

                    </td>
                    
                </tr>
            </Table>
            <center>
            <Table style={{marginTop:'120px', marginLeft:"0px"}} className=' revealLeft'>
                <center>
                <tr style={{borderBottom:"1px solid transparent"}}>
                    <td>
                        <p className='w-75' style={{marginLeft:'200px', textAlign:"right", lineHeight:'30px', fontSize:'50px'}}> 
                            <b>FEBRUARY 2023</b>
                        </p>
                        <br></br>
                        <p className='w-50' style={{marginLeft:'410px', textAlign:"right", lineHeight:'30px', fontSize:'20px'}}> 
                            <b>
                                A&T<br/>
                                Third partecipation at the A&T event
                            </b>
                            </p>

                    </td>
                    <td className='w-25'>
                        <center><Image style={{width:"400px", marginRight:"70px", borderRadius:'30px'}} src = {process.env.PUBLIC_URL + '/Imgs/roadmap2.png'}/></center> 
                    </td>
                    
                    
                </tr>
                </center>
            </Table>
            </center>
            <Table style={{marginTop:'120px'}} className='revealLeft'>
                <tr >
                    <td>
                        <Image style={{marginLeft:"80px", width:"400px", borderRadius:'30px'}} src = {process.env.PUBLIC_URL + '/Imgs/roadmap3.png'}/>
                    </td>
                    
                    <td>
                        <p className='' style={{marginTop:'-50px', marginRight:"450px", lineHeight:'30px', fontSize:'50px'}}> 
                            <b>JANUARY 2020</b>
                        </p>
                        
                        <p className='' style={{marginTop:'0px', marginLeft:"0px", lineHeight:'30px', fontSize:'20px'}}> 
                            <b>
                                Rotor 3.0<br/>
                                Designing a new improved version
                            </b>
                        </p>

                    </td>
                    
                </tr>
            </Table>

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
export { Roadmap }