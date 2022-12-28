import { Image, Table, Button, Card, Modal, Row } from 'react-bootstrap'
import React from 'react'

export function Person(props){
   console.log("Nome: " + props.img);
   let img = props.img;
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size = 'lg'
            animation={true}
        >
            <Modal.Header className='eolito'>
                <Image style={{width:'160px', height:'45px'}}className = "text-center" src = {process.env.PUBLIC_URL + '/Imgs/title.png'} />
            </Modal.Header>
            <Card  className=''>
                <Card.Body>
                        <span className='p-3'><span className = 'goodFont bigText2'>{props.section} {props.role}</span></span>
                    <Table responsive className='mt-2' >
                        
                        <tr>
                        <td className='p-2'>
                            <img className = 'h-50 profile' style = {{width:'400px',}} src={process.env.PUBLIC_URL + `/Imgs/${img}`} />
                        </td>
                        <td className='h-100 p-3'>
                            <tr>
                            <Card.Text className='topped'>
                               <h5 className='textJustify'>{props.desc}</h5>
                            </Card.Text>
                
                            </tr>
                        </td>
                        </tr>
                    </Table>
                    <Button variant="danger" className = "w-100" onClick={props.onHide} >Chiudi</Button>        
                </Card.Body>
            </Card>
        </Modal>
    );
}
export default Person;