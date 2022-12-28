import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import membersComponent from './membersComponent.js'
import video from "./video/img1.mp4";
import { Row, Col, Card, Button, Image, Table } from 'react-bootstrap'
import ReactPlayer from "react-player";
import {Person} from './Person.js';
import {Gallery} from './Gallery.js';
import * as Icon from 'react-bootstrap-icons';

export default function Slider(props) {

    
    const [slideIndex, setSlideIndex] = useState(1);
    const [detailsShow, setDetailsShow] = React.useState(false);
    const [galleryModal, setGalleryModal] = React.useState(false);
    const [galleryId, setGalleryId] = React.useState(null);
    const [time, setTime] = React.useState(0);
    
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    
 
    const next = (id) => {
        var element = document.getElementById(id);
        element.classList.add("animation");
        element.classList.add("fadeIn");
        setTimeout(function(){
            document.getElementById(id).classList.remove("animation");
            document.getElementById(id).classList.remove("fadeIn");
        }, 2000);
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
  
    const carousel = (obj, index) =>{
        let cn = 'animation fadeIn header demo active-anim';
        if(obj !== undefined){
        return(
            <div key={obj.id} id = 'homevideo' className={slideIndex === index + 1? cn : "demo header slide"}>     
                {(slideIndex == 1)?
                    <ReactPlayer
                        className='back-video w-100'
                        url={video}
                        playing={true}
                        muted={true}
                        loop={true}
                    />
                    :
                    <>
                    <Image 
                        className = 'carousel header'
                        src={process.env.PUBLIC_URL + `/Imgs/img${index+1}.png`} 
                    />
                    <Card.ImgOverlay className = 'overlay-carousel'>
                        <h2 className='overlay-text'>{obj.text}</h2>
                    </Card.ImgOverlay>
                    </>
                }
                <a href="#team-people"  onClick={()=> next('team-people')}><span></span><span></span><span></span></a>
            </div>
        )} return 'ciao';
      }

    const open=()=>{
        if(time !== time-1) {
            document.getElementById('view-more').click();
            document.getElementById('flippedCard').style.display='block';
            setTime(time+1);
            console.log("time dopo: " + time);
        }
    }

      const Carder = ({ project}) => {
        const [isFlipped, setIsFlipped] = React.useState(false);
        const [modalData, setModalData] = React.useState(null);
        const getData = (id, name, section, areas, role, desc, img) =>{
            let modalData = [id, name, section, areas, role, desc, img];
            setDetailsShow(true);
            setModalData(modalData);
        }
        if(project!== undefined){
            return (
                <th className='p-3'>
                    <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal">
                        <div className='flipcard p-4' id='flippedCard'>
                            <Card.Title className = ''>
                                <h4>
                                    {project.section}
                                    <Icon.InfoCircle infoId={project.id} onClick={() => {setIsFlipped((prev) => !prev); }} className = ' info mt-1 text-dark'></Icon.InfoCircle>
                                </h4>
                            </Card.Title>
                            <Card.Text className='mt-3 flipheight'>
                                <h6 className='goodFont textJustify'>{project.areas}</h6>
                                <h6 className='mt-4 textJustify'>{project.desc}</h6>
                            </Card.Text>                                  
                            <Card.Footer className = 'fixed-bottom text-center mb-4'>
                                <Button variant="outline-primary " id = 'view-more' onMouseEnter={()=> open()} onClick={()=> {getData(project.id, project.name, project.section, project.areas, project.role, project.desc, project.img)}}>View More</Button>
                                {modalData && <Person {...props} memberId={project.id} name={project.name} section={project.section} role={project.role} areas={project.areas} desc={project.desc} img={project.img} show={detailsShow} onHide={() => {setDetailsShow(false)}}/>}                        
                            </Card.Footer>
                        </div>

                        <div className="flipcard">
                            
                            <Image className = 'card-img' variant="top" src={process.env.PUBLIC_URL + `/Imgs/${project.img}`} />
                            <div className='p-3' >
                                <Card.Title className=''name = 'ciao'><h5>{project.name}</h5></Card.Title>
                                <h6 className='goodFont'>
                                    {project.section}, {project.role}
                                    
                                </h6>
                                <Card.Text className = 'mt-3' >
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </div>
                            <Card.Footer className = 'fixed-bottom text-center mb-4'>
                                <Button variant = 'outline-dark' style={{width:'40%'}} onClick={() => {setIsFlipped((prev) => !prev); }}>Back</Button>                                
                            </Card.Footer>    
                            
                        </div>
                        
                </ReactCardFlip>
                
            </th>
            );
        }
        return 'No Data';
    };
   
    

    return (
        <div className=''>
            <a href='#right-arrow'><span></span></a>
            {dataSlider.map((obj, index) => {
                return (carousel(obj, index))
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>

            <div className=' p-5 ' id = 'team-people'>
                <h1 className='mt-5 team-organization'>TeaM OrgnizaTiON</h1>
                <Table responsive>
                    <tbody>
                        <tr>
                            <td>
                                {membersComponent.map((item) => {
                                    return(
                                    <Carder project={item}/>
                                    )
                                })} 
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <a href="#gallery" onClick={()=> next('gallery')}><span></span><span></span><span></span></a>
            </div>
            

            <div className = 'p-5'>
                <h1 className='team-organization' id = 'gallery'>GaLLery</h1>
                <center>
                    <Row className='mt-5'>
                        <Col>
                            <Card className = 'flipcard' style={{ width: '25rem', border: '3px solid #66cbff' }}>
                                <Card.Img className = 'card-img' variant="top" src={process.env.PUBLIC_URL + `/Imgs/gallery1.png`} />
                                <Card.Body>
                                    <Card.Title className='goodFont'><h4>Rotors and Projects</h4></Card.Title>
                                    <Card.Text>
                                        Discover our projects about rotors
                                    </Card.Text>
                                    <Button variant="outline-dark" onClick={()=> {setGalleryModal(true);setGalleryId(0);}}>View Photos</Button>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col>
                            <Card className = 'flipcard' style={{ width: '25rem', border: '3px solid #66cbff' }}>
                                <Card.Img className = 'card-img' variant="top" src={process.env.PUBLIC_URL + `/Imgs/gallery2.png`} />
                                <Card.Body>
                                    <Card.Title className='goodFont'><h4>Simulations</h4></Card.Title>
                                    <Card.Text>
                                        Our studies, our works, our simulations
                                    </Card.Text>
                                    <Button variant="outline-dark" onClick={()=> {setGalleryModal(true);setGalleryId(1);}}>View Photos</Button>
                                </Card.Body>
                               
                            </Card>
                        </Col>
                        <Col>
                            <Card className = 'flipcard' style={{ width: '25rem', border: '3px solid #66cbff' }}>
                                <Card.Img className = 'card-img' variant="top" src={process.env.PUBLIC_URL + `/Imgs/gallery3.png`} />
                                <Card.Body>
                                    <Card.Title className='goodFont'><h4>Expositions</h4></Card.Title>
                                    <Card.Text>
                                        Learn more about our presentations
                                    </Card.Text>
                                    <Button variant="outline-dark" onClick={()=> {setGalleryModal(true);setGalleryId(2);}}>View Photos</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Gallery {...props} show={galleryModal} idG={galleryId} onHide={() => setGalleryModal(false)}/>
                </center>
            </div>
            <br></br><br></br>

        </div>

        
    )
}
