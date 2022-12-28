import { Image, Table, Button, Card, Modal, Form, Row, Col, Alert } from 'react-bootstrap'
import React, {useEffect, useState} from 'react'
import { db } from '../firebase.js'
import { addDoc, collection, onSnapshot, doc } from 'firebase/firestore'
import { auth } from "../firebase.js"

export function AddEvent(props){
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [fields, setFields] = useState(null);
    const userCollRef = collection(db, 'User');
    const user = props.userEmail;
    const [thereIsUser, setThereIsUser] = useState(null);
    /*useEffect(()=> {
        const listUser = onSnapshot(userCollRef, snapshot =>{
            if(snapshot.docs.every(doc=> doc.id !== auth.currentUser?.uid))
                addDoc(userCollRef,{
                    name: user?.substr(0,4),
                    role: 'admin',
                    username: user
                }).then(doc =>{
                    userCollRef.doc(doc.id).set
                    setThereIsUser(true);
                }).catch(error =>{
                    console.log(error.message)
                    setThereIsUser(false);
                })
            
        })

        return () =>{
            listUser();
        }
    }, []) */
    
    const handleSubmit = () =>{
        if(title === '' || startDate === '' || endDate === '' || description === '') {
            setFields(true);
            return;
        }
        const eventCollRef = collection(db, 'Events');

        addDoc(eventCollRef, {title: title, startDate: startDate.toString(), endDate: endDate.toString(), description: description, user: auth.currentUser?.uid})
        .then(r =>{
            
            props.setMessage(true);
            setFields(false);
            console.log("message: " + props.message)
            console.log(r.id);
        })
        .catch(error => {
            props.setMessage(false);
            setFields(false);
            console.log(error.message)
        })
    }

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
                <h2 className = 'goodFont text-shadow mt-2'>Add Event</h2>
                <Image style={{width:'160px', height:'45px'}} className = "text-center" src = {process.env.PUBLIC_URL + '/Imgs/title.png'} />
            </Modal.Header>
            <Card>
                <Card.Body className='p-4'>
                    <Form noValidate /*onSubmit={handleSubmit}*/>
                        <Table responsive className='mt-2' >
                            {(fields)? <Alert variant='danger'>Fill all of the inputs</Alert> : ''}
                            {(props.message && !fields )? <Alert variant='success'>Event "{title}" added</Alert> : (!props.message && props.message !== null && !fields)? <Alert variant='danger'>Event not added</Alert>:''}
                            <tr>
                                <td>
                                    <Form.Group controlId="formBasicTitle">
                                        <Form.Label><h4>Title</h4> </Form.Label>
                                        <Form.Control type="text" id='title' placeholder="Title" onChange={ev => setTitle(ev.target.value)} required />   
                                    </Form.Group>
                                </td>
                                
                            </tr>
                           
                            <tr>
                                <td>
                                    <Form.Group controlId="formBasicStartDate">
                                        <Form.Label><h4>Start Datetime</h4> </Form.Label>
                                        <Form.Control type="datetime-local" id='startD' placeholder="Start Datetime" onChange={ev => setStartDate(ev.target.value)} required />   
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Group controlId="formBasicEndDateTime">
                                        <Form.Label><h4>End Datetime</h4> </Form.Label>
                                        <Form.Control type="datetime-local" id='endD' placeholder="End Datetime" onChange={ev => setEndDate(ev.target.value)} required/>   
                                    </Form.Group>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    <Form.Group controlId="formBasicDescription">
                                        <Form.Label><h4>Description</h4> </Form.Label>
                                        <Form.Control as="textarea" id = 'desc' rows={4} placeholder="Description" onChange={ev => setDescription(ev.target.value)} required/>   
                                    </Form.Group>
                                </td>
                            </tr>
                        </Table>
                        <Form.Group as={Row} className ="mb-2 mt-4">
                            <Col>
                                <Button className="w-100" variant="primary" type="" block onClick={(e)=>{e.preventDefault(); handleSubmit();}}>
                                    Add event
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form> 
                    <Button variant="danger" className = "w-100" onClick={props.onHide} >Chiudi</Button>        
                </Card.Body>
            </Card>
        </Modal>
    );
}
export default AddEvent;