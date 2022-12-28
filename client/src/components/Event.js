import { Image, Table, Button, Card, Modal, Form, Row, Col, Alert } from 'react-bootstrap'
import React, {useState} from 'react'
import { db } from '../firebase.js'
import { addDoc, collection } from 'firebase/firestore'


export function Event(props){
    
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size = 'lg'
            animation={true}
        >
            <Modal.Header className='eolito '>
                <h2 className = 'goodFont text-shadow mt-2'>{props.title}</h2>
                <Image style={{width:'160px', height:'45px'}} className = "text-center" src = {process.env.PUBLIC_URL + '/Imgs/title.png'} />
            </Modal.Header>
            <Card>
                <Card.Body>
                    <Table responsive>
                        <tr>
                            <td>
                                <h3>Created by: <span className='goodFont' style={{fontSize: '20px'}}>{props.user}</span></h3>
                            </td>      
                        </tr>
                        <tr>
                            <td>
                                <h3>Initial date: <span className='goodFont' style={{fontSize: '20px'}}>{props.firstDate}</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Initial time: <span className='goodFont' style={{fontSize: '20px'}}>{props.firstTime}</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>End date: <span className='goodFont' style={{fontSize: '20px'}}>{props.secondDate}</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>End time: <span className='goodFont' style={{fontSize: '20px'}}>{props.secondTime}</span></h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Description: <span className='goodFont' style={{fontSize: '20px'}}>{props.description}</span></h3>
                            </td>
                        </tr>
                        </Table>
                    <Button variant="danger" className = "w-100" onClick={props.onHide} >Chiudi</Button>        
                </Card.Body>
            </Card>
        </Modal>
    );
}
export default Event;