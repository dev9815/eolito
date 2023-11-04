import {Table, Image,} from 'react-bootstrap';
import '../App.css';
import FeatherIcon from 'feather-icons-react';


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

function Social() {
  
  return (
      <>
          <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
              <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
          </h2>
        <div className='content-bg'>
        <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='shadowBlack animate__animated animate__flipInX animate__slow'><b>DESIGN AND SOCIAL MEDIA TEAM</b></h1></center>
        <center>
            <Table className='animate__animated animate__zoomIn animate__slow' style={{marginTop:'100px'}}>
            <tr>
                <center>
                <td className='table-management' style={{width:'500px', borderBottom:'none'}}>
                    <center>
                        <h3 style={{marginTop:'80px', textAlign:'left'}}><b>AREA IMAGE, ADVERTISING AND GRAPHICS</b></h3>
                        <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>
                            Management of the official website and Instagram, LinkedIn, Facebook content profiles.
                            Creation of graphics, logos and merchandising in view of events and presentations.
                        </p>
                    </center>
                
                </td>
                </center>
                <td>
                    <center><Image style={{width:'600px'}} className='img-height' src = {process.env.PUBLIC_URL + '/Imgs/social1.png'} /></center>
                </td>
            </tr>
            </Table>
        </center>
        <center>
            <Table style={{marginTop:'100px'}}>
                <tr>
                    
                    <td className='table-management'>
                        <center><Image className = "revealDown text-center img-height" style={{width:'600px'}} src = {process.env.PUBLIC_URL + '/Imgs/social2.png'}/></center> 
                    </td>
                    <center>
                    <td className='revealUp' style={{width:'500px', borderBottom:'none'}}>
                        <center>
                        <h3 style={{marginTop:'100px', textAlign:'left'}}><b>IN THE PAST</b></h3>
                            <p style={{marginTop:'20px', textAlign:'justify', lineHeight:'30px', fontSize:'20px'}}>    
                                In this area, we deal with the promotion of the team. 
                                We run the public profile and publish content to update followers interested in our work. We design new graphics 
                                and videos to show our work during events. It is also our job to develop a brand identity for the team, by creating
                                the website, designing advertising material, merchandising and our personalized uniforms.
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
export { Social }