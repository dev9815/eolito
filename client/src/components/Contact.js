import {Table, Image, Button,} from 'react-bootstrap';
import '../App.css';
import FeatherIcon from 'feather-icons-react';
import { useForm, ValidationError } from '@formspree/react';
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

function Contact() {
    const [state, handleSubmit] = useForm("maygwoyb");
    return (
      <>
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
          <h2 style={{position:'fixed', marginTop:'-35px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
              <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
          </h2>
            <center><h1 style={{fontSize:'50px', marginTop:'50px'}} className='shadowBlack p-5 animate__animated animate__flipInX animate__slow'><b>CONTACT US</b></h1></center>
            <center><h5 className='p-5 animate__animated animate__zoomIn animate__slow'>Your message will be sent at eolito@polito.it</h5></center>
            <center>
                <form onSubmit={handleSubmit}>
                    <Table className='text-center animate__animated animate__zoomIn animate__slow w-50' style={{marginTop:'50px'}}>
                        
                           
                            <td>
                                <center>
                                    <tr style={{borderBottom:'none'}}>
                                            <input id="name" type="text" placeholder='   Name or company name *' name="name" className='' style={{width: "270px",height: "40px",borderRadius: "30px"}} required />
                                    </tr>
                                </center>
                                
                                <center>
                                    <tr style={{borderBottom:'none'}}>
                                        <input id="email" type="email" placeholder='   Your email *' name="email" className='' style={{marginTop:'10px', width: "270px",height: "40px",borderRadius: "30px"}} required />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </tr>
                                </center>
                                <center>
                                    <tr style={{borderBottom:'none'}}>
                                        <input id="subject" type="text" placeholder='   Subject *' name="subject" className='' style={{marginTop:'10px', width: "270px",height: "40px",borderRadius: "30px"}} required />
                                    </tr>
                                </center>
                                <center>
                                    <tr style={{borderBottom:'none'}}>
                                        <input id="phonenumber" type="number" placeholder='   Phone number *' name="phonenumber" className='' style={{marginTop:'10px', width: "270px", height: "40px",borderRadius: "30px"}} required />
                                    </tr>
                                </center>
                            </td>
                            <td className="" style={{borderBottom:'none'}}>
                                <center>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    <textarea id="message" name="message" placeholder="   Message *" style={{marginTop: "0px",width: "270px", height: "200px", borderRadius: "30px"}} required />
                                </center>
                            </td>
                            
                            
                    </Table>
                    <Button type="submit" variant="success" className='animate__animated animate__zoomIn animate__slow mt-5 w-25' disabled={state.submitting}> Submit </Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </form>
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
export { Contact }