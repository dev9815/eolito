import {Row, Col, Image, Table, Button, Card, Modal } from 'react-bootstrap'
import React from 'react'
import FeatherIcon from 'feather-icons-react';
import '../../App.css';
import { Link } from 'react-router-dom';

export function Gallery(props){
    const [gallerymodal, setGalleryModal] = React.useState(false);
    const [galleryId, setGalleryId] = React.useState(null);

    return (
        <>
        <h2 style={{position:'fixed', marginTop:'15px', marginLeft: '1em', cursor:'pointer'}} className='goodFont' onClick={()=> window.location.href= "./"}>
            <Image className = 'rotating' style={{width:'80px', height:'80px'}} src={process.env.PUBLIC_URL + `/Imgs//logo.svg`} />
        </h2>
      
        <div className = 'p-5 content-bg' id='gallery' onLoad={() => {window.scrollTo(0,0)}}>
            
            <center>
                <Row className='mt-5'>
                    <Col>
                        <Card className = 'flipcard animate__animated animate__fadeInLeft' style={{ width: '28rem', marginTop:"50px"}}>
                            <Card.Img className = 'card-img' variant="top" src={process.env.PUBLIC_URL + `/Imgs/gallery1.png`} />
                            <Card.Body>
                                <Card.Title className='goodFont'><h4>Rotors and Projects</h4></Card.Title>
                                <Card.Text>
                                    Discover our projects about rotors
                                </Card.Text>
                                <Button variant="dark" onClick={()=> {window.location.href="./rotors"}}>View Photos</Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col>
                        <Card className = 'flipcard animate__animated animate__fadeInDown' style={{ width: '28rem', marginTop:"50px" }}>
                            <Card.Img className = 'card-img' variant="top" src={process.env.PUBLIC_URL + `/Imgs/gallery2.png`} />
                            <Card.Body>
                                <Card.Title className='goodFont'><h4>Simulations</h4></Card.Title>
                                <Card.Text>
                                    Our studies, our works, our simulations
                                </Card.Text>
                                <Button variant="dark" onClick={()=> {window.location.href="./simulations"}}>View Photos</Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col>
                        <Card className = 'flipcard animate__animated animate__fadeInUp' style={{ width: '28rem', marginTop:"50px"}}>
                            <Card.Img className = 'card-img' variant="top" src={process.env.PUBLIC_URL + `/Imgs/gallery3.png`} />
                            <Card.Body>
                                <Card.Title className='goodFont'><h4>Expositions</h4></Card.Title>
                                <Card.Text>
                                    Learn more about our presentations
                                </Card.Text>
                                <Button variant="dark" onClick={()=> {window.location.href="./expositions"}}>View Photos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
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
export default Gallery;