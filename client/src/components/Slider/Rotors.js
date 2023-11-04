import {Table, Image} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import '../../App.css';
import { useState } from 'react';
import galleryComponent from './galleryComponent';
import Photo from './Photo';
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

      
function Rotors(props) {
    const [modal, setModal] = useState(false);
    const [img, setImg] = useState(null);
    return (
      <>
        <div className='content-bg' onLoad={() => {window.scrollTo(0,0)}}>
            <h2 style={{position:'fixed', marginTop:'-135px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
              <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
            </h2>
              <Table style={{marginTop:'150px'}}>
                    <tr>
                        <td className='p-4 animate__animated animate__fadeInLeft'>
                            <Image className = 'w-100 card-height hover-zoom'src={process.env.PUBLIC_URL + `/Imgs/${galleryComponent[0].img1}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img1);}} />
                        </td>
                        <td className='p-4 animate__animated animate__fadeInUp'>
                        <Image className = 'w-100 card-height hover-zoom'src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img2}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img2);}} />
                        </td>
                        <td className='p-4 animate__animated animate__fadeInDown'>
                        <Image className = 'w-100 card-height hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img3}`}  onClick={()=> {setModal(true);setImg(galleryComponent[0].img3);}}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-4 revealLeft'>
                        <Image className = 'w-100 card-height hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img4}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img4);}} />
                        </td>
                        <td className='p-4 revealUp'>
                        <Image className = 'w-100 card-height hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img5}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img5);}} />
                        </td>
                        <td className='p-4 revealDown'>
                        <Image className = 'w-100 card-height hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img6}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img6);}}/>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-4 revealLeft'>
                        <Image className = 'w-100 card-height hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img7}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img7);}} />
                        </td>
                        <td className='p-4 revealUp'>
                        <Image className = 'w-100 card-height hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img8}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img8);}} />
                        </td>
                        <td className='p-4 revealDown'>
                        <Image className = 'w-100 card-height hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${galleryComponent[0].img9}`} onClick={()=> {setModal(true);setImg(galleryComponent[0].img9);}} />
                        </td>
                    </tr>
                    <Photo {...props} show={modal} content={img} onHide={()=>setModal(false)}/>
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

export {Rotors};