import { Image, Table, Button, Card, Modal } from 'react-bootstrap'
import React from 'react'
import galleryomponent from './galleryComponent';
import galleryComponent from './galleryComponent';
import membersComponent from './membersComponent';
export function Gallery(props){
    let pool = 0;
    switch(props.idG){
        case 0: pool = galleryComponent[0]; break;
        case 1: pool = galleryComponent[1]; break;
        case 2: pool = galleryComponent[2]; break;
    }
    if(pool !== undefined)
        return (
            <Modal
                show={props.show}
                onHide={props.onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size = 'xl'
                animation={true}
                className = "animation fadeIn"
            >
                <Modal.Header className='eolito'>
                    <Image style={{width:'160px', height:'45px'}}className = "text-center" src = {process.env.PUBLIC_URL + '/Imgs/title.png'} />
                </Modal.Header>
                <Card style = {{padding:'1em'}} className=''>
                    <Card.Body>
                        <Table responsive>
                            <tr>
                                <td>
                                    <Card.Img  className = 'w-100 hover-zoom'src={process.env.PUBLIC_URL + `/Imgs/${pool.img1}`} />
                                </td>
                                <td>
                                <Card.Img className = 'w-100 hover-zoom'src={process.env.PUBLIC_URL + `/Imgs//${pool.img2}`} />
                                </td>
                                <td>
                                <Card.Img className = 'w-100 hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${pool.img3}`} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{overflow:'visible'}}>
                                <Card.Img className = 'w-100 hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${pool.img4}`} />
                                </td>
                                <td>
                                <Card.Img className = 'w-100 hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${pool.img5}`} />
                                </td>
                                <td>
                                <Card.Img className = 'w-100 hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${pool.img6}`} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <Card.Img className = 'w-100 hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${pool.img7}`} />
                                </td>
                                <td>
                                <Card.Img className = 'w-100 hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${pool.img8}`} />
                                </td>
                                <td>
                                <Card.Img className = 'w-100 hover-zoom' src={process.env.PUBLIC_URL + `/Imgs//${pool.img9}`} />
                                </td>
                            </tr>
                        </Table>
                        <Button variant="outline-danger" className = "w-100" onClick={props.onHide} >Chiudi</Button>        
                    </Card.Body>
                </Card>
            </Modal>
        );
    else return 'No data';
}
export default Gallery;