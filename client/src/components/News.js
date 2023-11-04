import {Table, Image} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import '../App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

      
function News(props) {
  const [show, setShow] = useState(false);
  
  return (
    <>
        <h2 style={{position:'fixed', marginTop:'-75px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
            <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
        </h2>
      
        <div className='content-bg'>
        <center><h1 style={{fontSize:'50px', marginTop:'90px'}} className='animate__animated animate__flipInX animate__slow'><b>NEWS</b></h1></center>
        <center>
            <br/><br/><br/><br/><br/>
            <h3>Work in progress...Available ASAP</h3>
            <br/><br/><br/><br/><br/>
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

export {News};