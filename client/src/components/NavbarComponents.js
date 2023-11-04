import { Button, Form, Navbar, Col } from 'react-bootstrap'

import '../App.css';
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FeatherIcon from 'feather-icons-react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavMenu(props) {
    /*
             <center><div className = "">
                    <Icon.Facebook icon="facebook" className="text-warning" size={40}/>
                    <Icon.Instagram icon="instagram" className="text-warning" size={40}/>
                    <Icon.Linkedin icon="instagram" className="text-warning" size={40}/>
                    <Icon.Youtube icon="instagram" className="text-warning" size={40}/>
                </div>
</center>
    */
        /*return (
            <Navbar sticky = "top" variant="blue" className="justify-content-between navColor" >
                
                <Col xs={0.1}></Col>
                
                <strong className='bounce'>
                    <Image className = "text-center w-25 h-25" src = {process.env.PUBLIC_URL + '/Imgs/title.png'} onClick={()=> props.setEolito(true)}/>
                </strong>
        
                
                <div className = "text-right">
                    <Button variant="outlined" color="primary" onClick={() => { props.setLoggedIn(false); props.logout() }}>
                        <FeatherIcon icon="log-out" className="text-light" size={30}/>
                    </Button>
                </div>
                
                <Col xs={0.1}></Col>
            </Navbar >
        )
        return(
        <>
                {['xxl'].map((expand) => (
                    <Navbar sticky="top" key={expand} bg="light" expand={expand} className="">
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <h2 style={{position:'absolute', marginLeft:'80px', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
                                EoLITo
                            </h2>
                            <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            className='navColor'
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link onClick={() => { window.location.href= "./project" }}><h5 className='goodFont'>Project</h5></Nav.Link>
                                <Nav.Link onClick={() => { window.location.href= "./news"}}><h5 className='goodFont'>News</h5></Nav.Link>
                                <Nav.Link onClick={() => { props.isClicked(true); }}><h5 className='goodFont'>Team</h5></Nav.Link>
                                <Nav.Link onClick={() => { props.isClicked(true); }}><h5 className='goodFont'>Gallery</h5></Nav.Link>
                                <Nav.Link onClick={() => { props.isClicked(true); }}><h5 className='goodFont'>RoadMap</h5></Nav.Link>
                                <Nav.Link onClick={() => { props.isClicked(true); }}><h5 className='goodFont'>Contact</h5></Nav.Link>
                                
                                </Nav>
                            </Offcanvas.Body>
                            </Navbar.Offcanvas>
                            
                        </Container>
                    </Navbar>
                ))}
            </>
        )*/
        return(
            <div class="menu">
                <div class="spacer"></div>
                <div style={{visibility: "hidden"}} class="item" onClick={() => {window.location.href="./news"}}><span>News</span></div>
                <div class="item" onClick={() => {window.location.href="./project"}}><span>Project</span></div>
                <div class="item " onClick={() => {window.location.href="./team"}}><span>Team</span></div>
                <div class="item" onClick={() => {window.location.href="./gallery"}}><span>Gallery</span></div>
                <div class="item" onClick={() => {window.location.href="./roadmap"}}><span>RoadMap</span></div>
                <div class="item" onClick={() => {window.location.href="./contact"}}><span>Contact</span></div>
                <div class="label"><FeatherIcon className='mt-3' icon="menu" size="30"/></div>
            </div>
        )
    
}

export default NavMenu;